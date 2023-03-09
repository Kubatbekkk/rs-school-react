import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import Error from './pages/Error';

type AppState = Readonly<{ count: number }>;

class App extends React.Component<unknown, AppState> {
  render() {
    return (
      <BrowserRouter>
        <Header />
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
