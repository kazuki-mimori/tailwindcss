import type { NextPage } from "next";

const ThirdSetion: NextPage = () => {
  return (
    <div
      id="skills"
      className="container mt-6 flex w-full  items-center justify-between px-8 md:mt-64 md:px-14  lg:px-24 xl:mt-64"
    >
      <section className="w-hull">
        <h2 className="secondary-title">スキルスタック</h2>
        <p className="section-pargraph">
          私は以下のプログラミングプログラミング言語1年以上取り扱ってきました。
        </p>
        <div className="my-16 ">
          <div className="flex cursor-pointer flex-wrap justify-center border-2 border-solid border-gray-100 p-16 transition-all duration-300 hover:border-yellow-100  lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
            <div className="mb-6 self-center lg:mb-0">
              <i className="fa-brands fa-square-js text-9xl text-yellow-300"></i>
            </div>
            <div className="flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">JavaScript</h3>
              <div className="mt-6 mb-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">ウェブサイト</div>
                <div className="badge">フロントエンド開発</div>
              </div>
              <p className="text-secondary">
                JavaScriptエンジニア。普段はReactを使って開発をしています。
              </p>
            </div>
          </div>
        </div>
        <div className="my-16 ">
          <div className="flex cursor-pointer flex-wrap justify-center border-2 border-solid border-gray-100 p-16 transition-all duration-300 hover:border-blue-400  lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
            <div className="mb-6 self-center lg:mb-0">
              <i className="fa-brands fa-react text-9xl text-blue-400"></i>
            </div>
            <div className="flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">React</h3>
              <div className="mt-6 mb-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">UI/UX</div>
                <div className="badge">フロントエンド開発</div>
              </div>
              <p className="text-secondary">
                普段はReactを使って開発をしています。
              </p>
            </div>
          </div>
          <div className="my-16 ">
            <div className="flex cursor-pointer flex-wrap justify-center border-2 border-solid border-gray-100 p-16 transition-all duration-300 hover:border-orange-400  lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
              <div className="mb-6 self-center lg:mb-0">
                <i className="fa-brands fa-html5 text-9xl text-orange-600"></i>
              </div>
              <div className="flex-wrap justify-center text-center lg:block lg:text-left">
                <h3 className="text-3xl font-semibold">HTML/CSS</h3>
                <div className="mt-6 mb-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                  <div className="badge">UI/UX</div>
                  <div className="badge">ホームページ制作</div>
                </div>
                <p className="text-secondary">２年間ほど使用しています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThirdSetion;
