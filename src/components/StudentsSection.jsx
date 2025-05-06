// components
import StudentsSectionCart from "./StudentsSectionCart";
// img
import studentOpinionImg from "/assets/ourServiSection/studentsOpinion.png";

function StudentsSection() {
  const studentsOpinion = [
    {
      id: 1,
      prh: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
      img: studentOpinionImg,
      title: "Finlay Kirk",
      job: "Web designer",
    },
    {
      id: 2,
      prh: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
      img: studentOpinionImg,
      title: "Finlay Kirk",
      job: "Web designer",
    },
    {
      id: 3,
      prh: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
      img: studentOpinionImg,
      title: "Finlay Kirk",
      job: "Web designer",
    },
  ];
  return (
    <div className="py-[70px] flex flex-col items-center font-openSans con-align">
      <h2 className="text-[#000] text-[40px] font-bold mb-[10px]">
        What students say
      </h2>
      <p className="w-[590px] text-center text-[#686868] text-[17px] font-medium mb-[62px]">
        Our team consists of seasoned professionals with extensive experience in
        Islamic finance and management. Each member brings a unique set of
        skills and expertise.
      </p>
      <div className="flex  gap-[40px] mb-[60px]">
        {studentsOpinion.map((obj) => {
          let { id, title, prh, img, job } = obj;
          return (
            <StudentsSectionCart
              key={id}
              title={title}
              prh={prh}
              img={img}
              job={job}
            />
          );
        })}
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

export default StudentsSection;
