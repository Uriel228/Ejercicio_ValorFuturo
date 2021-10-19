function calcularvf(){
var VP = document.getElementById("VP").value //Valor presente
var VF = document.getElementById("VF").value //Valor futuro
var I = document.getElementById("I").value //Intereses
var N = document.getElementById("N").value //Numero de periodos
let total = parseFloat(VP) * Math.pow( 1 + parseFloat(I)/100, parseFloat(N));
total = total.toFixed(2)
document.getElementById("resultadovf").value = total;
}
function calcularvi(){
var VP = document.getElementById("VP").value //Valor presente
var VF = document.getElementById("VF").value //Valor futuro
var I = document.getElementById("I").value //Intereses
var N = document.getElementById("N").value //Numero de periodos
let total = VF / (1 + (I/100) * N )
total = Math.round(total)
document.getElementById("resultadovi").value = total;
}
function calculari(){
    var VP = document.getElementById("VP").value //Valor presente
    var VF = document.getElementById("VF").value //Valor futuro
    var I = document.getElementById("I").value //Intereses
    var N = document.getElementById("N").value //Numero de periodos
    let total = (Math.pow(VF / VP, 1/N ) - 1)*100
    total = Math.round(total)
    document.getElementById("resultadoi").value = total
}
function calcularn(){
    var VP = document.getElementById("VP").value //Valor presente
    var VF = document.getElementById("VF").value //Valor futuro
    var I = document.getElementById("I").value //Intereses
    var N = document.getElementById("N").value //Numero de periodos
    let total = (Math.log(VF/VP)/Math.log(1+I/100))
    total = Math.round(total)
    document.getElementById("resultadon").value = total
}