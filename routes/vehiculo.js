var vehiculo ={
marca :"TOYOTA",
modelo :"RAV4 150 AWD Advance",
color:"ROJO",
precio:30000,
combustible:"GASOLINA,DIESEL",
potencia:"150 CV",


caracteristicas_vehiculo:function(){

var caracteristicas="la marca :" + vehiculo.marca
+" costa de un modelo :"+vehiculo.modelo
+" de color :"+vehiculo.color
+" con combustible :"+vehiculo.combustible+" y potencia de :"+vehiculo.potencia
+" a un precio :"+vehiculo.precio+"$";
return caracteristicas;

}

/*
:function(){

var dur="la pelicula : " + pelicula.titulo+" de duracion: "+pelicula.duracion+"min";
return dur;
}

}
console.log(pelicula.dura());
*/
}
console.log(vehiculo.caracteristicas_vehiculo());



