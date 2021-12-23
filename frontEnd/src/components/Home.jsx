import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  console.log(props);
  return (
    <div className='homePage'>
      <div className='homeDiv'>
        <h2>Welcome to my second project!</h2>
        <h3>This is a website for a solo property manager, or a multihome renter.</h3>
        {/* <button><Link to='https://github.com/JJVenable/PropertyManagement'>Go to GitHub Repo</Link></button> */}
      </div>
    </div>
  )
}

export default Home;

