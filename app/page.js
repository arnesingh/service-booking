"use client";

import { useEffect, useState } from "react";
import { Hero } from "./_components/Hero";
import CategoryList from "./_components/categoryList";
import GlobalApi from "./_services/GlobalApi";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };
  return (
    <>
      <Hero />
      <CategoryList categoryLsit={categoryList} />
    </>
  );
}
