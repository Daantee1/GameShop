import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Cart from "./Cart";
import Account from "./Account";
import SidebarMenu from "./SidebarMenu";

const Navbar = () => {
  const userContext = useContext(AuthContext);

  return (
    
    <div className="navbar bg-base-100  border-gray-500 border-b ">
      <div className="flex-none lg:hidden ">
        <SidebarMenu />
      </div>
      <div className="flex-1 ">
        
      
        <a className="btn btn-ghost md:text-3xl  text-lg text-white">
          
          {" "}
          <Link to="/home">GameShop</Link>
        </a>
      </div>
      
      
      <div className="flex-none ">
        <ul className="menu menu-horizontal text-sm px-1 md:text-lg ">
          <li>
            <Link to="/home">Strona główna</Link>
          </li>
          <li>
            <Link to="/aboutUs"><a>O nas</a></Link>
            
          </li>
          {userContext.loggedIn ? (
          <li>
            <Cart></Cart>
          </li>
        ): null}
          {userContext.loggedIn ? (
            <li>
             <Account></Account>
            </li>
            
          ) : (
            <li>
              <Link to="/loginPage">Zaloguj się</Link>
            </li>
          )}
      
        
        </ul>
      </div>
    </div>
  );
};
export default Navbar;