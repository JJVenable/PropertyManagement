import React from 'react';
import background from "./building2.jpg";

function Home(props) {
  console.log(props);
  return (
    <div className='homePage' style={{ backgroundImage: `(${background})` }} >
      <div>
      <p1> Home/landing Page</p1>

    </div>
    </div>
  )
}

export default Home;

