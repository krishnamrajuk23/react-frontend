import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Book from './Book';
import BookLayout from './BookLayout';
import BookList from './BookList';
import NewBook from './NewBook';

export default function BookRoutes() {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}
