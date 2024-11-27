import Image from "next/image";
import { useEffect } from "react";

export default function Card({ title, description, articles, image }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg border border-[#D9D9D9]">
      <div className="w-[24px] h-[24px] mb-4">
        <Image src={image} alt={`${title} icon`} width={24} height={24} />
      </div>

      <h2 className="text-[#1C1C1E] font-semibold text-[16px]">{title}</h2>

      <p className="font-normal text-[#414141] gap-1 text-[16px]">
        {description}
      </p>

      <p className="text-xs text-[13px] gap-1 text-gray-500">{articles}</p>
    </div>
  );
}
