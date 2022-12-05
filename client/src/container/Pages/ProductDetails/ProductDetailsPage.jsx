import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Spinner from "../../../common/Spinner/Spinner";
import Layout from "../../Layout/Layout";
import { useEffect } from "react";
import { getAsyncProductById } from "../../../features/ProductsSlice/ProductsSlice";
import SkeletonProductDetails from "../../../components/Skeleton Components/SkeletonProductDetails";
import { useParams } from "react-router-dom";
const SingleProduct = React.lazy(() =>
  import("../../../components/SingleProduct/SingleProduct")
);
const ProductDetails = () => {
  const { product, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAsyncProductById(id));
  }, []);
  return (
    <Layout>
      <Suspense fallback={<SkeletonProductDetails />}>
        {loading ? <SkeletonProductDetails /> :!loading && product && <SingleProduct selectedProduct={product} loading={loading} />}
      </Suspense>
    </Layout>
  );
};

export default ProductDetails;
