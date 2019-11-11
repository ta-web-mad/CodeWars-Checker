const express = require('express');
const Course = require('../models/Course');
const router = express.Router();
const axios = require('axios');
const kata = "https://www.codewars.com/api/v1/code-challenges/";

let eachStudent = {
  name: "",
  pass: false
}

router.get('/a', (req, res, next) => {
  res.render('index');
});


router.post('/Cresult', (req, res, next) => {
  result.id = req.body.kataId;
  axios.get(`${kata}${result.id}`)
    .then((dataKata) => {
      result.name = dataKata.data.name;
      result.id = dataKata.data.id;
      Students.forEach(student => {
        axios.get(`https://www.codewars.com/api/v1/users/${student}/code-challenges/completed?page=0`)
          .then((dataUser) => {
            eachStudent.name = student;
            dataUser.data.data.forEach(eachKata => {
              if (eachKata.id === result.id) {
                console.log(student, "PASS")
              }
            })
          }).catch(err => {
            console.log(err)
          })
      })
      res.render("consoleResult")
    })
    .catch((err) => {
      console.log(err)
    })
});

router.get('/', (req, res, next) => {
  Course.find({})
    .then(data => {
      res.render('index', { data });
    })
});

router.post('/result', (req, res, next) => {
  Course.findOne({ courseName: req.body.Course })
  .then((course) => {
      axios.get(`${kata}${req.body.kataId}`)
        .then((dataKata) => {
          Promise.all(course.students.map((student) => {
            return axios.get(`https://www.codewars.com/api/v1/users/${student.codewars}/code-challenges/completed?page=0`)
              .then((dataUser) => {
                const user = { name: student.name }
                user.katas = dataUser.data.data
                return user
              })
              .catch((err) => {
                console.log( student)
              })
          }))
            .then(arrUser => {
              const result = arrUser.filter(user => {
                return user.katas.some(eachKata =>
                  eachKata.id == dataKata.data.id
                )
              })
              if(result.length>0){
                result[Math.floor(Math.random() * result.length)].pass = true
              }
              let statistics = {
                students: course.students.length,
                passOk: result.length,
                percentage: 0
              }
              statistics.percentage = parseFloat((100/statistics.students)*statistics.passOk).toFixed(2)
              res.render("result", { kataName: dataKata.data.name, result, statistics })
            })
        })
        .catch((err) => {
          console.log(err)
        })

    })
    .catch((err) => { console.log(err) })

});







module.exports = router;
