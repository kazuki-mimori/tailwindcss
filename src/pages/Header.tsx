import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header>
      <div className="py-6">
        <div className="mx-auto flex w-full items-center justify-between px-8 md:px-14 lg:container">
          <div className="text-3xl font-bold">Portfolio</div>
          <div className="hidden items-center space-x-12 md:flex">
            <a
              href="#home"
              className="transition-all duration-300 hover:text-selected-text"
            >
              ホーム
            </a>
            <a
              href="#Portfolio"
              className="transition-all duration-300 hover:text-selected-text"
            >
              ポートフォリオ
            </a>
            <a
              href="#skills"
              className="transition-all duration-300 hover:text-selected-text"
            >
              スキル一覧
            </a>
            <a href="#contact">
              <button className="rounded-lg bg-thema px-6 py-2 font-bold transition-all duration-300 hover:bg-purple-600">
                お問合せ
              </button>
            </a>
          </div>
          <div className="md:hidden">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
