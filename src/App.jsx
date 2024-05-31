import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AllBooks } from './components/AllBooks/AllBooks';
import { Banner } from './components/Banner/Banner';
import { BestBooks } from './components/BestBooks/BestBooks';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Testimonials } from './components/Testimonials/Testimonials';
import { useEffect, useState } from 'react';
import { Popup } from './components/Popup/Popup';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 100,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className='bg-white dark:bg-gray-950 dark:text-white'>
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <Routes>
          <Route path="/" element={
            <>
              <Hero handleOrderPopup={handleOrderPopup} />
              <BestBooks handleOrderPopup={handleOrderPopup} />
              <Banner />
              <AllBooks />
              <Testimonials />
            </>
          } />
          <Route path="/bestbooks" element={<BestBooks handleOrderPopup={handleOrderPopup} />} />
        </Routes>
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
}

export default App;
