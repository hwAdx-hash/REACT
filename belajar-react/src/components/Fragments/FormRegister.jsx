import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="Fullname" name="fullname" type="text" placeholder="insert ur name here!" />
            <InputForm label="Email" name="email" type="email" placeholder="example@gmail.com" />
            <InputForm label="Password" name="password" type="password" placeholder="Masukan password anda" />
            <InputForm label="Confirm Password" name="confirmPassword" type="password" placeholder="Konfirmasi password anda" />
            <Button classname="bg-[#FF4217] hover:bg-[#FF4217]/90 w-full mt-2">Register</Button>
        </form>
    )
}

export default FormRegister;