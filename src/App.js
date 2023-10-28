import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <AllTheBooks />
      <Footer />
    </>
  );
}

export default App;
