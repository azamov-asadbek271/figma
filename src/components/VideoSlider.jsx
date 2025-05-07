// icon
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
// react
import { useRef } from "react";
// images
import rectangle1 from "/assets/mediaSection/Rectangle-1.png";
import rectangle2 from "/assets/mediaSection/Rectangle-2.png";
import rectangle3 from "/assets/mediaSection/Rectangle-3.png";

function VideoSlider() {
  const sliderRef = useRef(null);

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -428, // slayder element eni + bo‘shliq
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 428,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-[70px] flex flex-col items-center font-openSans con-align e">
      <h2 className="text-[#000] text-[40px] font-bold mb-[10px] text-center">
        Our Media
      </h2>
      <p className="w-[590px] text-center text-[#686868] text-[17px] font-medium mb-[62px]">
        Our team consists of seasoned professionals with extensive experience in
        Islamic finance and management. Each member brings a unique set of
        skills and expertise.
      </p>

      {/* Title and buttons */}
      <div className="w-full flex justify-between items-center mb-[15px]">
        <h2 className="font-semibold text-[35px] text-[#000]">
          Our media showcase
        </h2>
        <div className="flex gap-[23px]">
          <button
            onClick={handleScrollLeft}
            className="w-[50px] h-[50px] rounded-full bg-[#ECF3F6] flex items-center justify-center hover:bg-[#009688] hover:text-white transition duration-300 ease-linear"
          >
            <FaArrowLeft className="text-[20px]" />
          </button>
          <button
            onClick={handleScrollRight}
            className="w-[50px] h-[50px] rounded-full bg-[#ECF3F6] flex items-center justify-center hover:bg-[#009688] hover:text-white transition duration-300 ease-linear"
          >
            <FaArrowRight className="text-[20px]" />
          </button>
        </div>
      </div>

      {/* Slider section */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide gap-[20px] w-full "
        style={{ scrollbarWidth: "none" }}
      >
       
          <>
            <div
              className="carousel-item w-[350px] h-[516px] rounded-[10px] bg-no-repeat p-[29px] flex items-end bg-cover justify-between"
              style={{ backgroundImage: `url(${rectangle1})` }}
            >
              <p className="text-white font-bold text-[20px] w-[192px]">
                Why Islamic finance?
              </p>
              <div className="h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center hover:bg-[#2198FF] hover:text-white transition duration-300 ease-linear cursor-pointer">
                <MdOutlineSlowMotionVideo className="text-[28px]" />
              </div>
            </div>

            <div
              className="carousel-item w-[350px] rounded-[10px] h-[516px] bg-no-repeat p-[29px] flex items-end bg-cover justify-between"
              style={{ backgroundImage: `url(${rectangle2})` }}
            >
              <p className="text-white font-bold text-[20px] w-[210px]">
                What makes Islamic finance unique?
              </p>
              <div className="h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center hover:bg-[#2198FF] hover:text-white transition duration-300 ease-linear cursor-pointer">
                <MdOutlineSlowMotionVideo className="text-[28px]" />
              </div>
            </div>

            <div
              className="carousel-item w-[350px] rounded-[10px] h-[516px] bg-no-repeat p-[29px] flex items-end bg-cover justify-between"
              style={{ backgroundImage: `url(${rectangle3})` }}
            >
              <p className="text-white font-bold text-[20px] w-[192px]">
                How is risk managed in Islamic finance?
              </p>
              <div className="h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center hover:bg-[#2198FF] hover:text-white transition duration-300 ease-linear cursor-pointer">
                <MdOutlineSlowMotionVideo className="text-[28px]" />
              </div>
            </div>
            <div
              className="carousel-item w-[350px] h-[516px] rounded-[10px] bg-no-repeat p-[29px] flex items-end bg-cover justify-between"
              style={{ backgroundImage: `url(${rectangle1})` }}
            >
              <p className="text-white font-bold text-[20px] w-[192px]">
                Why Islamic finance?
              </p>
              <div className="h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center hover:bg-[#2198FF] hover:text-white transition duration-300 ease-linear cursor-pointer">
                <MdOutlineSlowMotionVideo className="text-[28px]" />
              </div>
            </div>
            <div
              className="carousel-item w-[350px] rounded-[10px] h-[516px] bg-no-repeat p-[29px] flex items-end bg-cover justify-between"
              style={{ backgroundImage: `url(${rectangle2})` }}
            >
              <p className="text-white font-bold text-[20px] w-[210px]">
                What makes Islamic finance unique?
              </p>
              <div className="h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center hover:bg-[#2198FF] hover:text-white transition duration-300 ease-linear cursor-pointer">
                <MdOutlineSlowMotionVideo className="text-[28px]" />
              </div>
            </div>
            <div
              className="carousel-item w-[350px] rounded-[10px] h-[516px] bg-no-repeat p-[29px] flex items-end bg-cover justify-between"
              style={{ backgroundImage: `url(${rectangle3})` }}
            >
              <p className="text-white font-bold text-[20px] w-[192px]">
                How is risk managed in Islamic finance?
              </p>
              <div className="h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center hover:bg-[#2198FF] hover:text-white transition duration-300 ease-linear cursor-pointer">
                <MdOutlineSlowMotionVideo className="text-[28px]" />
              </div>
            </div>
          </>
     
      </div>
    </div>
  );
}

export default VideoSlider;
