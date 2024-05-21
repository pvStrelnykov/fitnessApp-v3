import Training from '../models/Training.js'

class HomeController {
	renderHomePage(req, res) {
		const trainings = Training.getTrainings()
		res.render('home', { titlePage: 'Home', trainings })
	}

	renderAddTrainingPage(req, res) {
		res.render('add-workout', { titlePage: 'Add training' })
	}

	addTraining(req, res) {
		const {title, intensity} = req.body
		Training.addTraining(title, intensity)
		res.redirect('/')
	}

	renderEditTrainingPage(req, res){
		const trainingId = req.params.id
		const training = Training.getTrainingId(trainingId)

		res.render('edit-workout', { titlePage: 'Edit training', training })
	}

	editTraining(req, res){
		const trainingId = req.params.id
		const {title, intensity} = req.body
		Training.editTraining(trainingId, title, intensity)
		res.redirect('/')
	}

	deleteTraining(req, res) {
		const trainingId = req.params.id
		Training.deleteTraining(trainingId)
		res.redirect('/')
	}
}

export default new HomeController()
