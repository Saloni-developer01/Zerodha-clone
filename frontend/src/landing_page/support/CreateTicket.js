import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container mt-5">
        <div className="row p-5 mt-5 mb-5">
          <h1  style={{fontSize:"1.7vw", color:"grey"}}>To create a ticket, select a relevant topic</h1>
  
          <div className="col-4 p-5 mt-2 mb-2">
            <h4 className='ticketheading'><i class="fa fa-plus-square-o" aria-hidden="true" style={{marginLeft:"-10%"}}>&nbsp;&nbsp;</i>Account Opening</h4>
              <a href="" className='ticketLinks'>Resident individual</a> <br/>
              <a href="" className='ticketLinks'>Minor</a> <br/>
              <a href="" className='ticketLinks'>Non Resident Indian (NRI)</a> <br/>
              <a href="" className='ticketLinks'>Company, Partnership, HUF and LLP</a> <br/>
              <a href="" className='ticketLinks'>Glossary</a> <br/>
          </div>

          <div className="col-4 p-5 mt-2 mb-2">
              <h4 className='ticketheading'><i class="fa fa-user-o" aria-hidden="true" style={{marginLeft:"-10%"}}>&nbsp;&nbsp;</i> Your Zerodha Account</h4>
              <a href="" className='ticketLinks'>Your Profile</a> <br/>
              <a href="" className='ticketLinks'>Account modification</a> <br/>
              <a href="" className='ticketLinks'>Client Master Report (CMR) and Depository Participant (DP)</a> <br/>
              <a href="" className='ticketLinks'>Nomination</a> <br/>
              <a href="" className='ticketLinks'>Transfer and conversion of securities</a> <br/>
          </div>

          <div className="col-4 p-5 mt-2 mb-2">
            <h4 className='ticketheading'><i class="fa fa-line-chart" aria-hidden="true" style={{marginLeft:"-10%"}}>&nbsp;&nbsp;</i> Kite</h4>
              <a href="" className='ticketLinks'>IPO</a> <br/>
              <a href="" className='ticketLinks'>Trading FAQs</a> <br/>
              <a href="" className='ticketLinks'>Margin Trading Facility (MTF) and Margins</a> <br/>
              <a href="" className='ticketLinks'>Charts and orders</a> <br/>
              <a href="" className='ticketLinks'>Alerts and Nudges</a> <br/>
              <a href="" className='ticketLinks'>General</a> <br/>
          </div>
  
          <div className="col-4 p-5 mt-2 mb-2">
          <h4 className='ticketheading'><i class="fa fa-credit-card" aria-hidden="true" style={{marginLeft:"-10%"}}>&nbsp;&nbsp;</i> Funds</h4>
              <a href="" className='ticketLinks'>Add money</a> <br/>
              <a href="" className='ticketLinks'>Withdraw money</a> <br/>
              <a href="" className='ticketLinks'>Add bank accounts</a> <br/>
              <a href="" className='ticketLinks'>eMandates</a> <br/>
          </div>

          <div className="col-4 p-5 mt-2 mb-2">
          <h4 className='ticketheading'><i class="fa fa-user-circle-o" aria-hidden="true" style={{marginLeft:"-10%"}}>&nbsp;&nbsp;</i> Console</h4>
              <a href="" className='ticketLinks'>Portfolio</a> <br/>
              <a href="" className='ticketLinks'>Corporate actions</a> <br/>
              <a href="" className='ticketLinks'>Funds statement</a> <br/>
              <a href="" className='ticketLinks'>Reports</a> <br/>
              <a href="" className='ticketLinks'>Profile</a> <br/>
              <a href="" className='ticketLinks'>Segments</a> <br/>
          </div>
          <div className="col-4 p-5 mt-2 mb-2">
          <h4 className='ticketheading'><i class="fa fa-circle-thin" aria-hidden="true" style={{marginLeft:"-10%"}}>&nbsp;&nbsp;</i> Coin</h4>
              <a href="" className='ticketLinks'>Understanding mutual funds and Coin</a> <br/>
              <a href="" className='ticketLinks'>Coin app</a> <br/>
              <a href="" className='ticketLinks'>Coin web</a> <br/>
              <a href="" className='ticketLinks'>Transactions and reports</a> <br/>
              <a href="" className='ticketLinks'>National Pension Scheme (NPS)</a> <br/>
          </div>
        </div>
      </div>
     );
}

export default CreateTicket;