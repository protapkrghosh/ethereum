import Container from "../Container/Container";
import shadow1 from "@/assets/icons/Ellipse51.png"
import shadow2 from "@/assets/icons/Ellipse6.png"
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"

const Connect = () => {
  return (
    <div className="bg-[#11121F] overflow-hidden pb-5">
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



        {/* card section imput */}
        <div className="bg-[#11121F] px-[60px] md:px-[300px] xl:px-[348px] 2xl:px-[30%]">
          <div className="border border-[#1f213a] bg-[#151727] p-6 rounded-[18px]">
            <div>
              <p className=" text-[#fff] font-urbanist text-[20px] font-semibold mt-[32px] mb-[24px]">12 - word recovery phrase</p>
              <div className="mb-[32px]">
                <form>
                  <Input type="textarea" className="h-[154px] border border-[#1f213a] px-6 py-8 rounded-[18px] bg-transparent" />
                </form>
              </div>
              <div className="w-[100%] mb-[32px]">
                <Link to="/" className=' flex justify-center text-[#BEC3FF80] text-[20px] font-medium bg-[#6E75D20F] px-3.5 py-4 border border-[#473e8b] rounded-md'>Connect wallet</Link>
              </div>
            </div>





          </div>
        </div>

      </Container >
    </div >
  );
};

export default Connect;