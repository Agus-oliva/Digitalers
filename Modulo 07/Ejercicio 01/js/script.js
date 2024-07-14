let edad = prompt("Por favor, introduce tu edad:");
edad = Number(edad);

if (!isNaN(edad) && edad >= 18) {
 
    alert("¡Bienvenido@a!");
} else if (isNaN(edad)) {
   
    alert("Por favor, introduce un número válido.");
} else {
  
    alert("Lo siento, debes ser mayor de 18 años para acceder.");
}
