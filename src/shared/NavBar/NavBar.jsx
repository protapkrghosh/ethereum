import { Link } from "react-router-dom";
import logo from "@/assets/icons/Vector.png"
import Container from "@/SectionComs/Container/Container";
import { Button } from "@/components/ui/button";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const LinkNames = [
    { name: "Stake", link: "/" },
    { name: "MyTerybox", link: "/" },
    { name: "Withdrawals", link: "/" },
    { name: "Rewards", link: "/" },
  ];

  return (
    <div>
      <Container>
        <div className="shadow-md w-full fixed top-0 left-0">
          <div className="md:flex justify-between items-center bg-white py-4 md:px-10 px-7">
            <Link>
              <img src={logo} alt="Logo" />
            </Link>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose /> : <IoMenu />
              }
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 ${open ? 'top-[78px] opacity-100' : 'top-[-490px]'}`}>
              {
                LinkNames.map((link, index) => (
                  <li key={index} className="uppercase md:ml-8 my-4 md:my-0">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))
              }
              <Button className="md:ml-8">Connect wallet</Button>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
