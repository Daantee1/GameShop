import { useContext, useEffect, useRef, useState } from "react";
import cart from "../assets/shopping-cart.png";
import crossed from "../assets/crossed.png";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartData, removeFromCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  
  const menuRef = useRef<HTMLDivElement | null>(null);
  console.log(cartData, "Dane z koszyka");
  console.log(showCart, "Stan koszyka");

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowCart(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <img
        src={cart}
        alt="cart"
        className="flex items-center md:h-11 h-9"
        onClick={() => setShowCart((prev) => !prev)}
      />
      <ul className="absolute md:mt-6 md:ml-10 mt-6 ml-8 font-semibold ">
        <li>{cartData.length || null}</li>
      </ul>
      {showCart ? (
        <div
          ref={menuRef}
          className="absolute flex flex-col items-start top-14 md:top-16 md:right-0   -right-24  md:w-96 w-80  h-fit bg-base-200 hover:bg-base-200   p-4 z-50"
        >
          <h3 className="text-2xl font-semibold text-gray-300">Koszyk</h3>
          <div className="flex ">
            <ul>
              {cartData.length === 0 ? (
                <p className="text-center text-gray-300">
                  Twój koszyk jest pusty
                </p>
              ) : (
                <>
                  {cartData.map((game, index) => (
                    <li key={index} className="mb-2">
                      {game.title}{" "}
                      <p className=" hover:bg-transparent">
                        Cena: {game.price} zł
                        <div className="absolute ml-40  w-16 ">
                          <button
                            className="btn btn-ghost "
                            onClick={() => removeFromCart(game.id)}
                          >
                            <img src={crossed} alt="" />
                          </button>
                        </div>
                      </p>
                    </li>
                  ))}
                  <div className=" ml-32 mt-5 md:ml-56">
                    <Link to="/cartPage">
                      <button className="btn btn-success">Kup teraz</button>
                    </Link>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cart;
