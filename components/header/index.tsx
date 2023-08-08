"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { Detail, Detailcontainer, IconContainer, Maincontainer } from "./style";

type Props = {};

const Header = ({}: Props) => {
  const pathname = usePathname();
  console.log(pathname);
  const [color, setColor] = useState(false);
  useEffect(() => {
    if (pathname === "/introduce") {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [pathname]);
  console.log("color", color);

  return (
    <Maincontainer color={color}>
      <IconContainer>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: `${color ? `white` : `black`}`,
          }}
        >
          <Image
            src="https://play-lh.googleusercontent.com/XrmyUkEqKPZPFFO_71rODFDOpVzEFTsRHUjTt9GDPASICKR3-kngOFoodKxMF3PiILVX=w240-h480-rw"
            width="24"
            height="24"
            alt="/"
            style={{ borderRadius: "10px" }}
          />
        </Link>
        <p>림카</p>
      </IconContainer>
      <Detailcontainer>
        <Detail>
          <Link
            href="/introduce"
            style={{ textDecoration: "none", color: color ? "white" : "black" }}
          >
            회사 소개
          </Link>
        </Detail>

        <Detail>고객 센터</Detail>
        <Detail>회사 위치</Detail>
      </Detailcontainer>
    </Maincontainer>
  );
};

export default Header;
