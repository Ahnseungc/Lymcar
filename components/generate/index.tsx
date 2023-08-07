"use client";

import type { FC } from "react";

import Image from "next/image";

import { Seacrhsubcontainer, SearchImage, Searchmaincontainer } from "./styles";

interface Props {
  animation2: boolean;
}

const Generate: FC<Props> = ({ animation2 }) => {
  return (
    <Searchmaincontainer>
      <Seacrhsubcontainer>
        <SearchImage animation={animation2}>
          <Image
            src="/Generate/Generate3.png"
            width="370"
            height="700"
            alt="/"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
        <SearchImage animation={animation2}>
          <Image
            src="/Generate/Generate2.png"
            width="370"
            height="700"
            alt="/"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
        <SearchImage animation={animation2}>
          <Image
            src="/Generate/Generate1.png"
            width="370"
            height="700"
            alt="/"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
      </Seacrhsubcontainer>
      <h1>원하는 시간 동성 탑승</h1>
    </Searchmaincontainer>
  );
};

export default Generate;
