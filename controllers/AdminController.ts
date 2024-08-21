
import express, { Request, Response, NextFunction } from 'express'
import { CreateVendorInputs } from '../dto'
import bcrypt from 'bcrypt'


export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { name, ownerName, address, pinCode, phone, email, foodType, password } = <CreateVendorInputs>req.body

        if (!name || !ownerName || !email) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        res.status(201).json({ name, ownerName, address, pinCode, phone, email, foodType, hashedPassword })
    }
    catch (err) {
        next(err)
    }
}

export const GetVendor = async (req: Request, res: Response, next: NextFunction) => {

}

export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {

}


