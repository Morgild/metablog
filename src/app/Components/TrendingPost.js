export function TrendingPost({id, social_image, category, tag_list, title}) {
  return (
    <div
      id={id}
      className="flex w-full md:w-full aspect-square relative rounded-xl overflow-hidden cursor-pointer"
    >
      <img className="object-cover" src={social_image} />
      <div className="bg-[#14162466] w-full h-full absolute">
        <div className="flex flex-col absolute top-[50%] left-[5%] gap-4">
          
          <span className="text-white text-sm font-medium bg-[#4B6BFB] rounded-[6px] w-fit px-[10px] py-1 ">{tag_list[0]}</span>
          <p className="text-white font-semibold text-lg ">{title}</p>
        </div>
      </div>
    </div>
  );
}
