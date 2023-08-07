import styled, { keyframes } from "styled-components";

export const Searchmaincontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & h1 {
    margin-left: 20vh;
    margin-top: 12vh;
    font-size: 40px;
    font-weight: 340;
    line-height: 1.4;
    color: #191f28;
  }
`;

export const Seacrhsubcontainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  justify-content: center;
`;

export const goup = keyframes`
  from{transform: translateY(120rem);opacity:0;}
  to{ transform: translateY(0); opacity:1}
`;

export const SearchImage = styled.div<{ animation: boolean }>`
  ${({ animation }) => !animation && "transform: translateY(6rem); opacity: 0;"}

  &:not(:last-child) {
    animation: ${({ animation }) => animation && goup} 1s ease-out;
    margin-right: 5vh;
  }

  &:not(:first-child) {
    animation: ${({ animation }) => animation && goup} 1.5s ease-out;
    margin-top: 10vh;
  }
`;
