import cyberpunkIcon from "../assets/cyberpunk-icon.png";
import witcher3Icon from "../assets/witcher3-icon.png";
import csgo2Icon from "../assets/csgo2-icon.png";
import fifa23Icon from "../assets/fifa23-icon.png";
import tombRadierIcon from "../assets/tomb-raider-icon.png";
import euIVIcon from "../assets/euIV-icon.png";
import discountIcon from "../assets/discount-icon.png";
import burgerIcon from "../assets/menu.png";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div className="drawer lg:drawer-open  overflow-hidden   lg:w-auto  z-50 ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex flex-col w-12 justify-start ">
        <label
          htmlFor="my-drawer-2"
          className=" btn btn-ghost drawer-button lg:hidden "
        >
          <img src={burgerIcon} alt="burger-icon" />
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-lg block">
          <h2 className=" font-semibold text-gray-300 text-2xl ml-3 mb-3">
            Gatunki
          </h2>
          <Link to="/genere/action">
            <li className="mb-2">
              <a>
                {" "}
                <img
                  src={cyberpunkIcon}
                  width="50px"
                  height="50px"
                  alt="cyberpunk-icon"
                />
                Akcja
              </a>
            </li>
          </Link>
          <Link to="/genere/rpg">
            <li className="mb-2">
              <a>
                <img
                  src={witcher3Icon}
                  width="50px"
                  height="50px"
                  alt="cyberpunk-icon"
                />
                RPG
              </a>
            </li>
          </Link>
          <Link to="/genere/adventure">
            <li className="mb-2">
              <a>
                <img
                  src={tombRadierIcon}
                  width="50px"
                  height="50px"
                  alt="cyberpunk-icon"
                />
                Przygodowe
              </a>
            </li>
          </Link>
          <Link to="/genere/strategy">
            <li className="mb-2">
              <a>
                <img
                  src={euIVIcon}
                  width="50px"
                  height="50px"
                  alt="cyberpunk-icon"
                />
                Strategiczne
              </a>
            </li>
          </Link>
          <Link to="/genere/simulation">
            <li className="mb-2">
              <a>
                <img
                  src={fifa23Icon}
                  width="50px"
                  height="50px"
                  alt="cyberpunk-icon"
                />
                Symulacje
              </a>
            </li>
          </Link>
          <Link to="/genere/fps">
            <li className="mb-2">
              <a>
                <img
                  src={csgo2Icon}
                  width="50px"
                  height="50px"
                  alt="cyberpunk-icon"
                />
                Strzelanki
              </a>
            </li>
          </Link>
          <Link to="/genere/discount">
            <li className="mb-2 ">
              <a>
                <img
                  src={discountIcon}
                  width="50px"
                  height="50px"
                  alt="cyberpunk-icon"
                />
                Wyprzedaż
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
