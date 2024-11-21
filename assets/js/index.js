const precio = 400000
let cantidad = 0
let precio_total = 0

const precioSpan = document.querySelector(".precio-inicial")
const precioTotalSpan = document.querySelector(".valor-total")
const cantidadSpan = document.querySelector(".cantidad")
const btnSum = document.querySelector("#btn-sum")
const btnSub = document.querySelector("#btn-sub")

precioSpan.innerHTML = precio
cantidadSpan.innerHTML = cantidad

btnSum.addEventListener('click', () => {
	cantidad += 1;
	cantidadSpan.innerHTML = cantidad;
	precio_total = cantidad * precio;
	precioTotalSpan.innerHTML = precio_total
})

btnSub.addEventListener('click', () => {
	if (cantidad > 0) {
		cantidad -= 1;
		cantidadSpan.innerHTML = cantidad;
		precio_total = cantidad * precio;
		precioTotalSpan.innerHTML = precio_total
	}
})
