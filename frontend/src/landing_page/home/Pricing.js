import React from "react";

function Pricing() {
  return (
    <div
      className="container p-2"
      style={{ marginTop: "5vw", marginLeft: "10vw" }}
    >
      <div className="row">
        <div className="col-5">
          <h1 className="fs-2 mb-4" style={{ color: "#424242" }}>
            Unbeatable pricing
          </h1>
          <p style={{ color: "#66666B" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" , fontWeight:"500"}}>
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div
          className="col-7 mb-5"
          style={{ marginTop: "1vw" }}
        >
          <div className="row text-center">
            <div className="col"  style={{ marginLeft: "-6%" }}>
              <img
                src="media/images/pricingEquity.svg"
                style={{ width: "120%" }}
              ></img>
            </div>
            <div
              className="col-1"
              style={{
                width: "7vw",
                fontSize: "70%",
                textAlign: "left",
                marginTop: "4vw",
              }}
            >
              <p style={{color:"#707274"}}>Free account opening</p>
            </div>
            <div className="col-2" style={{ marginLeft: "-6%" , width:"20%"}}>
              <img
                src="media/images/pricingMF.svg"
                style={{ width: "120%" }}
              ></img>
            </div>
            <div
              className="col-3"
              style={{
                width: "10vw",
                fontSize: "70%",
                textAlign: "left",
                marginTop: "4vw",
                marginLeft: "5%",
              }}
            >
              <p style={{color:"#707274"}}> Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col">
              <img
                src="media/images/intradayTrades.svg"
                style={{ width: "120%" }}
              ></img>
            </div>
            <div
              className="col-1"
              style={{
                width: "7vw",
                fontSize: "70%",
                textAlign: "left",
                marginTop: "4vw",
              }}
            >
              <p style={{color:"#707274"}}>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
