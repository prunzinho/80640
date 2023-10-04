
//tipos de funciones y back tilde, interpolacion, Dom, uso de platinllas para crear un componente dinamico

const formulario = document.getElementById("formulario")
const miFieldSet = (legend, txt1, txt2) => {
    return `
    <legend>${legend}</legend>
    <label for=${txt1}>${txt1}</label>
    <input type="text" id=${txt1} name="user">
    <label for=${txt2}>${txt2}</label>
    <input type="text" id=${txt2} name="correo"> 
    `
}

formulario.innerHTML = miFieldSet("Informacion Personal", "Nombre", "Correo")
formulario.innerHTML += miFieldSet("Informacion Direccion", "Direccion", "Ciudad")