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
            <ul className='flex gap-4 mx-[32px] place-items-center'>
                <li><Link className='p-4 text-xl text-black hover:text-indigo-600 hover:bg-white hover:p-4 rounded-lg' to='/'>Home</Link></li>
                <li><Link className='p-4 text-xl text-black hover:text-indigo-600 hover:bg-white hover:p-4 rounded-lg' to='/faq'>FAQ</Link></li>
                <li><Link className='p-4 text-xl text-black hover:text-indigo-600 hover:bg-white hover:p-4 rounded-lg' to='/about'>About</Link></li>
                <li>
                    {
                        user.valid
                        ? <DropMenu user={user}/>
                        : <Link className='p-4 text-xl hover:bg-white hover:p-4 rounded-lg' to='/login'>Login </Link>
                    }
                </li>
            </ul>
        </React.Fragment>
    )
}

export default NavBar