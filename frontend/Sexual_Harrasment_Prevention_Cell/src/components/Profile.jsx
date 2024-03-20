import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user,setUser] = React.useState({});
    const navigate = useNavigate();
    React.useEffect(()=>{
        axios.post('https://cse350-backend-production.up.railway.app/user/dashboard')
            .then(res=>{
                if(res.data.valid===true){
                    setUser(res.data);
                }
                else{
                    navigate('/');
                }
        })
            .catch(err=>console.log(err));
    },[]);
  return (
    <React.Fragment>
        <main className='flex flex-col gap-4 min-h-[70vh] my-[32px] py-[96px]'>
            <h1 className='text-4xl'>Profile</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <h1 className='text-2xl'>Name:</h1>
                    <h1 className='text-2xl'>{user.name}</h1>
                </div>
                <div className='flex gap-4'>
                    <h1 className='text-2xl'>Email:</h1>
                    <h1 className='text-2xl'>{user.email}</h1>
                </div>
            </div>
        </main>
    </React.Fragment>
  )
}

export default Profile