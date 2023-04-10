import React from 'react';
import banner from '../images/Photo (18).png'
const FooterBanner = () => {
    return (
        <div className=''>
            <img src={banner} alt=""  />
            <div className='bg-[#0f1c68ec] h-[9vh] '>
                <div className='grid grid-cols-4 w-[60%] mx-auto'>
                    <h3 className='text-white text-xl font-semibold p-3 '>Our Logo</h3>
                    <h3 className='text-white text-xl font-semibold p-3 '>Pages</h3>
                    <h3 className='text-white text-xl font-semibold p-3 '>Utility</h3>
                    <h3 className='text-white text-xl font-semibold p-3 '>Subscribe</h3>
                </div>
            </div>
        </div>
    );
};

export default FooterBanner;