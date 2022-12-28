import * as React from 'react';
import { Link } from 'react-router-dom';

export default function BookList() {
  return (
    <React.Fragment>
      <Link to="/books/1"> Book 1 </Link>
      <Link to="/books/2"> Book 2 </Link>
    </React.Fragment>
  );
}
