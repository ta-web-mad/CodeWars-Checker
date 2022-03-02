require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('../models/Course');

// const newCourse = {
// 	courseName: 'WEB AGO 2021',
// 	students: [
// 		{ name: 'Laura', codewars: 'lauradecc' },
// 		{ name: 'Fede', codewars: 'fede1712' },
// 		{ name: 'Vlad', codewars: 'vladickweb' },
// 		{ name: 'Dani', codewars: 'Nyhz' },
// 		{ name: 'Alberto', codewars: 'alberto-massa' },
// 		{ name: 'Sergio', codewars: 'sergiopuentecastro' },
// 		{ name: 'Sara', codewars: 'SaraMansori' },
// 		{ name: 'Juan', codewars: 'JuanDeSantis' },
// 		{ name: 'Jose', codewars: 'JoseBohopo' },
// 		{ name: 'David', codewars: 'davidmart16' },
// 		{ name: 'Aleksei', codewars: 'Alexqwiz' },
// 		{ name: 'Marta', codewars: 'martarubio' },
// 		{ name: 'Victor', codewars: 'VictorIronhack' },
// 		{ name: 'Vane', codewars: 'SybilVane' },
// 		{ name: 'Paula', codewars: 'paukami' },
// 		{ name: 'Miguel', codewars: 'MiguelAngelTorrijos' },
// 		{ name: 'Iván', codewars: 'banchi19' },
// 		{ name: 'Alejandro', codewars: 'PandaMallo' },
// 		{ name: 'Jesús', codewars: 'Jesus-Navas' },
// 	],
// };

// const newCourse = {
// 	courseName: 'WEB MAD OCT 21',
// 	students: [
// 		{ name: 'Adrián', codewars: 'Ramire' },
// 		// { name: 'Alejandro Alcaide', codewars: 'AlexVonrez' }, 404
// 		{ name: 'Alejandro López', codewars: 'Nektaru' },
// 		{ name: 'Feijóo', codewars: 'BlueThunder' },
// 		// { name: 'Alfredo', codewars: 'Fredimenarguez' },
// 		{ name: 'Alvaro', codewars: 'AlvaroOnTheUser' },
// 		{ name: 'Analía', codewars: 'analialr' },
// 		{ name: 'Andrés', codewars: 'Kain-cg' },
// 		{ name: 'Bárbara', codewars: 'Barbara-Monzu' },
// 		{ name: 'Bego', codewars: 'besaga' },
// 		{ name: 'Charly', codewars: 'CHRLY-DSIGN%20' },
// 		{ name: 'Carlos', codewars: 'CarlosPerruca' },
// 		{ name: 'Dani', codewars: 'DanielVillacanas' },
// 		{ name: 'Eunice', codewars: 'Eunice%20Santiago' },
// 		// { name: 'Fernando', codewars: 'fernandoCardona' },
// 		{ name: 'Guido', codewars: 'guidocsm' },
// 		{ name: 'Jesús', codewars: 'sanchezdiezma' },
// 		{ name: 'Lisa', codewars: 'lisamedinag' },
// 		{ name: 'Manu', codewars: 'mpascual' },
// 		{ name: 'Marcos', codewars: 'marferbl' },
// 		{ name: 'Marta', codewars: 'martarubio' },
// 		{ name: 'Mauro', codewars: 'mmonereo' },
// 		{ name: 'Miguel', codewars: 'mimues' },
// 		{ name: 'Miki', codewars: 'zerok1986' },
// 		{ name: 'Rasul', codewars: 'RaselJam' },
// 		{ name: 'Raúl', codewars: 'RaulGamBalonga' },
// 		{ name: 'Virginia', codewars: 'VirginiaMajuelos' },
// 	],
// };

const newCourse = {
	courseName: 'WEB MAD ENE 22',
	students: [
		{ name: 'Ana', codewars: 'anasanmua' },
		{ name: 'André', codewars: 'andredoc' },
		{ name: 'Andrés', codewars: 'danube20' },
		{ name: 'Ángela', codewars: 'angelita15' },
		{ name: 'Anna', codewars: 'Annamporras' },
		{ name: 'Arseni', codewars: 'AChFr' },
		{ name: 'Cristian', codewars: 'ferbperdomo' },
		{ name: 'Diego', codewars: 'nexux28' },
		{ name: 'Edu', codewars: 'fluty84' },
		{ name: 'Ernesto', codewars: 'emenocal' },
		{ name: 'Estefanía', codewars: 'stephlamas' },
		{ name: 'Gonzalo', codewars: 'oteroGonzalo' },
		{ name: 'Guille Rodríguez', codewars: 'Guillecalero' },
		{ name: 'Guille Pérez', codewars: 'GuillermoGPF' },
		{ name: 'Guille Ávila', codewars: 'guilleavila' },
		{ name: 'Gustavo', codewars: 'GustavodelLlano' },
		{ name: 'Hiba', codewars: 'Hiby' },
		{ name: 'Inés', codewars: 'inesgarper' },
		{ name: 'Íñigo', codewars: 'Inigo-Javier' },
		{ name: 'Jean Carlo', codewars: 'VmMad' },
		{ name: 'Jorge', codewars: 'jorgeAF14' },
		{ name: 'Judit', codewars: 'Jud94' },
		{ name: 'Laura', codewars: 'Laura%20DVB' },
		{ name: 'Mario', codewars: 'mariodzls' },
		{ name: 'Miguel', codewars: 'Orttega' },
		{ name: 'Mikel', codewars: 'mikellaiseca' },
		{ name: 'Mónica', codewars: 'moni247' },
		{ name: 'Ricardo Molpeceres', codewars: 'riiGalaxy' },
		{ name: 'Ricardo Ronchetti', codewars: 'ricardoronchetti' },
		{ name: 'Roberto', codewars: 'RobertoCads' },
		{ name: 'Salva', codewars: 'ridersalva' },
		{ name: 'Sara', codewars: 'sarapuertasx' },
		{ name: 'Shirley', codewars: 'shirley%20gianina' },
	],
};

console.log(process.env.MONGO);
mongoose
	.connect(`mongodb://localhost:27017/katas`, { useNewUrlParser: true })
	.then(x => Course.find({ courseName: newCourse.courseName }))
	.then(x => {
		if (x.length) {
			return Course.findOneAndRemove({ courseName: newCourse.courseName });
		}
	})
	.then(x => Course.create(newCourse))
	.then(response => {
		console.log(response);
		mongoose.disconnect();
	})
	.catch(err => {
		console.error('Error connecting to mongo', err);
	});
