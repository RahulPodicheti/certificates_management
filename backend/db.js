const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://certificates:Rahul%40123@cluster0.spc7m.mongodb.net/database_cert'
const mongoDB = async()=>{
    try {
        await mongoose.connect(MONGO_URL,{useNewUrlParser:true});
    const fetched_data = await mongoose.connection.db.collection("users");
    const data =await fetched_data.find({}).toArray();
    console.log(data);
        console.log("connected")
    } catch (error) {
        console.log("error")
    }
}

 

module.exports=mongoDB;