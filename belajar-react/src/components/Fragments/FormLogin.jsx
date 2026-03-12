import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form action="">
            <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com" />
            <InputForm label="Password" name="password" type="password" placeholder="Masukan password anda" />
            <Button classname="bg-[#FF4217] hover:bg-[#FF4217]/90 w-full mt-2">Login</Button>
        </form>
    )
}

export default FormLogin;