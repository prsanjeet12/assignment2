import React from 'react';

const MenuItem = ({ icon, text, active = false }) => {
  const menuItemClass = active ? "bg-blue-500 text-white pb-6 h-12 rounded-md text-center flex tex-center px-5" : "text-[#8D969E] hover:text-[#FFD166]";
  
  return (
    <div className={`flex items-center cursor-pointer mb-2 ${menuItemClass}`}>
      <img src={icon} alt={text} className="w-6 h-6 mr-3 mt-6" />
      <span className="mt-6">{text}</span>
    </div>
  );
};

export default MenuItem;
