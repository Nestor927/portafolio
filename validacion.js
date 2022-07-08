//Haz tú validación en javascript acá
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const asunto = document.getElementById("asunto")


const form = document.getElementById("form")
const parrafo = document.getElementById( "warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length < 4){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }

    if(asunto.value.length < 4){
        warnings += 'El asunto no es valido <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
}) 