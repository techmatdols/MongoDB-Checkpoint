const mongoose = require('mongoose')


const conschema = mongoose.Schema({
  lastname:{
    type: String,
    required:[true, 'please add a text value']

  } ,
  firstname:{
    type: String,
    required:[true, 'please add a text value']

} ,
  email: {
    type: String,
    required:[true, 'please add a text value']
  },

  age: {
    type: Number,
    required:[true, 'please add a number value']
  }
},{
    timestamps: true,
           
});
module.exports = mongoose.model('contactlist', conschema)
      
      

