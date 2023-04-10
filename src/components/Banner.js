import React from 'react';
import './Banner.css'
import Header from './header';
const Banner = () => {
    return (
        <div className=' banner-style '>
            <Header></Header>
            <div className='w-[80%] mx-auto mt-[7%]'>
                <p className='text-white bg-[#0000004e] w-fit text-[14px] p-1'>Logistics & Supply Chain Solutions</p>
               <p className='text-[40px] text-white font-bold'>
               Your Gateway <br />
to any Destination <br /> in the World
               </p>
              <p className='text-[13px] text-white '>
              In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu <br /> no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim <br /> diam interdum nulla, sed laoreet risus lectus. 
              </p>
              <button className='text-black bg-yellow-500 w-[150px] h-[40px] mt-3'>Explore More</button>
            </div>
        </div>
    );
};

export default Banner;