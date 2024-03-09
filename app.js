const nombre = document.getElementById("cliente-nombre")
const apellido = document.getElementById("cliente-apellido")
const correo = document.getElementById("cliente-correo")
const scroll = document.getElementById("scroll")
const parrafo = document.getElementById("")

scroll.addEventListener("submit", e=>{
    if (nombre.value.lenght=0 ){
            alert("No haz colocado tu nombre")
    }

})
