import { Router } from 'express'
import homeController from '../controllers/homeController.js'

const router = new Router()

router.get('/', homeController.renderHomePage)
router.get('/add', homeController.renderAddTrainingPage)
router.post('/add', homeController.addTraining)
router.get('/edit/:id', homeController.renderEditTrainingPage)
router.post('/edit/:id', homeController.editTraining)
router.get('/delete/:id', homeController.deleteTraining)

export default router
