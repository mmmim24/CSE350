import React from 'react'
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import ViewComplaints from './ViewComplaints';

const Dashboard = () => {
    const [user,setUser] = React.useState({});
    const [ID,setID] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(ID){
            console.log(ID);
        } 
    }
    React.useEffect(()=>{
        axios.post('http://localhost:3333/user/dashboard')
            .then(res=>{
                if(res.data.valid===true){
                    setUser(res.data);
                    console.log('Welcome to Dashboard');
                    return;
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
        <div className="dashboard my-[32px]">
          <h1 className='text-[40px]'>Welcome <b>{user.name}</b></h1>
          <div className='m-5 p-5 '>
            {
              (user.role==="admin")
                ? <ViewComplaints />
                : <div>
                    <div className='mt-[32px]'>
                        <h1 className='text-[32px]'>Track your application</h1>
                        <form action='post' onSubmit={handleSubmit}>
                            <div className='m-[32px]'>
                                <label className='p-3' htmlFor='ComplaintID'>ComplaintID</label>
                                <input  className='px-2 rounded-md border-2 border-gray-400 bg-gray-200'
                                        name='ComplaintID' 
                                        type='ComplaintID' 
                                        placeholder='Enter ComplaintID' 
                                        onChange={(e)=>{setID(e.target.value)}} 
                                        required/>
                            </div>
                            <button className='text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 my-6 rounded-xl' type='submit'>Track</button>
                        </form>
                    </div>
                    <div className='mt-[32px]'>
                        <h1 className='text-[32px]'>Submit a complaintform</h1>
                        <div className='mt-[32px]'>
                            <Link className='text-xl bg-yellow-500 hover:bg-orange-500 text-black hover:text-black font-bold py-3 px-5 my-6 rounded-xl' to='/complaintform'>Submit</Link>
                        </div>
                    </div>
                </div>
            }
          </div>
        </div>    
    </React.Fragment>
  )
}

export default Dashboard

