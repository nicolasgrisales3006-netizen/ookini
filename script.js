function calcularPrecio(precioUnitario, cantidad) [
    const total = precioUnitario + cantidad;
    return total;
]

function puedeReservar(cantidad) {
    return cantidad <= 2;
}
const botonReservar = document.querySelector("#boton-reservar");


  console.log("El usuario hizo clic");
});

function puedeReservar(tazasDisponibles) {
  return tazasDisponibles > 0;
}

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");


  if (puedeReservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
  } else {
    botonReservar.textContent = "Sin cupos";
    botonReservar.disabled = true;
  }
});


