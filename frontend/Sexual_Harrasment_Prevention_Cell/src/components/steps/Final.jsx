import { useStepperContext } from "../../contexts/StepperContext";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Final() {
  const {userData, setUserData} = useStepperContext();
  const navigate = useNavigate();
  console.log(userData)
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(userData){
        axios.post('https://cse350-backend-production.up.railway.app/complaint/add',userData)
            .then(res=>{
                navigate('/dashboard');
              } 
            )
            .catch(err=>console.log(err));
    }
    else{
      navigate('/dashboard')
    }
}
    return (
      <div className="m-10">
        <div className="flex flex-col items-center">
          <div className="wrapper">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
  
          <div className="m-3 text-xl font-semibold uppercase text-[#136F63]">
            appreciation for Being brave !
          </div>
          <div className="text-lg font-semibold text-gray-500">
            Your Complaint has been filed.
          </div>
          <a className="mt-10" href="/dashboard">
            <button onClick={handleSubmit} className="px-4 py-2 bg-[#D70000] text-white transition-colors duration-150 border rounded-lg focus:shadow-outline hover:bg-[#FAFFF3] hover:text-[#D70000] hover:border-[#D70000]">
              Close
            </button>
          </a>
        </div>
      </div>
    );
  }