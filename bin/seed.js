require('dotenv').config();
const mongoose     = require('mongoose');
const Course = require('../models/Course');

const newCourse = {
 courseName : "WEB MAD OCT 19",
 students : [
  {name:"Fran N.",codewars:"f-naranjo"},
  {name:"Dani",codewars:"daniel.gonvie"},
  {name:"Edu",codewars:"Eduardo290686"},
  {name:"Manué",codewars:"Manuee97"},
  {name:"Flor",codewars:"f!or"},
  {name:"Javi",codewars:"Javiview"},
  {name:"Kike",codewars:"enriqueMontano"},
  {name:"Fran M.",codewars:"FranciscoMolleda"},
  {name:"Héctor",codewars:"HectorArrieta"},
  {name:"Estefanía",codewars:"estefania-git"},
  {name:"Gabriel",codewars:"gabzafra"},
  {name:"Laura",codewars:"laudvg"},
  {name:"María",codewars:"mariasimo"},
  {name:"Alfredo",codewars:"adelcanto"},
  {name:"Sonia",codewars:"SoniaCB"},
]}

console.log(process.env.MONGO)
mongoose
  .connect(`${process.env.MONGO}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Course.create(newCourse)
    .then((response)=>{
      console.log(response)
      mongoose.disconnect()
    })
    .catch((err)=>{console.log(err)})

  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


