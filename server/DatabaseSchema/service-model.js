const mongoose = require('mongoose');

const Services = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  subheader:{
    type:String,
    required:true,
  },
  image:{
    type:Buffer,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  price:{
    type:String,
    required:true,
  }
});

const Student = mongoose.model('services', Services);

module.exports = Student;