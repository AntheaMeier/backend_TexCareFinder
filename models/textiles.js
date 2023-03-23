const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let Textile = new Schema(
{
 	category: { type: String, required: true },
  	feature: { type: String },
  	wash_temp: { type: String },
  	iron_level: { type: String },
  	others: { type: String }
},
{ collection: 'textiles'}
)

module.exports = mongoose.model('Textile', Textile)