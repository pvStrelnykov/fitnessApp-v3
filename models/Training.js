let trainings = [
	{
		id: 1,
		name: 'Workout 1',
		intensity: 'Medium',
		exercise: [
			{ id: 1, name: 'Exercise 1', reps: 10, weight: 20 },
			{ id: 2, name: 'Exercise 2', reps: 12, weight: 0 },
			{ id: 3, name: 'Exercise 3', reps: 10, weight: 20 },
			{ id: 4, name: 'Exercise 4', reps: 12, weight: 25 },
		],
	},
]

class Training {
	static getTrainings() {
		return trainings
	}

	static addTraining(name, intensity) {
		const id = Date.now()
		const newTraining = {
			id,
			name,
			intensity,
			exercise: [
				{ id: 1, name: 'Exercise 1', reps: 10, weight: 20 },
				{ id: 2, name: 'Exercise 2', reps: 12, weight: 0 },
				{ id: 3, name: 'Exercise 3', reps: 10, weight: 20 },
				{ id: 4, name: 'Exercise 4', reps: 12, weight: 25 },
			],
		}

		trainings.push(newTraining)
	}

	static getTrainingId(id){
		return trainings.find(training => training.id == id)
	}

	static editTraining(id, name, intensity){
		const training = this.getTrainingId(id)
		if(training) {
			training.name = name
			training.intensity = intensity
		}
		return training
	}

	static deleteTraining(id){
		const training = trainings.findIndex(training => training.id == id)
		trainings.splice(training, 1)
	}

	static getExercise(trainingId, exerciseId) {
		const training = this.getTrainingId(trainingId)
		return training.exercise.find(ex => ex.id == exerciseId)
	}

	static updateExercise(trainingId, exerciseId, name, reps, weight) {
		const exercise = this.getExercise(trainingId, exerciseId)
		if (exercise) {
			exercise.name = name
			exercise.reps = reps
			exercise.weight = weight
			return exercise
		}
		return null
	}

	static deleteExercise(trainingId, exerciseId) {
		const training = this.getTrainingId(trainingId)
		const index = training.exercise.findIndex(ex => ex.id == exerciseId)
		if (index !== -1) {
			training.exercise.splice(index, 1)
		}
	}
}

export default Training
