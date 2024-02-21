import React from 'react';
import downArrow from '../../assets/down_arrow.png';
import group11 from '../../assets/Group 11.png';
import group12 from '../../assets/Group 12.png';
import group10 from '../../assets/Group 10.png';
import group13 from '../../assets/Group 13.png';
import '../../Style/style.css';

const AdditionalItems = () => {
  return (
    <div className="mt-4 ml-[30px] text-[14px] flex flex-wrap gap-9 text-[#8D969E] font-medium">
      <div className="flex-1 mb-4">
        <img src={group11} alt="" />
        <p className=''>Rendering Jobs</p>
        <span className="font-bold text-black text-[24px]">10</span>
      </div>
      <div className="flex-1 mb-4">
        <img src={group12} alt="" />
        <p>Waiting Jobs</p>
        <span className="font-bold text-black text-[24px]">15</span>
      </div>
      <div className="flex-1 mb-4">
        <img src={group10} alt="" />
        <p>Completed Jobs</p>
        <span className="font-bold text-black text-[24px]">20</span>
      </div>
      <div className="flex-1 mb-4">
        <img src={group13} alt="" />
        <p>Failed Jobs</p>
        <span className="font-bold text-black text-[24px]">25</span>
      </div>
    </div>
  );
};

const MiddleContainer = () => {
  return (
    <div className="ml-4 relative">
      <div className="w-full lg:w-[634px] h-[208px] bg-[#FFFFF] shadow-md mb-4 lg:mb-0 relative rounded-md">
        <div className='flex items-center justify-between p-4'>
          <div>
            <h1 className='font-medium'>Running jobs</h1>
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
            <h1 className='font-medium'>Another Section</h1>
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
                  {/* <img src={iconUrl} alt="View" className="w-6 h-6" /> */}
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