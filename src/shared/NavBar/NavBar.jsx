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
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [changeBg, setChangeBg] = useState(false);

  const LinkNames = [
    { name: "Stake", link: "/", icon: icon1 },
    { name: "MyTerybox", link: "/", icon: icon2 },
    { name: "Withdrawals", link: "/", icon: icon3 },
    { name: "Rewards", link: "/", icon: icon4 },
  ];

  return (
    <div>
      <Container>
        <div className="w-full fixed top-0 py-3 border-b border-[#1d2030a8] left-0 z-10">
          <div className="md:flex justify-between items-center py-4 md:px-10 px-7">
            {/* Large device menu */}
            <div className="flex">
              {/* Logo */}
              <Link className="md:mr-[20px] xl:mr-[90px] 2xl:mr-[120px]">
                <img src={logo} alt="Logo" className="w-[141px]" />
              </Link>

              <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-[#242541] md:bg-transparent absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 space-y-4 md:space-y-0 border border-[#312956] rounded-[12px] ${open ? 'top-[78px] opacity-100' : 'top-[-490px]'}`}>

                <li className="flex items-center uppercase bg-gradient-to-r from-[#6F5CE4] to-[#8868EE] py-[10px] rounded-[12px] px-[16px] 2xl:px-[20px]">
                  <a href="/" className="text-[15px] text-[#fff] font-thin flex items-center">
                    <img src={icon1} alt="Icons" className="mr-2" />
                    Stake
                  </a>
                </li>

                <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4 2xl:px-5 duration-500">
                  <a href="/" className="text-[15px] text-[#68699e] flex items-center">
                    <img src={icon2} alt="Icons" className="mr-2" />
                    Myterybox
                  </a>
                </li>

                <li className="flex items-center uppercase py-[10px] rounded-[12px] px-4 2xl:px-5">
                  <a href="/" className="text-[15px] text-[#68699e] flex items-center">
                    <img src={icon3} alt="Icons" className="mr-2" />
                    Withdrawals
                  </a>
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

                <div className="flex items-center">
                  <Button className="text-[17px] font-light px-6">Connect wallet</Button>
                  <Button onClick={() => setChangeBg(!changeBg)} className="ml-3 p-4">
                    {
                      changeBg ? <IoMdSunny className="text-[16px] scale-150 rounded-[20px]" /> :
                        <IoMdMoon className="text-[16px] scale-150 rounded-[20px]" />
                    }
                  </Button>
                </div>
              </ul>
            </div>

            {/* Large device action button */}
            <div className="hidden md:block">
              <div className="flex items-center">
                <Button className="text-[17px] font-light hover:bg-gradient-to-l px-6">Connect wallet</Button>
                <Button onClick={() => setChangeBg(!changeBg)} className=" hover:bg-gradient-to-l ml-3 p-4">
                  {
                    changeBg ? <IoMdSunny className="text-[16px] scale-150 rounded-[20px]" /> :
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
