import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
        <div className='row text-center'>
            <h1 style={{marginTop:"5%", color:"#424242", fontSize:"2.4vw"}}>The Zerodha Universe</h1>
            <p  style={{marginTop:"1.5%", fontSize:"1.2vw"}}>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='col-4 p-3 mt-5'>
                <img src="media/images/zerodhaFundhouse.png" style={{width:"59%"}}/>
                <p style={{fontSize:"1vw", color:"#9BA0BB", marginTop:"5%"}}>Our asset management venturethat is creating simple and transparent index funds to help you save for your goals.</p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src="media/images/sensibull-logo.svg"  style={{width:"69%"}}/>
                <p style={{fontSize:"1vw", color:"#9BA0BB", marginTop:"7%"}}>Options trading platform that lets youcreate strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src="media/images/tijori.svg"  style={{width:"49%"}}/>
                <p style={{fontSize:"1vw", color:"#9BA0BB", marginTop:"7%"}}>Investment research platformthat offers detailed insights on stocks, sectors, supply chains, and more.</p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src="media/images/streakLogo.png"  style={{width:"50%"}}/>
                <p  style={{fontSize:"1vw", color:"#9BA0BB", marginTop:"7%"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src="media/images/smallcaseLogo.png"  style={{width:"65%"}}/>
                <p  style={{fontSize:"1vw", color:"#9BA0BB", marginTop:"7%"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src="media/images/ditto-logo.png"  style={{width:"40%"}}/>
                <p  style={{fontSize:"1vw", color:"#9BA0BB", marginTop:"7%"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
            </div>

            <button className="p-2 btn mb-5" style={{width:"20%", margin:"5% auto", fontWeight:"500", backgroundColor:"#387ED1", color:"white", fontSize:"1.5vw"}}>Sign up for free</button>

        </div>
    </div>
    );
}

export default Universe;