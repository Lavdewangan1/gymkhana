import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GuidePage from './pages/GuidePage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import { ThemeContext } from './context/theme';
import PageNotFound from './components/PageNotFound';
import SchedulePage from './pages/SchedulePage';

function App() {
  const { theme, navHeight } = useContext(ThemeContext);
  return (
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
        <Route path='/GuidePage' element={<GuidePage />} />
        <Route path='/SchedulePage' element={<SchedulePage />} />
        <Route path='/AddExercisePage' element={<AddExercisePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
