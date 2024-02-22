import BannerBg from "@/SectionComs/Banner/BannerBg";
import Faq from "@/SectionComs/FAQ/Faq";
import LidoStatistics from "@/SectionComs/LidoStatistics/LidoStatistics";
import RewordContents from "@/SectionComs/Banner/RewordContents";
import RewordCard from "@/SectionComs/Banner/RewordCard";

const Home = () => {
  return (
    <div>
      <BannerBg />
      <RewordContents />
      <RewordCard />
      <LidoStatistics />
      <Faq />
    </div>
  );
};

export default Home;
