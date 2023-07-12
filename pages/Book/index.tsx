import React, { useState } from "react";

import Product from "@components/Product";

import { Book, Content, Page, PageSection } from "./styles";

const Bookpage = () => {
  const [click, setClick] = useState(0);

  const Nextpage = () => {
    setClick(click + 1);
    console.log(click);
    if (click === 3) {
      setClick(0);
    }
  };

  return (
    <Book>
      <PageSection>
        <Page className={click === 0 ? "page1" : "active"} onClick={Nextpage}>
          <Content id="content1"></Content>
        </Page>

        <Page className={click === 1 ? "page2" : "active"} onClick={Nextpage}>
          <Content id="contents">
            <Product data={{ head: "이름", detail: "설명" }} />
          </Content>
        </Page>
        <Page className={click === 2 ? "page3" : "active"} onClick={Nextpage}>
          <Content id="contents">
            <Product data={{ head: "이름", detail: "설명" }} />
          </Content>
        </Page>
        <Page className={click === 3 ? "page4" : "active"} onClick={Nextpage}>
          <Content id="contents">
            <Product data={{ head: "이름", detail: "설명" }} />
          </Content>
        </Page>
      </PageSection>
    </Book>
    // <h2>하윙</h2>
  );
};

export default Bookpage;
