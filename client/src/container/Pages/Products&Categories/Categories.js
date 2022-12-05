import Layout from "../../Layout/Layout";
import SkeletonCard from "../../../components/Skeleton Components/SkeletonCard";
import SortBar from "../../../components/Search and sort/SortBar";
import { useDispatch, useSelector } from "react-redux";
import ListContainer from "../../../components/UI/ListContainer/ListContainer";
import { Suspense, useEffect, useState } from "react";
import CategoriesComponent from "../../../components/CategoriesComponent/CategoriesComponent";
import {
  getAsyncProducts,
  getAsyncProductsByCategories,
} from "../../../features/ProductsSlice/ProductsSlice";
import Spinner from "../../../common/Spinner/Spinner";
const ProductsAndCategories = () => {
  const [categoryValue, setCategoryValue] = useState("all");
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const value = e.target.value;
    setCategoryValue(value);
    if (value === "all") {
      dispatch(getAsyncProducts());
    } else {
      dispatch(getAsyncProductsByCategories(e.target.value));
    }
  };
  const { products, loading, error, filteredProducts } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);
  return (
    <Layout>
      <CategoriesComponent changeHandler={changeHandler} />
      <section className="my-10">
        <SortBar error={error} categoryValue={categoryValue} />

        <Suspense
          fallback={
            <div className="min-h-400px bg-red-500">
              <Spinner />
            </div>
          }
        >

          {loading ? <ListContainer loading={loading}/>  :!loading && (
            <ListContainer
            renderValue={
              filteredProducts.length === 0 ? products : filteredProducts
            }
            />
            )}
        </Suspense>
      </section>
    </Layout>
  );
};

export default ProductsAndCategories;
