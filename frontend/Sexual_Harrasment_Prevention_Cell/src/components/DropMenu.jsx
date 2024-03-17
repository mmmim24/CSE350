import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const DropMenu = ({user}) => {
    const handleLogout = () =>{
        axios.post('http://localhost:3333/user/logout')
            .then(res=>{
                console.log('Logged out');
                window.location.reload();
        })
            .catch(err=>console.log(err));
    }
  return (
    <React.Fragment>
        <div className="relative group">
                <h1 className='p-4 text-xl text-red-500 hover:text-indigo-600 hover:bg-white hover:p-4 rounded-lg font-bold uppercase'> {user.role}</h1>
                <div className='absolute hidden group-hover:block bg-white p-2 rounded-lg shadow-md'>
                    <ul className='flex flex-col gap-2'>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/' onClick={handleLogout}>Logout</Link></li>
                    </ul>
                </div>
            </div>
    </React.Fragment>
  )
}

export default DropMenu