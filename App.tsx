import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import SearchParams from './SearchParams';
import './style.css';
import Details from './Details';
import BookRoutes from './BookRoutes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <nav>
          <Link to="/"> Home </Link>
          <br />
          <Link to="/books"> Books </Link>
        </nav>
        {/* Routing practise*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/*" element={<BookRoutes />} />
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
