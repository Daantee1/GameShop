import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPageThree = () => {
  const { cartData, setCartItems } = useContext(CartContext);
  const { userData } = useContext(AuthContext);

  const totalPrice = () => {
    let totalPrice = 0;
    cartData.map((game) => (totalPrice += game.price));
    return totalPrice;
  };

  const handleOrderComplete = () => {

    fetch("http://localhost:8081/api/orders/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartData, userData }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    setCartItems([]);
  };
  return (
    <>
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
              <hr className="bg-primary" />
            </li>
            <li>
              <hr className="bg-primary" />
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
              <hr className="bg-primary" />
            </li>

            <li>
              <hr className="bg-primary" />
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
        <div className="w-full flex justify-center mt-4">
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

                    <div className="text-center mt-10 mb-5">
                      <span
                        style={{ fontStyle: "italic" }}
                        className=" text-red-500"
                      >
                        Całkowita suma:{" "}
                        <a className="inline ml-2 font-semibold">
                          {totalPrice()} zł
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className=" w-96 ">
                    <h3 className="text-center font-semibold  text-2xl mb-4">
                      Dane kupującego
                    </h3>
                    <ul className="text-center text-xl">
                      <li className="mb-2">
                        <a className="font-semibold">Adres e-mail:</a>{" "}
                        {userData[0].email}{" "}
                      </li>
                      <li>
                        <a className="font-semibold">Nazwa użytkownika:</a>{" "}
                        {userData[0].username}
                      </li>
                    </ul>
                  </div>
                  <p className=" text-lg mt-8 text-green-500">
                    Kod do gry zostanie wysłany na adres e-mail
                  </p>
                  <div className="flex justify-center mt-5">
                    <Link to="/home">
                      <button
                        className="btn  btn-success"
                        onClick={handleOrderComplete}
                      >
                        Potwierdź zamówienie
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </>
    </>
  );
};

export default CartPageThree;
