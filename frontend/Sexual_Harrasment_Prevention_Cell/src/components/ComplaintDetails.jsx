import React from 'react';
import axios from 'axios';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const ComplaintDetails = () => {
  const complaintID = window.location.pathname.split('/').pop();
  const [user, setUser] = React.useState({});
  const [notes, setNotes] = React.useState({});
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
  const addMeeting = (ID) => {
    console.log('Schedule a Meeting');
    navigate(`/complaint/${ID}/meeting`);
  };
  React.useEffect(() => {
    axios.post('http://localhost:3333/user/dashboard')
      .then(res => {
        if (res.data.role === 'admin') {
          setUser(res.data);
        }
        else {
          console.log('You are not admin');
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  }, []);
  React.useEffect(() => {
    axios.post(`http://localhost:3333/complaint/view/${complaintID}`)
      .then(res => {
        // console.log(res.data)
        setComplaint(res.data);
        setNotes(res.data.notes);
      })
      .catch(err => console.log(err));
  }, [complaintID]);
  return (
    <React.Fragment>
      <div className='min-h-[70vh] my-8 py-8 w-full max-w-[1080px] px-8'>
        <h1 className='text-3xl font-bold py-4'>Complaint Details</h1>
        <div
          key={complaint.ID}
          className='p-10 rounded-xl shadow-xl border-2 border-[#136F63] text-left'
        >
          <p className='font-semibold'>Reported on: {complaint.date}</p>
          <h2 className='font-bold'>Reported by: {complaint.fullName}</h2>
          <p className='font-semibold'>Contact: {complaint.contact}</p>
          <p className='font-semibold'>Status: {complaint.status}</p>

          <div className='my-5 font-semibold'>
            <b>Details of the Accused:</b>
            <p>Known: {complaint.known}</p>
            <p>Info of Accused: {complaint.info}</p>
          </div>

          <p className='my-5 font-semibold'>Description: {complaint.incident}</p>

          {notes.exist && (
            <div className='font-semibold'>
              Notes:
              <ul className='pl-10 list-disc'>
                {notes.note.map((note, index) => (
                  <li key={index}>
                    <p>
                      <span className='px-3'>📅 </span>{notes.date[index]}
                    </p>
                    <div className='py-3'>{note}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className='flex flex-col sm:flex-row mt-4'>
            <button
              className='btn-green'
              onClick={(e) => addNote(complaint.ID)}
            >
              Add a Note
            </button>
            <button
              className='btn-red ml-0 sm:ml-8'
              onClick={(e) => addMeeting(complaint.ID)}
            >
              Schedule a Meeting
            </button>
          </div>

          {selectedComplaintID && (
            <AddNote
              complaintID={selectedComplaintID}
              onClose={closeNote}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ComplaintDetails;
