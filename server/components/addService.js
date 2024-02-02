const Service = require('../DatabaseSchema/service-model');


const services = async(req,res) => {
  try{
    console.log("i am from backend",req.body);
    const {title,subheader,image,description,price} = req.body;
    console.log("From add service backend",service,description,price,provider);
    const serviceExists = await Service.findOne({description:description});
    console.log("check service there or not",serviceExists);
    if(!serviceExists){
      console.log("hello noob ",title,subheader,image,description,price);
     const newService = await Service.create({title,subheader,image,description,price});
      res.status(200).json({message:newService});
    }
    else
    {
      res.status(200).json({message:serviceExists});
    }
      
  }
  catch(error){
    console.log(error);
  }
}

module.exports = services;