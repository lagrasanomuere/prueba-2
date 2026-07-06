const mensajes = document.getElementById("mensajes");

const input = document.getElementById("mensaje");

const boton = document.getElementById("btnEnviar");

function enviar(){

    if(input.value.trim()=="") return;

    mensajes.innerHTML += `
        <div class="msg">
            <span class="user">Tú:</span>
            ${input.value}
        </div>
    `;

    mensajes.scrollTop = mensajes.scrollHeight;

    input.value="";
}

boton.onclick = enviar;

input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        enviar();

    }

});
