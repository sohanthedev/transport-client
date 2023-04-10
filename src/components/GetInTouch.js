import React from 'react';
import gmail from '../images/Icon (15).png'
import phone from '../images/Icon (16).png'
import time from '../images/Icon (17).png'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
const GetInTouch = () => {
    return (
        <div className='bg-[#091242] py-[8%]'>
            <div className='grid grid-cols-3 w-[60%] mx-auto text-white'>
                <div className=''>
                   <p className='text-[10px] text-white'>
                   Contact
                   </p>
                   <h3 className='text-xl font-bold my-1'>Get in touch with us</h3>
                   <p className='text-[11px]'>Leverage agile frameworks to provide a <br /> robust synopsis for strategy foster <br /> collaborative thinking to further the overall value.</p>
                   <div className='my-5'>
                    <div className='flex items-center'>
                        <img src={gmail} alt="" className='w-[35px] mr-3' />
                        <div>
                            <p className='text-[12px]'>Email</p>
                            <p className='text-[12px]'>sohandev22@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center my-4'>
                        <img src={phone} alt="" className='w-[35px] mr-3' />
                        <div>
                            <p className='text-[12px]'>Call us</p>
                            <p className='text-[12px]'>+880142330687</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={time} alt="" className='w-[35px] mr-3' />
                        <div>
                            <p className='text-[12px]'>Mon - Sat 9.00 - 18.00</p>
                            <p className='text-[12px]'>Sunday Closed</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div className='col-span-2 p-7'>
                <div className='flex gap-4'>
                <input type="text" className='border bg-[#091242] text-white w-[45%] h-[30px] p-3' placeholder='Your name*'/>
                <input type="text" className='border bg-[#091242] text-white w-[45%] h-[30px] p-3' placeholder='Email*'/>
                </div>
                <div className='flex gap-4 my-4'>
                <input type="text" className='border bg-[#091242] text-white w-[45%] h-[30px] p-3' placeholder='Phone*'/>
                <input type="text" className='border bg-[#091242] text-white w-[45%] h-[30px] p-3' placeholder='City*'/>
                </div>
                <textarea name="" id="" cols=""  className='border bg-[#091242] text-white w-[94%] h-[44%] p-3' placeholder='Your Message'></textarea>
                <button className='text-black bg-yellow-500 w-[150px] h-[40px] mt-3 p-2'>Submit Message</button>
                </div>
            </div>
            <div>

            </div>
            <div className='w-[60%] mx-auto flex mt-[5%]'>
                <img src={img1} alt="" className='w-[23%]' />
                <img src={img2} alt="" className='w-[23%]'/>
                <img src={img3} alt="" className='w-[23%]'/>
                <img src={img4} alt="" className='w-[23%]'/>
            </div>
        </div>
    );
};

export default GetInTouch;