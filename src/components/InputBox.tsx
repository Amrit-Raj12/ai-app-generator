import React from 'react';

interface InputBoxProps {
    isDark: boolean;
    type: React.HTMLInputTypeAttribute; // Restricts to valid input types
    placeholder?: string;
    name?: string;
}

const InputBox: React.FC<InputBoxProps> = ({ isDark, type, placeholder, name }) => {
    return (
        <div className="mb-6">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className={`${isDark ? 'text-white border-slate-400/50' : 'text-black border-slate-700/50'} w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base outline-none focus:border-primary focus-visible:shadow-none`}
            />
        </div>
    );
};

export default InputBox;
