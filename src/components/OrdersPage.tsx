import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const OrdersPage = () => {
  const { userData } = useContext(AuthContext);

  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (userData && userData[0]) {
      fetch(`http://localhost:8081/api/orders/${userData[0].id}`)
        .then((response) => response.json())
        .then((data) => setOrders(data.result))
        .catch((error) => console.log(error));
    }
  }, [userData]);

  return (
    <>
      <h3 className="text-3xl text-center mt-8 tracking-wider">Moje zamówienia</h3>
      <div className="flex w-full h-full  justify-center mt-10">
        <div className="w-96 h-96  text-center ">
          {orders.map((order, index) => (
            <div key={index}>
              <p>
                <a className="font-semibold">ID zamówienia</a>: {order.id}
              </p>
              <p>
                <a className="font-semibold">Produkty</a>: {order.name}
              </p>
              <p className="mb-5">
                <a className="font-semibold">Data:</a> {order.date}
              </p>
            </div>
          ))}
          {orders.length === 0 ? (
            <p className="font-semibold ">Brak zamówień</p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
