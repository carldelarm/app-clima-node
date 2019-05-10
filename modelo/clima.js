'use strict'

const colors = require('colors');
const axios = require('axios');

const getClimaPorLatLong = async (lat, lon) => {

	lat = Number(lat);
	lon = Number(lon);

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c9bbe4d850782b8db711d60ecb124ca3&units=metric`;

	const resp = await axios.get(url);

	return resp.data.main.temp;
}

module.exports = {
	getClimaPorLatLong
}




