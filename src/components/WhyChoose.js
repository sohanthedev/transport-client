import React from 'react';
import aeroplane from '../images/Photo (11).png'
import feature from '../images/Feature Tag.png'
import icon1 from '../images/Icon (6).png'
import icon2 from '../images/Icon (10).png'
import icon3 from '../images/Icon (11).png'
import icon4 from '../images/Icon (12).png'
import icon5 from '../images/Icon (13).png'
import icon6 from '../images/Icon (14).png'
const WhyChoose = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-2 h-[55vh]'>
            <div className='bg-[#091242] relative'>
                <img src={aeroplane} alt="" className='w-[400px] absolute bottom-[6%] right-[-6%]' />
                <img src={feature} alt="" className='w-[150px] absolute bottom-[6%] right-[12%]' />
            </div>
            <div className='bg-[#F4F4F4] p-[12%]'>
            <p className='text-[12px] text-black bg-[#80808042] w-fit p-1 border-l-4 border-yellow-500'>What We Do</p>
            <h2 className='text-2xl font-bold text-black'>
            We create opportunity to reach potential
            </h2>
            <p className='text-[12px]'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
            <div className='grid grid-cols-2 my-3'>
                <div className='flex items-center'>
                    <img src={icon1} alt="" className='w-[35px] mr-3'/>
                    <p className='text-black text-[14px]'>Safe Package</p>
                </div>
                <div className='flex items-center'>
                    <img src={icon2} alt="" className='w-[35px] mr-3'/>
                    <p className='text-black text-[14px]'>Ship Everyware</p>
                </div>
            </div>
            <div className='grid grid-cols-2 my-3'>
                <div className='flex items-center'>
                    <img src={icon3} alt="" className='w-[35px] mr-3'/>
                    <p className='text-black text-[14px]'>Global Tracking</p>
                </div>
                <div className='flex items-center'>
                    <img src={icon4} alt="" className='w-[35px] mr-3'/>
                    <p className='text-black text-[14px]'>24/7 Support</p>
                </div>
            </div>
            <div className='grid grid-cols-2 my-3'>
                <div className='flex items-center'>
                    <img src={icon5} alt="" className='w-[35px] mr-3'/>
                    <p className='text-black text-[14px]'>In Time Delivery</p>
                </div>
                <div className='flex items-center'>
                    <img src={icon6} alt="" className='w-[35px] mr-3'/>
                    <p className='text-black text-[14px]'>Transparant Pricing</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default WhyChoose;