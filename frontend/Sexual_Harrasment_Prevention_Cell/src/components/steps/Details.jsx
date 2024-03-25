import { useStepperContext } from "../../contexts/StepperContext";

export default function Details() {
  const { userData, setUserData,submit } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Incident
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <textarea
            onChange={handleChange}
            value={userData["incident"] || ""}
            name="incident"
            placeholder="incident"
            type="textbox"
            rows="5"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            // required={submit}
          />
        </div>
      </div>
    </div>
  );
}