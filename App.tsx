import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Book from './Book';
import BookLayout from './BookLayout';
import BookList from './BookList';
import Details from './Details';
import Home from './Home';
import NewBook from './NewBook';
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
          <Route path="/books" element={<BookLayout />}>
            <Route index element={<BookList />} />
            <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
          </Route>
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
