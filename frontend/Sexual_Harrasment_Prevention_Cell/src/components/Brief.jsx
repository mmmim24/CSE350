import React from 'react'
import image from '/nadine-shaabana-DRzYMtae-vA-unsplash.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Brief = () => {
  const [user,setUser] = React.useState({});
  React.useEffect(()=>{
    axios.post('https://cse350-backend-production.up.railway.app/user/dashboard')
        .then(res=>{
            if(res.data.valid===true){
                setUser(res.data);
                // console.log('Welcome to Dashboard');
            }
            else{
                // console.log('You are not logged in');
                // navigate('/');
            }
        })
        .catch(err=>console.log(err));
  },[]);
  return (
    <React.Fragment>
        <div className='bg-cover bg-center min-h-[50vh] w-[80vw] rounded-3xl' style={{backgroundImage:`url(${image})`}}>
            <div className='text-white text-left w-[50%] m-[64px] p-[64px] overflow-hidden'>
              <h1 className='text-4xl'>Lorem Ipsum</h1>
              <p className='my-[32px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia magnam dolorum omnis autem. Saepe veritatis autem, minus ea totam quae. Dolore maiores modi dicta ipsam? Nam earum ea quibusdam soluta ipsa ab, vitae repellendus explicabo, corrupti sunt, aut sequi tempora nulla magni ullam fuga provident ducimus. Fugit optio est quas temporibus incidunt, perferendis commodi. Iusto, fugit. Minima quaerat inventore nihil aliquid aperiam qui totam officia, perferendis dolore, recusandae reprehenderit, excepturi modi. At quaerat sapiente odit impedit eos! Atque labore quod recusandae blanditiis rem soluta dolorum corrupti dolore dicta sapiente dolorem ea aut, quis illo porro dignissimos laudantium placeat sit itaque!</p>
              {
                (user.role==='admin')
                ?<Link to='/dashboard' className='p-3 bg-[#D70000] text-white rounded-lg hover:bg-[#FAFFF3] hover:border-[1px] hover:border-[#D70000] hover:p-[11px] hover:text-[#D70000] mr-[32px]'>View Complaints</Link>
                :<>
                <Link to='/dashboard' className='p-3 bg-[#D70000] text-white rounded-lg hover:bg-[#FAFFF3] hover:border-[1px] hover:border-[#D70000] hover:p-[11px] hover:text-[#D70000] mr-[32px]'>File A Complaint</Link>
                <Link to='/dashboard' className='p-3 bg-[#136F63] text-white rounded-lg hover:bg-[#FAFFF3] hover:border-[1px] hover:border-[#136F63] hover:text-[#136F63]'>Check Status</Link>
                </>
              }
            </div>
        </div>
        <div className='px-[20vw] text-justify my-[64px]'>
            <div className='text-3xl font-bold text-center my-10 text-[#D70000]'>
                About Us
            </div>
            As per the guidelines of UGC and the Supreme Court a Sexual Harassment Prevention Cell has been established by Shahjalal University of Science and Technology to provide a healthy and congenial atmosphere to the staff and students of the University. you will find details of the guidelines and norms of the policy against sexual harassment, principles and procedure for combating sexual harassment and the sexual harassment prevention committee in your diary written in Bangla. Also you will find a complaint box in the ground floor of the Central library Building.
        </div>
    </React.Fragment>
  )
}

export default Brief