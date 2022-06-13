precio = 400000;

document.querySelector("#precio");
document.innerHTML = precio;


function calcular() {
    console.log("calculando...");

    // Buscamos el input
    cantidad = document.querySelector('#cantidad');
    color = document.querySelector('#color');
    
    
    // Acceder al valor del input
    console.log(cantidad.value * precio);
    
    // Mostrando valores 
    total.innerHTML = cantidad.value * precio;
    cant.innerHTML = cantidad.value;
    col.style.background = color.value;


    console.log("voy saliendo de la funcion...");
}