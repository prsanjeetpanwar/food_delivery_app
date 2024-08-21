import express, {Request,Response,NextFunction} from 'express'
import { CreateVendor, GetVendor, GetVendorById } from '../controllers'



const router=express.Router()

router.post('/vender',CreateVendor)
router.get('/venders',GetVendor)
router.get('/vender/:id',GetVendorById)

router.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.send('Hello from Admin Route')
})

export {router as  AdminRoute}

