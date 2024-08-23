import { Request, Response, NextFunction } from 'express';
import { vendor } from '../models';
import { GenerateToken, ValidatePassword } from '../utils';
import { LoginVendorInputs } from '../dto';

export const VendorLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body as LoginVendorInputs;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const existingVendor = await vendor.findOne({ email });
    if (!existingVendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    const isPasswordValid = await ValidatePassword(password, existingVendor.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = GenerateToken({ _id: existingVendor._id, email: existingVendor.email });
    return res.status(200).json({ message: 'Login successful', token });

  } catch (err) {
    return next(err);
  }
};