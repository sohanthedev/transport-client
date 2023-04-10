import React from 'react';
import person1 from '../images/photo (12).png'
import person2 from '../images/photo (13).png'
import person3 from '../images/photo (14).png'
const OurTeam = () => {
    return (
        <div className='my-[7%] w-[60%] mx-auto'>
            <p className='text-center text-[12px] text-black bg-[#80808042] w-fit p-1 border-l-4 border-yellow-500 ml-[40%]'>The Transporters</p>
            
            <h2 className='text-2xl font-bold text-black ml-[33%] my-5'>Meet Expert Team</h2>

            <div className='grid grid-cols-3'>
            <div>
            <img src={person1} alt="" className='w-[200px]' />
            <div className='bg-[#1C1F35] h-[10vh] w-[200px]'>
               <div className=' pt-[10%] pl-2'>
               <h4 className='text-white font-bold'>
                Jessca Arow
                </h4>
                <p className='text-white text-[10px]'>Designer</p>
               </div>
            </div>
            </div>
            <div>
            <img src={person2} alt="" className='w-[200px]' />
            <div className='bg-[#1C1F35] h-[10vh] w-[200px]'>
               <div className=' pt-[10%] pl-2'>
               <h4 className='text-white font-bold'>
               Kathleen Smith
                </h4>
                <p className='text-white text-[10px]'>Designer</p>
               </div>
            </div>
            </div>
            <div>
            <img src={person3} alt="" className='w-[200px]' />
            <div className='bg-[#1C1F35] h-[10vh] w-[200px]'>
               <div className=' pt-[10%] pl-2'>
               <h4 className='text-white font-bold'>
                Jessca Arow
                </h4>
                <p className='text-white text-[10px]'>Designer</p>
               </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default OurTeam;