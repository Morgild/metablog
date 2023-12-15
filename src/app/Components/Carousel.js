import { useEffect, useState } from "react";
import { useSearch } from "../layout";
import Link from "next/link";
export function Carousel() {
  const [carousel, setCarousel] = useState([]);
  const [page, setPage] = useState(1);
  const search=useSearch();
  const nextSlide = () => {
    page < 6 ? setPage(page + 1) : setPage(0);
  };
  const prevSlide = () => {
    page > 0 ? setPage(page - 1) : setPage(6);
  };
  useEffect(() => {
    fetch(`https://dev.to/api/articles?per_page=7?${search.search}`)
      .then((response) => response.json())
      .then((carousel) => setCarousel(carousel));
  }, [page,search.search]);

  return (
    <div className="w-full bg-white mt-[100px] hidden md:flex md:flex-col">
      {/* {carousel.map((post) => ( */}
      {carousel.length > 0 && (
        <Link href={`/Blog/${carousel[page].id}`}><div key={carousel.id} className="relative rounded-xl overflow-hidden">
          <img
            className="w-full object-cover"
            src={
              carousel[page].cover_image != null
                ? carousel[page].cover_image
                : carousel[page].social_image
            }
          />
          <div onClick={console.log(search.search)} className="bg-white rounded-[12px]  gap-6">
            <div className="flex w-1/2 flex-col gap-4 bg-white p-[40px] gap-4 rounded-[12px] absolute left-[11px] bottom-[13px] ">
              <span className="text-white text-sm font-medium bg-[#4B6BFB] rounded-[6px] w-fit px-[10px] py-1">
                {carousel[page].tag_list[0]}
              </span>
              <p className="font-semibold text-4xl text-[#181A2A] line-clamp-2">
                {carousel[page].title}
              </p>
              <p className="text-[#97989F] text-base font-normal ">
                {carousel[page].published_at.slice(0, 10)}
              </p>
            </div>
          </div>
        </div></Link>
      )}
      {/* ))} */}
      <div className="mt-[11px] flex gap-3 justify-end">
        <button
          onClick={prevSlide}
          className="rounded-md border-[#696A75] text-[#696A75] w-10 h-10 p-3 border-2 flex items-center justify-center"
          type="button"
        >{`<`}</button>
        <button
          onClick={nextSlide}
          className="rounded-md border-[#696A75] text-[#696A75] w-10 h-10 p-3 border-2 flex items-center justify-center"
          type="button"
        >{`>`}</button>
      </div>
    </div>
  );
}
