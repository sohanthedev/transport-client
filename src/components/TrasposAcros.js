import React from 'react';
import './Traspos.css'
const TrasposAcros = () => {
    return (
        <div className='mt-[5%] relative'>
            <h2 className='text-xl font-bold text-black text-center mb-5'>Transporting Across The World</h2>
         <div className='w-[88%] mx-auto mb-[-5%]'>
         <div className='grid grid-cols-5'>
           <div className='trak relative'>
             <div className='absolute bottom-2'>
             <p className='text-white text-[14px] font-bold '>Liquid Transportation</p>
                <p className='text-yellow-500 text-[11px] font-bold '>Premium Tankers</p>
             </div>
            </div>
           <div className='manAndWoman relative'>
           <div className='absolute bottom-2'>
             <p className='text-white text-[14px] font-bold '>Packaging Solutions</p>
                <p className='text-yellow-500 text-[11px] font-bold '>Warehouse Management</p>
             </div>
            </div>
           <div className='trak2 relative'>
           <div className='absolute bottom-2'>
             <p className='text-white text-[14px] font-bold '>Contract Logistics</p>
                <p className='text-yellow-500 text-[11px] font-bold '>Road Transportation</p>
             </div>
            </div>
           <div className='seaPort relative'>
           <div className='absolute bottom-2'>
             <p className='text-white text-[14px] font-bold '>Warehouse & Distribution</p>
                <p className='text-yellow-500 text-[11px] font-bold '>Large Warehouse</p>
             </div>
            </div>
           <div className='ship relative'>
           <div className='absolute bottom-2'>
             <p className='text-white text-[14px] font-bold '>Specialized Transport</p>
                <p className='text-yellow-500 text-[11px] font-bold '>Ocean Transports</p>
             </div>
            </div>
           
           </div>
         </div>
         <div className='bg-[#FFDA56] w-full h-[30vh] '>

         </div>
        </div>
    );
};

export default TrasposAcros;