import Container from "../Container/Container";
import shadow1 from "@/assets/icons/Ellipse51.png"
import shadow2 from "@/assets/icons/Ellipse6.png"
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"

const Rewords = () => {
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

                {/* Card */}
                <div className="bg-[#11121F] px-[60px] md:px-[300px] xl:px-[348px] 2xl:px-[30%]">
                    <div className="border border-[#1f213a] bg-[#151727] p-6 rounded-[18px]">

                        <div>
                            <div className="flex justify-between items-center border border-[#1f213a] px-6 py-4 rounded-[18px] mb-6">
                                <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">10 ETH = $ 25.000.00</p>

                                <Link to="/" className='text-white text-[14px] font-medium bg-[#3b3474] px-4 py-[6px] border border-[#473e8b] rounded-md uppercase'>For Free</Link>
                            </div>

                            <div >
                                <form>
                                    <Input type="email" placeholder="Ethereum address" className="border border-[#1f213a] px-6 py-8 rounded-[18px] bg-transparent placeholder:text-[18px] placeholder:font-medium" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Rewords;
