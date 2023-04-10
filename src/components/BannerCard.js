import React from 'react';
import icon1 from '../images/Icon (6).png'
import icon2 from '../images/Icon (7).png'
import aeroplane from '../images/Photo (3).png'
import girl from '../images/Photo (19).png'
const BannerCard = () => {
    return (
        <div className='w-[55%] mx-auto p-7 mt-[-7%] bg-white'>
            <div className='grid grid-cols-2 relative'>
            <div className='p-7'>
            <p className='text-[12px] text-black bg-[#80808042] w-fit p-1'>What We Do</p>
            <h3 className='font-bold text-[22px] text-black'>We provide full range global logistics solution</h3>
            <p className='text-[#666C89] text-[14px]'>
            Leverage agile frameworks to provide a robust synopsis for strategy foster . <br />
           

Organically grow the holistic world view of disruptive versity and empowerment.
            </p>
            <div className='flex items-center my-2'>
                <img src={icon1} alt="" className='w-[35px]' />
                <p>Delivery on Time</p>
            </div>
            <div className='flex items-center'>
                <img src={icon2} alt="" className='w-[35px]' />
                <p>Optimized Travel Cost</p>
            </div>
            
        
            </div>
            <div className='p-4 '>
                <img src={aeroplane} alt="" />
                <img src={girl} alt="" className='absolute bottom-[10%] right-[30%] w-[150px] border-8 border-[#ffffff]'/>
            </div>
            </div>
        </div>
    );
};

export default BannerCard;