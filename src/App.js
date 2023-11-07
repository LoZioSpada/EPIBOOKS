import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import AllTheBooks from './components/AllTheBooks';
import { useState } from 'react';
import ThemeContext from './contexts/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState("light")

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`${theme} App`}>
          <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Welcome />
          <Routes>
            <Route path='/' element={<AllTheBooks searchQuery={searchQuery} />} />
            <Route path='/details/:asin' element={<BookDetails />}/>
            <Route path='*' element={<NotFound />}/>         
          </Routes>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}