import styled from "@emotion/styled";

export const Book = styled.div`
  width: 330px;
  height: 740px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .page1 {
    z-index: 4;
    transform-origin: left center;
    transition-duration: 1s;
    transition-timing-function: ease-in;
  }

  & .active {
    transform: rotateY(-180deg);
    opacity: 0.4;
  }

  & .page2 {
    z-index: 3;
  }
  & .page3 {
    z-index: 2;
  }
  & .page4 {
    z-index: 1;
  }

  & h2 {
    margin: 0;
    padding: 12px 0;
  }
`;

export const PageSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
`;

export const Page = styled.div`
  position: absolute;
  top: 0;
  background-image: url("/backgroun_main.avif");
  left: 0;
  padding: 0 32px;
  padding: 30px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4), -2px 0 2px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  transition-duration: 1s;
`;
