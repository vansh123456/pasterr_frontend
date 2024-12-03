import React from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
}

export const Button = ({ label, onClick} : ButtonProps): JSX.Element => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
            {label}
        </button>
    );
};