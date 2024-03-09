import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

type UserState = {
  loggedIn: boolean;
  userData: any;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const userContext = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8081/api/users/login/${email}/${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        navigate("/LoginPage");
        throw new Error("Response was not ok");
      }

      const data = await response.json();
      if (data.status) {
        userContext.loggedIn = true;
        userContext.userData = data.result;
        setUser((prevState: UserState) => ({ ...prevState, loggedIn: true, userData: data.result }));
        console.log(userContext, "Dane pobrane z kontekstu");
        navigate("/home");
      } else {
        setError("Błędne dane logowania");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleChangeInput = (value: string) => {
    if (value) {
      setError("");
    }
  };
  return (
    <>
      <h3 className="text-center mt-16 text-3xl font-semibold">Logowanie</h3>
      <div className="w-full h-full flex justify-center mt-10">
        <div className="w-96 ">
          <form onSubmit={handleSubmit}>
            <p className="text-center mb-2">Adres e-mail</p>
            <label className="input input-bordered flex items-center gap-2 mb-5">
              <input
                type="text"
                className="grow"
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleChangeInput(e.target.value);
                }}
              />
            </label>
            <p className="text-center mb-2">Hasło</p>
            <label className="input input-bordered flex items-center gap-2 mb-6">
              <input
                type="password"
                className="grow"
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleChangeInput(e.target.value);
                }}
              />
            </label>
            {error && <p className="text-red-500 text-center mb-2">{error}</p>}
            <div className="flex justify-between items-center ">
              <p>
                Nie masz konta?{" "}
                <Link to="/registerPage">
                  <a className="font-semibold cursor-pointer">
                    Zarejestruj się
                  </a>
                </Link>
              </p>
              <button type="submit" className="btn btn-success ">
                ZALOGUJ SIĘ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
