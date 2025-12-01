// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [error, setError] = useState("");

//   const handleSignup = (e) => {
//     e.preventDefault();

//     if (password !== confirm) {
//       return setError("Passwords do not match.");
//     }

//     const userData = { email, password };
//     localStorage.setItem("hms-user", JSON.stringify(userData));

//     alert("Account created! Please login.");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0D1224] px-4">
//       <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

//         <h2 className="text-3xl font-bold text-center text-gray-900">
//           Create Account
//         </h2>
//         <p className="text-center text-gray-500 mb-6">Signup to access the dashboard</p>

//         {error && (
//           <p className="bg-red-100 text-red-600 p-3 rounded-lg text-center mb-4">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleSignup} className="space-y-4">
//           <div>
//             <label className="block mb-1 text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0D1224] outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0D1224] outline-none"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0D1224] outline-none"
//               value={confirm}
//               onChange={(e) => setConfirm(e.target.value)}
//               required
//             />
//           </div>

//           <button className="w-full bg-[#0D1224] text-white py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90">
//             Signup
//           </button>
//         </form>

//         <p className="text-center mt-4 text-gray-600">
//           Already have an account?{" "}
//           <span
//             onClick={() => navigate("/")}
//             className="text-[#0D1224] font-semibold cursor-pointer"
//           >
//             Login
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import signupImg from "../../assets/images/signup.jpg";

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

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      return setError("Passwords do not match.");
    }

    const userData = { email, password };
    localStorage.setItem("hms-user", JSON.stringify(userData));

    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT SIDE IMAGE */}
      <div className="hidden md:block w-1/2">
        <img
          src={signupImg}
          alt="signup"
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      {/* RIGHT SIDE FORM */}
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

            {/* EMAIL */}
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

            {/* PASSWORD */}
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

            {/* CONFIRM PASSWORD */}
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

            {/* SIGNUP BUTTON */}
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
