const TarjetaNumeroarjeta = document.querySelector("#inputTarjeta");
const FechaNumeroarjeta = document.querySelector("#inputFecha");
const cvvNumeroarjeta = document.querySelector("#inputCVV");


const mascaraNumero = "####-####-####-####";
const mascaraFecha = "##/##";
const mascaraCVV = "###";

let TarjetaNumero = [];
let FechaNumero = [];
let cvvNumero = [];


TarjetaNumeroarjeta.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }
    e.preventDefault();
   ingresarDatos(mascaraNumero, e.key, TarjetaNumero);
   TarjetaNumeroarjeta.value = TarjetaNumero.join("");
});

FechaNumeroarjeta.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }

    e.preventDefault();
   ingresarDatos(mascaraFecha, e.key, FechaNumero);
   FechaNumeroarjeta.value = FechaNumero.join("");
});

cvvNumeroarjeta.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }

    e.preventDefault();
   ingresarDatos(mascaraCVV, e.key, cvvNumero);
   cvvNumeroarjeta.value = cvvNumero.join("");
});

function ingresarDatos(mascara, key, arreglo) {
    let numeros = ["0","1","2","3","4","5","6","7","8","9"];

    if (key === "Backspace" && arreglo.length > 0) {
        arreglo.pop();
        return;
    }
    if (numeros.includes(key) && arreglo.length + 1 <= mascara.length) {
        if (mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/") {
            arreglo.push(mascara[arreglo.length], key);
            
            
        } else {
            arreglo.push(key);
        }
    }
}