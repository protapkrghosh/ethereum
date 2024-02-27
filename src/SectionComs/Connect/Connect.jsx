// import Container from "../Container/Container";
// import { Link } from "react-router-dom";
// import { Input } from "@/components/ui/input"
// import BannerBg from "../Banner/BannerBg";

// const Connect = () => {
//   return (
//     <div className="bg-[#11121F]">
//       <Container>
//         <BannerBg />
//         <div className="text-center mb-48px">
//           <p className="text-white text-[30px] font-medium">Connect your wallet with Secret <br /> Recovery Phrase</p>
//         </div>


//         {/* card section imput */}
//         <div className="bg-[#11121F] px-[60px] md:px-[300px] xl:px-[348px] 2xl:px-[30%]">
//           <div className="border border-[#1f213a] bg-[#151727] p-6 rounded-[18px]">
//             <div>
//               <p className=" text-[#fff] font-urbanist text-[20px] font-semibold mt-[32px] mb-[24px]">12 - word recovery phrase</p>
//               <div className="mb-[32px]">
//                 <form>
//                   <Input type="textarea" className="h-[154px] border border-[#1f213a] px-6 py-8 rounded-[18px] bg-transparent" />
//                 </form>
//               </div>
//               <div className="w-[100%] mb-[32px]">
//                 <Link to="/" className=' flex justify-center text-[#BEC3FF80] text-[20px] font-medium bg-[#6E75D20F] px-3.5 py-4 border border-[#473e8b] rounded-md'>Connect wallet</Link>
//               </div>
//             </div>


//           </div>
//         </div>

//       </Container >
//     </div >
//   );
// };

// export default Connect;





import React from 'react';
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"
import BannerBg from "../Banner/BannerBg";
import { Textarea } from "@/components/ui/textarea"
import metaMask from "@/assets/wallets/Group1.png"
import coinbase from "@/assets/wallets/Group2.png"
import trust from "@/assets/wallets/Group3.png"
import trezor from "@/assets/wallets/Group4.png"
import ledger from "@/assets/wallets/Group5.png"
import otherWallets from "@/assets/wallets/Group6.png"
import wallet from "@/assets/wallets/wallet.png"
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button';
import { IoClose } from 'react-icons/io5';


const Connect = () => {


  return (
    <div className='bg-[#11121F]'>
      <Container>
        <BannerBg />

        <div className='mt-[-200px]'>
          <div className="text-center">
            <p className="text-white text-[30px] font-medium">Connect your wallet with Secret <br /> Recovery Phrase</p>
          </div>

          {/* card section imput */}
          <div>
            <div className="bg-[#11121F] mt-[48px] w-[95%] md:w-[576px] lg:w-[576px] xl:w-[676px] 2xl:w-[764px] mx-auto pb-60">
              <div className="border border-[#1f213a] bg-[#151727] p-6 rounded-[18px]">
                <div>
                  <p className=" text-[#fff] font-urbanist text-[20px] font-semibold mt-[32px] mb-[24px]">12 - word recovery phrase</p>
                  <div className="mb-[32px]">
                    <form>
                      <Textarea type="textarea" className="h-[154px] border border-[#1f213a] text-[#fff] rounded-[18px] bg-transparent focus-visible:ring-offset-1 focus-visible:ring-offset-[#373a64]" />

                      {/* <input type="submit" value="Connect wallet" className=' flex justify-center text-[#BEC3FF80] text-[20px] font-medium bg-[#6E75D20F] px-3.5 py-4 border border-[#473e8b] rounded-[12px] w-full mt-[32px] cursor-pointer' /> */}
                    </form>
                  </div>

                  <div className="w-full mb-[32px]">
                    {/* <Link to="" className=' flex justify-center text-[#BEC3FF80] text-[20px] font-medium bg-[#6E75D20F] hover:bg-[#6e75d213] px-3.5 py-4 border border-[#252846ce] hover:border-[#31345e] hover:bg-[#705DE4] hover:text-white rounded-[12px] duration-300'>Connect wallet</Link> */}

                    <Dialog>
                      <DialogTrigger className="w-full">
                        <button className='w-full flex justify-center text-[#BEC3FF80] text-[20px] font-medium bg-[#6E75D20F] hover:bg-[#6e75d213] px-3.5 py-4 border border-[#252846ce] hover:border-[#31345e] hover:bg-[#705DE4] hover:text-white rounded-[12px] duration-300'>Connect wallet</button>
                      </DialogTrigger>

                      <DialogContent className="bg-gradient-to-b from-[#44266f] via-[#131524] to-[#131524] lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
                        <DialogHeader>
                          <DialogTitle className="flex justify-between items-center mb-[30px]">
                            {/* Tooltip question icon */}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <GoQuestion className="text-[22px] text-[#a794be] cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent className="bg-gradient-to-r from-[#44266f] to-[#381f5a] border-none">
                                  <p className="text-white">Connect lots of wallet</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            <p className="text-[21px] text-[#ffffff] font-bold">Connect Wallet</p>
                            <IoClose className="text-[25px] text-[#a794be]" />
                          </DialogTitle>

                          <DialogDescription>
                            <div>
                              <div className="space-y-4">
                                {/* meta mask */}
                                <div className="bg-gradient-to-r from-[#6f5ce4] to-[#8768ee] rounded-xl">
                                  <Link to='/' className="flex justify-between items-center border border-[#6f5ce4] px-2 py-3 rounded-xl">
                                    <div className="flex items-center">
                                      <img src={metaMask} alt="Meta Mask" className="w-[35px] mr-3" />
                                      <p className="text-[17px] text-[#FFFFFF]">MetaMask</p>
                                    </div>
                                    <Link to="/" className='text-white text-[14px] font-medium bg-[#8f73ee] px-3 py-[5px] border border-[#8f73ee] rounded-md'>Connect</Link>
                                  </Link>
                                </div>

                                {/* Coinbase */}
                                <Link to='/' className="flex items-center bg-gradient-to-r from-[#321b4cbe] to-[#372e6a54] border border-[#42418a50] px-2 py-3 rounded-xl">
                                  <img src={coinbase} alt="Meta Mask" className="w-[35px] mr-3" />
                                  <p className="text-[17px] text-[#FFFFFF]">Coinbase Wallet</p>
                                </Link>

                                {/* Trust */}
                                <Link to='/' className="flex items-center bg-gradient-to-r from-[#1d1831] to-[#20203c77] border border-[#21233c] px-2 py-3 rounded-xl">
                                  <img src={trust} alt="Meta Mask" className="w-[35px] mr-3" />
                                  <p className="text-[17px] text-[#FFFFFF]">Trust Wallet</p>
                                </Link>

                                {/* Trezor */}
                                <Link to='/' className="flex items-center bg-gradient-to-r from-[#161828] to-[#151727] border border-[#21233c] px-2 py-3 rounded-xl">
                                  <img src={trezor} alt="Meta Mask" className="w-[35px] mr-3" />
                                  <p className="text-[17px] text-[#FFFFFF]">Trezor</p>
                                </Link>

                                {/* Ledger */}
                                <Link to='/' className="flex items-center bg-gradient-to-r from-[#161828] to-[#151727] border border-[#21233c] px-2 py-3 rounded-xl">
                                  <img src={ledger} alt="Meta Mask" className="w-[35px] mr-3" />
                                  <p className="text-[17px] text-[#FFFFFF]">Ledger</p>
                                </Link>

                                {/* Other Wallets */}
                                <Link to='/' className="flex items-center bg-gradient-to-r from-[#161828] to-[#151727] border border-[#21233c] px-2 py-3 rounded-xl">
                                  <img src={otherWallets} alt="Meta Mask" className="w-[35px] mr-3" />
                                  <p className="text-[17px] text-[#FFFFFF]">Other Wallets</p>
                                </Link>
                              </div>

                              <div className="flex justify-center mt-4">
                                <div className="flex items-center">
                                  <img src={wallet} alt="wallet" className="w-[20px] mr-2" />
                                  <Link to="/" className="text-[#D3D2FF80] hover:underline">I use different wallet</Link>
                                </div>
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                  </div>
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <p className='text-red-500 font-urbanist font-semibold -mt-52 capitalize'>Connect your correct wallet</p>
            </div>
          </div>
        </div>


      </Container>
    </div>
  );
};

export default Connect;
