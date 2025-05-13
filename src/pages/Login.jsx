import FormInput from "../components/FormInput";
import Logo from "/assets/header/Logo.svg";
import smallImg from "/assets/register/Image_samll.png";
import illustration from "/assets/register/illustration_image.png";
// icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
// use Form
import { useForm } from "react-hook-form";
import useRegister from "../hook/useRegister";
import { toast } from "react-toastify";


function Login() {
  const { handleLogin } = useRegister();
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (data) => {
    const { password, phone_number } = data;
    handleLogin({ password, phone_number });
      toast.success("muvaffaqiyatli amalga oshirildi");
      reset();
  };
  return (
    <div className="font-inter p-[20px] flex">
      {/* left */}
      <div className="pt-[40px] pl-[39px] w-[55%] ">
        {/* header */}
        <div className="flex justify-between mb-[80px] ">
          <img src={Logo} alt="logo" className="w-[239px]" />
          <div className="flex gap-[49px] items-center ">
            <div>
              <p className="text-[20px]  text-[#8F8F8F]">Questions?</p>
              <p className="text-[30px] font-bold text-[#009688] leading-none">
                Ask Diyor
              </p>
            </div>
            <img src={smallImg} alt="man img" className="w-[80px]" />
          </div>
        </div>
        {/* form */}
        <div>
          <h2 className="text-[86px] tracking-winder font-bold mb-[30px]">
            Get started
          </h2>
          <form
            className=" w-[470px] flex flex-col gap-[24px]"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormInput
              placeholder="Password"
              type="text"
              register={register}
              name="password"
            />
            <FormInput
              placeholder="998901234567"
              type="tel"
              icon={
                <MdOutlineKeyboardArrowDown className="text-[22px] text-[#8F8F8F]" />
              }
              register={register}
              name="phone_number"
            />
            <button
              type="submit"
              className="w-full bg-[#009688] text-[#FFFFFF] font-semibold p-[18px] text-[20px] rounded-[8px]"
            >
              Sigin in
            </button>
            <Link
              to="/register"
              className="text-[#8F8F8F] text-[26px] text-center hover:text-[#009688] transition duration-300"
            >
              Create a new account !
            </Link>
          </form>
        </div>
      </div>
      {/* right */}
      <div className="bg-[#009688] pt-[50px] pr-[48px] pl-[48px] pb-[24px] flex flex-col justify-center items-center rounded-[30px]">
        <img
          src={illustration}
          alt=""
          className="w-[445px] h-[435px] mb-[33px] "
        />
        <p className="text-[#FFFFFF] font-bold text-[36px] leading-[50px] w-[600px] text-center">
          Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
        </p>
      </div>
    </div>
  );
}

export default Login;
