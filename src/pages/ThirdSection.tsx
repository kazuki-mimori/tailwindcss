import type { NextPage } from "next";
import Image from "next/image";

const ThirdSetion: NextPage = () => {
  return (
    <div
      id="skills"
      className="mt-6 flex w-full  items-center justify-between px-8 md:mt-64 md:px-14  lg:px-24 xl:mt-64"
    >
      <section className="w-hull">
        <h2 className="secondary-title">スキルスタック</h2>
        <p className="section-pargraph">
          私は以下のプログラミングプログラミング言語1年以上取り扱ってきました。
        </p>
        <div className="my-16 ">
          <div className="border-2 border-solid border-gray-100">aaaa</div>
        </div>
      </section>
    </div>
  );
};

export default ThirdSetion;
