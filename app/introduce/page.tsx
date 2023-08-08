"use client";

import Link from "next/link";

import { Introdmaincontainer, Subscription, News } from "./style";

const Introduce = () => {
  return (
    <Introdmaincontainer>
      <h1>
        카풀, <br />그 이상의 것을 만듭니다.
      </h1>

      <Subscription>누적 가입수 300+</Subscription>

      <News>
        <h2>언론 속 림카</h2>
        <Link
          href="https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0002916864"
          style={{ textDecoration: "none", color: "white" }}
        >
          <p>
            OhmyNews
            <br />
            <br />
            춘천 한림대 학생들 교내용 택시 합승 앱 '림카' 개발 눈길
          </p>
        </Link>
      </News>
    </Introdmaincontainer>
  );
};

export default Introduce;
