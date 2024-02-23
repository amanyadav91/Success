import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="main">
    <div className="home">
      <h1>Welcome to our store!</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqua.</p>
      <Link to="/thank-you" className='link-order'>Place an order</Link>
    </div>
    </div>
  );
}

export default Home;
