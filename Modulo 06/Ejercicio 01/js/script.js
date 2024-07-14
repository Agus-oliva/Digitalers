function calcularPuntoDeEquilibrio(costosFijos, precioVenta, costoVariable) {

    if (precioVenta <= costoVariable) {
        prompt("El precio de venta  debe ser mayor que el costo variable .") 
      
    }

    let puntoDeEquilibrio = costosFijos / (precioVenta - costoVariable);
    return puntoDeEquilibrio;
}

let costosFijos = parseFloat(prompt("Ingrese los costos fijos:"));
let precioVenta = parseFloat(prompt("Ingrese el precio de venta :"));
let costoVariable = parseFloat(prompt("Ingrese el costo variable :"));

let puntoDeEquilibrio = calcularPuntoDeEquilibrio(costosFijos, precioVenta, costoVariable);
alert("El Punto de Equilibrio en unidades es: " + puntoDeEquilibrio);

