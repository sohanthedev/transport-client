import React from 'react';
import blogImg1 from '../images/Photo (15).png'
import blogImg2 from '../images/Photo (16).png'
import blogImg3 from '../images/Photo (17).png'
import icon from '../images/Icon (19).png'
const OurNews = () => {
    return (
        <div className='my-5 bg-white ' >
             <p className='text-center text-[12px] text-black bg-[#80808042] w-fit p-1 border-l-4 border-yellow-500 ml-[45%]'>Our Blog</p>
             <h2 className='text-2xl font-bold text-black ml-[40%] my-5'>Our Latest News</h2>
             <div className='w-[57%] mx-auto'>
                <hr />
                <div className='grid grid-cols-2 my-5'>
               <div className='flex border-r-2'>
               <img src={blogImg1} alt="" className='w-[75%] mr-5' />
                <div>
                <img src={icon} alt="" />
                <h3 className='text-2xl font-bold text-black'>06</h3>
                <p className='text-[11px] text-[#666C89]'>September</p>
                </div>
               </div>
               <div className='p-4'>
                    <h3 className='text-xl font-semibold text-black'>Inland freight a worthy solution for your business</h3>
                    <p className='text-[12px] text-[#666C89] my-2'>We are dedicated in creating <br /> added value for our customers <br /> by implementing modern technology in our work. </p>
                    <ul className="list-disc list-inside text-black text-[14px]">
                        <li>Urgent transport solutions</li>
                        <li>Urgent transport solutions</li>
                        <li>Urgent transport solutions</li>
                        <li>Urgent transport solutions</li>
                    </ul>
                </div>
                </div>
                <hr />
                <div className='grid grid-cols-2 my-5'>
               <div className='flex border-r-2'>
               <img src={blogImg2} alt="" className='w-[75%] mr-5' />
                <div>
                <img src={icon} alt="" />
                <h3 className='text-2xl font-bold text-black'>12</h3>
                <p className='text-[11px] text-[#666C89]'>September</p>
                </div>
               </div>
               <div className='p-4'>
                    <h3 className='text-xl font-semibold text-black'>Inland freight a worthy solution for your business</h3>
                    <p className='text-[12px] text-[#666C89] my-2'>We are dedicated in creating <br /> added value for our customers <br /> by implementing modern technology in our work. </p>
                    <ul className="list-disc list-inside text-black text-[14px]">
                        <li>Urgent transport solutions</li>
                        <li>Urgent transport solutions</li>
                        <li>Urgent transport solutions</li>
                        <li>Urgent transport solutions</li>
                    </ul>
                </div>
                </div>
                <hr />
                <div className='grid grid-cols-2 my-5'>
               <div className='flex border-r-2'>
               <img src={blogImg3} alt="" className='w-[75%] mr-5' />
                <div>
                <img src={icon} alt="" />
                <h3 className='text-2xl font-bold text-black'>16</h3>
                <p className='text-[11px] text-[#666C89]'>September</p>
                </div>
               </div>
               <div className='p-4'>
                    <h3 className='text-xl font-semibold text-black'>Inland freight a worthy solution for your business</h3>
                    <p className='text-[12px] text-[#666C89] my-2'>We are dedicated in creating <br /> added value for our customers <br /> by implementing modern technology in our work. </p>
                    <ul className="list-disc list-inside text-black text-[14px]">
                        <li>Urgent transport solutions</li>
                        <li>Urgent transport solutions</li>
                        <li>Urgent transport solutions</li>
                        <li>Urgent transport solutions</li>
                    </ul>
                </div>
                </div>
                <button className='bg-black text-white  btn ml-[45%] my-3'>More blog</button>
             </div>
        </div>
    );
};

export default OurNews;