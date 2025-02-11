import React from 'react';
import './App.css';
import SettingsCog from '../../components/SettingsCog/index.tsx';
import Home from '../Home/index.tsx';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Settings from '../Settings/index.tsx';
import Search from '../Search/index.tsx';
import Main from '../Main/index.tsx';

const settingsSVG = require('../../images/svg/settings.svg').default;
const sunSvg = require('../../images/svg/sun.svg').default;

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className='header'>
          Good Morning!
          <SettingsCog imageSrc={settingsSVG} />
        </header>
        <main className='main'>
          <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/search" element={<Search />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </main>
        <footer className='footer'>
          <Link to="/">
            <img className="home_buttonSvg" src={sunSvg} alt='The sun' />
          </Link>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
