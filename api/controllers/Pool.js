'use strict'

import { ResponseBody } from '../helpers'
import { PoolModel } from '../models'

const PoolController = {
  get,
  getbyId,
  post,
  put,
  remove
}

export default PoolController

async function get (request, response, next) {
  const data = await PoolModel.get()
  const responseBody = new ResponseBody(200, 'Pool Get Successful', data)
  response.body = responseBody
  process.nextTick(next)
}

async function getbyId (request, response, next) {
  const data = await PoolModel.getbyId()
  const responseBody = new ResponseBody(200, 'Pool Get Successful', data)
  response.body = responseBody
  process.nextTick(next)
}

async function post (request, response, next) {
  const newPool = request.body.Pool
  console.log(newPool)
  const data = await PoolModel.post(newPool)
  const responseBody = new ResponseBody(200, 'Pool Post Successful', data)
  response.body = responseBody
  process.nextTick(next)
}

async function put (request, response, next) {
  const poolId = request.params.id;
  const pool = request.body.pool
  console.log(poolId, pool)
  const data = await poolModel.put(poolId, pool)
  const responseBody = new ResponseBody(200, 'pool Put Successful', data)
  response.body = responseBody
  process.nextTick(next)
}

async function remove (request, response, next) {
  const poolId = request.params.id;
  const data = await poolModel.remove(poolId)
  const responseBody = new ResponseBody(200, 'pool Delete Successful', data)
  response.body = responseBody
  process.nextTick(next)
}
