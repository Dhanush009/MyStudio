const express=require('express');
const dbConnect = require('./dbConnect')
require('dotenv').config();
const cors=require('cors');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.options('*', cors());
app.use(cors());

const path=require('path');
const dir= path.join(__dirname,'public');
app.use(express.static('public'));
app.use('/uploads',express.static(path.join(__dirname,'uploads')));

const trans=require('./routes/trans');
app.get('/api/',(req,res) => {
    res.status(401).redirect('/notfound.html');
})

app.use('/api/trans',trans);

app.get('*',(req,res) => {
    res.status(401).redirect('/notfound.html');
})



const errorHandler = (err,req,res,next) => {
    if(err){
        console.log("Error : ",err);
        res.status(400).json({
            success:false,
            error : err.message
        })
    }
    next();
}

app.use(errorHandler);

port=process.env.PORT || 5000;

if(dbConnect(process.env.Db_URL)){
    app.listen(port, () => {
        console.log(`Server connected to ${port}`);
    })
}



