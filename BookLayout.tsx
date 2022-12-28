import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function BookLayout() {
  return (
    <React.Fragment>
      <Link to="/books/1"> Book 1 </Link>
      <Link to="/books/2"> Book 2 </Link>
      <Link to="/books/New"> New Book </Link>
      <Outlet context={{key:'selected'}} />
    </React.Fragment>
  );
}
