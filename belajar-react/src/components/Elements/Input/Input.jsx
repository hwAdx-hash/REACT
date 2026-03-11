const Input = (props) => {
    const { type, id, placeholder } = props;
    return (
        <input
            type={type}
            id={id}
            className=' rounded-sm w-full py-1 px-2 text-white placeholder:text-gray-400 border border-[#FF4217] focus:outline-none focus:ring-2 focus:ring-[#FF4217]' placeholder={placeholder}
        />
    )
}

export default Input;