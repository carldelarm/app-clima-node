'use strict'

const colors = require('colors');

const argv = require('./configuracion/yargs').argv;

const lugar = require('./modelo/lugar');
const clima = require('./modelo/clima');

console.log("\n==============================================");
console.log("PROGRAMA NODE: Obtener el clima de una ciudad");
console.log("==============================================");


//Forma #1:
//lugar.getLugarLatLong(argv.direccion);

//Forma #2:
/*
lugar.getLugarLatLong(argv.direccion)
.then(respuesta =>{
	console.log("\nDirección:".red);
	console.log(respuesta);
	
	clima.getClimaPorLatLong(respuesta.lat, respuesta.lon)
	.then(resp => {
		console.log("\nSu clima es el siguiente:".red);
		console.log(resp);
	})
	.catch(err => console.log(`\nERROR: No se pudo determinar el clima de ${argv.direccion}`.red,));
	
})
.catch(err=>{
	console.log("ERROR: ".red,err);
});
*/

//Forma #3: Utilizando async y await
const getInfo = async (direccion) => {
	try{

		const coords = await lugar.getLugarLatLong(argv.direccion);
		const temp = await clima.getClimaPorLatLong(coords.lat,coords.lon);
		return `El clima de ${coords.direccion.red} es: ${temp}`;

	} catch(e){
		return `No se pudo determinar el clima de ${direccion}`;
	}
}

getInfo(argv.direccion).then(console.log).catch(console.log);