const express=require('express');

const route = express.Router();

const {createUser,checkLogin,uploadPics,deleteAlbum,viewPics,getSinglePic,addToAlbum} = require('../dbaccess/dbtrans');
const {checkID} = require('../authcheck/accessControl');
const {upload} = require('../Helpers/fileHelper');

route.post('/adduser',createUser);
// route.put('/updateuser/:id',checkID,updateUser);
route.delete('/deletealbum/:id/:albid',checkID,deleteAlbum);
route.post('/login', checkLogin);
route.post('/upload/:id',checkID,upload.array('files'),uploadPics);
route.get('/studio/:id',getSinglePic);
route.get('/view/:id',viewPics);
route.post('/addtoalbum/:id',upload.array('files'),addToAlbum);


route.get('/', (req,res) => {
    res.status(401).redirect('/notfound.html');
} )

route.get('*', (req,res) => {
    res.status(401).redirect('/notfound.html');
})

module.exports=route;