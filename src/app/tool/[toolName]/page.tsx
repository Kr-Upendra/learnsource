import { leftArrow } from "@/assets";
import { techs } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ toolName: string }>;
}) {
  const { toolName } = await params;
  const tech = techs.find((el) => el.slug === toolName);
  return (
    <div className="mt-8">
      <Link href={"/"}>
        <Image
          alt=""
          className="bg-white w-8 p-1 h-8 rounded-full "
          src={leftArrow}
          width={30}
          height={30}
        />
      </Link>
      <div className="flex justify-between items-center px-4 max-md:flex-col-reverse">
        <div className="w-full max-md:mt-8 max-md:text-center">
          <h1 className="text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl text-black max-subsm:text-4xl capitalize font-bold">
            {tech?.title}
          </h1>
          <p className="my-6 text-gray-700">{tech?.description}</p>
          <div className="mt-4 flex max-md:justify-center gap-x-4">
            <button className="text-lg w-40 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium duration-300 transition-colors ease-in-out">
              Download
            </button>
            <button className="text-lg w-40 py-2 rounded-full text-blue-700 border border-blue-600 hover:bg-blue-700 hover:text-white font-medium duration-300 transition-colors ease-in-out">
              Learn
            </button>
          </div>
        </div>
        <div className="w-full flex justify-end max-md:justify-center">
          <Image
            src={tech?.icon}
            alt={tech?.title || toolName}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
