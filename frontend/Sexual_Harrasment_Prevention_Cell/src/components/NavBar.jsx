import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import DropMenu from './DropMenu';

const NavBar = () => {
    const [user, setUser] = React.useState({});
    const navigate = useNavigate();
    React.useEffect(() => {
        axios.post('http://localhost:3333/user/dashboard')
            .then(res => {
                if (res.data.valid === true) {
                    setUser(res.data);
                    console.log('Welcome to Dashboard');
                }
                else {
                    console.log('You are not logged in');
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <React.Fragment>
            <ul className="flex gap-2 justify-between sm:gap-1 md:gap-2 lg:gap-4">
                <li>
                    <Link className="p-1 text-sm text-black rounded-lg hover:text-[#136F63] hover:border hover:border-[#136F63] sm:p-1 md:p-2 lg:p-3 sm:text-sm md:text-lg lg:text-xl sm:hover:p-1 md:hover:p-2 lg:hover:p-[11px]" to="/">Home</Link>
                </li>
                <li>
                    <Link className="p-1 text-sm text-black rounded-lg hover:text-[#136F63] hover:border hover:border-[#136F63] sm:p-1 md:p-2 lg:p-3 sm:text-sm md:text-lg lg:text-xl sm:hover:p-1 md:hover:p-2 lg:hover:p-[11px]" to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link className="p-1 text-sm text-black rounded-lg hover:text-[#136F63] hover:border hover:border-[#136F63] sm:p-1 md:p-2 lg:p-3 sm:text-sm md:text-lg lg:text-xl sm:hover:p-1 md:hover:p-2 lg:hover:p-[11px]" to="/about">About</Link>
                </li>
                <li>
                    {user.valid ? (
                        <DropMenu user={user} />
                    ) : (
                        <Link className="p-1 text-sm bg-[#D70000] text-white rounded-lg hover:text-[#D70000] hover:bg-[#FAFFF3] hover:border hover:border-[#D70000] sm:p-1 md:p-2 lg:p-3 sm:text-sm md:text-lg lg:text-xl sm:hover:p-1 md:hover:p-2 lg:hover:p-3" to="/login">Login</Link>
                    )}
                </li>
            </ul>

        </React.Fragment>
    )
}

export default NavBar