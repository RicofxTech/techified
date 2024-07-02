import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Prices from './components/Prices';


function App() {
   return (
    <div>
      <Header />
      <Hero />
      <Courses />
      <Prices />
      <p>This is the App Component</p>
    </div>
  )
};

export default App;
