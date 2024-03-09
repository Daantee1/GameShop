import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";



const CommonGames = () => {
  const dataCommonGames = "./src/assets/database/commonGames.json";

  const [commonGames, setCommonGames] = useState<any[]>([]);
  const cartContext = useContext(CartContext);
 


  useEffect(() => {
    fetch(dataCommonGames)
      .then((response) => response.json())
      .then((data) => setCommonGames(data))
      .catch((error) => console.log(error));
  }, []);

 

  return (
    <>
      <div className="mt-3 w-full">
        <h3 className="text-3xl text-center text-gray-300 font-semibold tracking-wider">
          Najpopularniejsze gry
        </h3>
        <div className="flex flex-wrap md:justify-start justify-center mt-10 ">
          {commonGames.map((game, index) => (
            <div
              key={index}
              className="card h-96  w-60 bg-base-100 shadow-xl mr-4 ml-5 mt-5 mb-5 hover:scale-105 "
            >
              <figure>
                <img
                  className="object-cover h-64 w-full "
                  src={game.imgUrl}
                  alt={game.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{game.title}</h2>
                <p>Cena: {game.price} zł</p>
                <div className="card-actions justify-end">
                  <button className="btn  btn-primary"
                  onClick ={()=> cartContext.addToCart(game)}
                  >Do koszyka</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommonGames;
