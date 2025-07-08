import React from 'react';

function Brokerage() {
    return ( 
        <div className="container">
        <div className="row p-5 mt-5 text-center border-top">
          <div className="col-8 p-4">

           <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage calculator</h3></a>

           <ul className='text-muted' style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}}>
            <li>Call & Trade and RMS auto-squareoff:Additional charges of &#8377;50 + GST per order.</li>

            <li>Digital contract notes will be sent via e-mail.</li>

            <li>Physical copy of contract notes , if required, shall be charged  &#8377;20 per contract notes. Courier charges apply.</li>

            <li>For NRI account (PIS), 0.5% or  &#8377;100 per executed order for equity (whichever is lower).</li>

            <li>For NRI account (PIS), 0.5% or  &#8377;200 per executed order for equity (whichever is lower).</li>

            <li>If the account is in the debit balance, any order placed will be charged &#8377;40 per executed order instead of &#8377;20 per executed order.</li>
           </ul>
          </div>
  
          <div className="col-4 p-4">
          <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
          </div>
  
         
        </div>
      </div>
     );
}

export default Brokerage;