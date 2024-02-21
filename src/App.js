import React from 'react';
import TopHeader from './Components/Dashboard/TopHeader';
import SideBar from './Components/Dashboard/Sidebar';
import Header from './Components/Dashboard/Header';
import MiddleContainer from './Components/Dashboard/MiddleContainer';
import RightContainer from './Components/Dashboard/RightContainer';
// import Footer from './components/Dashboard/Footer.tsx';

function App() {
  return (
    <div className='relative'>
      <TopHeader />
      <div className="flex flex-col lg:flex-row">
        <SideBar />
        <div className="flex flex-col w-full lg:flex-grow">
          <Header />
          {/* <Footer/> */}
          <div className='mt-5 lg:flex flex-col'> 
            <MiddleContainer className="mt-4" />
            <RightContainer/>
         
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
