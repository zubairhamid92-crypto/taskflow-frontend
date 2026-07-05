import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
        />
    );
});

Input.displayName = "Input";

export default Input;