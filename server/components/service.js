const Service = require('../DatabaseSchema/service-model');


const services = async(req,res) => {
  try{
    const {service,description,price,provider} = req.body;
    // console.log("helo ra sudeep",service,description,price,provider);
    const serviceExists = await Service.find();
    // console.log(serviceExists);
    if(!serviceExists){
     res.status(404).json({message:"No service found"});
    }
    res.status(200).json({message:serviceExists});
      
  }
  catch(error){
    console.log(error);
  }
}

module.exports = services;