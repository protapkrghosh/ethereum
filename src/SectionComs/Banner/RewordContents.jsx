import Container from "../Container/Container";
import shadow1 from "@/assets/icons/Ellipse51.png"
import shadow2 from "@/assets/icons/Ellipse6.png"
import icons from "@/assets/icons/logos_ethereum.png"
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"

const RewordContents = () => {
  return (
    <div className="bg-[#11121F] overflow-hidden pb-5">
      <Container>
        <div className="absolute top-[10.5rem] md:left-[14.5rem] 2xl:left-[23rem]">
          <div className="relative">
            <div className="text-center">
              <p className="text-white text-[30px] font-medium mb-2 leading-9">Received a reward from us? <br /> Congratulations</p>
              <p className="text-[#8877c3] md:w-[50%] xl:w-[61%] 2xl:w-[61%] mx-auto">If you’ve received the Ethereum Airdrop in the ongoing event you’re just a step away from calming your 10 ETH rewards for free</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RewordContents;
