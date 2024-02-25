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


const Connect = () => {


  return (
    <div className='bg-[#11121F] overflow-hidden'>
      <Container>
        <BannerBg />

        <div className='mt-[-200px]'>
          <div className="text-center">
            <p className="text-white text-[30px] font-medium">Connect your wallet with Secret <br /> Recovery Phrase</p>
          </div>

          {/* card section imput */}
          <div className="bg-[#11121F] mt-[48px] px-[60px] md:px-[23%] lg:px-[27%] xl:px-[30%] 2xl:px-[30%] pb-60">
            <div className="border border-[#1f213a] bg-[#151727] p-6 rounded-[18px]">
              <div>
                <p className=" text-[#fff] font-urbanist text-[20px] font-semibold mt-[32px] mb-[24px]">12 - word recovery phrase</p>
                <div className="mb-[32px]">
                  <form>
                    <Textarea type="textarea" className="h-[154px] border border-[#1f213a] text-[#fff] rounded-[18px] bg-transparent" />

                    {/* <input type="submit" value="Connect wallet" className=' flex justify-center text-[#BEC3FF80] text-[20px] font-medium bg-[#6E75D20F] px-3.5 py-4 border border-[#473e8b] rounded-[12px] w-full mt-[32px] cursor-pointer' /> */}
                  </form>
                </div>
                <div className="w-[100%] mb-[32px]">
                  <Link to="/" className=' flex justify-center text-[#BEC3FF80] text-[20px] font-medium bg-[#6E75D20F] px-3.5 py-4 border border-[#473e8b] rounded-[12px]'>Connect wallet</Link>
                </div>
              </div>
            </div>
          </div>
        </div>


      </Container>
    </div>
  );
};

export default Connect;
