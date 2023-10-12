

function MiFieldSet(props){
    const {titulo,texto1,texto2} = props
    return (
        <>
        <fieldset>
            <legend>{titulo}</legend>
            <label htmlFor={texto1}>{texto1}</label>
            <input type="text" id={texto1}/>
            <label htmlFor={texto2}>{texto2}</label>
            <input type="text" id={texto2}/>
            
        </fieldset>
        </>
    )
}

export default MiFieldSet