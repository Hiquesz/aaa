import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/contato'
import NotFound from './pages/404'
import Contato from './pages/sobre'
import Tarefas from './pages/tarefas'

const router = createBrowserRouter ([
  {path: '/', element: <Home />, errorElement: <NotFound/>},
  {path: '/contato', element: <Contato type={'button'} />},
  {path: '/sobre', element: <Sobre />},
  {path: '/tarefas', element: <Tarefas />}
])

export default router