alert (`Bienvenido a mi primer curso de JavaScript

Mi nombre es Alan Cantini 

Este es mi primer proyecto de js

Presione Aceptar para continuar`)

// NOMBRE  Y APELLIDO

let nombre = prompt("Por favor, Ingrese su nombre")
alert ("Nombre : " + nombre)

let apellido = prompt("Por favor, Ingrese su apellido")

alert ("Apellido :" + " " + apellido)

alert ("Tu nombre y apellido son : " + " " + nombre + " " + apellido)

// EDAD

let edad = parseInt(prompt("Ingrese su edad"));

if(edad > 18){
    alert("Puedes continuar el cuestionario")
}else{
    alert("Para poder continuar, debe ser mayor de edad")
edad = prompt("Ingrese su edad")
}   


// Nueva ventana

alert (`A continuacion le voy a hacer unas cuantas preguntas`)

// PAIS

let pais = prompt("Por favor, ingrese su pais de nacimiento")

alert ("Su Pais De Nacimiento es : " + "" + pais)

//Acertijo 1

let problema1 = prompt(`Si Un individuo, consigue 
pagar una entrada del cine, cuyo monto es de $2500,
a mitad de precio, cual seria el monto total?`)

if (problema1 === "1250"){
    alert("Correcto, la mitad de $2500, es 1250")
} else{
    alert(`Incorrecto, la mitad de $2500 no es ${problema1}`)
problema1 = prompt(`Si Un individuo, consigue 
pagar una entrada del cine, cuyo monto es de $2500,
a mitad de precio, cual seria el monto total?`)
}

//Acertijo 2

let Problema2 = prompt(`Si quiero comprar 1 entradas para el cine
de $1800, en cuanto quedaria la entrada teniendo en cuenta el impuesto IVA? (27%)`)

if (Problema2 === "2178"){
    alert("Exacto, el total de la entrada incluyendo el iva seria de $2178")
}else{
    alert(`Incorrecto, el total de la entrada no seria ${Problema2}`)
    Problema2 = prompt(`Si quiero comprar 1 entradas para el cine
de $1800, en cuanto quedaria la entrada teniendo en cuenta el impuesto IVA? (27%)`)
}

//Final

alert (`hasta aqui llego mi primera actividad de JavaScript
Tus respuestas fueron

Nombre : ${nombre}
Apellido : ${apellido}
Edad : ${edad}
Pais : ${pais}
Acertijo 1 : ${problema1}
Acertijo 2 : ${Problema2}`)

// Final final

alert("Espero verte pronto por aqui :)")