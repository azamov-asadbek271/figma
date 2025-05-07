function ConsultationSection() {
  return (
    <div className="font-inter con-align flex mb-[70px]">
      <div className="py-[45px] px-[49px] w-[62%] bg-[#FAE9D3] flex flex-col text-[#D28527]  rounded-tl-[10px] rounded-bl-[10px]">
        <h2 className="text-[32px] font-bold mb-[20px]">
          Workshops and Spiritual Development
        </h2>
        <p className=" mb-[178px] w-[590px] text-[22px] font-medium leading-[32px]">
          Participate in our weekly workshops focused on Islamic studies and
          spiritual growth. These sessions are designed to help you strengthen
          your connection with faith and acquire essential skills for daily life
        </p>
        <div className="p-[10px] flex justify-center items-center gap-2">
          <div className="bg-[#009688] w-[46px] h-[10px] rounded-[10px]"></div>
          <div className="rounded-[50%] w-[10px] h-[10px] bg-[#fff]"></div>
          <div className="rounded-[50%] w-[10px] h-[10px] bg-[#fff]"></div>
          <div className="rounded-[50%] w-[10px] h-[10px] bg-[#fff]"></div>
        </div>
      </div>
      <div className="py-[45px] px-[49px] flex flex-col w-[38%] text-[#152032] bg-[#F9F7F3] rounded-tr-[10px] rounded-br-[10px]">
        <p className="text-[30px] font-bold  mb-[8px]">Free consultation</p>
        <p className="font-medium text-[16px] leading-[20px] mb-[28px]">
          Leave your phone number, and we will reach out to provide you with
          complete information about our courses.
        </p>
        <form>
          <div className="flex flex-col gap-[20px]">
            <input
              type="text"
              placeholder="Name"
              className="text-[#152032] p-[14px] rounded-[10px] outline-none border-2"
            />
            <input
              type="tel"
              placeholder="+998"
              className="text-[#152032] p-[14px] rounded-[10px] outline-none border-2"
            />
          </div>
          <div className="flex items-center gap-[14px] pt-[18px] pb-[20px] pl-2">
            <input type="checkbox" className="w-6 h-6 " />
            <p className="text-[#152032] text-[14px]">
              I agree to the use of my personal information for consultation
              purposes.
            </p>
          </div>
          <button className="w-full bg-[#009688] py-[12px] text-[20px] font-bold text-[#fff] rounded-[7px] hover:bg-[#33b0a4]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConsultationSection;
