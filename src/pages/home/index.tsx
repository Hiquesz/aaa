import { Link, useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    return (
        <>
        <h1>Home</h1>
        <p>Desenvolvimento web e desktop com de um simulador de RPG de mesa</p>
        <Link to='sobre'>Ir para Sobre</Link>
        <h2 onClick={() => {
            navigate('/contato')
        }}></h2>
        <Link to='contato'>Ir para Contato</Link> <p></p>
        <Link to='tarefas'>Ir para Tarefas</Link>

        </>
    )
}

export default Home