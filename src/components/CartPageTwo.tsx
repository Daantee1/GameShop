import { useState } from "react";
import przelewy24 from "../assets/przelewy24.png";
import {  useNavigate } from "react-router-dom";

const CartPageTwo = () => {

    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate();
    const handleClick = ()=> {
        setShowAlert(true)
        setTimeout(()=>{
        navigate("/cartPageThree")
        }, 5000)
    }
  return (
    <>
      <h3 className="text-center mt-8 text-3xl font-semibold tracking-wider">
        Wybór płatności
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

      <div className="w-full flex justify-center">
  <div className="w-80 ">
    <button onClick={handleClick}>
      <img src={przelewy24} alt="przelewy24" className="w-full h-auto rounded hover:opacity-50" /> 
    </button>
  </div>
 
</div>
{showAlert ? (
  <div className="w-full justify-center items-center flex flex-col mt-5">
    <div role="alert" className="alert alert-success w-96 ">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Twoja płatność została potwierdzona</span>
    </div>
    <div className="mt-5">
      <h3>Trwa przechodzenie do Podsumowania...</h3>
      <div className="justify-center flex mt-5">
      <span className="loading loading-dots loading-lg "></span>
      </div>
    </div>
  </div>
) : null}
    </>
  );
};

export default CartPageTwo;
