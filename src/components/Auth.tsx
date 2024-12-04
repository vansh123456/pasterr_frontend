import  { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

interface AuthProps {
    type: "signup" | "signin"; // Determines the behavior and label
}

export const Auth = ({ type }: AuthProps) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const url = `https://pasterr-keybe.onrender.com/${type}`;
            const payload =
                type === "signup"
                    ? { username, email, password } // Signup requires username
                    : { email, password }; // Signin only requires email and password

            const response = await axios.post(url, payload);

            console.log(`${type} response:`, response.data);

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                alert(`${type === "signup" ? "Signup" : "Signin"} successful! Token saved.`);
                navigate("/snippets"); // Navigate after successful auth
            } else {
                alert(`${type} succeeded but token is missing.`);
            }
        } catch (error) {
            console.error(`${type} error:`, error);
            alert(`${type} failed. Please try again.`);
        }
    };

    return (
        <div className="bg-black">
        <div className="bg-gray-100 h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <Heading label={type === "signup" ? "Sign Up" : "Sign In"} />
                <div className="flex justify-center text-slate-500"> {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                <Link className="underline pl-1" to={type === "signin" ? "/signup" : "/signin"}>{type === "signin" ? "Sign up" : "Sign in"}</Link></div>
                {type === "signup" && (
                    <InputBox
                        label="Name"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                )}
                <InputBox
                    label="Email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputBox
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    label={type === "signup" ? "Sign Up" : "Sign In"}
                    onClick={handleSubmit}
                />
            </div>
        </div>
        </div>
    );
};
