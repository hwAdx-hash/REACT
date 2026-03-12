import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPages = () => {
    return (
        <AuthLayouts title="Register" type="register">
            <FormRegister />
        </AuthLayouts>
    );
}

export default RegisterPages;