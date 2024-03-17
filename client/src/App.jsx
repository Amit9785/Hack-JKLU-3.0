import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Labourform from './Labourform'
import FeedbackForm from "./FeedbackForm"
import Layout from './Layout'
import About from './About'
import ConsAndLab from './ConsAndLab'
import Profile from './Profile'
import ContactUs from './ContactUs'
import Supportservice from'./Supportservice'
import FeedbackForm from './FeedbackForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/labourform" element={<Labourform/>} />
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        <Route path="/About" element={<About/>} />
        <Route path="/ConsAndLab" element={<ConsAndLab/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Supportservice" element={<Supportservice/>} />
        <Route path="/FeedbackForm" element={<FeedbackForm/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
