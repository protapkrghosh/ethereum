import Container from "../Container/Container";
import shadow1 from "@/assets/icons/Ellipse51.png"
import shadow2 from "@/assets/icons/Ellipse6.png"

const Rewords = () => {
  return (
    <div className="bg-[#11121F] min-h-[450px] overflow-hidden">
      <Container>
        <div className="relative">
          <div>
            <img src={shadow1} alt="Image" className="absolute ml-20" />
            <img src={shadow2} alt="Image" className="absolute ml-[400px]" />
          </div>

          {/* <div style={{ backgroundImage: `url(${shadow1})` }} className="h-[600px] bg-repeat-x bg-left" /> */}

          {/* <div className="absolute bottom-0">
            <div style={{ backgroundImage: `url(${shadow1})` }} className="h-[500px] bg-no-repeat bg-right " />
          </div> */}

          <div className="text-center absolute top-[10rem] left-[12.5rem]">
            <p className="text-white text-[30px] font-medium mb-2 leading-9">Received a reward from us? <br /> Congratulations</p>
            <p className="text-[#8877c3] md:w-[50%] xl:w-[61%] 2xl:w-[34%] mx-auto">If you’ve received the Ethereum Airdrop in the ongoing event you’re just a step away from calming your 10 ETH rewards for free</p>
          </div>
        </div>

        {/* Card */}
        <div className="border-[#1f213a]">
          <div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Rewords;
