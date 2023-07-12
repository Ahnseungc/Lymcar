import type { VFC } from "react";
import React, { useEffect, useState } from "react";

interface Props {
  data: object;
}

const Product: VFC<Props> = ({ data }) => {
  const [dataarr, setDataarr] = useState({});

  useEffect(() => {
    setDataarr(data);
  }, [data]);

  return (
    <>
      <h1>{dataarr.head}</h1>
      <h3>{dataarr.detail}</h3>
    </>
  );
};

export default Product;
