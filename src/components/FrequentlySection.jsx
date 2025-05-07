import Accardion from "./Accardion";
function FrequentlySection() {
    const itemsLeft = [
      {
        title: "Will I receive lifetime access to the courses?",
        content:
          "Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.",
        id: 4,
      },
      {
        title: "Will I receive lifetime access to the courses?",
        content:
          "Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.",
        id: 5,
      },
    ];
  const itemsRight = [
    {
      title: "Can I use the materials for community teaching?",
      content:
        "Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.",
      id: 1,
    },
    {
      title: "Is there a free trial for the courses?",
      content:
        "Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.",
      id: 2,
    },
    {
      title: "Who can benefit from these courses?",
      content:
        "Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.",
      id: 3,
    },
  ];
  return (
    <div className="py-[70px] flex flex-col items-center font-openSans con-align">
      <h2 className="text-[#000] text-[40px] font-bold mb-[10px]">
        Frequently asked questions
      </h2>
      <p className="w-[590px] text-center text-[#686868] text-[20px] font-medium mb-[62px]">
        If you have any further questions, please contact us
      </p>
      {/* accardion */}
      <div className="   flex justify-center gap-[20px]  w-full min-h-[400px]">
        <div className="w-[calc(50%-10px)]  flex flex-col gap-[20px]">
          {itemsLeft.map((item) => (
            <Accardion
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className="w-[calc(50%-10px)] flex flex-col gap-[20px]">
          {itemsRight.map((item) => (
            <Accardion
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrequentlySection;
