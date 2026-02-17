import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import axios from "axios";
import { authDataContext } from "../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { serverUrl, setUser } = useContext(authDataContext);

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("All fields required");
      return;
    }

    try {
      const res = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      // Save logged-in user in context
      setUser(res.data.user);

      alert(res.data.message); // optional toast
      navigate("/"); // redirect to home

    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 relative">

      {/* BACK ARROW */}
      <div
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center rounded-full bg-red-100 shadow cursor-pointer hover:bg-red-200 transition"
      >
        <FaArrowLeftLong className="text-red-600 text-sm" />
      </div>

      {/* LOGIN CARD */}
      <div className="w-[320px] bg-white p-5 rounded-xl shadow">

        <h2 className="text-xl font-semibold text-center mb-4">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-9 mb-3 px-3 border rounded text-sm"
        />

        <div className="relative mb-4">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-9 px-3 border rounded text-sm"
          />
          <div
            className="absolute right-3 top-2.5 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full h-9 bg-red-500 text-white rounded text-sm hover:bg-red-600"
        >
          Login
        </button>

        {/* SIGNUP NAV */}
        <p className="text-center text-xs mt-3 text-gray-600">
          New user?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-red-500 cursor-pointer font-medium"
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;