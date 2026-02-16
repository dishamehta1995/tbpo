import svgPaths from "../imports/svg-xp94s74r2y";
import { useTheme } from "../ThemeContext";

// SVG Path Component for the curved line
function CurvedPath() {
  return (
    <div className="absolute h-[395.256px] left-0 top-[61.2px] w-full max-w-254.25">
      <div className="absolute inset-[-0.63%_-2.61%_-12.78%_-2.61%]">
        <svg
          className="block w-full h-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1070 448.255"
        >
          <g filter="url(#filter0_d_14_54)">
            <path
              d={svgPaths.p2f594000}
              stroke="#c81c27"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="448.255"
              id="filter0_d_14_54"
              width="1070"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="24" />
              <feGaussianBlur stdDeviation="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.784314 0 0 0 0 0.109804 0 0 0 0 0.152941 0 0 0 0.3 0"
              />
              <feBlend in2="BackgroundImageFix" mode="normal" />
              <feBlend in="SourceGraphic" mode="normal" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Process Step Component
interface StepProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

function ProcessStep({
  number,
  title,
  description,
  className = "",
}: StepProps) {
  const { isDark } = useTheme();

  return (
    <div className={`relative ${className}`}>
      <p
        className={`absolute font-['Gilroy:Black',sans-serif] leading-51 text-[120px] md:text-[204px] tracking-[-4.08px] select-none pointer-events-none ${
          isDark ? "text-white/5" : "text-black/5"
        }`}
      >
        {number}
      </p>

      <div
        className={`relative rounded-[20px] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center ${
          isDark
            ? "bg-[#1a1a1a] border border-[#c81c27]/30"
            : "bg-white shadow-lg"
        }`}
      >
        <div
          className={`rounded-[10px] w-4 h-4 md:w-5.75 md:h-5.75 ${
            isDark ? "bg-[#c81c27]" : "bg-[#c81c27]/70"
          }`}
        />
      </div>

      <div className="mt-4 md:mt-6">
        <p
          className={`font-extrabold text-sm md:text-[16px] mb-2 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </p>
        <p
          className={`font-medium text-sm md:text-[16px] max-w-full md:max-w-69.75 ${
            isDark ? "text-gray-400" : "text-[#64607d]"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ProcessSection({
  steps,
  heroContent,
  className = "",
}: {
  steps: any;
  heroContent: any;
  className?: string;
}) {
  const { isDark = false } = useTheme();

  return (
    <section
      className={`relative py-16 md:py-24 px-4 md:px-12 lg:px-24 transition-colors bg-gradient-3-b ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8">
          <p className="text-xs md:text-[14px] uppercase tracking-wide text-[#c81c27]">
            {heroContent.label}
          </p>

          <h2
            className={`font-extrabold text-2xl md:text-[40px] leading-tight ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {heroContent.heading}
          </h2>

          <p
            className={`font-medium text-sm md:text-[16px] max-w-full md:max-w-91.75 ${
              isDark ? "text-gray-400" : "text-[#64607d]"
            }`}
          >
            {heroContent.description}
          </p>
        </div>

        {/* Right Section */}
        <div
          className="lg:col-span-7 relative mt-12 md:mt-0 min-h-125 md:min-h-125"
          style={{
            marginTop: undefined, // remove negative margin on mobile
            marginBottom: "6rem",
          }}
        >
          {/* Curved path - only desktop */}
          <div className="hidden md:block">
            <CurvedPath />
          </div>

          {/* Desktop absolute layout */}
          <div className="hidden md:block relative">
            <div className="absolute left-31.25 top-95">
              <ProcessStep {...steps[0]} />
            </div>

            <div className="absolute left-147.5 top-57.5">
              <ProcessStep {...steps[1]} />
            </div>

            <div className="absolute left-231.25 top-0">
              <ProcessStep {...steps[2]} />
            </div>
          </div>

          {/* Mobile stacked layout */}
          <div className="md:hidden space-y-10">
            {steps.map((step: any) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
