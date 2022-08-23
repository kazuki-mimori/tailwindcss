import type { NextPage } from "next";
import Image from "next/image";
import portfolio from "../images/portfolio1.jpg";
import portfolio2 from "../images/portfolio2.jpg";
import portfolio4 from "../images/portfolio4.jpg";
import portfolio5 from "../images/portfolio5.jpg";
import portfolio6 from "../images/portfolio6.jpg";
const SecondSetion: NextPage = () => {
  return (
    <div
      id="Portfolio"
      className="mt-6 flex w-full  items-center justify-between px-8 md:mt-64 md:px-14  lg:px-24 xl:mt-64"
    >
      <section className="w-hull">
        <h2 className="secondary-title">私のポートフォリオ</h2>
        <p className="section-pargraph">
          私が作ってきたWebアプリケーションがこちら
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72  ">
            <Image src={portfolio} alt="" />
          </div>
          <div className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72  ">
            <Image src={portfolio2} alt="" />
          </div>

          <div className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72  ">
            <Image src={portfolio4} alt="" />
          </div>
          <div className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72  ">
            <Image src={portfolio5} alt="" />
          </div>
          <div className="h-36 w-full cursor-pointer rounded-md object-cover lg:h-72  ">
            <Image src={portfolio6} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondSetion;
