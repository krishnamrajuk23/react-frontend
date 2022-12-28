import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Book() {
  const { id } = useParams();
  return <h4> Book {id}</h4>;
}
