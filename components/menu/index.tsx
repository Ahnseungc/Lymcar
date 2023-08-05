"use client";

import Image from "next/image";

import { Menumaincontainer } from "./style";

const Menu = () => {
  return (
    <Menumaincontainer>
      <h1>즐겨찾기로 간편하게</h1>
      <Image
        src="/Menu/Menu1.png"
        width="370"
        height="812"
        alt="/"
        style={{ borderRadius: "20px" }}
      />
      <Image
        src="/Menu/Menu2.png"
        width="370"
        height="812"
        alt="/"
        style={{ borderRadius: "20px" }}
      />
      <Image
        src="/Menu/Menu3.png"
        width="370"
        height="812"
        alt="/"
        style={{ borderRadius: "20px" }}
      />
    </Menumaincontainer>
  );
};

export default Menu;
