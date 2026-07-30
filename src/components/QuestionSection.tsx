import { LuStethoscope } from "react-icons/lu";

const questionsData = [
  {
    id: 1,
    title: '"My father had a heart attack at 54. Could it happen to me?"',
    description:
      "Heart disease, stroke, and cardiovascular conditions run in families — but not all family members inherit the same risk. iGENE can guide you on exactly what your genes say about your cardiovascular future.",
    tag: "Hereditary Risk",
    bgColor: "bg-[#F8F1FE]",
    tagColor: "bg-[#FFFFFF52]",
    textColor: "text-[#1A1A1A]",
    blurColor: "bg-[#000000]"
  },
  {
    id: 2,
    title: '"Cancer took my mother. Am I at risk too?"',
    description:
      "Many cancers have a hereditary component — but having a family member with cancer does not mean you will get it. iGENE can assess your actual genetic risk and give you a clear, personalised action plan.",
    tag: "Cancer Risk",
    bgColor: "bg-[#FFEEED]",
    tagColor: "bg-[#BCBAB5]",
    textColor: "text-[#FFFFFF]",
    blurColor: "bg-[#ffffff]"
  },
  {
    id: 3,
    title: "What am I passing on to my children? Could they have sickle cell?",
    description:
      "Sickle cell, G6PD deficiency, hereditary heart conditions — these run in African families at high rates. iGENE tells you your carrier status before your children are born, not after.",
    tag: "Family Planning",
    bgColor: "bg-[#EDEBFF]",
    tagColor: "bg-[#BCBAB5]",
    textColor: "text-[#FFFFFF]",
    blurColor: "bg-[#ffffff]"
  },
  {
    id: 4,
    title:
      '"I have been on the same medication for years. Is it actually right for me?"',
    description:
      "Your genes determine how your body processes medication. The blood pressure drug that works for your colleague may not be working optimally for you. iGENE reveals your body's unique drug response profile.",
    tag: "Medication Response",
    bgColor: "bg-[#FFECFD]",
    tagColor: "bg-[#BCBAB5]",
    textColor: "text-[#FFFFFF]",
    blurColor: "bg-[#ffffff]"
  },
  {
    id: 5,
    title:
      '"I am healthy today. I want to stay that way for as long as possible."',
    description:
      "The most powerful time to understand your genetic health is before anything goes wrong. iGENE gives health-optimisers the data to make prevention personal — not generic wellness advice, but your specific genetic blueprint.",
    tag: "Longevity & Prevention",
    bgColor: "bg-[#F8F9FC]",
    tagColor: "bg-[#BCBAB5]",
    textColor: "text-[#FFFFFF]",
    blurColor: "bg-[#ffffff]"
  },
  {
    id: 6,
    title: '"Something is wrong and nobody can tell me what it is."',
    description:
      "Chronic fatigue. Unexplained symptoms. Years of normal test results but still feeling unwell. iGENE goes deeper than conventional medicine — to the genetic root of what your body has been trying to tell you.",
    tag: "Unexplained Symptoms",
    bgColor: "bg-[#F8F1FE]",
    tagColor: "bg-[#BCBAB5]",
    textColor: "text-[#FFFFFF]",
    blurColor: "bg-[#ffffff]"
  },
];

const QuestionSection = () => {
  return (
    <section className="py-25 px-4 sm:px-6 lg:px-16 mx-auto bg-white font-sans">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-0.5 bg-[#912996]"></div>
          <span className="text-[#912996] font-bold text-xs sm:text-sm tracking-wider uppercase">
            Do any of these sound familiar?
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          These are the questions iGENE was built to answer.
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          You do not need to understand genetics to use iGENE. You just need a
          health concern, something you have been wondering about, worrying
          about, or living with. iGENE takes it from there.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
        {questionsData.map((item) => (
          <div
            key={item.id}
            className={`${item.bgColor} flex rounded-2xl gap-5 p-8 border border-[#EEF0F5] transition-transform duration-300 hover:-translate-y-1`}
          >
            <div className="">
              <h3 className="text-xl md:text-lg font-medium text-[#1D2939] mb-3 leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-[#475467] grow mb-3 leading-relaxed">
                {item.description}
              </p>

              <div className={`inline-flex items-center gap-2 ${item.tagColor} px-1.5 py-1 rounded-full border border-black/5`}>
                <div className={`w-2.5 h-2.5 rounded-full ${item.blurColor} blur-[2px]`}></div>
                <span className={`text-xs font-semibold ${item.textColor} tracking-wide`}>
                  {item.tag}
                </span>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-white text-[#7F56D9] flex items-center justify-center shrink-0 shadow-sm">
              <LuStethoscope />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuestionSection;
