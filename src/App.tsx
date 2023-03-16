import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import Error from './pages/Error';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <h1>Testing</h1>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
