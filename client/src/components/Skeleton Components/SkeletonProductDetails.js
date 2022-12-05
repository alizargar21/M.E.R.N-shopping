import Skeleton from "react-loading-skeleton";
const SkeletonProductDetails = () => {
  return (
    <div className="w-[90%] mx-auto flex h-auto md:flex-col my-8 justify-between">
      <div className="w-[40%] border-gray-500 border rounded-lg p-8 mx-auto md:mb-5 md:w-[60%]  h-[400px] sm:min-h-[300px]  sm:w-[90%]">
        <h4 className="w-[80%] mx-auto mb-3">
          <Skeleton height={30} />
        </h4>
        <div className="w-[80%] mx-auto md:w-full">
          <Skeleton height={200} />
        </div>
        <div className="flex justify-between h-[10%] items-center w-[80%]">
          <p>
            <Skeleton />
          </p>
          <p>
            <Skeleton />
          </p>
        </div>
        <div className="w-full">
          <Skeleton height={30} />
        </div>
      </div>
      <div className="flex flex-col justify-around items-center w-[55%] md:w-[90%] mx-auto h-auto border rounded-lg border-gray-500">
        <h3 className="w-[60%] mt-5">
          <Skeleton height={50} />
        </h3>
        <p className="w-[80%] ">
          <Skeleton count={6} />
        </p>
        <div className="w-full rounded-lg mt-3 p-5">
          <h2 className="w-[60%] mx-auto mb-2">
            <Skeleton height={30} />
          </h2>
          <p>
            <Skeleton count={10} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProductDetails;
