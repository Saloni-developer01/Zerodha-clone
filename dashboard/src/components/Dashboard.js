import React from 'react';
import {Routes, Route} from "react-router-dom";
import WatchList from './WatchList';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Postions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import { GeneralContextProvider } from './GenernalContext';

const Dashboard = () => {
    return (
         <div className='dashboard-container'>
            <GeneralContextProvider>
                <WatchList/>
            </GeneralContextProvider>
            <div className='content'>
                <Routes>
                    <Route exact path='/' element={<Summary/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/holdings' element={<Holdings/>}/>
                    <Route path='/positions' element={<Postions/>}/>
                    <Route path='/funds' element={<Funds/>}/>
                    <Route path='/apps' element={<Apps/>}/>
                </Routes>
            </div>
         </div>
    );
}

export default Dashboard;