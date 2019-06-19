const express = require('express');
const Course = require('../models/Course');
const router = express.Router();
const axios = require('axios');
const kata = "https://www.codewars.com/api/v1/code-challenges/";

// let result = {
//   name: "",
//   list: [],
//   counter:0
// }
let Students = [
  { name: "Agustín", codewars: "Agucarpar" },
  { name: "Micael", codewars: "MicaelZV" },
  { name: "Rafa", codewars: "Nostrarafus" },
  { name: "Rubén", codewars: "rubander" },
  { name: "Vanesa", codewars: "vane84" },
  { name: "Javi", codewars: "Javinovix" },
  { name: "Jesús", codewars: "GMSP4" },
  { name: "Gabriel", codewars: "Lynx92" },
  { name: "Shakir", codewars: "shakirgamzaev" },
  { name: "Carlos", codewars: "carlosCodeWars" },
  { name: "Iván", codewars: "IvanLopezR" },
  { name: "Sergio", codewars: "stortosa" },
  { name: "Francho", codewars: "Francho" },
  { name: "Miriam", codewars: "Miriloper" },
  { name: "Juan", codewars: "JuanAlbea" },


]//.sort((name, name2)=> {return name.name.localeCompare(name2.name)})
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
                console.log(err)
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
              // TODO
              res.render("result", { kataName: dataKata.data.name, result })
            })
        })
        .catch((err) => {
          console.log(err)
        })

    })
    .catch((err) => { console.log(err) })

});







module.exports = router;
