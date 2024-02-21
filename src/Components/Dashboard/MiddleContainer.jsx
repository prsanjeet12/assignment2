import React from 'react';
import downArrow from '../../assets/down_arrow.png';

import '../../Style/style.css';
import AdditionalItems from './AdditionalItems';
import icon18 from '../../assets/icon18.png'


const MiddleContainer = () => {
  return (
    <div className="ml-4 lg:mt-4 relative">
      <div className="w-full lg:w-[634px] h-[208px] bg-[#FFFFF] shadow-md mb-4 lg:mb-0 relative rounded-md">
        <div className='flex items-center justify-between p-4'>
          <div>
            <h1 className='font-medium text-[20px]'>Running jobs</h1>
          </div>
          <div className='flex items-center font-medium'>
            <p className='pr-2'>This week</p>
            <img src={downArrow} alt="Down arrow" className="h-4 w-4" />
          </div>
        </div>
        
        <AdditionalItems />
      </div>

      <div className="w-full
      mt-5
      lg:w-[634px] h-[208px] bg-[#FFFFF] shadow-md mb-4 lg:mb-0 relative rounded-md">
        <div className='flex items-center justify-between p-4'>
          <div>
            <h1 className='font-medium text-[20px]'>Running Frames</h1>
          </div>
          <div className='flex items-center font-medium'>
            <p className='pr-2'>This week</p>
            <img src={downArrow} alt="Down arrow" className="h-4 w-4" />
          </div>
        </div>
     
        <AdditionalItems />
      </div>
      <div className="w-full lg:w-[634px] h-[328px]
       shadow-md rounded-md mt-5 overflow-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th colSpan="5" className="px-4 py-2 font-medium text-lg text-left  bg-white">Active Jobs</th>
            </tr>
            <tr className="">
              <th className="px-4 py-2 text-[#D9DCDF]">Job ID</th>
              <th className="px-4 py-2 text-[#D9DCDF]">Project ID</th>
              <th className="px-4 py-2 text-[#D9DCDF]">STAGE</th>
              <th className="px-4 py-2 text-[#D9DCDF]">Scene / Shot Name</th>
              <th className="px-4 py-2 text-[#D9DCDF]">View</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-400">
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
                <td className="px-4 py-2">1234567890</td>
                <td className="px-4 py-2">Pro_256</td>
                <td className="px-4 py-2">Rendering</td>
                <td className="px-4 py-2">KD1_00123_DPI_JK001</td>
                <td className="px-4 py-2 flex justify-center items-center">
                  <img src={icon18} alt="View" className="w-6 h-6" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MiddleContainer;