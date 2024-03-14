import { useState,useEffect } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { UseContextProvider } from "../contexts/StepperContext";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import Info from "./steps/Info";
import Accused from "./steps/Accused";
import Details from "./steps/Details";
import Final from "./steps/Final";

function ComplaintForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [user,setUser] = useState({});
  const navigate = useNavigate();
  const steps = [
    "Personal Information",
    "Do you know the accused?",
    "Details of the Incident",
    "Submit Complaint",
  ];
  useEffect(()=>{
    axios.post('http://localhost:3333/user/dashboard')
        .then(res=>{
            if(res.data.valid===true){
                setUser(res.data);
                console.log('Welcome to Dashboard');
                return;
            }
            else{
                console.log('You are not logged in');
                navigate('/');
            }
        })
        .catch(err=>console.log(err));
  },[]);
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Info />;
      case 2:
        return <Accused />;
      case 3:
        return <Details />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep}   />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default ComplaintForm;