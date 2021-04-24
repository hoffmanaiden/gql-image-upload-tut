import mongoose from 'mongoose';

// --------------------------------- mongo schema
const mongoProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String
});
// ------ mongo model
const Product = mongoose.model('Product', mongoProductSchema);

export default Product;