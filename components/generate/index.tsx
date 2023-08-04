"use client";

import Image from "next/image";

import { Searchmaincontainer } from "./styles";

const Search = () => {
  return (
    <Searchmaincontainer>
      <h1>원하는 시간 동성 선택</h1>
      <Image
        src="/Generate/Generate1.png"
        width="370"
        height="812"
        alt="/"
        style={{ borderRadius: "20px" }}
      />
      <Image
        src="/Generate/Generate2.png"
        width="370"
        height="812"
        alt="/"
        style={{ borderRadius: "20px" }}
      />
      <Image
        src="/Generate/Generate3.png"
        width="370"
        height="812"
        alt="/"
        style={{ borderRadius: "20px" }}
      />
    </Searchmaincontainer>
  );
};

export default Search;
