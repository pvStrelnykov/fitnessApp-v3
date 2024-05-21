import Training from '../models/Training.js'

class TrainingController {
	renderExercisesPage(req, res) {
		const trainingId = req.params.trainingId
		const training = Training.getTrainingId(trainingId)

		res.render('exercises', {
			titlePage: 'Exercises',
			exercises: training.exercise,
			training,
		})
	}

	renderEditExercisePage(req, res) {
		const trainingId = req.params.trainingId
		const exerciseId = req.params.exerciseId
		const training = Training.getTrainingId(trainingId)
		const exercise = Training.getExercise(trainingId, exerciseId)
		if (exercise) {
			res.render('edit-exercise', {
				titlePage: 'Edit Exercise',
				exercise,
				training,
			})
		} else {
			res.status(404).send('Exercise not found')
		}
	}

	updateExercise(req, res) {
		const trainingId = req.params.trainingId
		const exerciseId = req.params.exerciseId
		const { name, reps, weight } = req.body

		const updatedExercise = Training.updateExercise(
			trainingId,
			exerciseId,
			name,
			reps,
			weight
		)
		if (!updatedExercise) {
			return res.status(404).send('Exercise not found')
		}

		res.redirect(`/training/${trainingId}/exercises`)
	}

	deleteExercise(req, res) {
    const trainingId = req.params.trainingId;
    const exerciseId = req.params.exerciseId;
    Training.deleteExercise(trainingId, exerciseId)

    res.redirect(`/training/${trainingId}/exercises`)
	}
}

export default new TrainingController()
