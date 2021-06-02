'use strict'

import { ResponseBody } from '../helpers'
import { ProductModel } from '../models'

const ProductController = {
  get,
  post,
  put,
  remove
}

export default ProductController

async function get (request, response, next) {
  const data = await ProductModel.get()
  const responseBody = new ResponseBody(200, 'Product Get Successful', data)
  response.body = responseBody
  process.nextTick(next)
}

async function post (request, response, next) {
  // const product = {req.}
  const newProduct = request.body.product
  console.log(newProduct)
  const data = await ProductModel.post(newProduct)
  const responseBody = new ResponseBody(200, 'Prouct Post Successful', data)
  response.body = responseBody
  process.nextTick(next)
}

async function put (request, response, next) {
  const productId = request.params.id;
  const product = request.body.product
  console.log(productId, product)
  const data = await ProductModel.put(productId, product)
  const responseBody = new ResponseBody(200, 'Product Put Successful', data)
  response.body = responseBody
  process.nextTick(next)
}

async function remove (request, response, next) {
  const productId = request.params.id;
  const data = await ProductModel.remove(productId)
  const responseBody = new ResponseBody(200, 'Product Delete Successful', data)
  response.body = responseBody
  process.nextTick(next)
}
