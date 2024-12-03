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

export const useSnippetActions = () => {
    
    const deleteSnippet = async(id: number) => {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`http://localhost:8080/snippets/${id}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            alert("Snippet deleted successfully!");
    } catch(err) {
        console.error("Error deleting snippet:", err);
        alert("Failed to delete snippet. Please try again.");
        }
    }

    const updateSnippetContent = async (id: number, content: string) => {
        const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `http://localhost:8080/snippets/${id}`,
        {id,content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Snippet updated successfully!");
      return response.data;
    } catch (err) {
        console.error("Error updating snippet:", err);
        alert("Failed to update snippet. Please try again.");
      }
    };
    return{ deleteSnippet, updateSnippetContent} //returns the async functions in our custom defined hooks
}