import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://62ff94ea9350a1e548e1fe37.mockapi.io/items/' + id);
        setPizza(data);
      } catch (e) {
        console.warn(e);
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Loading...';
  }

  return (
    <div className={'container'}>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} p</h4>
    </div>
  );
};

export default FullPizza;
