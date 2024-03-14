import { useStepperContext } from "../../contexts/StepperContext";

export default function Accused() {
  let { userData, setUserData,submit } = useStepperContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <div className="flex flex-col ">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            confirm
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <select 
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              onChange={handleChange}
              value={userData["known"] || ""}
              name="known"
              // required={submit}
              >
                <option value="def"></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 ">
            Give us a detailed description (name ,department,session,year,etc. if known)
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <textarea
              onChange={handleChange}
              value={userData["info"] || ""}
              name="info"
              placeholder="info"
              type="textbox"
              rows="5"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              // required={submit}
              />
          </div>
        </div>
      </div>
    </>
  );
}