import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = React.useState();
    const [password,setPassword] = React.useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(email&&password){
            axios.post('http://localhost:3333/login',{email,password})
                .then(res=>{
                    if(res.data.valid===true){
                        navigate('/dashboard');
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
        <Link className='text-3xl bg-yellow-500 hover:bg-orange-500 text-black hover:text-black font-bold py-3 px-5 rounded-xl' to='/'>Back to Home</Link>
        <div className='m-5 p-5'>
            <div >
                <h3 className='text-[40px] m-5 p-5'>Log In</h3>

                <form action='post' onSubmit={handleSubmit}>
                    <div className='m-3 p-3'>
                        <label className='p-3' htmlFor='email'>Email</label>
                        <input  className='px-2 rounded-md border-2 border-gray-400'
                                name='email' 
                                type='email' 
                                placeholder='Enter Email' 
                                onChange={(e)=>{setEmail(e.target.value)}} 
                                required/> 
                    </div>
                    <div className='m-3 p-3'>
                        <label className='p-3' htmlFor='password'>Password</label>
                        <input  className='px-2 rounded-md border-2 border-gray-400'
                                name='password' 
                                type='password' 
                                placeholder='Enter Password' 
                                onChange={(e)=>{setPassword(e.target.value)}}
                                required/> 
                    </div>
                    <button className='text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Login</button>
                </form>

            </div>
        </div>
    </React.Fragment>
  )
}

export default Login;