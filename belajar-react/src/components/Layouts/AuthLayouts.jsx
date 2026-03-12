const AuthLayouts = ({ title, children }) => {
    return (
        <div className='flex justify-center bg-black min-h-screen items-center'>
            <div className=" w-full max-w-xs border border-gray-800 rounded-lg p-6 shadow-sm shadow-gray-800">
                <h1 className=' text-white text-center font-semibold text-xl font-mono mb-3'>{title}</h1>
                {children}
            </div>
        </div>
    );
}

export default AuthLayouts;