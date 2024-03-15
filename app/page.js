"use client";

import { useEffect, useState } from "react";
import { Hero } from "./_components/Hero";
import CategoryList from "./_components/categoryList";
import GlobalApi from "./_services/GlobalApi";
import BusinessList from "./_components/BusinessList";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setAllBusinessList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  const getAllBusinessList = () => {
    GlobalApi.getAllBusiness().then((resp) => {
      //setBusinessList(resp.businessLists);
      console.log(resp.businessLists);
    });
  };

  return (
    <>
      <Hero />
      <CategoryList categoryLsit={categoryList} />
      <BusinessList businessList={businessList} title={"Popular Businesses"} />
    </>
  );
}
