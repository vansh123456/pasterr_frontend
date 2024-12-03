import { useState,useEffect } from "react";
import axios from "axios";

//creating our custom react hook:
export const useSnippets = () => {
    //initialised as an empty array
    const [snippets, setSnippets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    //fetching the snippets:
    const fetchSnippets = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("You are not authorized. Please log in.");
            setLoading(false);
            return;
    }
    try {
        const response = await axios.get("http://localhost:8080/snippets",{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setSnippets(response.data);
        setError(null);
    }
    catch (err) {
        console.error("Error fetching snippets:", err);
        setError("Failed to fetch snippets. Please try again.");
    } finally {
        setLoading(false);
    }
    };
    useEffect(() => {
        fetchSnippets();
    },[]);
    return { snippets, loading, error,fetchSnippets };
}