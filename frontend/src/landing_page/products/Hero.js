import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom' style={{marginBottom:"5%", paddingBottom:"5%"}}>
         <div className='text-center p-3' style={{marginTop:"8%"}}>
            <h1>Zerodha Products</h1>
           <h3 className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
           <p className='mt-3 mb-5'>Check out our <a href='' style={{textDecoration:"none", fontWeight:"500"}}>investment offerings → </a> </p>
         </div>
        </div>
    );
}

export default Hero;