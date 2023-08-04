"use client";

import Image from "next/image";

import { Detail, Detailcontainer, IconContainer, Maincontainer } from "./style";

type Props = {};

const Header = ({}: Props) => {
  return (
    <Maincontainer>
      <IconContainer>
        <Image
          src="https://play-lh.googleusercontent.com/XrmyUkEqKPZPFFO_71rODFDOpVzEFTsRHUjTt9GDPASICKR3-kngOFoodKxMF3PiILVX=w240-h480-rw"
          width="24"
          height="24"
          alt="/"
          style={{ borderRadius: "10px" }}
        />
        <p>림카</p>
      </IconContainer>
      <Detailcontainer>
        <Detail>회사 소개</Detail>
        <Detail>고객 센터</Detail>
        <Detail>회사 위치</Detail>
      </Detailcontainer>
    </Maincontainer>
  );
};

export default Header;
