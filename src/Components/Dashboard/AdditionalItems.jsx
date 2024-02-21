import React from 'react';
import group11 from '../../assets/Group 11.png';
import group12 from '../../assets/Group 12.png';
import group10 from '../../assets/Group 10.png';
import group13 from '../../assets/Group 13.png';

const AdditionalItems = () => {
  return (
    <div className="mt-4 ml-[30px] text-[14px] flex flex-wrap gap-9 text-[#8D969E] font-medium">
      <div className="flex-1 mb-4">
        <img src={group11} alt="" />
        <p className=''>Rendering Jobs</p>
        <span className="font-bold text-black text-[24px]">14</span>
      </div>
      <div className="flex-1 mb-4">
        <img src={group12} alt="" />
        <p>Waiting Jobs</p>
        <span className="font-bold text-black text-[24px]">14</span>
      </div>
      <div className="flex-1 mb-4">
        <img src={group10} alt="" />
        <p>Completed Jobs</p>
        <span className="font-bold text-black text-[24px]">14</span>
      </div>
      <div className="flex-1 mb-4">
        <img src={group13} alt="" />
        <p>Failed Jobs</p>
        <span className="font-bold text-black text-[24px]">14</span>
      </div>
    </div>
  );
};

export default AdditionalItems;