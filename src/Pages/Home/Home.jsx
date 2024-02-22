import BannerBg from "@/SectionComs/BannerBg/BannerBg";
import Faq from "@/SectionComs/FAQ/Faq";
import LidoStatistics from "@/SectionComs/LidoStatistics/LidoStatistics";
import Rewords from "@/SectionComs/Rewords/Rewords";

const Home = () => {
  return (
    <div>
      <BannerBg />
      <Rewords />
      <LidoStatistics />
      <Faq />
    </div>
  );
};

export default Home;
