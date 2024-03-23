import React from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import DropMenu from './DropMenu';

const NavBar = () => {
    const [user,setUser] = React.useState({});
    const navigate = useNavigate();
    React.useEffect(()=>{
        axios.post('https://cse350-backend-production.up.railway.app/user/dashboard')
            .then(res=>{
                if(res.data.valid===true){
                    setUser(res.data);
                    console.log('Welcome to Dashboard');
                }
                else{
                    console.log('You are not logged in');
                    navigate('/');
                }
            })
            .catch(err=>console.log(err));
    },[]);
    return (
        <React.Fragment>
            <ul className='flex lg:gap-4 sm:gap-1 md:gap-2 pl-[10%] place-items-center '>
                <li><Link className='lg:p-3 sm:p-1 md:p-2 lg:text-xl sm:text-sm md:text-lg text-black hover:text-[#136F63] hover:border-[1px] hover:border-[#136F63] sm:hover:p-1 md:hover:p-2 lg:hover:p-3 rounded-lg' to='/'>Home</Link></li>
                <li><Link className='lg:p-3 sm:p-1 md:p-2 lg:text-xl sm:text-sm md:text-lg text-black hover:text-[#136F63] hover:border-[1px] hover:border-[#136F63] sm:hover:p-1 md:hover:p-2 lg:hover:p-3 rounded-lg' to='/faq'>FAQ</Link></li>
                <li><Link className='lg:p-3 sm:p-1 md:p-2 lg:text-xl sm:text-sm md:text-lg text-black hover:text-[#136F63] hover:border-[1px] hover:border-[#136F63] sm:hover:p-1 md:hover:p-2 lg:hover:p-3 rounded-lg' to='/about'>About</Link></li>
                <li>
                    {
                        user.valid
                        ? <DropMenu user={user}/>
                        : <Link className='bg-[#D70000] text-white hover:text-[#D70000] hover:border-red-[#D70000] mr-[32px] lg:p-3 sm:p-1 md:p-2 lg:text-xl sm:text-sm md:text-lg hover:bg-[#FAFFF3] sm:hover:p-1 md:hover:p-2 lg:hover:p-3 border-[1px] border-[#D70000] rounded-lg' to='/login'>Login </Link>
                    }
                </li>
            </ul>
        </React.Fragment>
    )
}

export default NavBar