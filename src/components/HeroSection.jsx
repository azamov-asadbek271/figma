// images
import img1 from "/assets/heroSection/69.svg";
import img2 from "/assets/heroSection/68.svg";
import img3 from "/assets/heroSection/67.svg";
import img4 from "/assets/heroSection/rate.svg";
import calendar from "/assets/heroSection/calendar.svg";
import student from "/assets/heroSection/student.png";

function HeroSection() {
  return (
    <div>
      <div className="bg-[#009688] pt-[41px] pr-[110px] pb-[8px] pl-[108px] font-inter  text-[#252641] mb-[46px]">
        <div className="flex con-align">
          <div className="pt-[81px]">
            <p className="px-[25px] py-[8px] bg-[#fff] inline-block rounded-[10px] mb-10 text-[17px] font-medium ">
              Seeking Knowledge is an Obligation in Islam
            </p>

            <div className="text-[58px] font-bold text-[#FFFFFF] mb-10 leading-[70px]">
              <span className="block">Enhance Your</span>
              <span className="block">Understanding of Islamic</span>
              <span className="block">Ethics with Al-Muamalat</span>
            </div>

            {/* 3 elementli qator */}
            <div className="flex items-center">
              {/* Tugma */}
              <button className="px-[41px] py-[16px] bg-[#FD661F] text-[#fff] rounded-[10px] uppercase font-medium text-[16px]">
                Students’ opinion
              </button>

              {/* Profil rasmlari */}
              <div className=" relative w-[140px] h-[52px] right-[20px]">
                <img
                  src={img3}
                  alt="user1"
                  className="w-[52px] absolute left-0"
                />
                <img
                  src={img2}
                  alt="user2"
                  className="w-[52px] absolute left-[35px]"
                />
                <img
                  src={img1}
                  alt="user3"
                  className="w-[52px] absolute left-[70px]"
                />
              </div>

              {/* Rating rasmi */}
              <img
                src={img4}
                alt="rating"
                className="w-[97px] h-[46px]  relative right-[30px] "
              />
            </div>
          </div>
          {/* right */}
          <div>
            <div className=" py-[16px] px-[24px] inline-flex bg-[#FFFFFFCC] rounded-[20px] gap-[23px] items-center ">
              <div className="bg-[#23BDEE] p-2 rounded-[8px] ">
                <img src={calendar} alt="image calendar" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[24px] leading-none text-[#595959] ">
                  250k
                </span>
                <span className="font-semibold text-[14px] text-[#545567]">
                  Assisted Student
                </span>
              </div>
            </div>
            <div className="w-[504px] ">
              <img
                src={student}
                alt="Student"
                className="w-full  h-[572px] flex "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-[10px] flex justify-center items-center gap-2">
        <div className="bg-[#009688] w-[46px] h-[10px] rounded-[10px]"></div>
        <div className="rounded-[50%] w-[10px] h-[10px] bg-[#D9D9D9]"></div>
        <div className="rounded-[50%] w-[10px] h-[10px] bg-[#D9D9D9]"></div>
        <div className="rounded-[50%] w-[10px] h-[10px] bg-[#D9D9D9]"></div>
      </div>
    </div>
  );
}

export default HeroSection;
