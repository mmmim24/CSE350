import React from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import axios from "axios";

export default function Info() {
  const { userData, setUserData ,submit,setSubmit,users,setUsers} = useStepperContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    // setSubmit(true);
    setUserData({ ...userData, [name]: value });
  };
  React.useEffect(()=>{
    axios.post('https://cse350-backend-production.up.railway.app/user/dashboard')
        .then(res=>{
            if(res.data.valid===true){
                setUsers(res.data);
            }
            else{
                navigate('/');
            }
        })
        .catch(err=>console.log(err));
  },[]);
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Full Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["fullName"] || ""}
            name="fullName"
            placeholder="Full Name"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            // required={submit}
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Contact Number
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["contact"] || ""}
            name="contact"
            placeholder="contact"
            type="tel"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            // required={submit}
          />
        </div>
      </div>
    </div>
  );
}