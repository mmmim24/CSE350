import React from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const Header = () => {
  const [user,setUser] = React.useState({});
  const navigate = useNavigate();
  React.useEffect(()=>{
    axios.post('http://localhost:3333/user/dashboard')
        .then(res=>{
            if(res.data.valid===true){
                setUser(res.data);
                // console.log('Welcome to Dashboard');
                return;
            }
            else{
                // console.log('You are not logged in');
                navigate('/');
            }
        })
        .catch(err=>console.log(err));
    },[]);
    const handleLogout = () =>{
      axios.post('http://localhost:3333/user/logout')
      .then(res=>{
          console.log('Logged out');
          // navigate('/');
          window.location.reload();
      })
      .catch(err=>console.log(err));
  }
  return (
    <React.Fragment>
        <div className="flex gap-20 align-center mt-[32px] mb-[64px]">
            <h1 className='mt-5'>Sexual Harrasment Prevention Cell</h1>
            {
              (user.valid===true)
                ? <Link onClick={handleLogout} className='text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 my-6 rounded-xl' to='/'>Logout</Link>
                : <Link className='text-xl bg-yellow-500 hover:bg-orange-500 text-black hover:text-black font-bold py-3 px-5 my-6 rounded-xl' to='/login'>Login </Link>
            }
        </div>
    </React.Fragment>
  )
}

export default Header
