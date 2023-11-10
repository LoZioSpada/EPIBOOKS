import styles from './App.scss';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import AllTheBooks from './components/AllTheBooks';
import { useState } from 'react';
import ThemeContext from './contexts/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'
import cn from 'classnames'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [dark, setDark] = useState(false)

  return (
    <div className={cn(dark && 'dark-mode')}>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <BrowserRouter>
          <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Welcome />
          <Routes>
            <Route path='/' element={<AllTheBooks searchQuery={searchQuery} />} />
            <Route path='/details/:asin' element={<BookDetails />} />
            <Route path='/404' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}