import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4 style={{marginLeft:"-10%"}}>Support Portal</h4>
        <a href=""  style={{marginRight:"-10%", fontWeight:"500",textDecorationLine:"underline", textUnderlineOffset:"10px"}}>Track tickets</a>
      </div>

      <div className="row">

        <div className="col-6 p-5">
            <h1 style={{fontSize:"1.7vw", marginLeft:"11%", fontWeight:"400", marginTop:"-7%", marginBottom:"10%"}}>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."  style={{fontSize:"1.2vw", marginLeft:"11%", fontWeight:"400", marginTop:"-7%", marginBottom:"4%",}} /><br/>
            <div style={{marginLeft:"11%", fontSize:"1.3vw", width:"100%"}}>
            <a href="" style={{textDecorationLine:"underline", textUnderlineOffset:"10px"}}>Track account opening </a>
            <a href="" style={{marginLeft:"5%", extDecorationLine:"underline", textUnderlineOffset:"10px"}}>Track segment activation</a>
            <a href="" style={{marginLeft:"5%", textDecorationLine:"underline", textUnderlineOffset:"10px"}}>Intraday margins </a>
            <br/><br/>
            <a href=""  style={{ textDecorationLine:"underline", textUnderlineOffset:"10px"}}>Kite user manual</a>
            </div>
        </div>

        <div className="col-6 "style={{padding:"0 10%"}}>
            <h1 className="fs-4">Featured</h1>
            <ol>
                <li><a href=""  style={{ fontSize:"1.2vw"}}>Quantity Freeze Limits for Indices from May 02, 2025</a></li>
                <li><a href=""  style={{ fontSize:"1.2vw"}}> 
                Latest Intraday leverages and Square-off timings</a></li>
            </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
