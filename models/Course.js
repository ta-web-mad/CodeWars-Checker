const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CourseSchema = new Schema({
  courseName : {type: String, unique:true},
  students: Array,
  },
  {
    timestamps: true
  });

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;