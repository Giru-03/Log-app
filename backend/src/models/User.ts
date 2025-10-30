import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, select: false }, // ← CRITICAL: hide by default
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String }
});

export default mongoose.model<IUser>('User', UserSchema);