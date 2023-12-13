export function SinglePost({ social_image, tag_list, title, published_at, user}) {
  return (
    <div className="flex flex-col gap-2 w-full p-4 border border-[#E8E8EA] rounded-xl ">
      <img
        className="aspect-[3/2] object-cover rounded-md"
        src={`${social_image}`}
      />
      <div className="flex flex-col p-2 gap-5">
        <div className="flex flex-col gap-4">
          <p className=" py-1 px-[10px] rounded-md font-medium text-sm text-[#4B6BFB] w-fit  bg-[#4B6BFB0D]">
            {tag_list[0]}
          </p>
          <h3 className="text-2xl leading-7 font-semibold text-[#181A2A] line-clamp-2">
            {title}
          </h3>
        </div>
        <div className="flex items-center justtify-start gap-3">
          <img className="h-9 w-9 rounded-full" src={`${user.profile_image}`} />
          <p className="text-[#97989F] text-base font-normal">{user.name}</p>
          <p className="text-[#97989F] text-base font-normal">
          {published_at.slice(0,10)}
        </p></div>
      </div>
    </div>
  );
}
