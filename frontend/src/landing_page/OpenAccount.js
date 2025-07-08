import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5 mt-5'>
        <div className='row text-center'>
             <h1 className='mt-5'  style={{color:"#42425A", fontSize:"2.6vw"}}>Open a Zerodha account</h1>
             <p style={{color:"#424242", fontSize:"1.5vw"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
             <button className="p-2 btn fs-6 mb-5" style={{width:"20%", margin:"0 auto", fontWeight:"500", backgroundColor:"#387ED1", color:"white"}}>Sign up for free</button>
        </div>
     </div>
     );
}

export default OpenAccount;