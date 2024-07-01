import {Schema,model} from 'mongoose';

const TaskSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['pending','in progress','completed',],
        default:'pending'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }

})
const Task=model('Task',TaskSchema)
export default Task;