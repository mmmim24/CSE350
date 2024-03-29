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
        axios.get('https://cse350-backend-production.up.railway.app/complaint/getAll')
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
                        <div className='p-5 m-5 justify text-justify rounded-lg bg-[#FAFFF3] border-2 border-[#136F63] w-[320px] h-[320px]' key={complaint.ID}>
                            <h2 className='font-bold'>Submitted by : {complaint.fullName}</h2>
                            <p className='font-semibold'>Time : {complaint.date}</p>
                            <p className='font-semibold'>Status : {complaint.status}</p>
                            <div className='my-[128px] grid'>
                                <button className='p-2 bg-[#136F63] hover:bg-[#FAFFF3] text-slate-100 rounded-lg hover:border-[1px] hover:border-[#136F63] hover:text-[#136F63]' to='/' onClick={(e)=>ViewComplaint(complaint.ID)}>Details</button>
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