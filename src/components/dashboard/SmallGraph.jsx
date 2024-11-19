import React from "react";
import { AreaChart, Area } from "recharts";

export default function SmallGraph({ data, color, fill }) {
  const chartData = data?.map((value, index) => ({ index, value }));
  return (
    <AreaChart width={150} height={60} data={chartData}>
      <Area
        type="monotone"
        dataKey="value"
        stroke={color} // Line color
        fill={fill} // Area fill color
      />
    </AreaChart>
  );
}
