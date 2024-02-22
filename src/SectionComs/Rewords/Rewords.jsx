import Container from "../Container/Container";
import shadow1 from "@/assets/icons/Ellipse51.png"
import shadow2 from "@/assets/icons/Ellipse6.png"
import icons from "@/assets/icons/logos_ethereum.png"
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"

const Rewords = () => {
  return (
    <div className="bg-[#11121F] overflow-hidden pb-5">
      <Container>
        <div>
          <div className=" relative">
            <div className="text-center">
              <p className="text-white text-[30px] font-medium mb-2 leading-9">Received a reward from us? <br /> Congratulations</p>
              <p className="text-[#8877c3] md:w-[50%] xl:w-[61%] 2xl:w-[34%] mx-auto">If you’ve received the Ethereum Airdrop in the ongoing event you’re just a step away from calming your 10 ETH rewards for free</p>
            </div>
          </div>

          {/* Card */}
          <div className="bg-[#11121F] px-[60px] md:px-[300px] xl:px-[348px] 2xl:px-[30%]">
            <div className="border border-[#1f213a] bg-[#151727] rounded-[18px]">
              <div>
                <div className="px-6 pt-6">
                  <div className="flex justify-between items-center border border-[#1f213a] px-6 py-4 rounded-[18px] mb-6">
                    <div className="text-[19px]">
                      <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">10 ETH = $ 25.000.00</p>
                    </div>

                    <Link to="/" className='text-white text-[14px] font-medium bg-[#3b3474] px-4 py-[6px] border border-[#473e8b] rounded-md uppercase'>For Free</Link>
                  </div>
                </div>

                <div className="px-6">
                  <form>
                    <div className="flex items-center relative">
                      <label htmlFor="" className="absolute ml-6">
                        <img src={icons} alt="Icons" />
                      </label>

                      <Input type="email" placeholder="Ethereum address" className="border border-[#1f213a] px-12 py-8 rounded-[18px] bg-transparent text-[18px] placeholder:text-[18px] placeholder:font-medium text-[#6c6c96] placeholder:text-[#6c6c96]" />
                    </div>

                    <input type="submit" value="Send" className="border border-[#1f213a] px-12 py-[18px] rounded-[18px] text-[18px] font-semibold placeholder:text-[18px] placeholder:font-medium text-[#6c6c96] placeholder:text-[#6c6c96] w-full cursor-pointer mt-6 bg-[#1f213a3d]" />
                  </form>
                </div>

                <div className="py-[30px] flex justify-between items-center px-6">
                  <p className="text-[18px] text-[#686b91] capitalize">Total Rewords</p>
                  <div className="text-[19px]">
                    <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">9,510,644 B30 ETH</p>
                  </div>
                </div>

                <div className="bg-[#1f213a] h-[1px]" />

                <div className="py-[30px] flex justify-between items-center px-6">
                  <p className="text-[18px] text-[#686b91] capitalize">Random Winners</p>
                  <div className="text-[19px]">
                    <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">353136</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Rewords;
