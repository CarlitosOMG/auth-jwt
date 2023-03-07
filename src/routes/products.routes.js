import { Router } from 'express'
import * as productsCtrl from '../controllers/products.controller.js'
import { verifyToken, isModerator, isAdmin } from '../middlewares/authjwt.js'
const router = Router()

router.post('/', [verifyToken, isModerator], productsCtrl.createProduct)
router.get('/', productsCtrl.getProducts)
router.get('/:productId', productsCtrl.getProductById)
router.put(
	'/:productId',
	[verifyToken, isModerator],
	productsCtrl.updateProductById
)
router.delete(
	'/:productId',
	[verifyToken, isAdmin],
	productsCtrl.deleteProductById
)

export default router
