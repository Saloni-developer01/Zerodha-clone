import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
           <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'></img>
                
                <h1 className='mt-5'  style={{color:"#42425A"}}>Invest in everything</h1>

                <p style={{color:"#424242", fontSize:"1.5vw"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

                <button className="p-2 btn fs-6 mb-5" style={{width:"20%", margin:"0 auto", fontWeight:"500", backgroundColor:"#387ED1", color:"white"}}>Sign up for free</button>
           </div>
        </div>
     );
}

export default Hero;