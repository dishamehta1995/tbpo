import svgPaths from "../imports/svg-xp94s74r2y";
import { useTheme } from "../ThemeContext";
import { CurvedPath } from "./CurvedPath";

// function CurvedPath({ isDark }: { isDark: boolean }) {
//   return (
//     <div className="absolute h-[395.256px] left-0 top-[61.2px] w-full max-w-[1017px]">
//       <div className="absolute inset-[-0.63%_-2.61%_-12.78%_-2.61%]">
//         <svg
//           className="block w-full h-full"
//           fill="none"
//           preserveAspectRatio="none"
//           viewBox="0 0 1070 448.255"
//         >
//           <g filter="url(#filter0_d_14_54)">
//             <path
//               d={svgPaths.p2f594000}
//               stroke="#c81c27"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="5"
//             />
//           </g>
//           <defs>
//             <filter
//               colorInterpolationFilters="sRGB"
//               filterUnits="userSpaceOnUse"
//               height="448.255"
//               id="filter0_d_14_54"
//               width="1070"
//               x="0"
//               y="0"
//             >
//               <feOffset dy="24" />
//               <feGaussianBlur stdDeviation="12" />
//             </filter>
//           </defs>
//         </svg>
//       </div>
//     </div>
//   );
// }

interface Step {
  number: string;
  title: string;
  description: string;
}

interface CurvedTimelineSectionProps {
  label: string;
  heading: string;
  description: string;
  ctaText?: string;
  steps: Step[];
}

function TimelineStep({
  number,
  title,
  description,
  isDark,
}: Step & { isDark: boolean }) {
  return (
    <div className="relative">
      <p
        className={`absolute font-['Gilroy:Black',sans-serif] leading-[204px] text-[204px] tracking-[-4.08px] select-none pointer-events-none ${
          isDark ? "text-white/5" : "text-black/5"
        }`}
      >
        {number}
      </p>

      <div
        className={`relative rounded-[20px] w-16 h-16 flex items-center justify-center ${
          isDark
            ? "bg-[#1a1a1a] border border-[#c81c27]/30"
            : "bg-white shadow-lg"
        }`}
      >
        <div
          className={`rounded-[10px] w-[23px] h-[23px] ${
            isDark ? "bg-[#c81c27]" : "bg-[#c81c27]/70"
          }`}
        />
      </div>

      <div className="mt-6">
        <p
          className={`font-semibold text-[16px] mb-2 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </p>
        <p className={`${isDark ? "text-gray-400" : "text-[#64607d]"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CurvedTimelineSection({
  label,
  heading,
  description,
  ctaText,
  steps,
}: CurvedTimelineSectionProps) {
  const { isDark } = useTheme();

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-3-b">
      <div className="lg:col-span-5 space-y-6">
        <p className="text-[14px] uppercase tracking-wide text-[#c81c27]">
          {label}
        </p>

        <h2
          className={`text-[32px] md:text-[40px] leading-[1.2] font-extrabold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {heading}
        </h2>

        <p className={`${isDark ? "text-gray-400" : "text-[#64607d]"}`}>
          {description}
        </p>

        {ctaText && (
          <button className="bg-[#c81c27] hover:bg-[#a01620] text-white px-8 py-3.5 rounded-full shadow-lg">
            {ctaText}
          </button>
        )}
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 mb-12 ">
        {/* Left
         */}

        {/* Right */}
        <div className="lg:col-span-7 relative min-h-[500px]">
          <div className="hidden md:block">
            <CurvedPath />
          </div>

          <div className="hidden md:block relative">
            {steps.map((step, i) => {
              const positions = [
                "left-[125px] top-[380px]",
                "left-[590px] top-[230px]",
                "left-[925px] top-0",
              ];

              return (
                <div key={step.number} className={`absolute ${positions[i]}`}>
                  <TimelineStep {...step} isDark={isDark} />
                </div>
              );
            })}
          </div>

          <div className="md:hidden space-y-12">
            {steps.map((step) => (
              <TimelineStep key={step.number} {...step} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
