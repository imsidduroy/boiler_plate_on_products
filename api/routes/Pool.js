'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { PoolController } from '../controllers'

const PoolRouter = new Express.Router()
const { get, getbyId, post, put, remove } = PoolController

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

PoolRouter.use(extractHeaders)

PoolRouter.get('/', routeSanity, asyncWrapper(get))
PoolRouter.get('/:id', routeSanity, asyncWrapper(getbyId))
PoolRouter.post('/', routeSanity, asyncWrapper(post))
PoolRouter.put('/:id', routeSanity, asyncWrapper(put))
PoolRouter.delete('/:id', routeSanity, asyncWrapper(remove))

PoolRouter.use(setHeaders)

export default PoolRouter
