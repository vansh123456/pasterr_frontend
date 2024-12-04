import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnippets,useSnippetActions } from "../hooks";
import { Appbar } from "../components/Appbar";

const Homepage = () => {
    const { snippets, loading, error,fetchSnippets } = useSnippets();
    const {deleteSnippet,updateSnippetContent} = useSnippetActions();
    const navigate = useNavigate();
    const [editingId,setEditingId] = useState<number | null>(null);
    const [newContent, setNewContent] = useState("");

    if (loading) {
        return <div className="flex flex-row min-h-screen justify-center items-center font-extrabold text-2xl italic">Loading snippets...</div>;
    }

    if (error) {
        return (
            <div>
                <div className="flex flex-row min-h-screen justify-center items-center">
                <p className="text-red-500 content-center ">{error}</p>
                <button
                    onClick={() => navigate("/signin")}
                    className="text-blue-500 underline"
                >
                    Go to Login
                </button>
                </div>
            </div>
        );
    }
    const handleDelete = async (id: number) => {
        await deleteSnippet(id);
        fetchSnippets() //can also use window.location.reload()
    }
    const handleUpdate = async (id: number) => {
        if (!newContent.trim()) {
            alert("Content cannot be empty.");
            return;
          }
          await updateSnippetContent(id, newContent);
          setEditingId(null);
          setNewContent("");
          fetchSnippets()
    };

    return (
        <>
          <Appbar />
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Snippets</h1>
    
            <ul className="mb-4">
              {snippets && snippets.length > 0 ? (
                snippets.map((snippet: any) => (
                  <li key={snippet.id} className="border p-2 mb-2">
                    <h2 className="font-bold">{snippet.title}</h2>
                    <p>{snippet.content}</p>
                    <small className="text-gray-500">
                      Created at: {new Date(Date.now()).toLocaleString()}
                    </small>
                    <div className="mt-2">
                      {/* Edit and Delete Buttons */}
                      {editingId === snippet.id ? (
                        <div>
                          <textarea
                            className="border p-2 w-full"
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                          />
                          <button
                            className="bg-blue-500 text-white px-4 py-2 mr-2"
                            onClick={() => handleUpdate(snippet.id)}
                          >
                            Save
                          </button>
                          <button
                            className="bg-gray-300 px-4 py-2"
                            onClick={() => setEditingId(null)}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            className="bg-red-500 text-white px-4 py-2 mr-2"
                            onClick={() => handleDelete(snippet.id)}
                          >
                            Delete
                          </button>
                          <button
                            className="bg-blue-500 text-white px-4 py-2"
                            onClick={() => {
                              setEditingId(snippet.id);
                              setNewContent(snippet.content);
                            }}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                ))
              ) : (
                <p className="flex flex-row min-h-screen justify-center items-center extrabold">No snippets found.</p>
              )}
            </ul>
          </div>
        </>
      );
    };
    
    export default Homepage;