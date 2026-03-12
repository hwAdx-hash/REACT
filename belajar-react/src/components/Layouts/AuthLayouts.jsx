import { Link } from "react-router-dom";

const AuthLayouts = ({ title, children, type }) => {
    return (
        <div className='flex justify-center bg-black min-h-screen items-center'>
            <div className=" w-full max-w-xs border border-gray-800 rounded-lg p-6 shadow-sm shadow-gray-800">
                <h1 className=' text-white text-center font-semibold text-xl font-mono mb-3'>{title}</h1>
                {children}
                <p className="text-white font-mono mt-6 text-sm text-center">
                    {/* condition ternary */}
                    {type === 'login' ? "Don't have account? " : "Already have an account? "}

                    {type === 'login' && (
                        <Link to="/register" 
                            className="text-blue-500 hover:underline">
                                Sign Up
                        </Link>
                    )}

                    {type === 'register' && (
                        <Link to="/login" 
                            className="text-blue-500 hover:underline">
                                Login
                        </Link>
                    )}
                </p>
            </div>
        </div>
    );
}

// memakai if else (bebas)
const Navigation = ({type}) => {
    if(type === 'login') {
        return (
            <p className="text-white font-mono mt-6 text-sm text-center">
                Dont have account?{" "} 
                <Link to="/register" className="text-blue-500 hover:underline">
                    Sign Up
                </Link>
            </p>
        );
    } else {
        return (
            <p className="text-white font-mono mt-6 text-sm text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                    Login
                </Link>
            </p>
        )
    }
}

export default AuthLayouts;