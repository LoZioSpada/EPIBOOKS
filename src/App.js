import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import AllTheBooks from './components/AllTheBooks';
import { useState } from 'react';
import ThemeContext from './contexts/theme';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState("light")

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`${theme} App`}>
          <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Welcome />
          <AllTheBooks searchQuery={searchQuery} />
          <Footer />
        </div>
      </ThemeContext.Provider>

    </>
  );
}