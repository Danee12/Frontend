import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import MyTodo from '../Pages/MyTodo'
import YourTodo from '../Pages/YourTodo'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/mytodo" element={<MyTodo />}/>
            <Route path="/yourtodo" element={<YourTodo />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router