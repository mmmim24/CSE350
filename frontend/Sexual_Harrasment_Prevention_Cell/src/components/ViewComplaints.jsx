import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const ViewComplaints = () => {
    const [complaints,setComplaints] = React.useState([]);
    const navigate = useNavigate();

    const ViewComplaint = (ID) =>{
        navigate(`/complaint/${ID}`);
    }    
    React.useEffect(()=>{
        axios.get('http://localhost:3333/complaint/getAll')
            .then(res=>{
                // console.log(res.data);
                setComplaints(res.data);
            })
            .catch(err=>console.log(err));
    },[]);
  return (
    <React.Fragment>
        <main>
            <h1 className='text-3xl font-bold py-[50px]'>Complaints</h1>
            <div className='grid grid-cols-3'>
                {complaints.map(complaint=>{
                    return (
                        <div className='p-5 m-5 justify text-justify rounded-lg bg-blue-300 border-2 border-indigo-500 w-[320px] h-[320px]' key={complaint.ID}>
                            <h2 className='font-bold'>Submitted by : {complaint.fullName}</h2>
                            <p className='font-semibold'>Time : {complaint.date}</p>
                            <p className='font-semibold'>Status : {complaint.status}</p>
                            <div className='my-[128px] grid'>
                                <button className=' bg-indigo-700 hover:bg-slate-100 text-slate-100 hover:text-indigo-700' to='/' onClick={(e)=>ViewComplaint(complaint.ID)}>Details</button>
                            </div>
                        </div>
                    )})
                }
            </div>
        </main>    
    </React.Fragment>
  )
}

export default ViewComplaints