import './App.scss';
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
import history from './books/history.json'
import fantasy from './books/fantasy.json'
import horror from './books/horror.json'
import romance from './books/romance.json'
import scifi from './books/scifi.json'
import GenreContext from './contexts/genre';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [dark, setDark] = useState(false)

  const BooksByGenre = {
    history,
    fantasy,
    horror,
    romance,
    scifi,
  }

  return (
    <div className={cn(dark && 'dark-mode')}>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <BrowserRouter>
          <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <GenreContext.Provider value={{ BooksByGenre }}>
            <Welcome />
            <Routes>
              <Route path='/' element={<AllTheBooks searchQuery={searchQuery} />} />
              <Route path='/details/:asin' element={<BookDetails />} />
              <Route path='/404' element={<NotFound />} />
            </Routes>
            <Footer />
          </GenreContext.Provider>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}