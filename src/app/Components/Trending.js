import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { TrendingPost } from "./TrendingPost";
export function Trending() {
  const [trend, setTrend] = useState([]);
  const ref = useRef();
  useEffect(() => {
    fetch("https://dev.to/api/articles?top7&per_page=4")
      .then((response) => response.json())
      .then((trend) => setTrend(trend));
  }, []);
  if (!trend) return null;
  return (
    <div className="w-full flex flex-col gap-[30px] mt-[30px] md:mt-0">
      <h2 className="text-2xl font-bold text-[#181A2A] ml-[32px] md:ml-0 ">
        Trending
      </h2>
      <div className="flex md:flex-row flex-col w-full gap-5 pl-8 pr-[65px] md:px-0">
        {trend.map((trend) => (
          <TrendingPost key={trend.id} {...trend} />
        ))}
      </div>
    </div>
  );
}
