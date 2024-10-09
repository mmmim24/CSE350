import { useStepperContext } from "../../contexts/StepperContext";
import BasicDocument from "../BasicDoc";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
var submit = false;

export default function Final() {
  const { userData, setUserData, users } = useStepperContext();
  const [complaint, setComplaint] = React.useState({});
  const navigate = useNavigate();
  const Preview = (e) => {
    e.preventDefault();
    if (userData) {
      if (!submit) {
        axios.post('http://localhost:3333/complaint/add', { userData, users })
          .then(res => {
            // console.log(res.data)
            setComplaint(res.data);
            submit = true;
          })
          .catch(err => console.log(err));
      }
      // console.log(complaint);
      // console.log(submit)
    }
    else {
      navigate('/dashboard')
    }
  }
  const closeView = (e) => {
    e.preventDefault();
    navigate('/dashboard')
    window.location.reload();
  }
  const copy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(complaint.ID);
    alert('ID copied to clipboard');
  }
  return (
    <div className="m-6">
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
        {submit &&
          <div className="flex gap-2 my-10 items-center">
            <p className="text-[#D70000]">{complaint.ID}</p>
            <button className="px-4 py-2 bg-[#136F63] text-white border rounded-lg focus:shadow-outline hover:bg-[#FAFFF3] hover:text-[#136F63] hover:border-[#136F63]" onClick={copy}>Copy this ID</button>
          </div>
        }
        <div>
          <button onClick={Preview} className="px-4 py-2 bg-[#136F63] text-white border rounded-lg focus:shadow-outline hover:bg-[#FAFFF3] hover:text-[#136F63] hover:border-[#136F63] mr-9">
            Preview
          </button>
          <button onClick={closeView} className="px-4 py-2 bg-[#D70000] text-white border rounded-lg focus:shadow-outline hover:bg-[#FAFFF3] hover:text-[#D70000] hover:border-[#D70000]">
            Close
          </button>
          <div className="mt-[32px] border-1 rounded-xl">
            {submit && <BasicDocument complaint={complaint} />}
            {/* <PDFDownloadLink document={<BasicDocument complaint={complaint}/>} fileName={`${complaint.ID}.pdf`}>
                {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download now!"
              }
              </PDFDownloadLink> */}
          </div>
        </div>
      </div>
    </div>
  );
}