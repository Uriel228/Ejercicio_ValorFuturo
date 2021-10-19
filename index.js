function calcularvf(){
var VP = document.getElementById("VP").value //Valor presente
var VF = document.getElementById("VF").value //Valor futuro
var I = document.getElementById("I").value //Intereses
var N = document.getElementById("N").value //Numero de periodos
let total = parseFloat(VP) *     Math.pow( 1 + parseFloat(I)/100, parseFloat(N));
total = total.toFixed(2)
document.getElementById("resultadovf").value = total;
}