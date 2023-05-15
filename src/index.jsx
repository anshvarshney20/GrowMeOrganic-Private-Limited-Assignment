import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Component2 from './Components/Component2';
import DepartmentList from './Components/DepartmentList';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/task2' element={<Component2 />} />
          <Route path='/task3' element={<DepartmentList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
