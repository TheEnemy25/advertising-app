import { Link } from "react-router-dom";
import LogoIcon from "../assets/svg/LogoIcon";

function Footer() {
  return (
    <footer className="bg-black lg:px-20 py-5 flex items-center justify-between sm:px-10 px-2">
      <div>
        <LogoIcon />
      </div>
      <div>
        <nav className="text-white flex font-roboto text-sm  lg:text-xl">
          <ul className="flex justify-between items-center">
            <li className="lg:mr-20 mr-5">
              <Link to="" className="hover:text-lime-400">
                Focuswall
              </Link>
            </li>
            <li className="lg:mr-20 mr-5">
              <Link to="" className="hover:text-lime-400">
                Cube
              </Link>
            </li>
            <li className="lg:mr-20  mr-5">
              <Link to="" className="hover:text-lime-400">
                Flag
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col ">
        <nav className="text-white flex font-inter font-normal">
          <ul className="flex flex-col">
            <li>
              <Link to="" className="hover:text-lime-400">
                order@toptrend.com.ua
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-lime-400">
                + 380 (67) 314-55-15
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-lime-400">
                + 380 (67) 314-55-00
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
