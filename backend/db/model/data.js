const mongoose = require('mongoose')
const playlist = new mongoose.Schema({
 id: {
  type: String,
 },
 name: {
  type: String,
 },
 price: {
  type: Number,
 },
 image: {
  type: String,
 },
 colors: {
  type: Array,
 },
 company: {
  type: String,
 },
 description: {
  type: String,
 },
 category: {
  type: String,
 },
 shipping: {
  type: Boolean,
 },
})

module.exports = mongoose.model('comfyslothData', playlist)