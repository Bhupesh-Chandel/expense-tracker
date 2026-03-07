import React from 'react'
import {BrowserRouter as Router , Routes , Route , Navigate} from "react-router-dom"
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import Home from './Dashboard/Home';
import Income from './Dashboard/Income';
import Expense from './Dashboard/Expense';

function App() {
  return (
    <>
      <Router>
         <Routes>
           <Route path='/' element={<Root/>}/>
           <Route path='/login' exact element={<Login/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/dashboard' element={<Home/>}/>
           <Route path='/income' element={<Income/>}/>
           <Route path='/expense' element={<Expense/>}/>
         </Routes>
      </Router>
    </>
  )
}

export default App




const Root = () => {
  const isAuthenticated =  !!localStorage.getItem("token");
  return isAuthenticated ? (<Navigate to="/dashboard"/>) : (<Navigate to="/login"/>) ;
}