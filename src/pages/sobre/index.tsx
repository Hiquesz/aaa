import { useNavigate } from "react-router-dom";
import styles from './Form.module.css'

interface Props {
    type: 'button' | 'submit' | 'reset'
}

function Contato({}: Props ){
    const navigate = useNavigate()
    return (
        <>
        <h1 onClick={() =>{
            navigate('/')
        }}>Contato</h1>
        <form className={styles.formModule} method="get">
        Nome: <input className={styles.formContent} type="text" name="nome" /><br />
        E-mail: <input className={styles.formContent} type="email" name="email_usuario" /><br />
        Telefone: <input className={styles.formContent} type="text" name="telefone" /><br />
        <input type='submit' value="Enviar" />
      </form>
        </>
    )
}

export default Contato