import React from 'react'
import axios from 'axios';

const AddNote = ({ complaintID, onClose }) => {
    const [note, setNote] = React.useState(null);
    React.useEffect(() => {
        axios.post(`http://localhost:3333/complaint/view/${complaintID}`)
            .then(res => {
                setNote(res.data);
            })
            .catch(err => console.log(err));
    }, [complaintID]);
  return (
    <React.Fragment>
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                {note ? (
                    <div className='p-5 h-[500px] w-[500px]'>
                        <h2 className="font-bold">Add Note</h2>
                        <select className='block my-9 rounded-lg bg-slate-200 p-2'>
                            <option value="1">In Progress</option>
                            <option value="2">Processing</option>
                            <option value="3">Resolved</option>
                        </select>
                        <textarea  
                            type="fixed" 
                            className="my-3 p-2 px-2 resize-none h-[200px] w-full  rounded-xl bg-slate-200"
                            placeholder="Note" />
                        <button className='block bg-indigo-700 hover:bg-slate-100 text-slate-100 hover:text-indigo-700' onClick>Add a note</button>
                        <button className="my-3 bg-red-500" onClick={onClose}>Close</button>
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