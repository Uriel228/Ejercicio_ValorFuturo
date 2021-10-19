let VP = document.getElementById("VP"); //Valor presente
let VF = document.getElementById("VF"); //Valor futuro
let I = document.getElementById("I"); //Intereses
let N = document.getElementById("N"); //Numero de periodos

function valorFuturo(VP, I, N){
    let subtotal = VP * (1 + I)
    let total = Math.pow(subtotal, N)
    return total
}