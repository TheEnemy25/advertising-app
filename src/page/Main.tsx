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
import ProductArticle from "../components/ProductArticle";
import ConstructionArticle from "../components/ConstructionArticle";

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
    <main className="flex flex-col">
      <article className="grid bg-black pt-20 ">
        <div className="grid text-white lg:grid-cols-4 text-3xl font-roboto gap-5 mb-20 lg:text-center text-start ml-5 lg:ml-0">
          {buttons.map((button) => (
            <Link
              key={button}
              to=""
              className={`hover:text-lime-400 filter-button ${activeButton === button ? "active" : ""
                }`}
              onClick={() => setActiveButton(button)}
            >
              {button}
            </Link>
          ))}
        </div>
      </article>

      <ProductArticle
        headingNumber=""
        title="Focus Wall"
        description=" (текстильний лайтбокс) - це втілення передових технологій та
              комплекс рішень для ефективної візуальної комунікації та
              оформлення простору. Вироби ідеально поєднують функціональність із
              сучасним дизайном, що робить їх придатними для широкого спектру
              застосувань, від рекламних до декоративних цілей."
        buttonLabel="Замовити"
        buttonBorderColor="border-lime-400"
        imageSrc={FocusWall}
      />

      <ConstructionArticle
        title="Конструкція Focus Wall"
        imageSrc={ImageThree}
        sections={[
          {
            number: "1",
            heading: "Алюмінієва рама",
            description: "Рами виготовлені з високоякісного легкого алюмінію, є довговічними, а також й естетично привабливі. Легкість рами сприяє простоті монтажу та транспортування, а також дозволяє легко оновлювати текстильні постери, що ідеально підходить для частих маркетингових кампаній.",
          },
          {
            number: "2",
            heading: "Текстильний постер",
            description: "Виготовлені з екологічно чистих матеріалів, тканинні постери характеризуються високою якістю зображення та відсутністю неприємних запахів, що робить їх ідеальними для внутрішнього використання. Зображення на текстилі виглядає яскраво, природно та реалістично.",
          },
          {
            number: "3",
            heading: "LED-освітлення",
            description: "Новітні технології світлодіодного освітлення забезпечують рівномірне світло, що підкреслює якість зображення і зменшує енергоспоживання.",
          },
        ]}
        buttonLabel="Детальніше"
        buttonBorderColor="border-lime-400"
      />

      <ProductArticle
        headingNumber="02.Куби"
        title="Куби"
        description="- це є стильний і функціональний акцент для будь-якого заходу,
                який привертає увагу та запам’ятовується. Сидіння-куби легко
                адаптується до будь-якого простору і миттєво привертає увагу.
                Запорукою універсальності та зручності рекламного пуфа - є
                легкість та мобільність. Максимальна універсальність і зручність
                завдяки легкості та мобільності рекламного пуфа. Пуфи Cube
                створені для довготривалого використання з можливістю легкої
                заміни чохла. Використовуйте всю поверхню сидінь та втілюйте в
                життя свої креативні ідеї."
        buttonLabel="Замовити"
        buttonBorderColor="border-lime-400"
        imageSrc={ImageBox}
      />

      <ConstructionArticle
        title="Конструкція Куба"
        imageSrc={InstallationArea}
        sections={[
          {
            number: "1",
            heading: "Наповнення",
            description: "Брендовані м’які куби виготовленні з щільного поролоному. Що є безпечним для дітей та дозволяє створювати велике рекламне поле за допомогу виставлення кубів один на одного.",
          },
          {
            number: "2",
            heading: "Зовнішні чохли",
            description: "Виготовленні з тканини Оксфорд, котра відштовхує воду та не вимагає особливого догляду.",
          },
          {
            number: "3",
            heading: "Брендування",
            description: "На рекламному кубі можна розміщувати будь-яке повноколірне зображення на усіх 6-ти гранях, що надає максимальної видимості та ефективності реклами для вашої компанії чи продукту.",
          },
        ]}
        buttonLabel="Детальніше"
        buttonBorderColor="border-lime-400"
      />

      <ProductArticle
        headingNumber="03.Віндер"
        title="Віндери"
        description="- зручний спосіб реклами для привернення уваги ваших клієнтів до
                бренду та подій. Це мобільні рекламні конструкції у вигляді
                прапорів на стійкому флагштоку. Вони відрізняються легкістю та
                зручністю у використанні."
        buttonLabel="Замовити"
        buttonBorderColor="border-lime-400"
        imageSrc={ImageFive}
      />

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
