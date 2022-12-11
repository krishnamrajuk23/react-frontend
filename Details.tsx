import { useParams } from 'react-router-dom';
import * as React from 'react';

const Details = () => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
