import { Post } from "./Post";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearch } from "../layout";
export function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loadMore, setLoadMore] = useState(9);
  const [category, setCategory] = useState(" ");
  const [active, setActive] = useState(false);
  const {search} = useSearch();

  useEffect(() => {
    fetch(
      `https://dev.to/api/articles?per_page=${loadMore}&tag=${category}?${search}`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [category, loadMore, search]);
  const addLoad = () => {
    setLoadMore(loadMore + 3);
  };
  const getCategory = (event) => {
    event.target.textContent !== "All"
      ? setCategory(event.target.textContent.toLowerCase())
      : setCategory(" ");
  };
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-[#181A2A] ml-4 md:ml-0 ">All Blog Post</h2>
        <div className="flex justify-between ml-4 md:ml-0">
          <ul className="flex justify-start items-center gap-5 h-[25px] text-xs font-bold text-[#495057] cursor-pointer">
            <li onClick={getCategory} style={{color:active?'#D4A373':'#495057'}}>All</li>
            <li onClick={getCategory} style={{color:active?'#D4A373':'#495057'}}>Design</li>
            <li onClick={getCategory} style={{color:active?'#D4A373':'#495057'}}>Travel</li>
            <li onClick={getCategory} style={{color:active?'#D4A373':'#495057'}}>Fashion</li>
            <li onClick={getCategory} style={{color:active?'#D4A373':'#495057'}}>Technology</li>
            <li onClick={getCategory} style={{color:active?'#D4A373':'#495057'}}>Branding</li>
          </ul>
          <p className="flex justify-start items-center gap-5 h-[25px] text-xs font-bold text-[#495057] cursor-pointer mr-4 md:mr-0">
            <Link href={"/Blog"}>View All</Link>
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 cursor-pointer">
        {posts.map((post) => (
          <Link href={`/Blog/${post.id}`}>
          <Post key={post.id} {...post} category={category} /></Link>
        ))}
      </div>
      <button
        onClick={addLoad}
        className="mx-auto my-[100px] w-fit px-5 py-3 text-[#696A75] text-base font-medium border border-[#696A754D] rounded-md"
        type="button"
      >
        Load More
      </button>
    </div>
  );
}
