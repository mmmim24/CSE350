import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewComplaints = () => {
    const [complaints, setComplaints] = React.useState([3333]);
    const Id = React.useId();
    const [filteredComplaints, setFilteredComplaints] = React.useState([]);
    const navigate = useNavigate();

    const ViewComplaint = (ID) => {
        navigate(`/complaint/${ID}`);
    }
    const FilterComplaint = (status) => {
        setFilteredComplaints(complaints.filter(complaint => complaint.status === status));
    }
    React.useEffect(() => {
        axios.get('http://localhost:3333/complaint/getAll')
            .then(res => {
                // console.log(res.data);
                setComplaints(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    const ComplaintCard = ({ complaint, ViewComplaint }) => (
        <div className='p-5 justify text-justify rounded-lg bg-[#FAFFF3] border-2 border-[#136F63] w-full min-h-[240px] flex flex-col justify-between'>
            <div>
                <h2 className='font-bold'>Submitted by: {complaint.fullName}</h2>
                <p className='font-semibold'>Time: {complaint.date}</p>
                <p className='font-semibold'>Status: {complaint.status}</p>
            </div>
            <div className='mt-4'>
                <button
                    className='p-2 font-semibold bg-[#136F63] hover:bg-[#FAFFF3] text-slate-100 rounded-lg border-[1px] border-transparent hover:border-[#136F63] hover:text-[#136F63]'
                    onClick={() => ViewComplaint(complaint.ID)}
                >
                    Details
                </button>
            </div>
        </div>
    );
    return (
        <React.Fragment>
            <main className="p-4">
                <h1 className='text-3xl font-bold py-4'>Complaints</h1>

                <div className='py-8 font-semibold grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    <button
                        className='p-2 w-full sm:w-[128px] bg-[#136F63] hover:bg-[#FAFFF3] focus:bg-[#D70000] text-slate-100 rounded-lg border-[1px] border-transparent hover:border-[#136F63] hover:text-[#136F63]'
                        onClick={() => FilterComplaint('In Progress')}
                    >
                        In Progress
                    </button>
                    <button
                        className='p-2 w-full sm:w-[128px] bg-[#136F63] hover:bg-[#FAFFF3] focus:bg-[#D70000] text-slate-100 rounded-lg border-[1px] border-transparent hover:border-[#136F63] hover:text-[#136F63]'
                        onClick={() => FilterComplaint('Processing')}
                    >
                        Processing
                    </button>
                    <button
                        className='p-2 w-full sm:w-[128px] bg-[#136F63] hover:bg-[#FAFFF3] focus:bg-[#D70000] text-slate-100 rounded-lg border-[1px] border-transparent hover:border-[#136F63] hover:text-[#136F63]'
                        onClick={() => FilterComplaint('Resolved')}
                    >
                        Resolved
                    </button>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    {filteredComplaints.length === 0
                        ? complaints.map(complaint => (
                            <ComplaintCard
                                key={complaint.ID + 73}
                                complaint={complaint}
                                ViewComplaint={ViewComplaint}
                            />
                        ))
                        : filteredComplaints.map(complaint => (
                            <ComplaintCard
                                key={complaint.ID}
                                complaint={complaint}
                                ViewComplaint={ViewComplaint}
                            />
                        ))
                    }
                </div>
            </main>
        </React.Fragment>
    )
}

export default ViewComplaints