import React from 'react'
import axios from 'axios';

const AddNote = ({ complaintID, onClose }) => {
    const [complaint, setComplaint] = React.useState([]);
    const [note, setNote] = React.useState('');
    const [status, setStatus] = React.useState('');
    const saveNote=(e)=>{
        e.preventDefault();
        if(note){
            axios.put(`https://cse350-backend-production.up.railway.app/complaint/update/${complaintID}`, {
                status:status,
                note: note
            })
            .then(res => {
                alert(res.data);
                setTimeout(() => {
                    onClose();
                }, 500);
            })
            .catch(err => console.log(err));
        }
        else{
            alert('Please fill the required field');
        }
    }
    React.useEffect(() => {
        axios.post(`https://cse350-backend-production.up.railway.app/complaint/view/${complaintID}`)
            .then(res => {
                setComplaint(res.data);
                setStatus(res.data.status);
            })
            .catch(err => console.log(err));
    }, [complaintID]);
  return (
    <React.Fragment>
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                {complaint 
                ? (<div className='p-5 h-[500px] w-[500px]'>
                        <form action='post' onSubmit={saveNote}>
                            <h2 className="font-bold">Update Status</h2>
                            <select className='block my-5 rounded-lg bg-slate-200 p-2' value={status} onChange={(e)=>setStatus(e.target.value)}>
                                <option defaultValue="In Progress">In Progress</option>
                                <option value="Processing">Processing</option>
                                <option value="Resolved">Resolved</option>
                            </select>
                            <h2 className="font-bold">Add a note</h2>
                            <textarea  
                                type="fixed" 
                                className="my-3 p-2 px-2 resize-none h-[200px] w-full  rounded-xl bg-slate-200"
                                placeholder="Note"
                                onChange={(e)=>setNote(e.target.value)}
                                required
                                />
                            <button 
                                className='p-1 w-[96px] bg-[#136F63] hover:bg-[#FAFFF3] text-slate-100 hover:text-[#136F63] rounded-lg hover:border-[1px] hover:p-[3px] hover:border-[#136F63]'
                                type='submit'
                            >ADD</button>
                        </form>
                        <button className="p-1 w-[96px] my-3 bg-red-500 hover:bg-[#FAFFF3] text-slate-100 hover:text-red-500 hover:border-red-500 rounded-lg hover:border-[1px] hover:p-[3px]" onClick={onClose}>CLOSE</button>
                    </div>
                ) : (
                <p>Loading...</p>
                )}
            </div>
        </div>
    </React.Fragment>
  )
}

export default AddNote