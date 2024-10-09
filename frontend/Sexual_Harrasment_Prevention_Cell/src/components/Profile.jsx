import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = React.useState({});
    const navigate = useNavigate();
    const changePassword = (e) => {
        e.preventDefault();
        const { email } = user;
        const password = document.getElementById('password').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        console.log(password, newPassword, confirmPassword);
        console.log(email)
        if (newPassword === confirmPassword) {
            axios.post('http://localhost:3333/user/changePassword', { email, password, newPassword })
                .then(res => {
                    console.log(res.data);
                    if (res.data === "The password is incorrect") {
                        alert('Wrong Password');
                    }
                    else {
                        alert('Password updated successfully');
                        setTimeout(() => {
                            navigate('/');
                        }, 500);
                    }
                })
                .catch(err => console.log(err));
        }
        else {
            alert('Passwords do not match');
        }
    }
    React.useEffect(() => {
        axios.post('http://localhost:3333/user/dashboard')
            .then(res => {
                if (res.data.valid === true) {
                    setUser(res.data);
                }
                else {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <React.Fragment>
            <main className='flex flex-col gap-4 min-h-[70vh] my-[32px] py-[96px]'>
                <h1 className='text-4xl'>Profile</h1>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <h1 className='text-2xl'>Name:</h1>
                        <h1 className='text-2xl'>{user.name}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <h1 className='text-2xl'>Email:</h1>
                        <h1 className='text-2xl'>{user.email}</h1>
                    </div>
                    <div className=''>
                        <h1 className='text-2xl my-5'>Change Password</h1>
                        <form action='post' onSubmit={changePassword}>
                            <label className='m-2'>Enter old password</label>
                            <input type='password' id='password' placeholder='Enter old password' className='w-full appearance-none p-1 px-2 text-gray-800 outline-none rounded-md border-2 border-gray-400 bg-gray-200' required /><br />
                            <label className='m-2'>Enter new password</label>
                            <input type='password' id='newPassword' placeholder='Enter new password' className='w-full appearance-none p-1 px-2 text-gray-800 outline-none rounded-md border-2 border-gray-400 bg-gray-200' required /><br />
                            <label className='m-2'>Confirm new password</label>
                            <input type='password' id='confirmPassword' placeholder='Confirm new password' className='w-full appearance-none p-1 px-2 text-gray-800 outline-none rounded-md border-2 border-gray-400 bg-gray-200' required /><br />
                            <button className='bg-[#136F63] text-white hover:bg-[#FAFFF3] hover:border-[1px] hover:border-[#136F63] hover:text-[#136F63] hover:py-[5px] text-xl py-1.5 px-3.5 rounded-lg mt-5' type='submit'>
                                Change Password
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Profile