import {Schema,model} from "mongoose";

const ManagerSchema=new Schema({
    managername:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    managerPassword:{
        type:String,
        required:true,
        unique:true

    },
    createdAt:{
        type:Date,
        default:Date.now()
    }


})
const Manager=model('Manager',ManagerSchema)
export default Manager;