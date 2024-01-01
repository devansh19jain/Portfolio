import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Achievement } from './components/Achievement';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Achievement/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
