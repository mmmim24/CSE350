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
        <main className='mx-auto'>
            <Modal isOpen={isOpen} onRequestClose={onClose} >
                <div className='mx-[40%]'>
                    <form onSubmit={onSubmit}>
                        <label className='font-bold'>Meeting</label>
                        <input className='ml-5 p-3 border-[3px] hover:bg-[#FAFFF3] rounded-lg hover:border-[3px] hover:p-[11px] hover:border-[#136F63] text-slate-100 hover:text-[#136F63]' placeholder='Meeting Name' value={title}  onChange={e=> setTitle(e.target.value)} />
                        <div className='my-[32px]'>
                            <label>Start Date</label>
                            <Datetime className='cursor-pointer' value={strat} onChange={e=>setStrat(e)} />
                        </div>
                        <div className='my-[32px]'>
                            <label>End Date</label>
                            <Datetime className='cursor-pointer' value={end} onChange={e=>setEnd(e)} />
                        </div>
                        <button className='btn-green' type='submit'>Add Meeting</button>
                    </form>
                </div>
            </Modal>
        </main>
    </React.Fragment>
  )
}

export default AddMeetingModal