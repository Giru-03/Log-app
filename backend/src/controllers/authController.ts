import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';
import { Types } from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET!;

const signToken = (id: string) =>
  jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' });

/** REGISTER */
export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, confirmPassword, firstName, lastName, phone } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashed = await bcrypt.hash(password, 12);
    const user = await User.create({
      email,
      password: hashed,
      firstName,
      lastName,
      phone,
    });

    const token = signToken(user._id.toString());
    const { password: _, ...userWithoutPwd } = user.toObject();

    res.status(201).json({ token, user: userWithoutPwd });
  } catch (err) {
    next(err);
  }
};

/** LOGIN */
export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = signToken(user._id.toString());
    const { password: _, ...userWithoutPwd } = user.toObject();

    res.json({ token, user: userWithoutPwd });
  } catch (err) {
    next(err);
  }
};

/** GET CURRENT USER */
export const getMe = async (req: Request, res: Response) => {
  // @ts-ignore
  const user = await User.findById(req.user.id);
  res.json(user);
};

/** UPDATE USER */
export const updateMe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updates: Partial<IUser> = req.body;
    delete updates.password;

    // @ts-ignore
    const user = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
      runValidators: true,
    });

    res.json(user);
  } catch (err) {
    next(err);
  }
};