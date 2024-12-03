import React from "react";
import { useNavigate } from "react-router-dom";
import { useSnippets } from "../hooks";
import { Appbar } from "../components/Appbar";

const Homepage = () => {
    const { snippets, loading, error } = useSnippets();
    const navigate = useNavigate();

    if (loading) {
        return <div>Loading snippets...</div>;
    }

    if (error) {
        return (
            <div>
                <p className="text-red-500">{error}</p>
                <button
                    onClick={() => navigate("/signin")}
                    className="text-blue-500 underline"
                >
                    Go to Login
                </button>
            </div>
        );
    }

    return (
        <>
        <Appbar/>
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Snippets</h1>

            {/* Snippets List */}
            {/*/ add a check as new user wont have any snippets predefined so we show them a default value */}
            <ul className="mb-4">
            {snippets && snippets.length > 0 ? (
    snippets.map((snippet: any) => (
        <li key={snippet.id} className="border p-2 mb-2">
            <h2 className="font-bold">{snippet.title}</h2>
            <p>{snippet.content}</p>
            <small className="text-gray-500">
                Created at: {new Date(snippet.created_at).toLocaleString()}
            </small>
        </li>
    ))
) : (
    <p>No snippets found.</p>
)}
            </ul>
        </div>
</>

    );
};

export default Homepage;
