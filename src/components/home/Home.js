import React, { useEffect } from "react";
import { Box, styled } from "@mui/material";
import Header from "./Header";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/product-actions";
import Slide from "./Slide";
import data from "../../store/hardcoded/ProductsData";
import MidSection from "./MidSection";

const dealsData = [];

for (let i = 0; i <= 9; ++i) {
  const idx = getRandomNumber(i * 10, i * 10 + 10);
  dealsData.push({ ...data[idx] });
}


function Home() {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.product.products);
  const categoryData = useSelector((state) => state.product.categoryData);

  // Gettng the products data from firebase
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Component>
        <Banner />
        <Slide
          products={dealsData.slice(0, 15)}
          pageTitle="Deals of the Day"
          isTimer={true}
        />
        <MidSection />
        {categoryData.map((categorys) => {
          // { category: '', data: [] }
          return (
            <Slide
              key={categorys.category}
              products={categorys.data}
              pageTitle={categorys.category}
              isTimer={false}
              
            />
          );
        })}
      </Component>
    </>
  );
}

export default Home;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Component = styled(Box)`
  padding: 10px 10px;
  background-color: #f2f2f2;
`;
/*
brand: "Apple"
category: "smartphones"
description: "An apple mobile which is nothing like apple"
discountPercentage: 12.96
id: 1
images: Array(5) 
  0: "https://i.dummyjson.com/data/products/1/1.jpg"
  1: "https://i.dummyjson.com/data/products/1/2.jpg"
  2: "https://i.dummyjson.com/data/products/1/3.jpg"
  3: "https://i.dummyjson.com/data/products/1/4.jpg"
  4: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
price: 549
rating: 4.69
stock: 94
thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
title: "iPhone 9"

*/
// const categoryWiseData = products.reduce((acc, curr) => {
//   //  [{ category: '', data [{}, {}, {}] }]

//   const existingCategory = acc.find(
//     (cate) => cate.category === curr.category
//   );

//   if (existingCategory) {
//     existingCategory.data.push(curr);
//   } else {
//     acc.push({ category: curr.category, data: [curr] });
//   }

//   return acc;
// }, []);


