// react js
import { useState } from "react";
// icon
import { AiOutlinePlus } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const Accardion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-[#686868] rounded-[10px]">
      <button
        className="w-full text-left flex justify-between items-center py-4 px-2 text-xl font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-medium ">{title}</p>
        <span>
          {isOpen ? <MdClose className="text-[20px]" /> : <AiOutlinePlus />}
        </span>
      </button>
      {isOpen && (
        <div className="px-2 pb-4 text-gray-700 text-base">{content}</div>
      )}
    </div>
  );
};

export default Accardion;
