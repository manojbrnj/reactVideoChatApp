import React from 'react';

function Header() {
  return (
    <>
      <div className='main-video-header w-full h-14 bg-blue-500'>
        <div className='logo w-44 h-full bg-gray-200 '>
          <img className='img w-full h-full'></img>
        </div>
      </div>
      <div className='hero-section w-[81%] h-[29rem]  '>
        <div className='content w-full flex-row gap-5 h-full bg-gray-500'>
          <div className='local h-full bg-gray-100 '></div>
          <div className='remote h-full bg-grey-100'></div>
        </div>
      </div>
    </>
  );
}

export default Header;
