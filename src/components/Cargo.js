import React from 'react';
import icon3 from '../images/Icon (3).png'
import icon4 from '../images/Icon (4).png'
import icon5 from '../images/Icon (8).png'
import icon6 from '../images/Icon (18).png'
const Cargo = () => {
    return (
        <div className='bg-white my-[7%]'>
            <div className='grid grid-cols-3 w-[75%] mx-auto pt-[10%]'>
                <div>
                    <p className='text-[12px] text-black bg-[#80808042] w-fit p-1'>What We Do</p>
                    <h3 className='text-black text-[25px] font-semibold'>
                    Safe & Reliable <br /> Cargo Solutions

                    </h3>
                </div>
                <div className='flex'>
                 <div className='mr-[7%] '>
                 <img src={icon3} alt="" className=' ' />
                 </div>
                  <div className='border-l-2 '>
                <h3 className="text-[18px] font-semibold text-black ml-3">Sea Transport Services</h3>
                <p className='text-[16px]  text-black ml-3'>Following the quality of our service thus having gained trust of our many clients.</p>
                  </div>
                </div>
                <div className='flex'>
                 <div className='mr-[7%] '>
                 <img src={icon4} alt="" className=' ' />
                 </div>
                  <div className='border-l-2 '>
                <h3 className="text-[18px] font-semibold text-black ml-3">Warehousing Services</h3>
                <p className='text-[16px]  text-black ml-3'>Following the quality of our service thus having gained trust of our many clients.</p>
                  </div>
                </div>
            </div>
            <br /><br />
            <div className='grid grid-cols-3 w-[75%] mx-auto '>
               <div></div>
                <div className='flex'>
                 <div className='mr-[7%] '>
                 <img src={icon5} alt="" className=' ' />
                 </div>
                  <div className='border-l-2 '>
                <h3 className="text-[18px] font-semibold text-black ml-3">Air Fright Services</h3>
                <p className='text-[16px]  text-black ml-3'>Following the quality of our service thus having gained trust of our many clients.</p>
                  </div>
                </div>
                <div className='flex'>
                 <div className='mr-[7%] '>
                 <img src={icon6} alt="" className=' ' />
                 </div>
                  <div className='border-l-2 '>
                <h3 className="text-[18px] font-semibold text-black ml-3">Local Shipping Services</h3>
                <p className='text-[16px]  text-black ml-3'>Following the quality of our service thus having gained trust of our many clients.</p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Cargo;