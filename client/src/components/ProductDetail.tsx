import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import { fetchProductDetails } from "../redux/thunk/product";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const productDetail = useSelector(
    (state: RootState) => state.product.productDetail
  );
  const result = useParams();
  const productId = result.id;

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetails(productId));
    }
  }, [ productId,dispatch]);

  return (
    <div>
      {productDetail ? (
        <div>
          <img src={productDetail.image} alt={productDetail.title} />
          <p>{productDetail.title}</p>
        </div>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
}
