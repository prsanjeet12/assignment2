import React from 'react';
import MenuItem from './MenuItems';
import icon1 from '../../assets/Frame (1).png';
import icon2 from '../../assets/Frame 2.png';
import icon3 from '../../assets/Frame (2).png';
import icon4 from '../../assets/Frame (12).png';
import icon5 from '../../assets/Frame (4).png';
import icon6 from '../../assets/Frame (6).png';
import icon7 from '../../assets/Frame (7).png';
import icon8 from '../../assets/Frame (8).png';
import icon9 from '../../assets/Frame (9).png';
import icon10 from '../../assets/Frame (10).png';
import icon11 from '../../assets/Frame (11).png';

const Sidebar = () => {
  return (
    <div className="bg-[#011627] h-[984px] w-full md:w-64 
    top-[40px] left-0 border-[#011627] rounded-r-[32px]  
    flex-col hidden sm:hidden lg:flex md:hidden">
      <div className="overflow-y-auto flex-grow">
        <div className="py-4 mt-8 px-6">
          <MenuItem icon={icon1} text="Dashboard" active={true} />
          <MenuItem icon={icon2} text="Assets" />
          <MenuItem icon={icon3} text="Analysis" />
          <MenuItem icon={icon4} text="Jobs" />
          <MenuItem icon={icon5} text="Reports" />
          <MenuItem icon={icon6} text="Transfers" />
        </div>
        <hr className="border-[#445669] my-4" />
        <div className="py-[70px] px-6">
          <MenuItem icon={icon7} text="Project" />
          <MenuItem icon={icon8} text="Settings" />
          <MenuItem icon={icon9} text="Support" />
          <MenuItem icon={icon10} text="Feedback" />
          <MenuItem icon={icon11} text="Raise Ticket" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
