
//tipos de funciones y back tilde
const formulario = document.getElementById("formulario")
const miFieldSet = (legend, txt1, txt2) => {
    return `
    <legend>${legend}</legend>
    <label for="user">${txt1}</label>
    <input type="text" id="user" name="user">
    <label for="correo">${txt2}</label>
    <input type="text" id="correo" name="correo"> 
    `
}

formulario.innerHTML = miFieldSet