// import React, { useState } from "react";
// import { InputBox } from "../components/InputBox";
// import { Button } from "../components/Button";
// import { Heading } from "../components/Heading";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export const Signup = () => {
//     const [username, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSignup = async () => {
//         try {
//             const response = await axios.post("http://localhost:8080/signup", {
//                 username,
//                 email,
//                 password,
//             });
    
//             // Debugging the response
//             console.log("Signup response:", response.data); // Check the full response here
    
//             // Directly accessing the token from the response
//             const token = response.data.token;
//             console.log("Extracted token:", token);
    
//             // Store token in localStorage
//             if (token) {
//                 localStorage.setItem("token", token);
//                 alert("Signup successful and token saved!");
//                 navigate("/snippets")

//             } else {
//                 console.error("Token is undefined in the response.");
//                 alert("Signup succeeded but failed to save token.");
//             }
//         } catch (error) {
//             console.error("Signup error:", error);
//             alert("Signup failed.");
//         }
//     };
    
    
//     return (
//         <div className="bg-gray-100 h-screen flex justify-center items-center">
//             <div className="bg-white p-8 rounded shadow-md w-96">
//                 <Heading label="Sign Up" />
//                 <InputBox
//                     label="Name"
//                     placeholder="Enter your name"
//                     value={username}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <InputBox
//                     label="Username"
//                     placeholder="Enter your username"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <InputBox
//                     label="Password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Button label="Sign Up" onClick={handleSignup} />
//             </div>
//         </div>
//     );
// };

import React from "react";
import { Auth } from "../components/Auth";

export const Signup = () => {
    return <Auth type="signup" />;
};
