import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const DropMenu = ({ user }) => {
    const handleLogout = () => {
        axios.post('http://localhost:3333/user/logout')
            .then(res => {
                console.log('Logged out');
                window.location.reload();
            })
            .catch(err => console.log(err));
    }
    return (
        <React.Fragment>
            <div className="relative group box-border">
                <h1 className="pt-[6px] text-xs sm:p-1 md:pt-0 lg:pt-0 sm:text-sm md:text-lg lg:text-xl  text-[#D70000] hover:text-[#136F63] hover:border-x-[1px] hover:border-t-[1px] hover:border-[#136F63] w-[96px] sm:w-[128px] hover:p-[9px] sm:hover:p-[11px] rounded-t-lg font-bold uppercase">
                    {user.role}
                </h1>
                <div className="absolute hidden group-hover:block bg-[#FAFFF3] p-2 rounded-b-lg shadow-md w-[96px] sm:w-[128px] border-b-[1px] border-x-[1px] border-[#D70000]">
                    <ul className="flex flex-col gap-1 sm:gap-2">
                        <li>
                            <Link className="text-[#D70000] hover:text-[#136F63]" to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link className="text-[#D70000] hover:text-[#136F63]" to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link className="text-[#D70000] hover:text-[#136F63]" to="/" onClick={handleLogout}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DropMenu