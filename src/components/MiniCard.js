import React from 'react';
import pattern from '../images/Pattern.png'
const MiniCard = () => {
    return (
        <div  className='w-[55%] mx-auto border-y-2 flex justify-between my-5'>
            <div className='flex items-center gap-5 text-black p-5 w-[50%]'>
                <h2 className='text-2xl font-bold'>1294</h2>
                <img src={pattern} alt="" className='h-[15px]' />
                <p className='text-[14px]'>Delivered Packages</p>
            </div>
            <div className='flex items-center gap-5 text-black p-5 border-l-2 w-[50%]'>
                <h2 className='text-2xl font-bold'>1294</h2>
                <img src={pattern} alt="" className='h-[15px]' />
                <p className='text-[14px]'>Delivered Packages</p>
            </div>
        </div>
    );
};

export default MiniCard;