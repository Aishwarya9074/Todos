import mongoose from 'mongoose';

mongoose.connect('mongodb://0.0.0.0:27017/TodoDB').then(()=>{
    console.log('TodoDB connected')
})
.catch(e=>{
    console.log(e)
})
export default mongoose;