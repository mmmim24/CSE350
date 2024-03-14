import React from 'react';
import axios from 'axios';


const ComplaintDetails = () => {
  const [complaintDetails, setComplaintDetails] = React.useState({});
    const complaintID = window.location.pathname.split('/').pop();
  React.useEffect(() => {
    axios.post(`http://localhost:3333/complaint/view/${complaintID}`)
      .then(res => {
        console.log(res.data)
        setComplaintDetails(res.data);
      })
      .catch(err => console.log(err));
  }, [complaintID]);

  return (
    <React.Fragment>
        <div className='w-[700px] h-[50vh]'>
            {complaintID}
        </div>
        <div>
            {complaintDetails.fullName}
        </div>
    </React.Fragment>
  );
};

export default ComplaintDetails;
