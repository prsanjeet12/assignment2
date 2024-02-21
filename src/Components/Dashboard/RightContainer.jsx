import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import icon15 from '../../assets/Group 222.png';

const RightContainer = () => {
  const data = [
    { name: '21 Jan', uv: 100 },
    { name: '22 Jan', uv: 0 },
    { name: '23 Jan', uv: 40 },
    { name: '24 Jan', uv: 20 },
    { name: '24 Jan', uv: 20 },
    { name: '25 Jan', uv: 60 },
  ];

  return (
    <div className="absolute 
    
    top-[152px]
    
    left-[954px]">
      <div className="w-full
    lg:mt-4 md:w-[200px]
       
       lg:w-[446px] h-[504px] bg-[#ffff] shadow-md rounded-md">
        <h1 className="text-2xl font-bold p-4">Network</h1>
        <div className="p-4 ">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#111827"
                fill="#111827"
                fillOpacity={0.9}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-4">
        <div className="w-full lg:w-[212px] h-[264px] bg-white shadow-lg rounded-lg mb-4 lg:mr-4 lg:mb-0">
          <h2 className="text-xl font-semibold p-4">Balance</h2>
          <div className="flex items-center justify-center mb-4">
            <p className="text-3xl font-bold">$</p>
            <p className="text-3xl font-bold ml-2">458</p>
          </div>
          <div className="flex mb-4 lg:mb-0">
            <p className="flex-1 text-center border-r border-gray-300">Credits</p>
            <p className="flex-1 text-center">Coupon</p>
          </div>
          <div className="flex mb-2 lg:mb-0">
            <p className="flex-1 text-center">$25</p>
            <p className="flex-1 text-center">$0</p>
          </div>
          <div className="flex items-center mb-4 lg:mb-0">
            <h2 className="text-sm p-4 l">Hours Remaining</h2>
            <p className="flex-1 text-sm font-bold text-center">20:59:09</p>
          </div>
          <button className="w-full lg:w-48 h-12 text-blue-600 border-2 border-blue-600 rounded-full bg-white mb-4 lg:mb-3 lg:ml-3">Recharge Now</button>
        </div>
        <div className="w-full lg:w-[212px] h-[264px] bg-white shadow-lg rounded-md relative">
          <h2 className="text-xl font-semibold p-4">Storage</h2>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={icon15} alt="Storage icon" className="h-16 ml-[20px] mt-[50px] w-36 object-contain" />
            <p className="text-2xl font-semibold text-center ">88 GB</p>
            <p className="text-center whitespace-nowrap">Out of 100 GB (88%)</p>
            <button className="w-full lg:w-48 h-12 text-blue-600 border-2 mt-4 border-blue-600 rounded-full bg-white">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
