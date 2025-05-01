import american from "/assets/ourExpert/american.png";
import klarna from "/assets/ourExpert/klarna.png";
import skrill from "/assets/ourExpert/Skrill.png";
import stripte from "/assets/ourExpert/Stripe.png";
import westrnunion from "/assets/ourExpert/westrnunion.png";

function ClinetsSection() {
  const logos = [american, klarna, skrill, stripte, westrnunion];
   const logosTwo = [westrnunion, skrill, american, klarna, stripte];
  
  return (
    <div className="py-[70px]">
      <h2 className="text-[#000] text-[40px] font-bold mb-[60px] text-center ">
        Our Partners and Clients
      </h2>

      <div className="overflow-hidden w-full bg-white py-6">
        <div
          className="flex w-max gap-[21px] animate-scroll-right"
          style={{
            animation: "scroll-right 25s linear infinite",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`horizontal-${logo}-${index}`}
              className="w-[280px] shrink-0 flex items-center justify-center py-[30px] px-[40px] bg-[#F6F8F9] border border-[#E1E1E1]"
            >
              <img src={logo} alt="payment logo" className="w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden w-full bg-white py-6 ">
        <div
          className="flex w-max gap-[21px] animate-scroll-left "
          style={{
            animation: "scroll-left 20s linear infinite",
          }}
        >
          {[...logosTwo, ...logosTwo].map((logo, index) => (
            <div
              key={`vertical-${logo}-${index}`}
              className="w-[280px] shrink-0 flex items-center justify-center py-[30px] px-[40px] bg-[#F6F8F9] border border-[#E1E1E1]"
            >
              <img src={logo} alt="payment logo" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClinetsSection;
