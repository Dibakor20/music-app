import React, { useEffect } from 'react';
import FavouritePlayList from '../carousel/FavouritePlayList';
import UserPlayList from '../carousel/UserPlayList';
import Navbar from '../dashboard/Navbar';
import Sidebar from '../dashboard/Sidebar';

const Home = () => {
    
    return (
        <>
            <div className='row'>
                <div className='col-md-2 px-0'>
                    <Sidebar/>
                </div>
                <div className='col-md-10 px-0'>
                    <Navbar/>
                    <UserPlayList />
                    <FavouritePlayList/>
                </div>
            </div>  
        </>
    );
};

export default Home;