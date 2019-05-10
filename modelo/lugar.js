'use strict'

const colors = require('colors');
const axios = require('axios');

//Forma #1:
/*
const getLugarLatLong = (direccion) => {

	const encodeURL = encodeURI(direccion);

	const instance = axios.create({
		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
		headers: {'X-RapidAPI-Key':'a72bbdf8d6msh751a35183f91a9fp1ac6dcjsnb403c1d1b3f9'}
	});

	instance.get()
		.then(response => {
			console.log(response.data.Results[0]);
		})
		.catch(err => {
			console.log('ERROR: ',err);
		});
}
*/

//Forma #2: utilizando async y await

const getLugarLatLong = async (direccion) => {

	const encodeURL = encodeURI(direccion);

	const instance = axios.create({
		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
		headers: {'X-RapidAPI-Key':'a72bbdf8d6msh751a35183f91a9fp1ac6dcjsnb403c1d1b3f9'}
	});

	const resp = await instance.get();

	if(resp.data.Results.length === 0){
		throw new Error(`\nNo hay resultados para la dirección: ${direccion}`);
	}

	const data = resp.data.Results[0];

	return {
		direccion: data.name,
		lat: data.lat,
		lon: data.lon
	}
}

module.exports = {
	getLugarLatLong
}




