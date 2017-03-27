function mostrar(){
  var texto = document.getElementById("textoEscrito").value;
  document.getElementById("previoTexto").innerHTML = texto;
};
function grande(){
  document.getElementById("previoTexto").style.fontSize = "40px";
};
function mediano(){
  document.getElementById("previoTexto").style.fontSize = "30px";
};
function chico(){
  document.getElementById("previoTexto").style.fontSize = "15px";
};
function colorTexto(){
  document.getElementById("previoTexto").style = "#B90852";
};
function colorFondo(){
  document.getElementById("previoTexto").style.bacgroundColor = "#08B9A7";
};
function alinearDerecha(){
  document.getElementById("previoTexto").style.textAlign = "right";
};
function alinearCentro(){
  document.getElementById("previoTexto").style.textAlign = "center";
};
function alinearIzquierda(){
  document.getElementById("previoTexto").style.textAlign = "left";
};
