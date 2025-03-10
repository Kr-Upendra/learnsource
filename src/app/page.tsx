import TechCard from "@/components/TechCard";
import { techs } from "@/utils";

export default function Home() {
  return (
    <div className="mt-8 grid grid-cols-6 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-subsm:grid-cols-2 max-xs:grid-cols-1 gap-y-8 gap-x-4">
      {techs.map((tech) => (
        <TechCard
          key={tech.id}
          id={tech?.id}
          title={tech?.title}
          slug={tech?.slug}
          icon={tech?.icon}
        />
      ))}
    </div>
  );
}
