import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import loginImg from "../../assets/images/login.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => setPasswordVisible(!passwordVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email Validation 
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      return setError("Please enter a valid email like example@gmail.com");
    }

    const users = JSON.parse(localStorage.getItem("hms-users")) || [];

    // matching user
    const userFound = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!userFound) {
      return setError("Invalid email or password.");
    }

    // Save logged-in user
    localStorage.setItem("hms-user", JSON.stringify(userFound));
    localStorage.setItem("hms-auth", true);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-white">
      <div className="hidden md:block w-1/2">
        <img
          src={loginImg}
          alt="login"
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.25)] animate-fadeIn">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-1">
            SIGN IN
          </h2>

          <p className="text-center text-gray-500 mb-6">Access your HMS Portal</p>

          {error && (
            <p className="bg-red-100 text-red-600 p-3 rounded-lg text-center mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <span
                  className="absolute right-3 top-3 text-xl cursor-pointer text-gray-600"
                  onClick={togglePassword}
                >
                  {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>
            </div>

            <button className="w-full bg-cyan-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-cyan-800 transition-all">
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-cyan-700 font-semibold cursor-pointer"
            >
              Signup
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
