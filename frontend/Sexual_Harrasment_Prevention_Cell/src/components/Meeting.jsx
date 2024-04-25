import React from 'react'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import AddMeetingModal from './AddMeetingModal';


const Meeting = () => {
    const complaintID = window.location.pathname.split('/complaint/').pop().split('/meeting').shift();
    const [modalOpen,setModalOpen] = React.useState(false);
    const reff = React.useRef(null);
    const onAdd = (e) => {  
        let calendarApi = reff.current.getApi();
        calendarApi.addEvent(e);
    }
    const [user,setUser] = React.useState({});
    React.useEffect(()=>{
        axios.post('https://cse350-backend-production.up.railway.app/user/dashboard')
            .then(res=>{
                if(res.data.role==='admin'){
                    setUser(res.data);
                }
                else{
                    console.log('You are not admin');
                    navigate('/');
                }
            })
            .catch(err=>console.log(err));
      },[]);
    const addMeeting = (ID) => {
        console.log('Schedule a Meeting with complaint ID',ID);
    };
  return (
    <React.Fragment>
        <button className='p-3 mt-[32px] bg-[#136F63] hover:bg-[#FAFFF3] rounded-lg hover:border-[1px] hover:p-[11px] hover:border-[#136F63] text-slate-100 hover:text-[#136F63]' onClick={()=>setModalOpen(true)}>Add Meeting</button>
        <main className='min-h-[50vh] my-[32px] grid justify-center'>
            <div style={{position:"relative",zIndex:0}}>
                <FullCalendar
                    ref={reff}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        start: 'prev,next today',
                        center: 'title',
                        end: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                />
            </div>
            <AddMeetingModal isOpen={modalOpen} onClose={()=>setModalOpen(false)} onAdd={e=>onAdd(e)}/>
        </main>
    </React.Fragment>
  )
}

export default Meeting