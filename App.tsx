import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Book from './Book';
import BookList from './BookList';
import Details from './Details';
import Home from './Home';
import SearchParams from './SearchParams';
import './style.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/"> Home </Link>
          <br />
          <Link to="/books"> Books </Link>
        </nav>
        {/* Routing practise*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
        </Routes>

        {/* 
         <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
