import { useContext, useState, useRef, useEffect } from "react";
import avatar from "../assets/boy-icon.png";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


const Account = () => {
  const [showAccount, setShowAccount] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const menuRef = useRef<HTMLDivElement | null>(null)

  const logout = () => {
    setUser((prevState: any) => ({ ...prevState, loggedIn: false }));
    navigate("/home");
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowAccount(false);
    }
}
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
  

  return (
    <>
      <img
        src={avatar}
        
        alt=""
        className="flex items-center md:h-11 h-9 z-50"
        onClick={() => setShowAccount((prev) => !prev)}
      />

      {showAccount ? (
        <div ref={menuRef} className="absolute flex flex-col items-start top-14 md:top-16 md:right-0   -right-24  md:w-96 w-80  h-fit bg-base-200 hover:bg-base-200   p-4 z-50">
          <h3 className="text-2xl font-semibold text-gray-300">Konto</h3>
          <div className="flex ">
            <ul>
              <li>
                <Link to="/ordersPage"><button>Moje zamówienia</button></Link>
              </li>

              
              <li>
                <button onClick={logout}>Wyloguj się</button>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Account;
