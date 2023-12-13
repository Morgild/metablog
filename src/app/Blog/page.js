"use client";
import { useEffect, useState, useContext, createContext } from "react";
import { SinglePost } from "../Components/SinglePost";
import Link from "next/link";
export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [load, setLoadMore] = useState(12);
  const addLoad = () => {
    setLoadMore(load + 3);
  };
  useEffect(() => {
    fetch(`https://dev.to/api/articles?per_page=${load}`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [load]);
  console.log(posts);
  return (
    <div className="flex flex-col bg-white max-w-[1216px] m-auto">
      <h2 className="text-2xl font-bold text-[#181A2A] my-12 ">
        All Blog Post
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <Link href={`/Blog/${post.id}`}>
            <SinglePost key={post.id} {...post} />
          </Link>
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
