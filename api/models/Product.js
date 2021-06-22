'use strict'

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

const ProductModel = {
  get,
  post,
  put,
  remove
}

export default ProductModel

async function get () {
  // return undefined
      const products = await Product.find({});
      return products;
}

async function post (newProduct) {
  // return undefined
  const product = new Product({
      name: newProduct.name ,
      price: newProduct.price,
      // name:'tmp' + Date.now(),
      // price:21
    });
    const createdProduct = await product.save();
    return createdProduct;
}

async function put (productId, updatedProduct) {
    const product = await Product.findById(productId);
    if (product) {
        product.name = updatedProduct.name;
        product.price = updatedProduct.price;
        return await product.save();
    } else {
        console.log("Product not found")
        return undefined;
    }  
}

async function remove (productId) {
    const product = await Product.findById(productId);
    if (product) {
        return await product.remove();
    } else {
        return undefined;
    }  
}