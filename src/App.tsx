import Footer from './components/Footer';
import Header from './components/Header';
import logo from './logo.svg';
import AboutUs from './pages/AboutUs';
import OurJobs from './pages/OurJobs';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Header/>
      <div className={`container`}>
        <AboutUs/>
        <OurJobs/>
        <Skills/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
