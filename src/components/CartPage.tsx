import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartData } = useContext(CartContext);
  const { userData } = useContext(AuthContext);
  console.log(userData);

  const totalPrice = () => {
    let totalPrice = 0;
    cartData.map((game) => (totalPrice += game.price));
    return totalPrice;
  };

  return (
    <>
      <h3 className="text-center mt-8 text-3xl font-semibold tracking-wider">
        Twoje zamówienie
      </h3>
      <div className="flex justify-center mt-5">
        <ul className="timeline">
          <li>
            <div className="timeline-start timeline-box">Koszyk</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">Wybór płatności</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-start timeline-box">Podsumowanie</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-center mt-6">
        <div className="h-20 w-96 ">
          <ul>
            {cartData.length === 0 ? (
              <p className="text-center  text-gray-300">
                Twój koszyk jest pusty
              </p>
            ) : (
              <>
                <div className="text-xl rounded p-4  ">
                  {cartData.map((game, index) => (
                    <li key={index} className="mb-4 flex justify-between ">
                      <a className="font-semibold">{game.title}</a>
                      <span>
                        {" "}
                        Cena: <a className="font-semibold">
                          {game.price} zł
                        </a>{" "}
                      </span>
                    </li>
                  ))}

                  

                  <div className="flex justify-between items-center mt-16 mb-5">
                    <span
                      style={{ fontStyle: "italic" }}
                      className=" text-red-500"
                    >
                      Całkowita suma:{" "}
                      <a className="inline ml-2 font-semibold">
                        {totalPrice()} zł
                      </a>
                    </span>
                    <Link to="/cartPageTwo"><button className="btn btn-success ">Przejdź dalej</button></Link>
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartPage;
