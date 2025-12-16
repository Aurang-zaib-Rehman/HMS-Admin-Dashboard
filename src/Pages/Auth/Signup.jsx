import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import signupImg from "../../assets/images/signup.jpg";
import defaultProfile from "../../assets/images/profile.png"; 

const Signup = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const togglePass = () => setPasswordVisible(!passwordVisible);
  const toggleConfirm = () => setConfirmVisible(!confirmVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  // Email Validation 
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      return setError("Please enter a valid email like example@gmail.com");
    }

    if (password !== confirm) {
      return setError("Passwords do not match.");
    }

    let users = JSON.parse(localStorage.getItem("hms-users")) || [];

    // Check for email existace
    if (users.some((u) => u.email === email)) {
      return setError("This email is already registered. Please log in.");
    }

    const newUser = {
      email,
      password,
      image: defaultProfile 
    };

    users.push(newUser);

    localStorage.setItem("hms-users", JSON.stringify(users));
    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-white">
      <div className="hidden md:block w-1/2">
        <img
          src={signupImg}
          alt="signup"
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.25)] animate-fadeIn">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-1">
            CREATE ACCOUNT
          </h2>

          <p className="text-center text-gray-500 mb-6">Signup to get started</p>

          {error && (
            <p className="bg-red-100 text-red-600 p-3 rounded-lg text-center mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleSignup} className="space-y-5">
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
                  onClick={togglePass}
                >
                  {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Confirm Password</label>
              <div className="relative">
                <input
                  type={confirmVisible ? "text" : "password"}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                />
                <span
                  className="absolute right-3 top-3 text-xl cursor-pointer text-gray-600"
                  onClick={toggleConfirm}
                >
                  {confirmVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>
            </div>

            <button className="w-full bg-cyan-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-cyan-800 transition-all">
              Signup
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-cyan-700 font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
