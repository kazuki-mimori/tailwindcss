import type { NextPage } from "next";
import Contact from "src/pages/Contact";
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
      <Contact />
    </>
  );
};

export default Home;
