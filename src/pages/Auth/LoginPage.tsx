import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAccount } from "../../api/API";
import { ContextProvider } from "../../global/GlobalProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface LoginData {
  email: string;
  password: string;
}

const LoginPage = () => {
  document.title = "Login Screen";
  const { setUser }: any = useContext(ContextProvider);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<any>("error");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await loginAccount(loginData);
      if (response.status === 201) {
        setUser(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/question");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError("Login failed");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen animate-fade-in transition-all duration-10000">
      <div className="w-[500px] border rounded-md min-h-[200px] p-4">
        <h1 className="text-[20px] font-semibold">Login Screen</h1>
        <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="border h-[45px] my-2 pl-1 rounded-md outline-none text-[16px]"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col mb-4 relative">
            <label className="text-[12px] font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="border rounded-md h-[45px] outline-none pl-1"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <p
              className="absolute bottom-4 cursor-pointer right-4 text-gray-600 hover:text-black transition-all ease-in duration-100"
              onClick={togglePassword}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </p>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <button
              type="submit"
              className="text-white bg-red-500 rounded-md h-[45px] w-full font-semibold"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-[12px] text-center font-medium">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
