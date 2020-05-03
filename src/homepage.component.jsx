import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className= 'directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                     <h1 className='titile'>HATS</h1>
                     <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                     <h1 className='titile'>JACKETS</h1>
                     <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                     <h1 className='titile'>SNEAKERS</h1>
                     <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                     <h1 className='titile'>WOMEN</h1>
                     <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                     <h1 className='titile'>MEN</h1>
                     <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
         </div> 
     </div>      
);

export default HomePage;