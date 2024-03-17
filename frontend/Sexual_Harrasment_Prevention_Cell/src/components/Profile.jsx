import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user,setUser] = React.useState({});
    const navigate = useNavigate();
    React.useEffect(()=>{
        axios.post('http://localhost:3333/user/dashboard')
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
        <main className='flex flex-col gap-4 min-h-[60vh]'>
            <h1 className='text-4xl'>Profile</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <h1 className='text-2xl'>Name:</h1>
                    <h1 className='text-2xl'>{user.name}</h1>
                </div>
                <div className='flex gap-4'>
                    <h1 className='text-2xl'>Email:</h1>
                    <h1 className='text-2xl'>
                        <a href='mailto:mustaqmujahidmim@gmail.com'>{user.user}</a>
                    </h1>
                </div>
            </div>
        </main>
    </React.Fragment>
  )
}

export default Profile