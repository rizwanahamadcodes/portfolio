import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

interface ButtonProps {
    children: React.ReactNode;
    gradient: string;
}

const Button: React.FC<ButtonProps> = ({ children, gradient }) => {
    return (
        <button
            className={`${gradient} flex h-12 items-center gap-4 rounded-full bg-gradient-to-r px-4 text-gray-100  bg-blend-overlay transition-all duration-[0.1s] hover:bg-gray-100/10 hover:shadow-gray-900/50 first-line:hover:shadow active:scale-95 active:bg-gray-900/10`}>
            <p>this was added on the phone</p>
            {children}
        </button>
    );
};

export default Button;