import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import axios from "axios";
import { authDataContext } from "../Context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await axios.post(
        `${serverUrl}/api/auth/signup`,
        { name, email, password },
        { withCredentials: true }
      );

      console.log(res.data);
      navigate("/login");

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Signup failed");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 relative">

      {/* BACK ARROW */}
      <div
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center rounded-full bg-red-100 shadow cursor-pointer hover:bg-red-200"
      >
        <FaArrowLeftLong className="text-red-600 text-sm" />
      </div>

      <div className="w-[320px] bg-white p-5 rounded-xl shadow">

        <h2 className="text-xl font-semibold text-center mb-4">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-8 mb-3 px-3 border rounded text-sm"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-8 mb-3 px-3 border rounded text-sm"
        />

        <div className="relative mb-4">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-8 px-3 border rounded text-sm"
          />
          <div
            className="absolute right-3 top-2.5 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <button
          onClick={handleSignUp}
          className="w-full h-7 bg-red-500 text-white rounded text-sm hover:bg-red-600"
        >
          Sign Up
        </button>

        <p className="text-center text-xs mt-3 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-500 cursor-pointer font-medium"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;