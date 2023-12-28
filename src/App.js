import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Location from './pages/Location/Location';
import About from './pages/About/About';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

import './style/app.css';


function App() {

  return (
    <>
    <div className='contenair'>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
    <Footer />
    </>
  );
  
}

export default App;
