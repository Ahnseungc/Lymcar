"use client";

import Image from "next/image";

import { Searchmaincontainer } from "./style";

const Search = () => {
  return (
    <Searchmaincontainer>
      <h1>원하는 지역으로 검색</h1>
      <Image
        src="/Search/Search1.png"
        width="370"
        height="812"
        alt="/"
        style={{ borderRadius: "20px" }}
      />
      <Image
        src="/Search/Search2.png"
        width="370"
        height="812"
        alt="/"
        style={{ borderRadius: "20px" }}
      />
    </Searchmaincontainer>
  );
};

export default Search;
