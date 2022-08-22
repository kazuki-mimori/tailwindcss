import type { NextPage } from "next";
import FirstSetion from "src/pages/FirstSection";
import Header from "src/pages/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <FirstSetion />
    </>
  );
};

export default Home;
