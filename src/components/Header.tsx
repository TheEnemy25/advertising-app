import { useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/svg/LogoIcon";
import Logo from "../assets/images/Focuswall.png";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="relative bg-black w-full h-screen bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.5) 100%), url(${Logo})`,
      }}
    >
      <header className="py-5 px-5 xl:px-64 w-full relative">
        <div className="flex justify-between items-center">
          <div>
            <LogoIcon />
          </div>

          <div className="block lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          <nav
            className={`text-white flex font-roboto text-xl ${
              isMenuOpen ? "block" : "hidden"
            } lg:flex`}
          >
            <ul className="flex lg:justify-between items-center lg:space-x-20">
              <li>
                <Link to="" className="hover:text-lime-400">
                  Focuswall
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-lime-400">
                  Cube
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-lime-400">
                  Flag
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-lime-400">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className={`fixed inset-0 bg-black flex flex-col justify-center items-center text-white text-xl ${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden`}
        >
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsMenuOpen(false)}
          >
            <XMarkIcon className="h-8 w-8 text-white" />
          </button>
          <ul className="text-center space-y-6">
            <li>
              <Link
                to=""
                className="hover:text-lime-400 text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Focuswall
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-lime-400 text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Cube
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-lime-400 text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Flag
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-lime-400 text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-white mt-20 lg:mt-36 font-roboto font-bold italic text-4xl lg:text-6xl">
          <h1>Текстильні лайтбокси</h1>
          <h1>Рекламні куби</h1>
          <h1>Віндери, прапори</h1>
        </div>

        <div className="mt-20 lg:mt-30">
          <Button borderColor="border-white">Замовляй прямо зараз!</Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
