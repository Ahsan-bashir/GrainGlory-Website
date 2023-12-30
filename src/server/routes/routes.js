const express=require('express');
const routes=express.Router();
const homeController=require('../controllers/home/homeController');

routes.get('/',homeController.homepage);

module.exports=routes;
