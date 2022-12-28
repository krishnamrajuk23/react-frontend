import * as React from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';

export default function Book() {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <h4>
      {' '}
      Book {id} {obj.key}
    </h4>
  );
}
