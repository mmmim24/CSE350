import React from 'react'
import notFound from '/404-page-animation-example.gif';

const Error = () => {
  return (
    <React.Fragment>
        <div className='m-5 p-5 rounded-xl'>
            <img src={notFound} alt="404" />
        </div>
    </React.Fragment>
  )
}

export default Error