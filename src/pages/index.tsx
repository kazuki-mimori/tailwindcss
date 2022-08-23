import type { NextPage } from "next";
import FirstSetion from "src/pages/FirstSection";
import Header from "src/pages/Header";
import SecondSection from "src/pages/SecondSection";
import ThirdSetion from "src/pages/ThirdSection";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <FirstSetion />
      <SecondSection />
      <ThirdSetion />
    </>
  );
};

export default Home;
