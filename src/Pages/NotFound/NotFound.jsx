import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1a1b2e]">
      <div className='flex flex-col justify-center items-center'>
        <div className='relative'>
          <h2 className='text-[#2f3253] text-[150px] md:text-[300px] font-extrabold text-center'>404</h2>
          <div className='w-[280px] md:w-[500px] h-[180px] md:h-[300px] bg-[#5f67da] bg-opacity-25 absolute top-5 md:top-16 blur-3xl'></div>
        </div>
        <p className='text-[#3d416b] text-4xl md:text-[47px] font-serif font-extrabold text-center -mt-8 md:-mt-16 mb-8 md:mb-10 leading-[50px] md:leading-[60px]'>Oops ! <br /> Page not found</p>

        <Link to="/" className="text-[#9d9d9e] bg-[#1e2036] border border-[#2c2f4e] hover:border-[#393c64] py-3 px-4 capitalize flex justify-center items-center rounded-md group cursor-pointer">
          <FaArrowLeft className='text-[18px] mr-2 group-hover:mr-3 duration-200' />
          <span className=''>Back To Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
