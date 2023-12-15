"use client";
import { useEffect, useState, useContext, createContext } from "react";
import { useParams } from "next/navigation";

export default function Post() {
  const { id } = useParams();
  const [posts, setPosts] = useState();

  useEffect(() => {
    if (!id) return;
    const getData = async () => {
      const res = await fetch(`https://dev.to/api/articles/${id}`);
      const data = await res.json();
      setPosts(data);
    };
    getData();
  }, [id]);
  //   fetch(`https://dev.to/api/articles/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data));
  // }, [id]);

  if (!posts) return null;
  console.log(posts);
  return (
    <div className="max-w-[800px] flex-flex-col mx-auto mt-[100px] mb-[80px] gap-8">
      <h2 className="text-4xl font-semibold text-[#181A2A]">{posts.title}</h2>
      <div className="flex items-center justify-left gap-6 text-[#696A75] text-sm mt-5 mb-8">
        <img className="w-7 h-7 rounded-full" src={posts.user.profile_image} />
        <p className="font-medium">{posts.user.name}</p>
        <p className="font-normal">{posts.published_at.slice(0, 10)}</p>
      </div>
      <img className="w-full rounded-xl obect-cover" src={posts.social_image} />
      <p className="text-justify text-[#3B3C4A] text-xl font-normal mt-8">
        {posts.body_html}
      </p>
      <p
        className="singlePostBody"
        dangerouslySetInnerHTML={{ __html: posts.body_html }}
      ></p>
    </div>
  );
}
