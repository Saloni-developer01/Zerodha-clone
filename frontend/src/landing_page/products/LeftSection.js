import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row'>

                <div className='col-6'>
                    <img src={imageURL}/>
                </div>

                <div className='col-6 p-5' style={{width:"40%", fontSize:"17px", marginLeft:"10%"}}>
                    <h1>{productName}</h1>
                    <p style={{marginTop:"9%", lineHeight:"2"}}>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft:"15%", textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>

                    <div className='mt-3'>
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg"/>
                        </a>
                        <a href={appStore}>
                            <img src='media/images/appstoreBadge.svg' style={{marginLeft:"4%"}}/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LeftSection;