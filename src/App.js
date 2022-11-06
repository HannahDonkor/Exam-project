import React from 'react';
import Navbar from './components/navbar/navbar.js';
import Content from './components/content/content.js';
import { Route, Routes } from 'react-router-dom';
import Error from './pages/error/error';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Content />}/>
        <Route path='/error' element={<Error />}/>

      </Routes>
      
    </React.Fragment>
  );
}

export default App;
