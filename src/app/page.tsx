import Card from "@/components/Card";
import { techs } from "@/utils";
import { ITechCard } from "@/utils/interfaces";

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full p-10 md:p-6 sm:p-4">
      <h1 className="text-center text-lg font-semibold">Know About Tools</h1>
      <div className="mt-8 grid grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 subsm:grid-cols-2 xs:grid-cols-1 gap-y-8 gap-x-4">
        {techs.map((tech: ITechCard) => (
          <Card
            key={tech.id}
            id={tech?.id}
            title={tech?.title}
            slug={tech?.slug}
            icon={tech?.icon}
          />
        ))}
      </div>
    </div>
  );
}
