import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"#FBFBFB"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/logo.svg' style={{width: "50%"}}></img>
                    <p style={{fontSize:"14px", color:"grey", marginTop:"7%"}}>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
                </div>
                <div className='col'>
                    <p className='para'>Company</p>
                    <a href=''  style={{textDecoration:"none", lineHeight:"1.8", color:"grey", fontWeight:"500"}}>About</a><br/>
                    <a href=''  style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Products</a><br/>
                    <a href=''  style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Pricing</a><br/>
                    <a href=''  style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Referral programme</a><br/>
                    <a href=''  style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Careers</a><br/>
                    <a href=''  style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Zerodha.tech</a><br/>
                    <a href=''  style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Open source</a><br/>
                    <a href=''  style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Press & media</a><br/>
                    <a href=''  style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Zerodha Cares (CSR)</a><br/>
                </div>
                <div className='col'>
                    <p className='para'>Support</p>
                    <a href='' style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Contact us</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Support portal</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Z-Connect blog</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>List of charges</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Downloads & resources</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Videos</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Market overview</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>How to file a complaint?</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Status of your complaints</a><br/>
                </div>
                <div className='col'>
                    <p className='para'>Account</p>
                    <a href='' style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Open an account</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"1.8", color:"grey" ,fontWeight:"500"}}>Fund transfer</a><br/>
                </div>
            </div>

        <div className='mt-5 text-muted' style={{fontSize:"12px"}}>
            <p style={{color:"#A1A3A1"}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <span style={{color:"#67A1DE", fontWeight:"500"}}>complaints@zerodha.com,</span> for DP related to <span style={{color:"#67A1DE", fontWeight:"500"}}>dp@zerodha.com.</span> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p style={{color:"#A1A3A1"}}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

            <p style={{color:"#A1A3A1"}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p style={{color:"#A1A3A1"}}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p style={{color:"#A1A3A1"}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        </div>

        <ul style={{display:"flex", justifyContent:"space-evenly"}}>
            <li className='footerLink'><a href='' style={{textDecoration:"none",  color: "grey"}}>NSE</a></li>
            <li className='footerLink'><a href='' style={{textDecoration:"none",  color: "grey"}}>BSE </a></li>
            <li className='footerLink'><a href='' style={{textDecoration:"none",  color: "grey"}}>MCX </a></li>
            <li className='footerLink'><a href='' style={{textDecoration:"none",  color: "grey"}}>Terms & conditions</a></li>
            <li className='footerLink'><a href='' style={{textDecoration:"none",  color: "grey"}}>Policies & procedures </a></li>
            <li className='footerLink'><a href='' style={{textDecoration:"none",  color: "grey"}}>Privacy policy </a></li>
            <li className='footerLink'><a href='' style={{textDecoration:"none",  color: "grey"}}>Disclosure </a></li>
            <li className='footerLink'><a href='' style={{textDecoration:"none",  color: "grey"}}>For investor's attention </a></li>
            <li className='footerLink'><a href='' style={{textDecoration:"none",  color: "grey"}}>Investor charter</a></li>
        </ul>
    </div>
    </footer>
    );
}

export default Footer;