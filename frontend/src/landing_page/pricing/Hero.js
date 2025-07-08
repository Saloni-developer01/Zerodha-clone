import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h1>Charges</h1>
        <h3 className="mt-3 fs-5" style={{color:"#AEB8B8"}}>List of all charges and taxes</h3>
      </div>

      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-4 p-4">
            <img src="media/images/pricingEquity.svg" style={{width:"80%"}}/>
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted" style={{marginTop:"10%"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

        <div className="col-4 p-4">
            <img src="media/images/intradayTrades.svg"  style={{width:"80%"}}/>
            <h1 className="fs-3"  style={{width:"110%"}}>Intraday and F&O trades</h1>
            <p className="text-muted"  style={{marginTop:"10%"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        <div className="col-4 p-4">
            <img src="media/images/pricingMF.svg"  style={{width:"80%"}}/>
            <h1 className="fs-3">Free direct MF</h1>
            <p className="text-muted"  style={{marginTop:"10%"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
