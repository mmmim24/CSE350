import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
    const [user,setUser] = React.useState({});
    const navigate = useNavigate();
    const handleLogout = () =>{
        axios.post('http://localhost:3333/logout')
        .then(res=>{
            console.log('Logged out');
            navigate('/');
            // window.location.reload();
        })
        .catch(err=>console.log(err));
    }
React.useEffect(()=>{
    axios.post('http://localhost:3333/dashboard')
        .then(res=>{
            console.log(res.data)
            if(res.data.valid===true){
                setUser(res.data);
                console.log('Welcome to Dashboard');
                return;
            }
            else{
                console.log('You are not logged in');
            }
        })
        .catch(err=>console.log(err));
    },[]);
  return (
    <React.Fragment>
        <div className="dashboard">
          <h1>Welcome to Dashboard <b>{user.name}</b></h1>
          <div>
            {user.valid&&<button onClick={handleLogout} className='text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Logout</button>}
          </div>
        </div>    
    </React.Fragment>
  )
}

export default Dashboard

