interface ButtonProps {
    text: string;
    type?: "button" | "submit";
    loading?: boolean;
}

function Button({
    text,
    type = "button",
    loading = false,
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
            {loading ? "Please wait..." : text}
        </button>
    );
}

export default Button;