import React from 'react';
import user1 from '../images/User (1).png'
import user2 from '../images/User.png'
import cote from '../images/_ (1).png'
import star from '../images/Star.png'
const CustomerSay = () => {
    return (
        <div className='w-[70%] mx-auto my-[5%]'>
            <p className='text-[12px] text-black bg-[#80808042] w-fit p-1 border-l-4 border-yellow-500'>What We Do</p>
            <h2 className='text-2xl font-bold text-black'>What Our Customer Say</h2>

            <div className='grid grid-cols-2'>
                <div className='bg-[#F4F4F4] p-[10%] my-[7%]'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='flex'>
                        <img src={user2} alt="" className='w-[50px] h-[50px] mr-3'/>
                        <div>
                            <h3 className='text-black text-[16px] font-bold'>Kathleen Smith</h3>
                            <p className='text-black text-[12px]'>Fuel Company</p>
                        </div>
                        </div>
                        <div>
                            <img src={cote} alt="" className='w-[50px] h-[50px]' />
                        </div>
                    </div>
                    <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    <img src={star} alt="" className='w-[35%] mt-4' />
                </div>
                <div className='bg-[#091242] p-[10%] my-[7%]'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='flex'>
                        <img src={user1} alt="" className='w-[50px] h-[50px] mr-3'/>
                        <div>
                            <h3 className='text-black text-[16px] font-bold'>Kathleen Smith</h3>
                            <p className='text-black text-[12px]'>Fuel Company</p>
                        </div>
                        </div>
                        <div>
                            <img src={cote} alt="" className='w-[50px] h-[50px]' />
                        </div>
                    </div>
                    <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    <img src={star} alt="" className='w-[35%] mt-4' />
                </div>
            </div>
        </div>
    );
};

export default CustomerSay;