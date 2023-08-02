import styled from "styled-components";

export const Maincontainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
`;

export const Detailcontainer = styled.div`
  display: flex;
  margin-right: 10vh;
`;

export const Detail = styled.div`
  &:not(:last-child) {
    margin-right: 3vh;
  }
`;
