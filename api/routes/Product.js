'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { ProductController } from '../controllers'

const ProductRouter = new Express.Router()
const { get, post, put, remove } = ProductController

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

ProductRouter.use(extractHeaders)

ProductRouter.get('/', routeSanity, asyncWrapper(get))
ProductRouter.post('/', routeSanity, asyncWrapper(post))
ProductRouter.put('/:id', routeSanity, asyncWrapper(put))
ProductRouter.delete('/:id', routeSanity, asyncWrapper(remove))

ProductRouter.use(setHeaders)

export default ProductRouter
