// images
import man from "/assets/ourExpert/Pexels-man.png";
import telegram from "/assets/ourExpert/telegram.svg";
import instagram from "/assets/ourExpert/instagram.svg";
import twitter from "/assets/ourExpert/twitter.svg";
import facebook from "/assets/ourExpert/facebook-02.svg";

function OurExpextTeam() {
  return (
    <div className="py-[70px] flex flex-col items-center font-openSans con-align">
      <h2 className="text-[#000] text-[40px] font-bold mb-[10px]">
        Our Expert Team
      </h2>
      <p className="w-[590px] text-center text-[#686868] text-[17px] font-medium mb-[62px]">
        Our team consists of seasoned professionals with extensive experience in
        Islamic finance and management. Each member brings a unique set of
        skills and expertise.
      </p>
      <div className="carousel w-full">
        {/* 1-SLIDE */}
        <div id="slide1" className="carousel-item relative w-full p-[30px]  ">
          <div className="bg-[#D2E6E4] rounded-[10px] p-[35px] flex w-full  justify-around">
            <img src={man} alt="man" className="w-[285px] h-[375px]" />
            <div className="ml-5  w-[555px] pt-[30px]">
              <h2 className="text-[28px] font-bold mb-[36px]">
                Dr. Mezbah Uddin Ahmed
              </h2>
              <p className="mb-3 leading-[30px] text-[22px] mb-[45px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <div className="flex gap-[34px]">
                <img src={telegram} alt="telegram" className="w-[24px]" />
                <img src={instagram} alt="instagram" className="w-[24px]" />
                <img src={facebook} alt="facebook" className="w-[24px]" />
                <img src={twitter} alt="twitter" className="w-[24px]" />
              </div>
            </div>
          </div>
        </div>

        {/* 2-SLIDE */}
        <div id="slide2" className="carousel-item relative w-full p-[30px]  ">
          <div className="bg-[#D2E6E4] rounded-[10px] p-[35px] flex w-full  justify-around">
            <img src={man} alt="man" className="w-[285px] h-[375px]" />
            <div className="ml-5  w-[555px] pt-[30px]">
              <h2 className="text-[28px] font-bold mb-[36px]">
                Dr. Mezbah Uddin Ahmed
              </h2>
              <p className="mb-3 leading-[30px] text-[22px] mb-[45px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <div className="flex gap-[34px]">
                <img src={telegram} alt="telegram" className="w-[24px]" />
                <img src={instagram} alt="instagram" className="w-[24px]" />
                <img src={facebook} alt="facebook" className="w-[24px]" />
                <img src={twitter} alt="twitter" className="w-[24px]" />
              </div>
            </div>
          </div>
        </div>

        {/* 3-SLIDE */}
        <div id="slide3" className="carousel-item relative w-full p-[30px]  ">
          <div className="bg-[#D2E6E4] rounded-[10px] p-[35px] flex w-full  justify-around">
            <img src={man} alt="man" className="w-[285px] h-[375px]" />
            <div className="ml-5  w-[555px] pt-[30px]">
              <h2 className="text-[28px] font-bold mb-[36px]">
                Dr. Mezbah Uddin Ahmed
              </h2>
              <p className="mb-3 leading-[30px] text-[22px] mb-[45px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <div className="flex gap-[34px]">
                <img src={telegram} alt="telegram" className="w-[24px]" />
                <img src={instagram} alt="instagram" className="w-[24px]" />
                <img src={facebook} alt="facebook" className="w-[24px]" />
                <img src={twitter} alt="twitter" className="w-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 👉 SLIDE TUGMALARI */}
      <div className="flex justify-center gap-3 mt-5">
        <a href="#slide1" className="btn btn-sm rounded-full">
          1
        </a>
        <a href="#slide2" className="btn btn-sm rounded-full">
          2
        </a>
        <a href="#slide3" className="btn btn-sm rounded-full">
          3
        </a>
      </div>
    </div>
  );
}

export default OurExpextTeam;
