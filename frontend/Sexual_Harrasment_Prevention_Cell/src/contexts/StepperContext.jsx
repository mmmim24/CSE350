import { createContext, useContext, useState } from "react";

const StepperContext = createContext({ userData: "", setUserData: null,submit:false,setSubmit:()=>{} ,users:{},setUsers:()=>{} });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [users,setUsers] = useState({});
  const [submit, setSubmit] = useState(false);

  return (
    <StepperContext.Provider value={{ userData, setUserData,submit, setSubmit,users,setUsers }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData,submit,setSubmit,users,setUsers   } = useContext(StepperContext);

  return { userData, setUserData,submit,setSubmit,users,setUsers };
}