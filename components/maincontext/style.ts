import styled, { keyframes } from "styled-components";

export const Contextcontainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: flex-start;
  width: 100%;

  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0.3) 25%,
      rgba(255, 255, 255, 0.4) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.7) 75%,
      rgba(255, 255, 255, 1) 100%
    ),
    url("/Mainbackground.png");

  background-repeat: repeat;
  background-size: cover;
  background-size: 100vh;
`;

export const goup = keyframes`
  from{ transform: translateY(6rem); opacity: 0;}
  to{ transform: translateY(0); opacity:1}
`;

export const Context = styled.h1<{ animation: boolean }>`
  ${({ animation }) => !animation && "transform: translateY(6rem); opacity: 0;"}
  animation: ${({ animation }) => animation && goup} 2s ease-out;
  font-weight: bold;
  line-height: 13vh;
  color: rgba(0, 12, 30, 0.8);
  margin-top: 10vh;
  font-size: 100px;
  text-align: center;
  font-weight: 340;
`;

export const StyledLink = styled.a`
  margin-right: 8px;
  background-color: rgb(255, 255, 255, 0.8);
  color: rgba(0, 12, 30, 0.8);
  font-size: 17px;
  padding: 11px 22px;
  border-radius: 10px;
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 0 solid transparent;
  height: 2vh;

  &:hover {
    background-color: rgba(0, 12, 30, 0.8);
    color: rgb(255, 255, 255);
    transition: 0.5s ease-in-out;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
