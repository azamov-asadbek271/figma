// components
import FormInput from "../components/FormInput";
import useRegister from "../hook/useRegister";
// images
import Logo from "/assets/header/Logo.svg";
import smallImg from "/assets/register/Image_samll.png";
import user from "/assets/register/user.png";
import illustration from "/assets/register/illustration_image.png";
// icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// react-dom
import { Link } from "react-router-dom";
// react form hook
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Register() {
  const { handleRegister } = useRegister();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { full_name, password, phone_number } = data;
    handleRegister({ full_name, password, phone_number });
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
          <div className="mb-[30px]">
            <h2 className="text-[86px] tracking-winder font-bold leading-none">
              Get started
            </h2>
            <div className="flex">
              <p className="mr-[19px] text-[26px] text-[#8F8F8F]">
                Already have an account?
              </p>
              <Link
                to="/login"
                className="text-[#009688] font-bold text-[26px]"
              >
                Sign in
              </Link>
            </div>
          </div>
          <form
            className=" w-[470px] flex flex-col gap-[24px]"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormInput
              icon={<img src={user} className="text-[22px] text-[#8F8F8F]" />}
              placeholder="Full Name"
              type="text"
              register={register}
              name="full_name"
            />
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
              Log in
            </button>
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

export default Register;
