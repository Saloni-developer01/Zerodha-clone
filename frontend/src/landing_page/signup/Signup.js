import React, { useState } from 'react'
import { Link} from 'react-router-dom';

function Signup(){
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        const data = {
            email,
            username,
            password
        }
        console.log(data);
    }

    return (
        <>
              <div className='container'>
            <div className='row mt-5'>

                <div className='col-6 mt-3'>
                    <img src="https://zerodha.com/static/images/account_open.svg" style={{width:"110%"}}/>
                </div>

                <div className='col-6 p-5' style={{width:"40%", fontSize:"17px", marginLeft:"7%"}}>
                   
                    <h2 className='text-2xl'>Signup Now</h2>
                    <p style={{color:"grey"}}>Or track your existing application</p>
                    <form className='mt-3' onSubmit={handleSignup}>

                        <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" placeholder='Username' required
                            className='px-3 py-2 mb-4 mt-4'
                         style={{width:"100%"}}/>

                         <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Email Address' required
                            className='px-3 py-2 mb-4'
                         style={{width:"100%"}}/>

                         <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Password' required
                            className='px-3 py-2 mb-4'
                         style={{width:"100%"}}/>
                        {
                            message && <p className='text-red-500'>{message}</p>
                        }

                        <button type='submit' className='p-2 btn fs-6'  style={{width:"50%", margin:"0 auto", fontWeight:"500", backgroundColor:"#387ED1", color:"white"}}>Signup</button>
                    </form>

                    <p className='mt-3 text-muted'>Already have an account? Please
                        <Link to='/login' className='px-1 underline'>login</Link>.</p>
      
                </div>

            </div>
        </div>
        </>
    )
}

export default Signup

