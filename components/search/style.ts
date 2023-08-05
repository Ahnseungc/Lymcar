import styled, { keyframes } from "styled-components";

export const Searchmaincontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & h1 {
    margin-left: 20vh;
    margin-top: 20vh;

    font-size: 40px;
    font-weight: 700;
    line-height: 1.4;
    color: #191f28;
  }
`;

export const Seacrhsubcontainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const goup = keyframes`
  from{transform: translateX(120rem);opacity:0;}
  to{ transform: translateX(0); opacity:1}

`;

export const SearchImage = styled.div<{ animation: boolean }>`
  ${({ animation }) => !animation && "transform: translateX(6rem); opacity: 0;"}
  animation : ${({ animation }) => animation && goup} 2s ease-out;
  &:not(:last-child) {
    margin-right: 5vh;
    transition-delay: 0s;
  }

  &:not(:first-child) {
    transition-delay: 5s;
  }
`;
