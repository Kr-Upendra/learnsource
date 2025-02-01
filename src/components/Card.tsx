import { ITechCard } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function TechCard({ title, slug, icon }: ITechCard) {
  return (
    <Link href={`/tool/${slug}`}>
      <div className="px-3 rounded-lg py-5 flex justify-center items-center flex-col shadow-xl shadow-blue-500/5 border border-blue-500/10">
        <div className="mb-1.5">
          <Image src={icon} alt={title} width={100} height={100} />
        </div>
        <h1 className="font-medium">{title}</h1>
      </div>
    </Link>
  );
}
