import mongoose, {Document} from "mongoose";

export type ProductDocument=Document & {
    title:string,
    price:number,
    description:string,
    image:string
}

const ProductSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,

    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})

export default mongoose.model<ProductDocument>('Products', ProductSchema)