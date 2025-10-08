
import { Outlet } from 'react-router'
import './App.css'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <ToastContainer theme='dark' />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
