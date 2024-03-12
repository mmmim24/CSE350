import { createContext, useContext, useState } from "react";

const StepperContext = createContext({ userData: "", setUserData: null,submit:false,setSubmit:()=>{} });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <StepperContext.Provider value={{ userData, setUserData,submit, setSubmit }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData,submit,setSubmit   } = useContext(StepperContext);

  return { userData, setUserData,submit,setSubmit };
}