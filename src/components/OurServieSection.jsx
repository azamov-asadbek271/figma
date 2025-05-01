import CartOurServiesSection from "./CartOurServiesSection";
// img
import icon1 from "/assets/ourServiSection/Vector-2.png";
import icon2 from "/assets/ourServiSection/our-2.png";
import icon3 from "/assets/ourServiSection/our-3.png";
import icon4 from "/assets/ourServiSection/our-5.png";
import icon6 from "/assets/ourServiSection/our-6.png";
import icon7 from "/assets/ourServiSection/our-7.png";

function OurServieSection() {
  const obj = [
    {
      image: icon1,
      title: "Islamic Fund Management",
      desc: "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
      bgColor: "#DEEAFF",
    },
    {
      image: icon2,
      title: "International Relations",
      desc: "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      bgColor: "#D5F6ED",
    },
    {
      image: icon3,
      title: "International Relations",
      desc: "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      bgColor: "#FBE2F4",
    },
    {
      image: icon4,
      title: "International Relations",
      desc: "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      bgColor: "#E2DBF9",
    },
    {
      image: icon6,
      title: "International Relations",
      desc: "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      bgColor: "#EBEFF3",
    },
    {
      image: icon7,
      title: "International Relations",
      desc: "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      bgColor: "#FFEDB6",
    },
  ];
  return (
    <div className="con-align mt-10 mb-[70px] flex flex-col items-center font-openSans">
      <h2 className="text-[#000] text-[40px] font-bold mb-[10px]">
        Our services
      </h2>
      <p className="w-[590px] text-center text-[#686868] text-[20px] font-medium mb-[62px]">
        Expert guidance for managing funds in alignment with Islamic principles,
        helping you make informed, halal investment decisions.
      </p>
      <div className="flex gap-5 flex-wrap items-center justify-between">
        {obj ? (
          obj.map((item) => {
            let { image, title, desc, bgColor } = item;
            return (
              <CartOurServiesSection
                key={image}
                image={image}
                title={title}
                desc={desc}
                bgColor={bgColor}
              />
            );
          })
        ) : (
          <h2>hello</h2>
        )}
      </div>
    </div>
  );
}

export default OurServieSection;
