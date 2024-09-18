import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import FocusWall from "../assets/images/image1.png";
import ImageThree from "../assets/images/imageThree.png";
import ImageBox from "../assets/images/ImageBox.png";
import InstallationArea from "../assets/images/InstallationArea.png";
import ImageFive from "../assets/images/imageFive.png";
import InstallationAreaTwo from "../assets/images/InstallationAreaTwo.png";
import Slider from "./SliderData";

function Main() {
  const [activeButton, setActiveButton] = useState("01.Фокусволи");

  const buttons = ["01.Фокусволи", "02.Куби", "03.Віндери", "04.Підтримка"];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, comment });
  };

  return (
    <main className="flex flex-col ">
      <article className="grid bg-black pt-20 ">
        <div className="grid text-white lg:grid-cols-4 text-3xl font-roboto gap-5 mb-20 lg:text-center text-start ml-5 lg:ml-0">
          {buttons.map((button) => (
            <Link
              key={button}
              to=""
              className={`hover:text-lime-400 filter-button ${
                activeButton === button ? "active" : ""
              }`}
              onClick={() => setActiveButton(button)}
            >
              {button}
            </Link>
          ))}
        </div>
      </article>

      <article className="flex justify-between bg-black w-full h-full pb-20 flex-col-reverse lg:flex-row">
        <div className="px-10 lg:pl-20 lg:max-w-96 flex justify-between flex-col">
          <div className="pt-24">
            <h1 className="text-3xl font-roboto text-white">Focus Wall</h1>
            <p className="text-gray-400">
              (текстильний лайтбокс) - це втілення передових технологій та
              комплекс рішень для ефективної візуальної комунікації та
              оформлення простору. Вироби ідеально поєднують функціональність із
              сучасним дизайном, що робить їх придатними для широкого спектру
              застосувань, від рекламних до декоративних цілей.
            </p>
            <div className="flex items-center justify-center mt-20">
              <Button borderColor="border-lime-400">Замовити</Button>
            </div>
          </div>
        </div>
        <div className="flex pl-10 lg:pl-0">
          <img src={FocusWall} alt="Focus Wall" />
        </div>
      </article>

      <article className="pb-10 lg:px-20 lg:pb-20 bg-gray-800 w-full h-full flex items-center justify-center mx-auto flex-col">
        <div className="flex">
          <img src={ImageThree} alt="Focus Wall" />
        </div>
        <div className="mt-10">
          <h1 className="text-5xl font-roboto text-lime-400 text-center">
            Конструкція Focus Wall
          </h1>
          <div className="flex mt-10 px-10 lg:px-0 justify-between flex-col lg:flex-row w-full">
            <div className="flex flex-col">
              <h1 className="text-5xl font-roboto text-lime-400">1</h1>
              <p className="mt-5 mb-3 text-white">Алюмінієва рама</p>
              <p className="text-gray-400">
                Рами виготовлені з високоякісного легкого алюмінію, є
                довговічними, а також й естетично привабливі. Легкість рами
                сприяє простоті монтажу та транспортування, а також дозволяє
                легко оновлювати текстильні постери, що ідеально підходить для
                частих маркетингових кампаній.
              </p>
            </div>
            <div className="my-10 lg:mt-0 flex lg:w-1 lg:mx-10 lg">
              <hr className="w-full h-1 lg:w-1 lg:h-full bg-lime-400 rounded-3xl " />
            </div>
            <div className="flex flex-col">
              <h1 className="text-5xl font-roboto text-lime-400">2</h1>
              <p className="mt-5 mb-3 text-white">Текстильний постер</p>
              <p className="text-gray-400">
                Виготовлені з екологічно чистих матеріалів, тканинні постери
                характеризуються високою якістю зображення та відсутністю
                неприємних запахів, що робить їх ідеальними для внутрішнього
                використання. Зображення на текстилі виглядає яскраво, природно
                та реалістично.
              </p>
            </div>
            <div className="my-10 lg:mt-0 flex lg:w-1 lg:mx-10 lg">
              <hr className="w-full h-1 lg:w-1 lg:h-full bg-lime-400 rounded-3xl " />
            </div>
            <div className="flex flex-col">
              <h1 className="text-5xl font-roboto text-lime-400">3</h1>
              <p className="mt-5 mb-3 text-white">LED-освітлення</p>
              <p className="text-gray-400">
                Новітні технології світлодіодного освітлення забезпечують
                рівномірне світло, що підкреслює якість зображення і зменшує
                енергоспоживання.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20">
            <Button borderColor="border-lime-400">Детальніше</Button>
          </div>
        </div>
      </article>

      <article
        className="flex flex-col bg-black w-full h-full py-20 pl-20"
        id="2"
      >
        <h1 className="text-lime-400 text-6xl font-roboto ml-4">02.Куби</h1>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          <div className="w-full flex flex-row justify-between">
            <div className="pt-24 w-full">
              <h1 className="text-3xl font-roboto text-white">Куби</h1>
              <p className="text-gray-400 max-w-[583px]">
                - це є стильний і функціональний акцент для будь-якого заходу,
                який привертає увагу та запам’ятовується. Сидіння-куби легко
                адаптується до будь-якого простору і миттєво привертає увагу.
                Запорукою універсальності та зручності рекламного пуфа - є
                легкість та мобільність. Максимальна універсальність і зручність
                завдяки легкості та мобільності рекламного пуфа. Пуфи Cube
                створені для довготривалого використання з можливістю легкої
                заміни чохла. Використовуйте всю поверхню сидінь та втілюйте в
                життя свої креативні ідеї.
              </p>
              <div className="flex items-center m-auto w-full justify-center mt-20">
                <Button borderColor="border-lime-400">Замовити</Button>
              </div>
            </div>
          </div>
          <div className="flex mt-10">
            <img src={ImageBox} alt="Focus Wall" />
          </div>
        </div>
      </article>

      <article className="lg:px-20 pb-20 bg-gray-800 w-full h-full flex items-center justify-center mx-auto flex-col">
        <div className="flex">
          <img src={InstallationArea} alt="Focus Wall" />
        </div>

        <div className="mt-10 ">
          <h1 className="text-5xl font-roboto text-lime-400 text-center">
            Конструкція Куба
          </h1>
          <div className="flex mt-10 px-10 lg:px-0 justify-between flex-col lg:flex-row w-full">
            <div className="flex flex-col">
              <h1 className="text-5xl font-roboto text-lime-400">1</h1>
              <p className="mt-5 mb-3 text-white">Наповнення</p>
              <p className="text-gray-400">
                Брендовані м’які куби виготовленні з щільного поролоному. Що є
                безпечним для дітей та дозволяє створювати велике рекламне поле
                за допомогу виставлення кубів один на одного.
              </p>
            </div>
            <div className="my-10 lg:mt-0 flex lg:w-1 lg:mx-10 lg">
              <hr className="w-full h-1 lg:w-1 lg:h-full bg-lime-400 rounded-3xl " />
            </div>
            <div className="flex flex-col">
              <h1 className="text-5xl font-roboto text-lime-400">2</h1>
              <p className="mt-5 mb-3 text-white">Зовнішні чохли</p>
              <p className="text-gray-400">
                Виготовленні з тканини Оксфорд, котра відштовхує воду та не
                вимагає особливого догляду.
              </p>
            </div>
            <div className="my-10 lg:mt-0 flex lg:w-1 lg:mx-10 lg">
              <hr className="w-full h-1 lg:w-1 lg:h-full bg-lime-400 rounded-3xl " />
            </div>
            <div className="flex flex-col">
              <h1 className="text-5xl font-roboto text-lime-400">3</h1>
              <p className="mt-5 mb-3 text-white">Брендування</p>
              <p className="text-gray-400">
                На рекламному кубі можна розміщувати будь-яке повноколірне
                зображення на усіх 6-ти гранях, що надає максимальної видимості
                та ефективності реклами для вашої компанії чи продукту.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20">
            <Button borderColor="border-lime-400">Детальніше</Button>
          </div>
        </div>
      </article>
      <article className="flex flex-col bg-black w-full h-full pb-40 pt-20 lg:pl-20  pr-0">
        <h1 className="text-lime-400 text-6xl font-roboto lg:ml-4 ml-10">
          03.Віндер
        </h1>
        <div className="flex lg:justify-between flex-col-reverse lg:flex-row pl-10 ls:pl-0">
          <div className="w-full flex lg:flex-row lg:justify-between ">
            <div className="pt-24 w-full">
              <h1 className="text-3xl font-roboto text-white">Віндери</h1>
              <p className="text-gray-400 max-w-[583px]">
                - зручний спосіб реклами для привернення уваги ваших клієнтів до
                бренду та подій. Це мобільні рекламні конструкції у вигляді
                прапорів на стійкому флагштоку. Вони відрізняються легкістю та
                зручністю у використанні.
              </p>
              <div className="flex items-center justify-center mt-20">
                <Button borderColor="border-lime-400">Замовити</Button>
              </div>
            </div>
          </div>
          <div className="flex mt-10 w-full ls:justify-end">
            <img src={ImageFive} alt="Focus Wall" />
          </div>
        </div>
      </article>

      <article className="flex bg-gray-500">
        <div className="flex justify-between flex-row items-center m-auto">
          <div className="flex mr-5 mt-10 w-full justify-end">
            <img src={InstallationAreaTwo} alt="Focus Wall" />
          </div>
          <div className="flex flex-col w-full justify-center m-auto">
            <h1 className="font-roboto text-lime-400 text-xl mb-5">
              Розмірна сітка віндера:
            </h1>
            <p className=" font-roboto text-lime-400 mb-3">
              XS <span className="text-white">400x2000 мм</span>
            </p>
            <p className=" font-roboto text-lime-400 mb-3">
              S <span className="text-white">400x2000 мм</span>
            </p>
            <p className=" font-roboto text-lime-400 mb-3">
              M <span className="text-white">400x2000 мм</span>
            </p>
            <p className=" font-roboto text-lime-400">
              L <span className="text-white">400x2000 мм</span>
            </p>
          </div>
        </div>
      </article>

      <article className="h-full p-10 bg-white">
        <h1 className="text-lime-400 text-2xl text-center lg:text-start lg:text-6xl font-roboto ml-4 mb-20">
          Основа для конструкції
        </h1>
        <div>
          <Slider />
        </div>
      </article>

      <article className="flex items-center flex-col lg:flex-row lg:justify-between bg-gray-900 text-white py-16  lg:px-20 px-10">
        <div className="lg:w-[583px]">
          <h1 className="text-4xl lg:text-6xl font-bold text-lime-400 mb-4">
            Зв’яжіться з нашим менеджером
          </h1>
          <p className="text-lg mb-20 text-gray-400 font-inter lg:mb-8">
            Вас зацікавили пропозиції або виникли питання? Заповніть форму
            зворотного зв'язку і наші менеджери якнайшвидше зв'яжуться з вами.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-2/3 lg:w-[583px] bg-gray-800 p-8 rounded-2xl border-2 border-lime-400"
        >
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">
              Контактні дані
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-xl bg-gray-600 border-2 border-gray-500 focus:outline-none focus:border-lime-400"
              placeholder="ПІБ"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="phone">
              Номер телефону
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded-xl bg-gray-600 border-2 border-gray-500 focus:outline-none focus:border-lime-400"
              placeholder="+380"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="comment">
              Коментарі
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 rounded-xl bg-gray-600 border-2 focus:outline-none focus:border-lime-400"
              placeholder="Причина звернення"
              rows={4}
            />
          </div>

          <Button borderColor="border-lime-400">Зв’язатись</Button>
        </form>
      </article>
    </main>
  );
}

export default Main;
