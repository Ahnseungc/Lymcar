import styled, { css } from "styled-components";

export const Maincontainer = styled.div<{ color: boolean }>`
  ${(props) =>
    props.color &&
    css`
      color: white;
    `};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  & .introdlink {
    text-decoration: none;
    color: white;
  }
`;

export const Detailcontainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10vh;
`;

export const Detail = styled.div`
  width: 8vh;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  &:not(:last-child) {
    margin-right: 3vh;
  }
  &:hover {
    transition: 0.5s ease-in-out;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 10px 10px;
  & p {
    margin-left: 5px;
    font-size: 22px;
    font-weight: 300;
  }
  & p:hover {
    font-size: x-large;
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 392px) {
    justify-content: center;
    margin-left: 5vh;
    margin-right: 4vh;

    & p {
      display: none;
    }
  }
`;
