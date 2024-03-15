import React from 'react';
import axios from 'axios';
import AddNote from './AddNote';

const ComplaintDetails = () => {
  const complaintID = window.location.pathname.split('/').pop();
  const [complaintDetails, setComplaintDetails] = React.useState({});
  const [selectedComplaintID, setSelectedComplaintID] = React.useState(null);
  const addNote = (ID) => {
    setSelectedComplaintID(ID);
    console.log('Add a note');
  };
  const closeNote = () => {
    setSelectedComplaintID(null);
    console.log('Close a note');
  };
  React.useEffect(() => {
    axios.post(`http://localhost:3333/complaint/view/${complaintID}`)
      .then(res => {
        // console.log(res.data)
        setComplaintDetails(res.data);
      })
      .catch(err => console.log(err));
  }, [complaintID]);

  return (
    <React.Fragment>
        <div className='w-[700px]'>
            <h1 className='text-3xl font-bold py-[50px]'>Complaint Details</h1>
            <div key={complaintDetails.ID} className='p-10 justify text-justify rounded-lg bg-blue-300 border-2 border-indigo-500 mx-auto my-auto w-auto'>
                <p className='font-semibold'>Reported on : {complaintDetails.date}</p>
                <h2 className='font-bold'>Reported by : {complaintDetails.fullName}</h2>
                <p className='font-semibold'>Contact : {complaintDetails.contact}</p>
                <div className='my-5 font-semibold'><b>Details of the Accused</b>
                  <p>Known : {complaintDetails.known}</p>
                  <p>Info of Accused : {complaintDetails.info}</p>
                </div>
                <p className='my-5 font-semibold'>Description : {complaintDetails.incident}</p>
                <p className='font-semibold'>Status : {complaintDetails.status}</p>

                <button className='mt-[32px] bg-indigo-700 hover:bg-slate-100 text-slate-100 hover:text-indigo-700' onClick={(e)=>addNote(complaintDetails.ID)}>Add a note</button>
                {selectedComplaintID && <AddNote complaintID={selectedComplaintID} onClose={closeNote} />}
            </div>
        </div>
    </React.Fragment>
  );
};

export default ComplaintDetails;
