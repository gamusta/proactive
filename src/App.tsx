import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Clients />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
