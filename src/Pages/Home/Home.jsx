import Connect from "@/SectionComs/Connect/Connect";
import Faq from "@/SectionComs/FAQ/Faq";
import LidoStatistics from "@/SectionComs/LidoStatistics/LidoStatistics";
// import Rewords from "@/SectionComs/Rewords/Rewords";

const Home = () => {
  return (
    <div>
      {/* <Rewords /> */}
      <Connect />
      <LidoStatistics />
      <Faq />
    </div>
  );
};

export default Home;
