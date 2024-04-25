import ButtonFatec from "../button-fatec/ButtonFatec"
import InputFatec from "../input-fatec"

function Form(){
    return (
        <>
            <InputFatec type="text" defaultValue="" placeHolder="Nome" />
            <ButtonFatec type="button" label="Botao 1" />
        </>
    )
}

export default Form