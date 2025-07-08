import React from 'react';

function Education() {
    return ( 
        <div className='container' style={{marginTop:"8%"}}>
        <div className='row'>

            <div className='col-6' style={{marginTop:"-2%"}}>
                <img src='media/images/education.svg' style={{width:"75%"}}></img>
            </div>

            <div className='col-6'>
                <h1 className='mb-3 fs-2' style={{color:"#42425A"}}>Free and open market education</h1>

                <p style={{color:"#545754", fontWeight:"400"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='' style={{textDecoration:"none"}}>Varsity  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                <p className='mt-5' style={{color:"#545754", fontWeight:"400"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='' style={{textDecoration:"none"}}>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            
        </div>
    </div>
     );
}

export default Education;