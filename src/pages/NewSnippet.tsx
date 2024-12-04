import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateSnippetPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleCreateSnippet = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You are not authorized. Please log in.");
            navigate("/signin");
            return;
        }

        try {
            await axios.post(
                "https://pasterr-keybe.onrender.com/snippets",
                {
                    title,
                    content,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert("Snippet created successfully!");
            setTitle("");
            setContent("");
            navigate("/snippets"); // Redirect back to the homepage after creation
        } catch (err) {
            console.error("Error creating snippet:", err);
            alert("Failed to create snippet. Please try again.");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Snippet</h1>
            <div className="mt-4">
                <textarea
                    className="w-full p-2 border rounded"
                    rows={4}
                    placeholder="Enter your snippet content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    onClick={handleCreateSnippet}
                >
                    Create Snippet
                </button>
            </div>
        </div>
    );
};

export default CreateSnippetPage;
