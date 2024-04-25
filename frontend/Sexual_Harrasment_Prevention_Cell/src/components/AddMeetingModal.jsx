import React from 'react'
import Modal from 'react-modal'
import Datetime from 'react-datetime'

const AddMeetingModal = ({isOpen,onClose,onAdd}) => {
    const [title,setTitle] = React.useState('');
    const [strat,setStrat] = React.useState(new Date());
    const [end,setEnd] = React.useState(new Date());

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({title,strat,end});
        onClose();
    }

  return (
    <React.Fragment>
        <Modal isOpen={isOpen} onRequestClose={onClose} >
            <form onSubmit={onSubmit}>
                <label>Event</label>
                <input className='ml-5 p-3 hover:bg-[#FAFFF3] rounded-lg hover:border-[1px] hover:p-[11px] hover:border-[#136F63] text-slate-100 hover:text-[#136F63]' placeholder='Event Name' value={title}  onChange={e=> setTitle(e.target.value)} />
                <div>
                    <label>Start Date</label>
                    <Datetime value={strat} onChange={e=>setStrat(e)} />
                </div>
                <div>
                    <label>End Date</label>
                    <Datetime value={end} onChange={e=>setEnd(e)} />
                </div>
                <button className='p-3 mt-[32px] bg-[#136F63] hover:bg-[#FAFFF3] rounded-lg hover:border-[1px] hover:p-[11px] hover:border-[#136F63] text-slate-100 hover:text-[#136F63]' type='submit'>Add Meeting</button>
            </form>
        </Modal>
    </React.Fragment>
  )
}

export default AddMeetingModal