
import express, { Request, Response, NextFunction } from 'express'
import { CreateVendorInputs } from '../dto'
import bcrypt from 'bcrypt'
import { vendor } from '../models'
import { GeneratePassword, GenerateSalt } from '../utils'


export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { name, ownerName, address, pinCode, phone, email, foodType, password } = <CreateVendorInputs>req.body

        if (!name || !ownerName || !email) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const ExistingEmail = await vendor.findOne({ email: email })

        if (ExistingEmail !== null) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const salt =await GenerateSalt()
        const hashedPassword = await GeneratePassword(password, salt)

        const createVendor = await vendor.create({
            name: name,
            ownerName: ownerName,
            address: address,
            pinCode: pinCode,
            phone: phone,
            email: email,
            foodType: foodType,
            password: hashedPassword,
            salt:salt,
            coverImage:'',
            serviceAvailable: false,
            rating: 0,
            foods: [],

        })

        res.status(201).json(createVendor)
    }
    catch (err) {
        next(err)
    }
}

export const GetVendor = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const GetVendor= await vendor.find({})
        
        if(GetVendor !==null){res.status(200).json(GetVendor)}
        
        res.status(400).json({message: 'Vendors are not found'})
     }
    catch (err) {
        next(err)

    }

}

export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {


    try {
       const vendorId=req.params.id

        const GetVendorById = await vendor.findById(vendorId)

        if (GetVendorById !== null) {

            res.status(200).json(GetVendorById)

        }

        res.status(400).json({ message: 'Vendor not found' })
        

    }
    catch (err) {
        next(err)
    }
}


