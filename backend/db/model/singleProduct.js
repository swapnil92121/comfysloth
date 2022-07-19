const mongoose = require('mongoose')

const thumbnails_inner = {
 url: {
  type: String,
 },
 width: {
  type: Number,
 },
 height: {
  type: Number,
 }
}


const thumbnails = {
 small: thumbnails_inner,
 large: thumbnails_inner,
 full: thumbnails_inner
}

const imagesObject =
{
 width: {
  type: Number,
 },
 height: {
  type: Number,
 },
 url: {
  type: String,
 },
 filename: {
  type: String,
 },
 size: {
  type: Number,
 },
 type: {
  type: String,
 },
 thumbnails: thumbnails
}

const playlist = new mongoose.Schema({
 stock: {
  type: Number,
 },
 price: {
  type: Number,
 },
 shipping: {
  type: Boolean,
 },
 colors: {
  type: Array,
 },
 category: {
  type: String,
 },
 images: [
  imagesObject
 ],
 reviews: {
  type: Number,
 },
 stars: {
  type: Number,
 },
 name: {
  type: String,
 },
 description: {
  type: String,
 },
 company: {
  type: String,
 }
})

module.exports = mongoose.model('comfysloth_Single_Data', playlist)