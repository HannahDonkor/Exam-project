import React from 'react';
import Navbar from './components/navbar/navbar.js';
import Content from './components/content/content.js';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Content />
    </React.Fragment>
  );
}

export default App;
