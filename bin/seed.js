require('dotenv').config()
const mongoose = require('mongoose')
const Course = require('../models/Course')

const newCourse = {
	courseName: 'WEB MAY 2021',
	students: [
		{ name: 'Name', codewars: 'codewars-username' },
	]
}

console.log(process.env.MONGO)
mongoose
	.connect(`mongodb://localhost:27017/katas`, { useNewUrlParser: true })
	.then(x => Course.find({ courseName: newCourse.courseName }))
	.then(x => {
		if (x.length) {
			return Course.findOneAndRemove({ courseName: newCourse.courseName })
		}
	})
	.then(x => Course.create(newCourse))
	.then(response => {
		console.log(response)
		mongoose.disconnect()
	})
	.catch(err => {
		console.error('Error connecting to mongo', err)
	})
