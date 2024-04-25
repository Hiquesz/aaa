import { Link, useNavigate } from "react-router-dom"

function Sobre() {
    const navigate = useNavigate()

    return (
        <>
        <h1 onClick={() => {
            navigate('/')
        }}>Sobre</h1>
        <p>Henrique Rodrigues Moller - hiquesprckk31@gmail.com</p>
        <Link to ='/'>Voltar para Home</Link>
        </>
    )
}

export default Sobre