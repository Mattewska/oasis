import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { PublicRoutes } from './models'
import { Products } from './pages/Products'
import { Header } from './components/header'
import { AboutMe } from './pages/aboutMe'

function App() {

  const productos = [
    {
      img: "gallinas",
      nameImg: "gallinas"
    },
    {
      img: "galpon",
      nameImg: "galpon"
    }, 
    {
      img: "patos",
      nameImg: "patos"
    },
    {
      img: "vacas",
      nameImg: "vacas"
    },
    {
      img: "piscicultura",
      nameImg: "piscicultura"
    },
  ]

  return (
    <>
      <BrowserRouter>
        < Header />
        <Routes>
          {/* public Routes */}
          <Route path='/' element={<Navigate to={PublicRoutes.ABOUTME} />} />
          <Route path={PublicRoutes.ABOUTME} element={<AboutMe />} />
          <Route path={PublicRoutes.PRODUCTS} element={<Products />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App