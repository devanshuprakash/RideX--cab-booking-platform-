const mongoose = require('mongoose');
function connecttoDb(){
    mongoose.connect(process.env.DB_CONNECT).then(()=>{
        console.log("connected to db");
    }).catch((err)=>{
        console.log("notworking");
        console.log(err);
    })
}
module.exports=connecttoDb; 
// { useNewUrlParser: true, useUnifiedTopology: true } 