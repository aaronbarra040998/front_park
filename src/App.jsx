import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from '@/Layout/Navbar'
import Home from '@/Pages/Home'
import About from './Pages/About'

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

      </>
    </BrowserRouter>
  )
}

export default App
