import mongoose, { Schema, Document, Model } from 'mongoose'

interface VendorDoc extends Document {
    name: string
    ownerName: string
    foodType: [string]
    pinCode: string
    address: string
    phone: number
    email: string
    password: string
    salt: string
    coverImage: string
    serviceAvailable: boolean
    rating: number
    foods: any
}

const VendorSchema = new Schema({

    name: { type: String, required: true },
    ownerName: { type: String, required: true },
    foodType: { type: [String] },
    pinCode: { type: String, require: true },
    address: { type: String },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    coverImage: { type: String },
    serviceAvailable: { type: Boolean },
    rating: { type: Number },
    foods: [
        {

        type: Schema.Types.ObjectId,
        ref: 'food'
    }],
},
    {
        toJSON: {
            transform(doc,ref){
                delete ref.password,
                delete ref.salt,
                delete ref.__v,
                delete ref.createdAt,
                delete ref.updatedAt
            }
        },
        timestamps: true
    }

)



const vendor =mongoose.model<VendorDoc>('vendor',VendorSchema)


export {vendor}