import { BsStarFill, BsHeartFill, BsHeart, BsShare } from "react-icons/bs";
import { useWindowDimensions } from "../../hooks/useWinowDimensions";
import { Link, useNavigate } from "react-router-dom";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonCard = () => {
  const screen = useWindowDimensions();
  if (screen.width > 479) {
    return (
      <article className="flex h-full flex-col items-center rounded-md border border-gray-400 bg-white/40 dark:bg-black/30">
        <div className="w-full h-12 "></div>
        <div className="flex items-center w-[80%] justify-between">
          <div className="flex w-24 h-10 items-start relative">
            <span className="rounded-full">
              <Skeleton circle width={13} height={13} />
              <Skeleton circle width={13} height={13} />
            </span>
          </div>
          <div className="center">
            <Skeleton width={50} height={30} />
          </div>
        </div>
        <div className="h-full w-[60%] pt-8">
          <Skeleton height={150} />
        </div>
        <h2>
          <Skeleton height={20} width={150} />
        </h2>
        <h4>
          <Skeleton height={20} width={150} count={2} />
        </h4>
        <div className="flex justify-between items-center w-[80%] h-[20%] mb-3">
          <div>
            <Skeleton width={30} height={20} circle />
          </div>
          <div>
            <Skeleton width={90} height={30} />
          </div>
        </div>
      </article>
    );
  } else {
    return (
      <article className="w-full min-h-[190px] bg-gray-100 dark:bg-black/25 flex flex-row-reverse justify-between items-center px-2 mx-auto rounded-lg relative">
        <div className="flex flex-col items-center w-[40%]">
          <div className="mr-2 ">
            <Skeleton height={100} width="8em" />
          </div>
          <div className="mt-10 center justify-around w-[40px]">
            <Skeleton circle width={13} height={13} />
            <Skeleton circle width={13} height={13} />
          </div>
        </div>
        <div className="flex flex-col justify-between  items-center h-[80%] w-[60%]">
            <h3><Skeleton width="10em" height={20} count={2}/></h3>

            <div className="flex justify-around items-center w-full">
                <div>
                    <Skeleton width={70} height={30}/>
                </div>
                <div>
                    <Skeleton width={80} height={30}/>
                </div>
            </div>
        </div>
      </article>
    );
  }
};

export default SkeletonCard;
