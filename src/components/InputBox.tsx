import React from "react";

interface InputBoxProps {
    placeholder: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ placeholder, label, value, onChange }: InputBoxProps):  JSX.Element=> {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border rounded w-full py-2 px-3 text-gray-700"
            />
        </div>
    );
};