import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = React.useState();
    const [user,setUser] = React.useState({});
    const [password,setPassword] = React.useState();
    React.useEffect(()=>{
        axios.post('https://cse350-backend-production.up.railway.app/user/dashboard')
        .then(res=>{
                if(res.data.valid===true){
                    setUser(res.data);
                    navigate('/dashboard');
                    return;
                }
                // else{
                //     navigate('/');
                // }
            })
            .catch(err=>console.log(err));
    },[]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(email&&password){
            axios.post('https://cse350-backend-production.up.railway.app/user/login',{email,password})
                .then(res=>{
                    if(res.data.valid===true){
                        navigate('/');
                        window.location.reload();
                    }else{
                        alert('Invalid username and password');
                    }
                }
                )
                .catch(err=>console.log(err));
        } 
    }

  return (
    <React.Fragment>
        <div className='m-5 p-5 h-[60vh]'>
            <div >
                <h3 className='text-[40px] m-5 p-5'>Log In</h3>

                <form action='post' onSubmit={handleSubmit}>
                    <div className='m-3 p-3'>
                        <label className='p-3' htmlFor='email'>Email</label>
                        <input  className='px-2 rounded-md border-2 border-gray-400 bg-gray-200'
                                name='email' 
                                type='email' 
                                placeholder='Enter Email' 
                                onChange={(e)=>{setEmail(e.target.value)}} 
                                required/> 
                    </div>
                    <div className='m-3 p-3'>
                        <label className='p-3' htmlFor='password'>Password</label>
                        <input  className='px-2 rounded-md border-2 border-gray-400 bg-gray-200'
                                name='password' 
                                type='password' 
                                placeholder='Enter Password' 
                                onChange={(e)=>{setPassword(e.target.value)}}
                                required/> 
                    </div>
                    <button className='p-3 bg-[#136F63] text-white hover:bg-white hover:text-[#136F63] text-xl py-2 px-4 rounded-lg' type='submit'>Login</button>
                </form>

            </div>
        </div>
    </React.Fragment>
  )
}

export default Login;