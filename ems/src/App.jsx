import './App.css'
import DeleteEmployeeComponent from './assets/components/DeleteemployeeComponent'
import EmployeeComponent from './assets/components/EmployeeComponent'
import FooterComponent from './assets/components/FooterComponent'
import HeaderComponent from './assets/components/HeaderComponent'
import ListEmployeeComponent from './assets/components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpComponent from './assets/components/SignUpComponent'
import LoginComponent from './assets/components/LoginComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path='/' element={<ListEmployeeComponent/>} />
          <Route path='/employees' element={<ListEmployeeComponent/>} />
          <Route path='/addEmployee' element={<EmployeeComponent/>}/>
          <Route path='/removeEmployee' element={<DeleteEmployeeComponent/>}/>
          <Route path='/signup' element={<SignUpComponent/>}/>
          <Route path='/login' element={<LoginComponent/>}/>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
