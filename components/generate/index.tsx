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
      <h1>원하는 시간 동성 탑승</h1>
      <Seacrhsubcontainer>
        <SearchImage animation={animation2}>
          <Image
            layout="intrinsic"
            src="/Generate/generate3.png"
            width="370"
            height="700"
            alt="왜짤려"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
        <SearchImage animation={animation2}>
          <Image
            layout="intrinsic"
            src="/Generate/generate2.png"
            width="370"
            height="700"
            alt="왜짤려"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
        <SearchImage animation={animation2}>
          <Image
            layout="intrinsic"
            src="/Generate/generate1.png"
            width="370"
            height="700"
            alt="왜짤려"
            style={{ borderRadius: "20px" }}
          />
        </SearchImage>
      </Seacrhsubcontainer>
    </Searchmaincontainer>
  );
};

export default Generate;
