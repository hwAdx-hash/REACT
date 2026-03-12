import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPages = () => {
    return (
        <AuthLayouts title="Login">
            <FormLogin />
            <p className="text-white font-mono mt-6 text-sm text-center">Don't have account? <Link to="/register" className="text-blue-500 hover:underline">Sign Up</Link></p>
        </AuthLayouts>
    );
}

export default LoginPages;