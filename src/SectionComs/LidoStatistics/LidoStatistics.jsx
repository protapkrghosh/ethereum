import { Link } from "react-router-dom";

const LidoStatistics = () => {
  return (
    <div className="bg-[#11121F] dark:bg-[#F2F4F6] px-[18px] pb-1 -mt-[10px]">
      <div className="w-full md:w-[576px] lg:w-[576px] xl:w-[676px] 2xl:w-[764px] mx-auto">
        <div className="flex justify-between items-center text-[18px] mb-3 mt-2">
          <p className="text-white dark:text-[#273852] font-medium">Lido statistics</p>
          <a href='https://etherscan.io/address/0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae' target="_blank" rel="noreferrer" className="text-[#686b91] hover:underline">View on Ethersean</a>
        </div>

        <div className="bg-[#131524] dark:bg-[#ffffff] border border-[#1f213a] dark:border-[#7a8aa062] rounded-[18px]">
          <div className="py-7 flex justify-between items-center px-6">
            <p className="text-[18px] text-white dark:text-[#686b91] capitalize">Total Rewords</p>
            <div className="text-[19px]">
              <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">9,510,644 B30 ETH</p>
            </div>
          </div>

          <div className="bg-[#1f213a] dark:bg-[#7a8aa062] h-[1px]" />

          <div className="py-7 flex justify-between items-center px-6">
            <p className="text-[18px] text-white dark:text-[#686b91] capitalize">Random Winners</p>
            <div className="text-[19px]">
              <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">353136</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LidoStatistics;
