"use client";
import Head from "next/head";
import { Header } from "./Components/Header";
import { Carousel } from "./Components/Carousel";
import { Trending } from "./Components/Trending";
import { useEffect, useState, useContext, createContext } from "react";
import { BlogPosts } from "./Components/BlogPosts";
export const DataContext = createContext();
export default function Home() {
  return (
    <DataContext.Provider value={{}}>
      <div className="flex flex-col bg-white max-w-[1216px] m-auto gap-[100px]">
        <Carousel />
        <Trending />
        <BlogPosts />
      </div>
    </DataContext.Provider>
  );
}
export const useData = () => useContext(DataContext);
