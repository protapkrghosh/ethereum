import Container from "../Container/Container";
import shadow1 from "@/assets/icons/Ellipse51.png"
import shadow2 from "@/assets/icons/Ellipse6.png"
import icons from "@/assets/icons/logos_ethereum.png"
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"

const RewordContents = () => {
  return (
    <div className="bg-[#11121F] pb-5">
      <Container>
        <div>
          <div className='mt-[-200px]'>
            <div className="text-center">
              <p className="text-white text-[30px] font-medium">Received a reward from us? <br /> Congratulations</p>
              <p className="text-[#8877c3] w-[95%] md:w-[53%] xl:w-[42%] 2xl:w-[561px] mx-auto">If you’ve received the Ethereum Airdrop in the ongoing event you’re just a step away from calming your 10 ETH rewards for free</p>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default RewordContents;
