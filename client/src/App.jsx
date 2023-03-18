import { Router } from 'react-router'
import { Landing } from './components/Landing/Landing'
import { NavBar } from './components/NavBar/NavBar'
import {Route, Routes, Link} from 'react-router-dom'


function App() {


  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
    
    </Routes>
    </>
  )
}

export default App
