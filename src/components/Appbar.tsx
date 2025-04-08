import { Link, useLocation } from "react-router-dom";

export const Appbar = () => {
    const location = useLocation(); // Get the current location

    // Define routes where the button should be hidden
    const routesToHideButton = ["/","/signin", "/signup"];
    const hideButton = routesToHideButton.includes(location.pathname);
    //const hideButton = routesToHideButton.some(route => location.pathname.startsWith(route));

    return (
        <div className="border-b flex justify-between px-10 py-4">
            {/* Link to the main snippets page */}
            <Link to="/snippets" className="cursor-pointer">
                <div className="font-extrabold text-2xl italic">Pasterr!</div>
            </Link>

            {/* Conditionally render the button */}
            {!hideButton && (
                <div>
                    <Link to="/newsnippet">
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
