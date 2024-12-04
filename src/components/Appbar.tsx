import { Link, useLocation } from "react-router-dom";

export const Appbar = () => {
    const location = useLocation(); // Get the current location
    const hideButton = ["/signin", "/signup"].includes(location.pathname); // Check if the current route is /signin or /signup

    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link to={"/snippets"} className="cursor-pointer">
                <div className="font-extrabold text-2xl italic">Pasterr!</div>
            </Link>
            {!hideButton && ( // Conditionally render the button
                <div>
                    <Link to={"/newsnippet"}>
                        <button
                            type="button"
                            className="mr-10 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Create New Snippet
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};