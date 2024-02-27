import { Link } from "react-router-dom";
import logo from "@/assets/icons/Vector.png"
import Container from "@/SectionComs/Container/Container";
import { Button } from "@/components/ui/button";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import icon1 from "@/assets/icons/vector1.png"
import icon2 from "@/assets/icons/Box.png"
import icon3 from "@/assets/icons/Logout1.png"
import icon4 from "@/assets/icons/Wallet.png"
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

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [changeBg, setChangeBg] = useState(false);

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window?.scrollY >= 30) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }

  return (
    <div className={color ? 'sticky top-0 z-50 duration-300 bg-[#11121F] bg-opacity-90 text-[#d1d1d1] shadow-md' : 'pt-0 duration-300 bg-[#11121f]'}>
      <Container>
        <div className="w-full top-0 py-3 border-b border-[#1d2030a8] left-0 z-10">
          <div className="md:flex justify-between items-center py-4">
            {/* Large device menu */}
            <div className="flex">
              {/* Logo */}
              <Link className="md:mr-[20px] xl:mr-[90px] 2xl:mr-[120px]">
                <img src={logo} alt="Logo" className="w-[141px]" />
              </Link>

              <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-[#242541] md:bg-transparent absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 space-y-4 md:space-y-0 border border-[#312956] rounded-[12px] ${open ? 'top-[78px] opacity-100' : 'top-[-490px]'}`}>

                <li className="flex items-center uppercase bg-gradient-to-r from-[#6F5CE4] to-[#8868EE] py-[10px] rounded-[12px] px-[16px] 2xl:px-[20px]">
                  <Link to="/" className="text-[15px] text-[#fff] font-thin flex items-center">
                    <img src={icon1} alt="Icons" className="mr-2" />
                    Stake
                  </Link>
                </li>

                <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4 2xl:px-5 duration-500">
                  <Link to="/connect" className="text-[15px] text-[#68699e] flex items-center">
                    <img src={icon2} alt="Icons" className="mr-2" />
                    Myterybox
                  </Link>
                </li>

                <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4 2xl:px-5">
                  <Link to="/wallet-connect" className="text-[15px] text-[#68699e] flex items-center">
                    <img src={icon3} alt="Icons" className="mr-2" />
                    Withdrawals
                  </Link>
                </li>

                <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4 2xl:px-5">
                  <a href="/" className="text-[15px] text-[#68699e] flex items-center">
                    <img src={icon4} alt="Icons" className="mr-2" />
                    Rewards
                  </a>
                </li>

              </ul>
            </div>

            {/* Toggle hamburger menu */}
            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#404175]" /> : <IoMenu className="text-[#404175]" />
              }
            </div>

            {/* Small device menu */}
            <div className="block md:hidden">
              <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-[#242541] md:bg-transparent absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 space-y-4 md:space-y-0 border border-[#312956] rounded-[12px] ${open ? 'top-[75px] opacity-100' : 'top-[-490px]'}`}>

                <li className="flex items-center uppercase bg-gradient-to-r from-[#6F5CE4] to-[#8868EE] py-[10px] rounded-[12px] px-4 mr-9 md:mr-0 mt-3 md:mt-0">
                  <a href="/" className="text-[15px] text-[#fff] font-thin flex items-center">
                    <img src={icon1} alt="Icons" className="mr-2" />
                    Stake
                  </a>
                </li>

                <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4 duration-500">
                  <a href="/" className="text-[15px] text-[#68699e] flex items-center">
                    <img src={icon2} alt="Icons" className="mr-2" />
                    Myterybox
                  </a>
                </li>

                <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4">
                  <a href="/" className="text-[15px] text-[#68699e] flex items-center">
                    <img src={icon3} alt="Icons" className="mr-2" />
                    Withdrawals
                  </a>
                </li>

                <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4">
                  <a href="/" className="text-[15px] text-[#68699e] flex items-center">
                    <img src={icon4} alt="Icons" className="mr-2" />
                    Rewards
                  </a>
                </li>

                {/* Change background color */}
                <div className="flex items-center">
                  <Button className="text-[17px] font-light px-6">Connect wallet</Button>
                  {/* <Button onClick={() => setChangeBg(!changeBg)} className="ml-3 p-4">
                    {
                      changeBg ? <IoMdSunny className="text-[16px] scale-150 rounded-[20px]" /> :
                        <IoMdMoon className="text-[16px] scale-150 rounded-[20px]" />
                    }
                  </Button> */}
                </div>
              </ul>
            </div>

            {/* Large device action button */}
            <div className="hidden md:block">
              <div className="flex items-center">



                <Dialog>
                  <DialogTrigger>
                    <Button className="text-[17px] font-light hover:bg-gradient-to-l px-6">Connect wallet</Button>
                  </DialogTrigger>

                  <DialogContent className="bg-gradient-to-b from-[#44266f] via-[#131524] to-[#131524]">
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


                {/* <Button onClick={() => setChangeBg(!changeBg)} className=" hover:bg-gradient-to-l ml-3 p-4">
                  {
                    changeBg ? <IoMdSunny className="text-[16px] scale-150 rounded-[20px]" /> :
                      <IoMdMoon className="text-[16px] scale-150 rounded-[20px]" />
                  }
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
