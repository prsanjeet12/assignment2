import React from 'react';

const TopHeader = () => {
  return (
    <div className='w-full h-[40px] bg-[#E6F1FF] flex justify-center items-center'>
      <h1 className='font-sans text-sm md:text-base lg:text-lg xl:text-[14px] text-[#011627] font-medium text-center'>
        SGCloud agent not running. Please <span className='text-[#0171FE]'>download</span> and launch SGCloud agent
      </h1>
    </div>
  );
};

export default TopHeader;