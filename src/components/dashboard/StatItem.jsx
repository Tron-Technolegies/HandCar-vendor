import React from "react";
import SmallGraph from "./SmallGraph";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";

export default function StatItem({
  icon,
  statName,
  rise,
  value,
  stat,
  data,
  color,
  text,
  fill,
}) {
  return (
    <div className="p-5 rounded-lg bg-white flex gap-3 items-center">
      <div className="flex flex-col gap-5 w-3/4">
        <div className="flex gap-5 items-center">
          <p
            className={`w-[40px] h-[40px] p-2 rounded-md bg-[#EDE9FA] flex justify-center items-center ${text}`}
          >
            {icon}
          </p>
          <p className="text-lg font-semibold">{statName}</p>
        </div>
        <div className="flex gap-5 items-end">
          <div
            className={`${
              rise ? "text-green-500" : "text-red-500"
            } flex gap-2 items-center `}
          >
            <p>{rise ? <IoIosTrendingUp /> : <IoIosTrendingDown />}</p>
            <p>{value}</p>
          </div>

          <SmallGraph data={data} color={color} fill={fill} />
        </div>
      </div>
      <p className="w-1/4 text-center text-[#737587] text-4xl font-bold">
        {stat}
      </p>
    </div>
  );
}
