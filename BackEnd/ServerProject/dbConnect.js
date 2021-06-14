const mongoose = require('mongoose');
const dbConnect = (Db_Url) => {
    try {

        const conn = mongoose.connect(Db_Url,{
            useNewUrlParser : true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });

        console.log(`Database Connected.}`);
        return true;
        
    } catch (error) {
        console.log("Database Connection Failed : ",error);
        return false;
        
    }
}

module.exports=dbConnect;