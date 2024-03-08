import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
        <div className="home">
          <Link className='text-3xl bg-yellow-500 hover:bg-orange-500 text-black hover:text-black font-bold py-3 px-5 rounded-xl' to='/login'>Login </Link>
        </div>    
    </React.Fragment>
  )
}

export default Home
