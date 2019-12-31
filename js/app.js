var contador = 0;

function AumentarContador(){
    document.getElementById("valor").innerHTML ++;
}

function logear(){
    var usuario = $("#user").val();
    var checkbox = document.getElementById("acepta").checked;

    if(!checkbox){
        alert("Tiene que aceptar terminos y condiciones.")
    }
    
    else if(puedeLogear(usuario)){
        alert("Bienvenido señore " + usuario);
    }
    
    else{
        alert("Uno de los datos ingresados estan mal, reviselo y ingrese nuevamente")
    }

}

function puedeLogear(usuario){

    var contraseña = $("#password").val();

    if(usuario == "" || contraseña == "" ){
        return false;
    }

    else{
        return true;
    }
}


function terminosYCondiciones(){
    alert("Su vida pasará a ser nuestra")
}