import Container from "../Container/Container";
import shadow1 from "@/assets/icons/Ellipse51.png"
import shadow2 from "@/assets/icons/Ellipse6.png"
import { Link } from "react-router-dom";

const Rewords = () => {
  return (
    <div className="bg-[#11121F] overflow-hidden">
      <Container>
        <div className=" relative">
          <div className="min-h-[410px]">
            <img src={shadow1} alt="Image" className="absolute ml-20" />
            <img src={shadow2} alt="Image" className="absolute ml-[400px]" />
          </div>

          <div className="text-center absolute top-[10rem] left-[12.5rem]">
            <p className="text-white text-[30px] font-medium mb-2 leading-9">Received a reward from us? <br /> Congratulations</p>
            <p className="text-[#8877c3] md:w-[50%] xl:w-[61%] 2xl:w-[34%] mx-auto">If you’ve received the Ethereum Airdrop in the ongoing event you’re just a step away from calming your 10 ETH rewards for free</p>
          </div>
        </div>

        {/* Card */}
        <div className="border-[#1f213a]">
          {/* <div>
            <div>
              <p>10 ETH = $ 25.000.00</p>

              <Link to="/" className='text-white text-[14px] bg-[#17182a] px-4 py-1 border border-[#22243f] rounded-md'>V0 29 0</Link>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Rewords;
