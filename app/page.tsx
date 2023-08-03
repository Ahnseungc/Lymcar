import React from "react";

import Maincontext from "@components/maincontext";

import "../styles/Page.css";

type Props = {};

function Home({}: Props) {
  return (
    <div className="Page-box">
      <Maincontext />
    </div>
  );
}

export default Home;
