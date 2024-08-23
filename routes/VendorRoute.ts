import express ,{Request,Response,NextFunction} from 'express'
import { VendorLogin } from '../controllers'


const router =express.Router()

router.get('/login',VendorLogin)




export {router as VandorRoute}