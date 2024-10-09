import React from 'react'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import AddMeetingModal from './AddMeetingModal';


const Meeting = () => {
    const complaintID = window.location.pathname.split('/complaint/').pop().split('/meeting').shift();
    const [modalOpen, setModalOpen] = React.useState(false);
    const reff = React.useRef(null);
    const onAdd = (e) => {
        let calendarApi = reff.current.getApi();
        calendarApi.addEvent(e);
    }
    const [user, setUser] = React.useState({});
    React.useEffect(() => {
        axios.post('http://localhost:3333/user/dashboard')
            .then(res => {
                if (res.data.role === 'admin') {
                    setUser(res.data);
                }
                else {
                    console.log('You are not admin');
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }, []);
    const addMeeting = (ID) => {
        console.log('Schedule a Meeting with complaint ID', ID);
    };
    return (
        <React.Fragment>
            <button className='btn-green' onClick={() => setModalOpen(true)}>Add Meeting</button>
            <main className='min-h-[50vh] my-[32px] grid justify-center'>
                <div style={{ position: "relative", zIndex: 0 }}>
                    <FullCalendar
                        ref={reff}
                        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin,]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            start: 'prev,next today',
                            center: 'title',
                            end: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        contentHeight={500}
                        expandRows={true}
                        eventColor='#009900'
                        events={[
                            { title: 'Meeting 1', date: '2024-05-29' },
                            { title: 'Meeting 2', date: '2024-05-19' }
                        ]}
                    />
                </div>
                <AddMeetingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onAdd={e => onAdd(e)} />
            </main>
        </React.Fragment>
    )
}
export default Meeting