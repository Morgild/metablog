import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { TrendingPost } from "./TrendingPost";
import { useSearch } from "../layout";
export function Trending() {
  const [trend, setTrend] = useState([]);
  const {search}=useSearch();
  const ref = useRef();
  useEffect(() => {
    fetch(`https://dev.to/api/articles?per_page=4&${search}`)
      .then((response) => response.json())
      .then((trend) => setTrend(trend));
  }, [search]);
  console.log(search)
  if (!trend) return null;
  return (
    <div className="w-full flex flex-col gap-[30px] mt-[30px] md:mt-0">
      <h2 className="text-2xl font-bold text-[#181A2A] ml-[32px] md:ml-0 ">
        Trending
      </h2>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 pl-8 pr-[65px] md:px-0">
        {trend.map((trend) => (
          <Link href={`/Blog/${trend.id}`}>
          <TrendingPost key={trend.id} {...trend} /></Link>
        ))}
      </div>
    </div>
  );
}
