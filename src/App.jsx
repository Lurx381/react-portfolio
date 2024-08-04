// App.jsx
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';
import Documents from './components/Documents';
import Education from './components/Education';

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/documents' && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Education />
            <MyWork />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </div>
  );
};

export default App;
