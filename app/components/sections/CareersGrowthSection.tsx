import CurvedTimelineSection from "./CurvedTimelineSection";

export function CareersGrowthSection() {
  return (
    <CurvedTimelineSection
      label="Our Growth"
      heading="Here’s how we have grown!"
      description="Great vision with great people. It matters a lot to us!"
      steps={[
        {
          number: "2020",
          title: "750+ Employees",
          description: "Joined our company",
        },
        {
          number: "2021",
          title: "1200+ Employees",
          description: "Rapid expansion phase",
        },
        {
          number: "2022",
          title: "2000+ Employees",
          description: "Scaled across India",
        },
      ]}
    />
  );
}
