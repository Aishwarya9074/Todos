import { Schema,model } from "mongoose";

const AdminSchema=new Schema({
   Adminname:{
        type:String,
        required:true,
        unique:true
    },
   password:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true,
        unique:true
    },
    User:{
       type:Schema.Types.ObjectId,
       ref:'User'

    },
    Task:{
        type:Schema.Types.ObjectId,
        ref:'Task'

    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
  

})

const Admin=model('Admin',AdminSchema)
export default Admin;