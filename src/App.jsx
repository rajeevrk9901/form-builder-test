import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Forms from './pages/Forms'
import FormBuilders from './pages/FormBuilders'
import Experience from './components/Experience'
import ContactUs from './components/ContactUs'
import BasicInfo from './components/BasicInfo'
import Address from './components/Address'
import BasicForm from './components/BasicForm'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<FormBuilders />} />
        <Route path='/form' element={<Forms />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/basicinfo' element={<BasicInfo />} />
        <Route path='/address' element={<Address />} />
        <Route path='/basicform' element={<BasicForm />} />
        {/* <Route exact path='/form-builder' component={FormBuilder} /> */}
      </Routes>
    </BrowserRouter>



  )
}

export default App