'use strict'

const direccion = {
	demand: true,
	alias: 'd',
	desc: "Dirección de la ciudad para obtener el clima."
};

const argv = require('yargs')
			.options({
				direccion
			})
			.help()
			.argv;

module.exports = {
	argv	
}