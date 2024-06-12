import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Filmes from './Pages/Filmes.jsx'
import Contato from './Pages/Contato.jsx'
import Sobre from './Pages/Sobre.jsx'
import PageNoteFound from './Pages/PageNoteFoud.jsx'
import Home from './Pages/Home.jsx'
import DetalhesFilme from './Pages/DetalhesFIlme.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children:[
        {index: true, element:<Home/>},
        {path: "filmes", element:<Filmes/>},
        {path: "sobre", element:<Sobre/>},
        {path: "contato", element:<Contato/>},
        {path: "filmes/:id", element:<DetalhesFilme/>},
        {path: "*", element:<PageNoteFound/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
