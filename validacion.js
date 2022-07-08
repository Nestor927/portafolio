const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:nesstor.927@outlook.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}

/* //Haz tú validación en javascript acá
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
})  */