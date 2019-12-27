var contador = 0;

function AumentarContador(){
    document.getElementById("valor").innerHTML = contador++;
}

function ActivarLogin(){
    document.getElementById("ventana").style.display="block";
}

function CerrarLogin(){
    document.getElementById("ventana").style.display="none";
}
