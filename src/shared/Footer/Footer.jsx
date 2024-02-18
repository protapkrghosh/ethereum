import { Link } from 'react-router-dom';
import Container from '../../SectionComs/Container/Container';
import img from '../../assets/icons/Vector.png'
import { GoDotFill } from "react-icons/go";

const Footer = () => {
  return (
    <div className='bg-[#11121F] border-t border-t-[#1e2037] py-5'>
      <Container>
        <div className='flex justify-between items-center'>
          <Link to='/'>
            <img src={img} alt="Ethereum Logo" className='w-[116px] h-auto'/>
          </Link>

          <div className='flex items-center text-[#676a8f] gap-x-3 relative'>
            <Link to='/' className='text-[15px] hover:underline'>Terms of use</Link>
            <GoDotFill className='text-[9px]'/>
            <Link to='/' className='text-[15px] hover:underline'>Privacy notice</Link>
            <span className='text-white text-[14px] bg-[#17182a] px-4 py-1 border border-[#22243f] rounded-md'>V0 29 0</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
