import React from "react";

const ProductEdit = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [desc, setdesc] = useState("");
  const [kf1, setkf1] = useState("");
  const [kf2, setkf2] = useState("");
  const [kf3, setkf3] = useState("");
  const [stock, setstock] = useState("");
  useEffect(() => {
    axios.get(`${URL}/products/${id}`).then((product) => {
      setname(product.data.productName);
      setprice(product.data.productPrice);
      setstock(product.data.productQuantityInStock);
      setdesc(product.data.productDescription);
      setkf1(product.data.productKeyFeature1);
      setkf2(product.data.productKeyFeature2);
      setkf3(product.data.productKeyFeature3);
    });
  }, []);

  return (
    <div className="container my-5">
      <div className="card shadow p-5">
        <div className="row gap-4">
          <div className="col-12">
            <h2 className="display-4">Product</h2>
          </div>
          <form onSubmit={editProduct}>
            <div className="col-12 row">
              <div className="form-group col-sm-12 col-md-6">
                <label className="col-12 control-label" for="product_name">
                  Product Name
                </label>
                <div className="col-12 mt-2">
                  <input
                    id="product_name"
                    name="productName"
                    placeholder="PRODUCT NAME"
                    className="form-control input-md"
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label className="col-12 control-label" for="product_price">
                  Pruduct Price
                </label>
                <div className="col-12 mt-2">
                  <input
                    id="product_price"
                    name="productPrice"
                    placeholder="PRODUCT PRICE"
                    className="form-control input-md"
                    type="number"
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-group col-12">
              <label className="col-12 control-label" for="product_description">
                Product Description
              </label>
              <div className="col-12 mt-2">
                <textarea
                  className="form-control"
                  id="product_description"
                  name="productDescription"
                  rows={5}
                  value={desc}
                  onChange={(e) => setdesc(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="col-12 row">
              <div className="form-group col-sm-12 col-md-6">
                <label
                  className="col-12 control-label"
                  for="product_key_point1"
                >
                  Product Key Point 1
                </label>
                <div className="col-12 mt-2">
                  <input
                    id="product_key_point1"
                    name="productKeyFeature1"
                    placeholder="PRODUCT KEY POINT 1"
                    className="form-control input-md"
                    type="text"
                    value={kf1}
                    onChange={(e) => setkf1(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label
                  className="col-12 control-label"
                  for="product_key_point2"
                >
                  Product Key Point 2
                </label>
                <div className="col-12 mt-2">
                  <input
                    id="product_key_point2"
                    name="productKeyFeature2"
                    placeholder="PRODUCT KEY POINT 2"
                    className="form-control input-md"
                    type="text"
                    value={kf2}
                    onChange={(e) => setkf2(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 row">
              <div className="form-group col-sm-12 col-md-6">
                <label
                  className="col-12 control-label"
                  for="product_key_point3"
                >
                  Product Key Point 3
                </label>
                <div className="col-12 mt-2">
                  <input
                    id="product_key_point3"
                    name="productKeyFeature3"
                    placeholder="PRODUCT KEY POINT 3"
                    className="form-control input-md"
                    type="text"
                    value={kf3}
                    onChange={(e) => setkf3(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label className="col-12 control-label" for="no_of_stock">
                  No Of Stocks
                </label>
                <div className="col-12 mt-2">
                  <input
                    id="no_of_stock"
                    name="productQuantityInStock"
                    placeholder="No Of Stock"
                    className="form-control input-md"
                    type="number"
                    value={stock}
                    onChange={(e) => setstock(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 row">
              <div className="form-group col-sm-12 col-md-4">
                <label className="col-12 control-label" for="image1">
                  Main Image
                </label>
                <div className="col-12 mt-2">
                  <input
                    id="image1"
                    name="productImg1"
                    className="input-file"
                    type="file"
                  />
                </div>
              </div>

              <div className="form-group col-sm-12 col-md-4">
                <label className="col-12 control-label" for="image2">
                  Auxiliary Image 1
                </label>
                <div className="col-12 mt-2">
                  <input
                    id="image2"
                    name="productImg2"
                    className="input-file"
                    type="file"
                  />
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-4">
                <label className="col-12 control-label" for="image3">
                  Auxiliary Images 2
                </label>
                <div className="col-12 mt-2">
                  <input
                    id="image3"
                    name="productImg3"
                    className="input-file"
                    type="file"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 row">
              <div className="form-group col-sm-12 col-md-4">
                <label className="col-12 control-label" for="image4">
                  Auxiliary Images 3
                </label>
                <div className="col-12 mt-2">
                  <input
                    id="image4"
                    name="productImg4"
                    className="input-file"
                    type="file"
                  />
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-4">
                <label className="col-12 control-label" for="image5">
                  Auxiliary Images 4
                </label>
                <div className="col-12 mt-2">
                  <input
                    id="image5"
                    name="productImg5"
                    className="input-file"
                    type="file"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-12">
                <button
                  id="singlebutton"
                  name="singlebutton"
                  className="btn btn-lg btn-success"
                  type="submit"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
