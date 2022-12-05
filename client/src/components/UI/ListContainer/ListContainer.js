import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Spinner from "../../../common/Spinner/Spinner";
import Card from "../../Card/Card";
import SkeletonCard from "../../Skeleton Components/SkeletonCard";

const ListContainer = ({ renderValue, loading }) => {
  useEffect(() => {
    console.log("render as List Container");
  }, []);
  return (
    <div className="w-full py-5 h-auto flex justify-between md:flex-col-reverse ">
      <div className="   mx-auto w-[90%] grid gap-2 grid-cols-4 2xl:grid-cols-5 xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {loading && <><SkeletonCard/><SkeletonCard/><SkeletonCard/><SkeletonCard/><SkeletonCard/><SkeletonCard/><SkeletonCard/></>}
        {renderValue && <Card data={renderValue}></Card>}
      </div>
    </div>
  );
};

export default ListContainer;
