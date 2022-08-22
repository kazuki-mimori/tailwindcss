import type { NextPage } from "next";
import Image from "next/image";
import human from "../images/human.jpg";

const FirstSetion: NextPage = () => {
  return (
    <div
      id="home"
      className="container mx-auto mt-16 flex w-full items-center justify-between px-8 md:px-14 lg:px-24"
    >
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="text-center md:my-36 md:justify-start md:text-left lg:ml-20">
          <h1 className="flex justify-center text-5xl font-bold md:text-left md:text-6xl lg:text-7xl">
            TailWindCSSで
            <br />
            美しいサイトを
            <br />
            作ります
          </h1>
          <button className="mt-5  rounded-lg bg-thema px-6 py-4 font-bold transition-all duration-300 hover:bg-purple-600">
            <i className="fa-solid fa-rocket "></i>
            <span className="ml-2">もっと見る</span>
          </button>
        </div>
        <div className="right-6 -z-10 mt-12 w-10/12 text-center md:absolute md:mt-0 md:w-3/5 lg:top-2 lg:right-52 lg:w-3/6">
          <Image src={human} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
};

export default FirstSetion;
