import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
   return (
    <div className="w-[100%] overflow-x-hidden px-[2rem]">
      <Header />
      <Hero />
      <Courses />
      <Prices />
      <Contact />      
      <Footer />
    </div>
  )
}

export default App;
