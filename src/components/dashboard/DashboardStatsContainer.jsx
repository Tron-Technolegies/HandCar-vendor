import React from "react";
import StatItem from "./StatItem";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdHomeRepairService, MdOutlineSubscriptions } from "react-icons/md";
import useGetDashBoardStats from "../../hooks/dashboard/useGetDashBoardStats";
import Loading from "../Loading";

export default function DashboardStatsContainer() {
  const { loading, subscribers } = useGetDashBoardStats();
  return loading ? (
    <Loading />
  ) : (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
      <StatItem
        icon={<IoPersonAddSharp />}
        stat={subscribers}
        statName={"Service Requests"}
        rise={false}
        data={[5, 4, 4, 3.5, 3, 1]}
        value={"5%"}
        text={"text-[#F34A7C]"}
        color={"rgba(243, 74, 124, 1)"}
        fill={"#fde5ec"}
      />
      <StatItem
        icon={<MdHomeRepairService />}
        stat={22}
        statName={"Total Subscribers"}
        data={[5, 10, 12, 25, 30, 31]}
        rise={true}
        value={"15%"}
        text={"text-[#0DA06A]"}
        color={"#0DA06A"}
        fill={"#a7f8da"}
      />
      {/* <StatItem
        icon={<MdOutlineSubscriptions />}
        stat={28}
        statName={"Total Subscriptions"}
        data={[55, 49, 70, 79, 85, 86]}
        rise={true}
        value={"15%"}
        text={"text-[#4779CC]"}
        color={"#4779CC"}
        fill={"#c1d4f3"}
      /> */}
    </div>
  );
}
