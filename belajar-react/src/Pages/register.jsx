import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPages = () => {
    return (
        <AuthLayouts title="Register">
            <FormRegister />
            <p className="text-white font-mono mt-6 text-sm text-center">
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            </p>
        </AuthLayouts>
    );
}

export default RegisterPages;