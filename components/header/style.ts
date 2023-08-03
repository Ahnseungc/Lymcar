import styled from "styled-components";

export const Maincontainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
`;

export const Detailcontainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10vh;
`;

export const Detail = styled.div`
  width: 8vh;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  &:not(:last-child) {
    margin-right: 3vh;
  }
  &:hover {
    transition: 1s ease-in-out;
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
`;
