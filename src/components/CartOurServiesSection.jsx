function CartOurServiesSection({ image, title, desc, bgColor }) {
  return (
    <div
      className="w-[380px] shadow-sm bg-info p-[30px] font-openSans rounded-[10px]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center gap-5 mb-5">
        <div>
          <img src={image} alt="" className="w-[85px]" />
        </div>
        <h2 className="text-[#152032] text-[24px] font-bold ">{title}</h2>
      </div>
      <p className="text-[17px]  mb-[38px]">{desc}</p>
      <button className="btn w-full bg-[#152032] text-white font-semibold rounded-[10px]">
        Learn more
      </button>
    </div>
  );
}

export default CartOurServiesSection;
