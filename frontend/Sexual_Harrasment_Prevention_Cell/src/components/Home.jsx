import React from 'react'
import Carousel from './Carousel';
import Brief from './Brief';
import Quote from './Quote';

const Home = () => {
  return (
    <React.Fragment>
        <Carousel/>
        <Brief/>
        <Quote/>
    </React.Fragment>
  )
}

export default Home
