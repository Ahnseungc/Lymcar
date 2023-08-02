import styled from "styled-components";

export const Contextcontainer = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  align-items: flex-start;
  width: 100%;
  background-image: url("/Mainbackground.png");
  background-repeat: inherit;

  & h1 {
    color: white;
    margin-top: 20vh;
    font-size: 70px;
    text-align: center;
    font-weight: 500;
  }
`;
