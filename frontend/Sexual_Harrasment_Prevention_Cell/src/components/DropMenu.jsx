import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const DropMenu = ({user}) => {
    const handleLogout = () =>{
        axios.post('https://cse350-backend-production.up.railway.app/user/logout')
            .then(res=>{
                console.log('Logged out');
                window.location.reload();
        })
            .catch(err=>console.log(err));
    }
  return (
    <React.Fragment>
        <div className="relative group">
                <h1 className='p-4 text-xl text-[#D70000] hover:text-[#136F63] hover:border-x-[1px] hover:border-t-[1px] hover:border-[#136F63] w-[128px] hover:p-4 rounded-t-lg font-bold uppercase'> {user.role}</h1>
                <div className='absolute hidden group-hover:block bg-[#FAFFF3] p-2 rounded-b-lg shadow-md w-[128px] border-b-[1px] border-x-[1px] border-[#D70000]'>
                    <ul className='flex flex-col gap-2'>
                        <li><Link className='text-[#D70000] hover:text-[#136F63]' to='/profile'>Profile</Link></li>
                        <li><Link className='text-[#D70000] hover:text-[#136F63]' to='/dashboard'>Dashboard</Link></li>
                        <li><Link className='text-[#D70000] hover:text-[#136F63]' to='/' onClick={handleLogout}>Logout</Link></li>
                    </ul>
                </div>
            </div>
    </React.Fragment>
  )
}

export default DropMenu