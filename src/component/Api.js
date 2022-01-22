import React, { createContext } from "react";
export const productContext = createContext();

function Api() {
  function product() {
    useEffect(() => {
      axios.get(`${URL}/products`).then((products) => {
        setproduct(products.data);
      });
    }, []);
  }

  return <productContext.Provider value={product}></productContext.Provider>;
}

export default Api;
