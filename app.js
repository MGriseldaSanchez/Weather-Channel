//La función encodeURIComponent() es una función incorporada en JavaScript que toma una cadena como entrada y devuelve una nueva cadena en la que los caracteres especiales que son parte de una URL (como espacios, acentos, símbolos, etc.) se han reemplazado por sus equivalentes codificados. Esto es importante cuando se envían datos a través de una URL, ya que ciertos caracteres pueden tener significados especiales en una URL y deben codificarse para que la URL sea válida y los datos se transmitan correctamente.

let btn = document.querySelector("button") // boton consulta
let city = document.getElementById("city") // valor del input guardado


btn.addEventListener("click",()=>{ // evento click
let valueCity = city.value
document.querySelector(".container").style.visibility= "visible"

//validacion de ingreso de string vacio
valueCity == "" ? alert("Campo vacio: DEBES INGRESAR UNA CIUDAD") : valueCity

loadCity(valueCity)

// vacia el campo del input
city.value = ""

})

let ciudad = document.getElementById("ciudad") /* nombre de ciudad */
let temp = document.getElementById("temperatura") /*temperatura */
let icon = document.getElementById("wicon") /* icono de temperatura */
icon.style.display = "none"
let description = document.querySelector(".descripcion") /* descripcion */



// funcion consumo API
function loadCity(consult){

  $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(consult)}&appid=ce0819f787295dd4b608056a3a05aa0d&units=metric&lang=es`

  , function(data) {

/* nombre de ciudad */
ciudad.textContent = data.name
 /*temperatura */
temp.innerHTML = data.main.temp + "<sup>°C</sup>" 
/* icono de temperatura */
icon.src =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
icon.style.display = "block"
/*descripcion */
description.textContent = data.weather[0].description

  })

  .fail(function(jqXHR, errorThrown) {
    // Maneja el error aquí
    jqXHR.status === 404 ? alert(`Error ${jqXHR.status} ${errorThrown} Ciudad no encontrada`) : jqXHR

})


}

