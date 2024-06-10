import React, { Suspense, useContext } from 'react';
import './assets/fonts.css'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ThemeContext } from './context/theme';
import PageNotFound from './components/PageNotFound';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const { theme, navHeight } = useContext(ThemeContext);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className='overflow-x-hidden'
        style={{
          backgroundColor: theme.background,
          color: theme.color,
          button: theme.button,
          link: theme.link,
          paddingTop: navHeight,
        }}
      >
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Trainers' element={<Trainers />} />
          <Route path='/Membership' element={<Membership />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
