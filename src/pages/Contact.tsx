import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <div
      id="contact"
      className="container mt-6 mb-20 flex  w-full items-center justify-between px-8 md:mt-52  md:px-14 lg:px-24 xl:mt-52"
    >
      <section className="w-full">
        <h2 className="secondary-title">お問い合わせ</h2>
        <p className="section-pargraph">
          私の経歴が気になる方はご一報ください。臨時対応します。
        </p>
        <div className="mt-16 grid w-full gap-8 lg:grid-cols-2 lg:gap-32">
          <div>
            <div className="my-5">
              <label className="mb-3 block text-xl font-bold text-white">
                お名前
              </label>
              <input
                type="text"
                className="w-full border-inputBorder bg-input px-4 py-4"
              />
            </div>
            <div className="my-5">
              <label className="mb-3 block text-xl font-bold text-white">
                メールアドレス
              </label>
              <input
                type="email"
                className="w-full  border-inputBorder bg-input px-4 py-4"
              />
            </div>
            <div className="my-5">
              <label className="mb-5 block text-xl font-bold text-white">
                メッセージ
              </label>
              <input
                type="massage"
                className="w-full border-inputBorder bg-input px-4 py-4"
              />
            </div>
            <button className="mt-5 rounded-lg bg-thema px-2 py-2 font-bold transition-all duration-300 hover:bg-purple-600">
              送信する
            </button>
          </div>
          <div>
            <p className="text-secondary">090232133211</p>
            <a href="mailto:kazumasa071210@gmail.com">kazumasa1210@gmail.com</a>
            <div className="mt-10 space-x-6">
              <a href="#">
                <i className="fa-brands fa-twitter text-3xl text-blue-400"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook text-3xl text-blue-600"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram text-3xl text-pink-400"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
