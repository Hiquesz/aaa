import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonFatec from './components/button-fatec/ButtonFatec.tsx'
import Form from './components/form/index.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>Olá Mundo</p>
    <ButtonFatec type='button' label='Botão 1' />
    <ButtonFatec type='button' label='Botão 2' />
    <p>Teste</p>
    <Form />
    </>
    )
}

export default App
