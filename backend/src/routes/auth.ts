import { Router } from 'express';
import {
  register,
  login,
  getMe,
  updateMe
} from '../controllers/authController';
import { protect } from '../middleware/auth';

const router = Router();

// Async handler to catch errors
const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));
router.get('/me', protect, asyncHandler(getMe));
router.patch('/me', protect, asyncHandler(updateMe));


export default router;