import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
     <h1>Welcome to our store!</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqua.</p>
      <button className='btn'><Link to="/thank-you">Place Order</Link></button>
    </div>
  );
}

export default Home;
