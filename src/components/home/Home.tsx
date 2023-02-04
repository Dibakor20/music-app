import React, { useEffect } from 'react';
import { getAllMusic } from '../../service/api.service';
import Sidebar from '../dashboard/Sidebar';

const Home = () => {
    useEffect(() => {
      const musicData =  getAllMusic("ddd") 
    },[])
    return (
        <>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar/>
                </div>
                <div className='col-md-6'>
                    <h1>This is home page</h1>
                </div>
            </div>  
        </>
    );
};

export default Home;