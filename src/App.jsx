import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Forms from './pages/Forms'
import FormBuilders from './pages/FormBuilders'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<FormBuilders />} />
        <Route path='/form' element={<Forms />} />
        {/* <Route exact path='/form-builder' component={FormBuilder} /> */}
      </Routes>
    </BrowserRouter>



  )
}

export default App