import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { PublicRoutes } from './models'
import { Products } from './pages/Products'
import { Header } from './components/header'
import { AboutMe } from './pages/aboutMe'

function App() {

  return (
    <>    
      <BrowserRouter>
        < Header />
          <Routes>
          {/* public Routes */}
            <Route path='/' element={<Navigate to={PublicRoutes.ABOUTME} />}/>
            <Route path={PublicRoutes.ABOUTME} element={<AboutMe />} />
            <Route path={PublicRoutes.PRODUCTS} element={<Products />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App