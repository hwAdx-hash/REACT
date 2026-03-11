const Button = ({ children, variant = "bg-[#FF4217]" }) => {
    return(
        <button
        className={`h-10 px -6 font-semibold rounded-full ${variant} text-white`}
        type='submit'
        >
        {children}
        </button>
    );
}

export default Button;