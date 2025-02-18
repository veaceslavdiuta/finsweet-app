import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import Features from './routes/Features';
import Pricing from './routes/Pricing';
import Portfolio from './routes/Portfolio';
import Blog from './routes/Blog';
import ReadCase from './routes/ReadCase';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/features" Component={Features} />
        <Route path="/pricing" Component={Pricing} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/blog" Component={Blog} />
        <Route path="/read-case/:id" Component={ReadCase} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
