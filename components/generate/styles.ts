import styled, { keyframes } from "styled-components";

export const Searchmaincontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & h1 {
    margin-left: 130vh;

    font-size: 40px;
    margin-bottom: 2vh;
    font-weight: 340;
    line-height: 1.4;
    color: #191f28;
  }
`;

export const Seacrhsubcontainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  justify-content: center;
`;

export const goup = keyframes`
  from{ transform: translateX(-120rem);opacity:0;}
  to{ transform: translateX(0rem);  opacity:1}

`;

export const SearchImage = styled.div<{ animation: boolean }>`
  ${({ animation }) =>
    !animation && "transform: translateX(-120rem); opacity: 0;"}

  &:not(:last-child) {
    margin-right: 5vh;
    animation: ${({ animation }) => animation && goup} 1.5s ease-out;
  }

  &:nth-child(1) {
    margin-top: 22vh;
  }

  &:nth-child(2) {
    animation: ${({ animation }) => animation && goup} 1s ease-out;
    margin-top: 15vh;
  }

  &:nth-child(3) {
    margin-top: 8vh;
    animation: ${({ animation }) => animation && goup} 0.5s ease-out;
  }
`;
