"use client";

import type { FC } from "react";

import Image from "next/image";

import { Seacrhsubcontainer, SearchImage, Searchmaincontainer } from "./style";

interface Props {
  animation4: boolean;
}

const Generate: FC<Props> = ({ animation4 }) => {
  return (
    <Searchmaincontainer>
      <Seacrhsubcontainer>
        <h1>그룹 채팅으로 더욱 편하게</h1>
        <SearchImage animation={animation4}>
          <Image
            layout="intrinsic"
            src="/Chat/Chat1.png"
            width="370"
            height="700"
            alt="/"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
        <SearchImage animation={animation4}>
          <Image
            layout="intrinsic"
            src="/Chat/Chat2.png"
            width="370"
            height="700"
            alt="/"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
        <SearchImage animation={animation4}>
          <Image
            layout="intrinsic"
            src="/Chat/Chat3.png"
            width="370"
            height="700"
            alt="/"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
      </Seacrhsubcontainer>
      <h1>그룹 채팅으로 더욱 편하게</h1>
    </Searchmaincontainer>
  );
};

export default Generate;
