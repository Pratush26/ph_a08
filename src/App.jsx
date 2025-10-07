
import { Outlet } from 'react-router'
import './App.css'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
