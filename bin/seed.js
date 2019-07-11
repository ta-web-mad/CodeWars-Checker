require('dotenv').config();
const mongoose     = require('mongoose');
const Course = require('../models/Course');

const newCourse = {
 courseName : "WEB MAD JUL 19",
 students : [
  {name:"Ester",codewars:"EBGEster"},
  {name:"Inma",codewars:"InmaSA"},
  {name:"Iván",codewars:"ZellDincht"},
  {name:"Carlos Kruger",codewars:"carloskruger"},
  {name:"Lucía",codewars:"luciasuelves"},
  {name:"María",codewars:"mariaShecodes"},
  {name:"Ousmane",codewars:"Ousmane11"},
  {name:"Ignacio",codewars:"NachoAJ"},
  {name:"Josue",codewars:"biojosu"},
  {name:"Andrés",codewars:"Eazzsen"},
  {name:"Fernando",codewars:"fernandorodrigueztig"},
  {name:"Rebeca",codewars:"rebeca"},
  {name:"Luis",codewars:"laanayam333"},
  {name:"Carlos Kompier",codewars:"kompier"},
  {name:"Carla",codewars:"carlavalentina"},
  {name:"Alex",codewars:"alexpand"},
  {name:"José Ramón",codewars:"medinajr"},
]}

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


