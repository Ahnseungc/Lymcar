"use client";

import Image from "next/image";

import { Chatmaincontainer } from "./style";

const Chat = () => {
  return (
    <Chatmaincontainer>
      <h1>원하는 지역으로 검색</h1>
      <Image
        src="/Chat/Chat1.png"
        width="370"
        height="812"
        alt="/"
        style={{ borderRadius: "20px" }}
      />
      <Image
        src="/Chat/Chat2.png"
        width="370"
        height="812"
        alt="/"
        style={{ borderRadius: "20px" }}
      />
      <Image
        src="/Chat/Chat3.png"
        width="370"
        height="812"
        alt="/"
        style={{ borderRadius: "20px" }}
      />
    </Chatmaincontainer>
  );
};

export default Chat;
