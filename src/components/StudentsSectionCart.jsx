
function StudentsSectionCart({img,job,title,prh}) {
  return (
    <div className=" shadow-lg card bg-[#F6F8F9] p-[35px] ">
      <p className="text-[#686868] text-[17px] font-medium mb-[20px] leading-[26px]">
        {prh}
      </p>
      <div className="flex gap-[16px] items-center">
        <img src={img} alt="stuends" className="w-[50px] h-[50px]" />
        <div>
          <h3 className="text=[#000] text-[18px] font-medium leading-[26px]">
            {title}
          </h3>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentsSectionCart