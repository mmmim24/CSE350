import React from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import ViewComplaints from './ViewComplaints';

const Dashboard = () => {
    const [user, setUser] = React.useState({});
    const [complaint, setComplaint] = React.useState({});
    const [complaintID, setComplaintID] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (complaintID) {
            axios.post(`http://localhost:3333/complaint/view/${complaintID}`)
                .then(res => {
                    if (res.data !== "no complaint") {
                        setComplaint(res.data);
                        // navigate(`/complaint/${complaintID}`);
                    }
                    else {
                        console.log('No record found');
                    }
                    console.log(complaint.status);
                })
                .catch(err => console.log(err));
        }
    }
    React.useEffect(() => {
        axios.post('http://localhost:3333/user/dashboard')
            .then(res => {
                if (res.data.valid === true) {
                    setUser(res.data);
                }
                else {
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <React.Fragment>
            <div className="min-h-[60vh] my-8 py-12 sm:min-h-[70vh] sm:my-[32px] sm:py-[96px]">
                <h1 className="text-2xl sm:text-4xl">Welcome <b>{user.name}</b></h1>
                <div className="m-4 p-4 sm:m-5 sm:p-5">
                    {
                        (user.valid && user.role === "admin")
                            ? <ViewComplaints />
                            : <div>
                                <div className="mt-8 sm:mt-[32px]">
                                    <h1 className="text-xl sm:text-3xl">Track your application</h1>
                                    <form action="post" onSubmit={handleSubmit}>
                                        <div className="m-8 sm:m-[32px] mb-0">
                                            <label className="p-3 text-lg sm:text-2xl" htmlFor="ComplaintID">ComplaintID</label>
                                            <input
                                                className="px-2 rounded-md border-2 border-gray-400 bg-gray-200"
                                                name="ComplaintID"
                                                type="ComplaintID"
                                                placeholder="Enter ComplaintID"
                                                onChange={(e) => { setComplaintID(e.target.value) }}
                                                required
                                            />
                                            {
                                                complaintID === ''
                                                    ? <div className="mt-3 h-7"></div>
                                                    : (complaint.status !== undefined)
                                                        ? <div className="mt-3 h-7">Status: <h1 className="text-lg sm:text-[20px] inline text-orange-500">{complaint.status}</h1></div>
                                                        : <div className="mt-3 h-7">Please Enter a valid ID</div>
                                            }
                                        </div>
                                        <button className="bg-[#136F63] text-white hover:bg-[#FAFFF3] hover:border-[#136F63] hover:text-[#136F63] text-lg sm:text-xl py-1.5 px-3.5 rounded-lg hover:py-2" type="submit">Track</button>
                                    </form>
                                </div>
                                <div className="mt-8 sm:mt-[32px]">
                                    <h1 className="text-xl sm:text-[32px]">Submit a complaint form</h1>
                                    <div className="mt-8 sm:mt-[32px]">
                                        <Link className="bg-[#D70000] text-white hover:bg-[#FAFFF3] hover:border-[#D70000] hover:text-[#D70000] text-lg sm:text-xl py-1.5 px-4 rounded-lg hover:py-2" to="/complaintform">Submit</Link>
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

