"use client";

import type { FC } from "react";

import Image from "next/image";

import { Seacrhsubcontainer, SearchImage, Searchmaincontainer } from "./style";

interface Props {
  animation3: boolean;
}

const Menu: FC<Props> = ({ animation3 }) => {
  return (
    <Searchmaincontainer>
      <h1>즐겨찾기로 간편하게</h1>
      <Seacrhsubcontainer>
        <SearchImage animation={animation3}>
          <Image
            layout="intrinsic"
            src="/Menu/Menu1.png"
            width="370"
            height="700"
            alt="/"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
        <SearchImage animation={animation3}>
          <Image
            layout="intrinsic"
            src="/Menu/Menu2.png"
            width="370"
            height="700"
            alt="/"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
        <SearchImage animation={animation3}>
          <Image
            layout="intrinsic"
            src="/Menu/Menu3.png"
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

export default Menu;
