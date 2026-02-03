// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Captainlogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userData, setUserData] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUserData({ email, password });
//     console.log("Login Data:", { email, password }); // Debugging
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div className="p-7 flex flex-col justify-between h-screen">
//       <div>
//         <img
//           className="w-16 mb-10"
//           src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
//           alt="Uber Logo"
//         />
//         <form onSubmit={handleSubmit}>
//           <h3 className="text-lg font-medium mb-2">What's your email</h3>
//           <input
//             type="email"
//             required
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             placeholder="abc@gmail.com"
//             className="bg-[#eeeeee] rounded mb-7 px-4 py-2 w-full text-lg border placeholder:text-base"
//           />

//           <h3 className="text-lg font-medium mb-2">Enter Password</h3>
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//             placeholder="password"
//             className="bg-[#eeeeee] rounded mb-7 px-4 py-2 w-full text-lg border placeholder:text-base"
//           />

//           <button
//             type="submit"
//             className="bg-[#111] text-white font-semibold rounded mb-3 px-4 py-2 w-full border text-base"
//           >
//             Login
//           </button>
//           <p className="text-center">
//             New here?{' '}
//             <Link to="/signup" className="text-blue-600">
//               Create new account
//             </Link>
//           </p>
//         </form>
//       </div>

//       {/* Optional - Remove if not needed */}
//       <div>
//         <Link
//           to="/captain-login"
//           className="bg-green-700 text-white font-semibold rounded mb-5 px-4 py-2 w-full border text-base inline-block text-center"
//         >
//           Sign in as Captain
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Captainlogin;
