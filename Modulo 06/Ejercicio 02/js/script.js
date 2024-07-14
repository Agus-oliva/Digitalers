
function calcularPresupuesto(ingresoTotal) {
    let gastosNecesarios = ingresoTotal * 0.50;
    let gastosOpcionales = ingresoTotal * 0.30;
    let ahorroInversion = ingresoTotal * 0.20;

    return {
        gastosNecesarios: gastosNecesarios,
        gastosOpcionales: gastosOpcionales,
        ahorroInversion: ahorroInversion
    };
}


let ingresoTotal = parseFloat(prompt("Ingrese su ingreso total:"));


let presupuesto = calcularPresupuesto(ingresoTotal);

alert("Presupuesto según el modelo 50-30-20:\n" +
      "Gastos necesarios: $ " + presupuesto.gastosNecesarios.toFixed(2) + "\n" +
      "Gastos opcionales: $ " + presupuesto.gastosOpcionales.toFixed(2) + "\n" +
      "Ahorro e inversión: $" + presupuesto.ahorroInversion.toFixed(2))