let nombre, apellido, usuario, email, address, country

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerData()
})

function LeerData() {
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    usuario = document.getElementById('username').value
    email = document.getElementById('email').value
    address = document.getElementById('address').value
    country = document.getElementById('country').value

    GuardarLocalStorage(nombre, apellido, email, address, country)

}

function GuardarLocalStorage() {
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('Apellido', apellido)
    localStorage.setItem('Usuario', usuario)
    localStorage.setItem('Email', email)
    localStorage.setItem('Address', address)
    localStorage.setItem('Country', country)

}

function ExtraerLocalStorage() {
    let nom = localStorage.getItem('Nombre')
     alert('Bienvenido')
    let nom = localStorage.getItem('Apellido')
    let nom = localStorage.getItem('Usuario')
    let nom = localStorage.getItem('Email')
    let nom = localStorage.getItem('Address')
    let nom = localStorage.getItem('Country')
    
}

