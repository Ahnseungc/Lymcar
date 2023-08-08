"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { ButtonDiv, Context, Contextcontainer, StyledLink } from "./style";
import { useWindowScrollEvent } from "../../hooks/useWindowScrollEvent";
import { checkIsInViewport } from "../../utils/checkIsInViewport";

type Props = {};

//이거는 수정 상항 입니다.
//이거는 수정 상항 입니다.
//이거는 수정 상항 입니다.
//이거는 수정 상항 입니다.
//이거는 수정 상항 입니다.

const Maincontext = ({}: Props) => {
  const [animation, setAnimaion] = useState(true);
  const areaRef = useRef<HTMLParagraphElement>();

  const handleScrollAnimation = () => {
    const elementTop = areaRef?.current?.getBoundingClientRect().top;
    setAnimaion(checkIsInViewport(elementTop));
  };

  useWindowScrollEvent(handleScrollAnimation);

  return (
    <Contextcontainer>
      <Context ref={areaRef} animation={animation}>
        택시 비용 절감 <br />
        림카로부터 시작
        <ButtonDiv>
          <Link href="https://apps.apple.com/kr/app/%EB%A6%BC%EC%B9%B4-%ED%83%9D%EC%8B%9C-%ED%95%A9%EC%8A%B9-%EC%95%B1/id6449635061">
            <StyledLink>
              <Image
                src="https://static.toss.im/png-icons/timeline/applekorea.png"
                height="24"
                width="24"
                alt="/"
              />
              App Store
            </StyledLink>
          </Link>

          <Link href="https://play.google.com/store/apps/details?id=com.dldmswo1209.hallymtaxi&hl=ko-KR">
            <StyledLink>
              <Image
                src="https://static.toss.im/png-icons/timeline/googleplay.png"
                height="24"
                width="24"
                alt="/"
              />
              Google Play
            </StyledLink>
          </Link>
        </ButtonDiv>
      </Context>
    </Contextcontainer>
  );
};

export default Maincontext;
