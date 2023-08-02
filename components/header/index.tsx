"use client";

import { Detail, Detailcontainer, Maincontainer } from "./style";

type Props = {};

const Header = ({}: Props) => {
  return (
    <Maincontainer>
      <div>이미지</div>
      <Detailcontainer>
        <Detail>회사 소개</Detail>
        <Detail>회사 소개</Detail>
        <Detail>회사 소개</Detail>
      </Detailcontainer>
    </Maincontainer>
  );
};

export default Header;
