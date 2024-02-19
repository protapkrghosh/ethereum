import { Link } from "react-router-dom";

const LidoStatistics = () => {
  return (
    <div className="bg-[#11121F] px-[60px] md:px-[300px] xl:px-[380px] 2xl:px-[30%] pt-24">
      <div className="flex justify-between items-center text-[18px] mb-3">
        <p className="text-white font-medium">Lido statistics</p>
        <Link to='/' className="text-[#686b91] hover:underline">View on Ethersean</Link>
      </div>

      <div className="bg-[#131524] border border-[#1f213a] rounded-[18px]">
        <div className="text-[18px] py-7 flex justify-between items-center px-6">
          <p className="text-white capitalize">Total Rewords</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">9,510,644 B30 ETH</p>
        </div>
        <div className="bg-[#1f213a] h-[1px]"/>
        <div className="text-[18px] py-7 flex justify-between items-center px-6">
          <p className="text-white capitalize">Random Winners</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#414453] from-10% to-[#b0b8da] to-90% font-semibold">353136</p>
        </div>
      </div>
    </div>
  );
};

export default LidoStatistics;
