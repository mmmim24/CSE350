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
        axios.post('http://localhost:3333/complaint/add',userData)
            .then(res=>{
                navigate('/dashboard');
              } 
            )
            .catch(err=>console.log(err));
    } 
}
    return (
      <div className="container md:mt-10">
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
  
          <div className="mt-3 text-xl font-semibold uppercase text-green-500">
            appreciation for Being brave !
          </div>
          <div className="text-lg font-semibold text-gray-500">
            Your Complaint has been filed.
          </div>
          <a className="mt-10" href="/dashboard">
            <button onClick={handleSubmit} className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
              Close
            </button>
          </a>
        </div>
      </div>
    );
  }