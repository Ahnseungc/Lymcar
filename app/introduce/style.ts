import styled, { keyframes } from "styled-components";

export const goup = keyframes`
  from{transform: translateY(60rem);opacity:0;}
  to{ transform: translateY(0); opacity:1}
`;

export const Introdmaincontainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/Introduce/introduce_back.jpg");
  display: flex;

  flex-direction: column;
  align-items: center;

  & h1 {
    animation: ${() => goup} 1s ease-out;
    margin-top: 30vh;
    color: white;
    font-weight: 330;
    font-size: 75px;
  }

  @media screen and (max-width: 392px) {
    & h1 {
      font-size: 30px;
    }
  }
`;

export const Subscription = styled.div`
  color: white;

  &:hover {
    font-size: large;
    transition: all 0.3s ease-in;
  }
`;

export const News = styled.div`
  margin-top: 20vh;
  margin-right: 30vh;
  font-size: 20px;
  color: white;

  & h2 {
    font-weight: 400;
  }

  & p:hover {
    color: rgba(14, 46, 97);
    transition: all 0.5s ease-in-out;
  }
  @media screen and (max-width: 392px) {
    font-size: 17px;
    width: 100;
    margin-top: 30vh;
    margin-right: 0;
  }
`;
