import React from 'react'
import image from '/nadine-shaabana-DRzYMtae-vA-unsplash.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Brief = () => {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    axios.post('http://localhost:3333/user/dashboard')
      .then(res => {
        if (res.data.valid === true) {
          setUser(res.data);
          // console.log('Welcome to Dashboard');
        }
        else {
          // console.log('You are not logged in');
          // navigate('/');
        }
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <React.Fragment>
      <div className="bg-cover bg-center min-h-[50vh] w-full rounded-3xl sm:w-[90vw] md:w-[80vw]" style={{ backgroundImage: `url(${image})` }}>
        <div className="mx-auto text-white text-left w-full m-8 p-8 overflow-hidden sm:w-[75%] md:w-[60%] lg:w-[50%] sm:m-10 md:m-[64px] sm:p-10 md:p-[64px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Lorem Ipsum</h1>
          <p className="my-6 sm:my-8 md:my-[32px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum reprehenderit culpa. Nihil porro quae libero deleniti consequatur, qui culpa aliquam corporis quasi ducimus impedit illum laborum cum! Consectetur perspiciatis accusamus veritatis officiis, inventore repellendus reprehenderit quod doloremque enim illum placeat est earum error sunt, in libero, ducimus facilis provident.
          </p>
          {user.role === 'admin' ? (
            <Link to="/dashboard" className="brief-btn-red">View Complaints</Link>
          ) : (
            <>
              <Link to="/dashboard" className="brief-btn-red">File A Complaint</Link>
              <Link to="/dashboard" className="brief-btn-green">Check Status</Link>
            </>
          )}
        </div>
      </div>
      <div className="px-4 text-justify my-8 sm:px-[10vw] md:px-[15vw] lg:px-[20vw] sm:my-10 md:my-[64px]">
        <div className="text-xl font-bold text-center my-6 text-[#D70000] sm:text-2xl md:text-3xl">
          About Us
        </div>
        <p>
          As per the guidelines of UGC and the Supreme Court, a Sexual Harassment Prevention Cell has been established by Shahjalal University of Science and Technology to provide a healthy and congenial atmosphere to the staff and students of the University. You will find details of the guidelines and norms of the policy against sexual harassment, principles, and procedure for combating sexual harassment and the sexual harassment prevention committee in your diary written in Bangla. Also, you will find a complaint box in the ground floor of the Central Library Building.
        </p>
      </div>
    </React.Fragment>
  )
}

export default Brief