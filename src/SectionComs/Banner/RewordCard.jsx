import React from 'react';
import Container from '../Container/Container';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import icons from "@/assets/icons/logos_ethereum.png"
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"
import { useRef } from "react";
import toast from 'react-hot-toast';

const RewordCard = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    emailjs
      .sendForm('service_yuvh7i4', 'template_4zis24c', form.current, {
        publicKey: 'RElQ17WxbehSv1AID',
      })
      .then(
        () => {
          reset();
          toast.success('Ethereum address send successfully');
          // console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Something wrong, Please try again!');
        },
      );
  };

  return (
    <div className="bg-[#11121F] mt-[-10px] pb-6 pt-1">
      <Container>
        {/* Card */}
        <div className='bg-[#11121F] w-[80%] md:w-[576px] lg:w-[576px] xl:w-[676px] 2xl:w-[764px] mx-auto mt-[48px] pb-60"'>
          <div className="border border-[#1f213a] rounded-[18px]">
            <div>
              <div className="px-6 pt-6">
                <div className="flex justify-between items-center border border-[#1f213a] px-6 py-4 rounded-[18px] mb-6">
                  <div className="text-[19px]">
                    <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">10 ETH = $ 25.000.00</p>
                  </div>

                  <Link to="/" className='text-white text-[14px] font-medium bg-[#3b3474] px-4 py-[6px] border border-[#473e8b] rounded-md uppercase'>For Free</Link>
                </div>
              </div>

              <div className="px-6">
                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-center relative">
                    <label htmlFor="" className="absolute ml-6">
                      <img src={icons} alt="Icons" />
                    </label>

                    <Input type="email" {...register("subject", { required: true })} placeholder="Ethereum address" className="border border-[#1f213a] px-12 py-8 rounded-[18px] bg-transparent text-[18px] placeholder:text-[18px] placeholder:font-medium text-[#6c6c96] placeholder:text-[#6c6c96] focus-visible:ring-offset-1 focus-visible:ring-offset-[#373a64]" />
                  </div>

                  <input type="submit" value="Send" className="border border-[#1f213a] px-12 py-[18px] rounded-[18px] text-[18px] font-semibold placeholder:text-[18px] placeholder:font-medium text-[#6c6c96] placeholder:text-[#6c6c96] w-full cursor-pointer mt-6 bg-[#1f213a3d]" />
                </form>
              </div>

              <div className="py-[30px] flex justify-between items-center px-6">
                <p className="text-[18px] text-[#686b91] capitalize">Total Rewords</p>
                <div className="text-[19px]">
                  <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">9,510,644 B30 ETH</p>
                </div>
              </div>

              <div className="bg-[#1f213a] h-[1px]" />

              <div className="py-[30px] flex justify-between items-center px-6">
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
