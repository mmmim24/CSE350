import React from 'react';
import axios from 'axios';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const ComplaintDetails = () => {
  const complaintID = window.location.pathname.split('/').pop();
  const [user,setUser] = React.useState({});
  const [notes,setNotes] = React.useState({});
  const navigate = useNavigate();
  const [complaint, setComplaint] = React.useState({});
  const [selectedComplaintID, setSelectedComplaintID] = React.useState(null);
  const addNote = (ID) => {
    setSelectedComplaintID(ID);
    console.log('Add a note');
  };
  const closeNote = () => {
    setSelectedComplaintID(null);
    window.location.reload();
  };
  React.useEffect(()=>{
    axios.post('https://cse350-backend-production.up.railway.app/user/dashboard')
        .then(res=>{
            if(res.data.role==='admin'){
                setUser(res.data);
            }
            else{
                console.log('You are not admin');
                navigate('/');
            }
        })
        .catch(err=>console.log(err));
  },[]);
  React.useEffect(() => {
    axios.post(`https://cse350-backend-production.up.railway.app/complaint/view/${complaintID}`)
      .then(res => {
        // console.log(res.data)
        setComplaint(res.data);
        setNotes(res.data.notes);
      })
      .catch(err => console.log(err));
  }, [complaintID]);
  return (
    <React.Fragment>
        <div className='min-h-[70vh] my-[32px] py-[32px] w-[900px]'>
            <h1 className='text-3xl font-bold py-[50px]'>Complaint Details</h1>
            <div key={complaint.ID} className='p-10 justify text-justify rounded-lg bg-white border-2 border-[#136F63] mx-auto my-auto w-auto'>
                <p className='font-semibold'>Reported on : {complaint.date}</p>
                <h2 className='font-bold'>Reported by : {complaint.fullName}</h2>
                <p className='font-semibold'>Contact : {complaint.contact}</p>
                <p className='font-semibold'>Status : {complaint.status}</p>
                <div className='my-5 font-semibold'><b>Details of the Accused</b>
                  <p>Known : {complaint.known}</p>
                  <p>Info of Accused : {complaint.info}</p>
                </div>
                <p className='my-5 font-semibold'>Description : {complaint.incident}</p>
                {/* {
                  (notes.exist)
                  ?<div className='font-semibold'> Notes:
                    <ul className='pl-10 list-disc'>
                    {
                      notes.note.map((note, index) => {
                        return (
                            <li key={index}>
                              <p><span className='px-3'>📅 </span>{notes.date[index]}</p>
                              <div className='py-3'>{note}</div>
                            </li>
                        );
                      })
                    }
                    </ul>
                  </div>
                  :<p></p>
                } */}

                <button className='mt-[32px] bg-[#136F63] hover:bg-white text-slate-100 hover:text-[#136F63]' onClick={(e)=>addNote(complaint.ID)}>Add a note</button>
                {selectedComplaintID && <AddNote complaintID={selectedComplaintID} onClose={closeNote} />}
            </div>
        </div>
    </React.Fragment>
  );
};

export default ComplaintDetails;
