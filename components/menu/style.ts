import styled, { keyframes } from "styled-components";

export const Searchmaincontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin-top: 10vh;
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
  margin-top: 10vh;
  justify-content: center;
`;

export const goup = keyframes`
  from{  opacity:0;}
  to{ opacity:1}

`;

export const SearchImage = styled.div<{ animation: boolean }>`
  ${({ animation }) =>
    !animation && "transform: translateX(-120rem); opacity: 0;"}
  animation : ${({ animation }) => animation && goup} 1.5s ease-in-out;
  &:not(:last-child) {
    margin-right: 5vh;
  }

  &:hover {
    transition: 1s ease-in-out;
  }
`;

// width="370"
//             height="700"
