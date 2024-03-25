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
        <div className='min-h-[70vh] my-[32px] py-[96px]'>
            <div className='bg-[#92817A] bg-opacity-60 rounded-3xl p-[40px]'>
                <h3 className='text-[40px]'>Log In</h3>

                <form action='post' onSubmit={handleSubmit}>
                    <div className='flex justify-between m-3 p-3'>
                        <label className='py-1' htmlFor='email'>Email</label>
                        <input  className=' text-center rounded-md bg-[#FBFFF6]'
                                name='email' 
                                type='email' 
                                placeholder='Enter Email' 
                                onChange={(e)=>{setEmail(e.target.value)}} 
                                required/> 
                    </div>
                    <div className='flex justify-between m-3 p-3'>
                        <label className='py-1' htmlFor='password'>Password</label>
                        <input  className=' text-center rounded-md bg-[#FBFFF6]'
                                name='password' 
                                type='password' 
                                placeholder='Enter Password' 
                                onChange={(e)=>{setPassword(e.target.value)}}
                                required/> 
                    </div>
                    <button className='bg-[#136F63] text-white hover:bg-[#FAFFF3] hover:border-[1px] hover:border-[#136F63] hover:text-[#136F63] hover:py-[7px] text-xl py-2 px-4 rounded-lg' type='submit'>Login</button>
                    <p className='text-[#D70000] mt-4'>Please Contact The Registrar Building if you have no account</p>
                </form>

            </div>
        </div>
    </React.Fragment>
  )
}

export default Login;