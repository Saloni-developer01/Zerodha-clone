import React from 'react';

function Team() {
    return ( 
        <div className="container">
        <div className="row p-3">
          <h1 className="text-center" style={{color:"#424242", fontSize:"2.5vw"}}>
            People
          </h1>
        </div>
  
        <div className="row text-muted" style={{ lineHeight:"1.8", fontSize:"1em", marginTop:"4%"}}>
         <div className="col-6 text-center">
            <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%", width:"50%"}}></img>
            <h4 className='mt-3' style={{fontWeight:"normal", color:"#424242"}}>Nithin Kamath</h4>
            <h6 className='mt-4' style={{fontWeight:"normal"}}>Founder, CEO</h6>
         </div>
         <div className="col-6" style={{marginLeft:"-6%", fontSize:"1.2vw", color:"#424242"}}>
          <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
  
          <p>
           He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
  
          <p>
          Playing basketball is his zen.
          </p>

          <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage </a>/ <a href="" style={{textDecoration:"none"}}>TradingQnA </a> /  <a href="" style={{textDecoration:"none"}}>Twitter </a></p>
         </div>
        </div>
      </div>
    );
}

export default Team;