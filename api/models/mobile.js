const mongoose = require('mongoose');

const mobileDeviceSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  camera:{
    type:String,
    required:true
  },
  ram:{
    type:String,
    required:true
  },
  operating_system: {
    type: String,
    required: true
  },
  screen_size: {
    type: String,
    required: true
  },
  resolution: {
    type: String,
    required: true
  },
  battery_life: {
    type: String,
    required: true
  },
  storage_capacity: {
    type: String,
    required: true
  },
  processor: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  image_link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('MobileDevice', mobileDeviceSchema);