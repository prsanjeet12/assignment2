import React from 'react';
import downArrow from '../../assets/down_arrow.png'
import gift from '../../assets/Gift.png'
import notification from '../../assets/Notification.png'
import User from '../../assets/Ellipse 1.png'

const Header = () => {
  return (
    <div className="bg-[#FFFFF] h-[72px] w-full flex items-center justify-end px-4 border-b border-[#D9DCDF]">
     
      <div className='flex items-center justify-between flex-1'>
        <div className='flex items-center space-x-2'>
          <h1 className='text-base md:text-lg font-medium'>Default Project</h1>
          <img src={downArrow} alt="" className='h-4 w-4 md:h-5 md:w-5'/>
        </div>
        
        <div className='hidden md:flex lg:ml-[750px] gap-6'>
          <img src={gift} alt="" className='h-6 w-6'/>
          <img src={notification} alt="" className='h-6 w-6'/>
        </div>

        <div className='flex items-center space-x-2'>
          <img src={User} alt="" className='h-6 w-6'/>
          <span className='text-base md:text-lg'>Daren Joe</span>
          <img src={downArrow} alt="" className='h-4 w-4 md:h-5 md:w-5'/>
        </div>
      </div>
    </div>
  );
};

export default Header;