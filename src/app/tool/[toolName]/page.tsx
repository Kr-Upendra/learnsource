import { techs } from "@/utils";
import Image from "next/image";

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ toolName: string }>;
}) {
  const toolName = (await params).toolName;
  const tech = techs.find((el) => el.slug === toolName);
  return (
    <div className="flex justify-between items-center px-4 md:flex-col-reverse">
      <div className="w-full md:mt-8 md:text-center">
        <h1 className="text-7xl sm:text-5xl subsm:text-4xl capitalize font-bold">
          {tech?.title}
        </h1>
        <p className="my-6">{tech?.description}</p>
        <div className="mt-4 flex md:justify-center gap-x-4">
          <button className="text-lg w-40 py-2 rounded-full bg-blue-600 hover:bg-blue-700 hover:text-white font-medium duration-300 transition-colors ease-in-out">
            Download
          </button>
          <button className="text-lg w-40 py-2 rounded-full border border-blue-600 hover:bg-blue-700 hover:text-white font-medium duration-300 transition-colors ease-in-out">
            Learn
          </button>
        </div>
      </div>
      <div className="w-full flex justify-end md:justify-center">
        <Image
          src={tech?.icon}
          alt={tech?.title || toolName}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
