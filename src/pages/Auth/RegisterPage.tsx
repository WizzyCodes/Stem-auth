import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../../api/API";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  document.title = "Register";
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createAccount({
        name,
        email,
        password,
        schoolName,
        phoneNumber,
      });
      if (response.status === 201) {
        navigate("/login");
      } else {
        setError("Registration failed");
      }
    } catch (error) {
      setError("Registration failed");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[500px] border rounded-md min-h-[200px] p-4">
        {" "}
        <h1 className="text-[20px] font-semibold">Register Screen</h1>
        <form className="flex flex-col  mt-10" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            {" "}
            <label className="text-[12px]  font-semibold">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
              className=" border rounded-md h-[45px] outline-none pl-1 text-[16px]"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-[12px]  font-semibold">Email</label>
            <input
              type="email"
              placeholder=" Enter Email"
              className="border h-[45px] my-2 pl-1 rounded-md outline-none text-[16px]"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mb-4 relative">
            {" "}
            <label className="text-[12px]  font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" Enter Password"
              className="border rounded-md h-[45px] outline-none pl-1"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
            <p
              className="absolute bottom-4 cursor-pointer right-4  text-gray-600 hover:text-black transition-all ease-in duration-100"
              onClick={togglePassword}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label className=" font-semibold text-[12px]">School Name</label>
            <input
              placeholder=" Enter School Name"
              className="border h-[45px] outline-none pl-1 rounded-md "
              value={schoolName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSchoolName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mb-4 ">
            <label className=" font-semibold text-[12px]">Phone Number</label>
            <input
              placeholder="Enter Phone Number"
              className="border h-[45px]  pl-1 rounded-md outline-none"
              value={phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          {/* <input
            placeholder="Avatar"
            className="border h-[45px] my-2 pl-1 rounded-md "
            value={avatar}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAvatar(e.target.value);
            }}
          /> */}
          <div>
            <button
              type="submit"
              className="text-white bg-red-500 rounded-md h-[45px] w-full font-semibold"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-4 text-[12px] text-center font-medium">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
