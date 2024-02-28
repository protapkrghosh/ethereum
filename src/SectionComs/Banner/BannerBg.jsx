
// const BannerBg = () => {
//   return (
//     <div className="bg-[#11121F] overflow-hidden">
//       <div className="ml-20 shadowOne h-[410px] xl:min-h-[410px] 2xl:h-[450px] w-full">
//         <div className="ml-72 shadowTwo h-[410px] xl:min-h-[410px] 2xl:h-[450px] w-full">
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerBg;




import React from 'react';

const BannerBg = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <div className="bg-[#11121F] dark:bg-[#F2F4F6] md:flex justify-center -my-[2px]">
          <div className='shadowOne w-[360px] md:w-[435.622px] h-[225px] md:h-[307.686px]'>
          </div>
          <div className='shadowTwo'>
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <div className="bg-[#11121F] md:flex justify-center -my-[2px]">
          <div className='shadowOne w-[330px] md:w-[435.622px] h-[225px] md:h-[307.686px]'>
          </div>
          <div className='md:shadowTwo'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBg;
