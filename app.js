let btn = document.querySelector("button") // boton consulta
let city = document.getElementById("city") // valor del input guardado
let card = document.querySelector(".card")

btn.addEventListener("click",()=>{ // evento click
card.style.visibility= "visible"
let valueCity = city.value
//validacion de ingreso de string vacio

if (valueCity == "") {
  alert("Campo vacio: DEBES INGRESAR UNA CIUDAD")
  card.style.visibility = "hidden"  /* esconde */
}

// valueCity == "" ? alert("Campo vacio: DEBES INGRESAR UNA CIUDAD")  : valueCity

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
 /*temperatura, tofixed(1) reduce a 1 decimal despues de la coma */
temp.innerHTML = data.main.temp.toFixed(1) + "<sup>°C</sup>" 
/* icono de temperatura */
icon.src =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
icon.style.display = "block"
/*descripcion */
description.textContent = data.weather[0].description

  })
  // manejo del error 404
  .fail(function(jqXHR, errorThrown) {
    jqXHR.status === 404 ? alert(`Error ${jqXHR.status} ${errorThrown} Ciudad no encontrada`) : jqXHR
    card.style.visibility = "hidden" /* esconde */
})

}

