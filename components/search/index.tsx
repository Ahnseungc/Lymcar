"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";

import Image from "next/image";

import { Searchmaincontainer, SearchImage, Seacrhsubcontainer } from "./style";

interface Props {
  animation: boolean;
}

const Search: FC<Props> = ({ animation }) => {
  return (
    <Searchmaincontainer>
      <h1>
        원하는 지역으로
        <br /> 검색
      </h1>
      <Seacrhsubcontainer>
        <SearchImage animation={animation}>
          <Image
            src="/Search/Search1.png"
            width="370"
            height="700"
            alt="/"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
        <SearchImage animation={animation}>
          <Image
            src="/Search/Search2.png"
            width="370"
            height="700"
            alt="/"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
      </Seacrhsubcontainer>
    </Searchmaincontainer>
  );
};

export default Search;
