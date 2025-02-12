import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import AboutUs from './routes/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about-us" Component={AboutUs} />
        </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
