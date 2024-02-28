import { Link } from 'react-router-dom';
import Container from '../../SectionComs/Container/Container';
import img1 from '../../assets/icons/Vector.png'
import img2 from '../../assets/icons/Vector_log.png'
import { GoDotFill } from "react-icons/go";

const Footer = () => {
  return (
    <div className='bg-[#11121F] dark:bg-[#F2F4F6] border-t border-t-[#1e2037] dark:border-t-[#7a8aa062] py-5 -mt-[2px]'>
      <Container>
        <div className='flex justify-between items-center'>
          <Link to='/'>
            <img src={img1} alt="Ethereum Logo" className='w-[116px] h-auto hidden md:block'/>
            <img src={img2} alt="Ethereum Logo" className='w-[28px] h-auto block md:hidden'/>
          </Link>

          <div className='flex items-center text-[#676a8f] dark:text-[#7A8AA0] gap-x-3 relative'>
            <Link to='/' className='text-[15px] hover:underline'>Terms of use</Link>
            <GoDotFill className='text-[9px]' />
            <Link to='/' className='text-[15px] hover:underline'>Privacy notice</Link>
            <span className='text-white text-[14px] bg-[#17182a] dark:text-[#586372] dark:bg-[#e0e1e4] px-4 py-1 border border-[#22243f] dark:border-[#7a8aa062] rounded-md'>V0 29 0</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
