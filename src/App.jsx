import { Box } from '@mui/material'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import { ExerciseDetail, Home } from './pages'
import { Footer, Navbar } from './components'



export const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto" >

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>

      <Footer />

    </Box>
  )
}

