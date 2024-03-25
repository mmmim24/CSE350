export default function StepperControl({ handleClick, currentStep, steps }) {
    return (
      <div className="container mt-4 mb-8 flex justify-around">
        <button
          onClick={() => handleClick()}
          className={`cursor-pointer rounded-xl bg-[#D70000] py-2 hover:py-[7px] px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:border-[1px] hover:border-[#D70000] hover:bg-[#FAFFF3] hover:text-[#D70000]  ${
            currentStep === 1 ? " cursor-not-allowed hover:bg-slate-500 hover:border-slate-500 " : ""
          }`}
        >
          Back
        </button>
  
        <button
          onClick={() => handleClick("next")}
          className="cursor-pointer rounded-lg bg-[#136F63] py-2 hover:py-[7px] px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:border-[1px] hover:border-[#136F63] hover:bg-[#FAFFF3] hover:text-[#136F63]"
        >
          {currentStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>
      </div>
    );
  }