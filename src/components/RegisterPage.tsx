import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setConfirmPasswordError("Hasła nie są takie same!");
      return;
    }
    if (email) {
      const checkEmailResponse = await fetch(
        `http://localhost:8081/api/users/checkEmail/${email}`
      );
      const checkEmailData = await checkEmailResponse.json();

      if (!checkEmailData.status) {
        setEmailError("Email jest już zajęty");
        throw new Error("Email jest już zajęty");
      }
    }
    if (username) {
      const checkUsernameResponse = await fetch(
        `http://localhost:8081/api/users/checkUsername/${username}`
      );
      const checkUsernameData = await checkUsernameResponse.json();
      if (!checkUsernameData.status) {
        setUsernameError("Nazwa użytkownika jest już zajęta");
        throw new Error("Nazwa użytkownika jest już zajęta");
      }
    }

    try {
      const response = await fetch("http://localhost:8081/api/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      navigate("/loginPage")
      const data = await response.json();
      console.log(data);
     
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePasswordChange = (value: string) => {
    if (value) {
      setConfirmPasswordError("");
    }
  };
  const handleConfirmPasswordChange = (value: string) => {
    if (value) {
      setConfirmPasswordError("");
    }
  };
  const handleEmailChange = (value: string) => {
    if (value) {
      setEmailError("");
    }
  };
  const handleUsernameChange = (value: string) => {
    if (value) {
      setUsernameError("");
    }
  };
  return (
    <>
      <h3 className="text-center mt-16 text-3xl font-semibold">Rejestracja</h3>
      <div className="w-full h-full flex justify-center mt-10">
        <div className="w-96 ">
          <form onSubmit={handleSubmit}>
            <p className="text-center mb-2">Adres e-mail</p>
            <label className="input input-bordered flex items-center gap-2 mb-5">
              <input
                type="text"
                className="grow"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleEmailChange(e.target.value);
                }}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </label>
            <p className="text-center mb-2">Nazwa użytkownika</p>
            <label className="input input-bordered flex items-center gap-2 mb-5">
              <input
                type="text"
                className="grow"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  handleUsernameChange(e.target.value);
                }}
                required
              />
            </label>
            <p className="text-center mb-2">Hasło</p>
            <label className="input input-bordered flex items-center gap-2 mb-5">
              <input
                type="password"
                className="grow"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handlePasswordChange(e.target.value);
                }}
                required
              />
            </label>
            <p className="text-center mb-2">Potwierdź hasło</p>
            <label className="input input-bordered flex items-center gap-2 mb-6">
              <input
                type="password"
                className="grow"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  handleConfirmPasswordChange(e.target.value);
                }}
                required
              />
            </label>
            {confirmPasswordError && (
              <p className="text-red-500 text-center mb-2">
                {confirmPasswordError}
              </p>
            )}
            {emailError && (
              <p className="text-red-500 text-center mb-2">{emailError}</p>
            )}
           
           {usernameError && (
              <p className="text-red-500 text-center mb-2">{usernameError}</p>
            )}
            <div className="flex justify-end items-center">
              <button type="submit" className="btn btn-success ">
                ZAREJESTRUJ SIĘ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
