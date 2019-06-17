require('dotenv').config();
const mongoose     = require('mongoose');
const Course = require('../models/Course');

const newCourse = {
 courseName : "WEB MAD MAY 19",
 students : [
  {name:"Alessio",codewars:"evilloh"},
  // {name:"Anthony",codewars:"MicaelZV"},
  {name:"Ben",codewars:"bengarc@gmail.com"},
  {name:"Cris",codewars:"LadyCrispy"},
  {name:"Jorge",codewars:"JorgeAngst"},
  // {name:"Jorge Luis",codewars:"Javinovix"},
  {name:"Juan",codewars:"juanSev"},
  {name:"Manuel",codewars:"Marnelas"},
  {name:"Leti",codewars:"letiescanciano"},
  {name:"Luci",codewars:"lulastray"},
  {name:"María",codewars:"MariaGabaldon"},
  {name:"Noa",codewars:"NoahWT"},
  {name:"Paula",codewars:"pactices"},
  {name:"Sachin",codewars:"sachin6291"},
  {name:"Teo",codewars:"Teo.Lopez"},
  {name:"Tino",codewars:"tinoguti"},
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


