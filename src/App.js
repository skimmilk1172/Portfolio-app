import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutMe />
    <Projects />
    </>
  );
}

export default App;
