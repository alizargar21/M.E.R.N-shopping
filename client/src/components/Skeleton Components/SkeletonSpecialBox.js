import Skeleton from "react-loading-skeleton";

const SkeletonSpecialOfferBox = () => {
  return (
    <article className="w-[45%]  h-[230px] lg:my-2 lg:w-[70%] md:w-[90%] md:h-auto  center justify-between sm:w-full sm:rounded-none  text-gray-200 font-Oswald dark:text-gray-200 bg-gradient-to-tr dark:from-black/60 dark:via-black/50  dark:to-black/60 from-slate-300 via-slate-200  to-gray-300 rounded-xl mx-5">
      <div className="w-[40%] min-w-[100px] h-[80%] m-5">
        <Skeleton  height={150}/>
      </div>
      <div className="w-[60%] m-5  sm:w-[45%] flex flex-col ">
        <h4 className="mb-5"> <Skeleton  height={30} count={2}/></h4>
        <h4 > <Skeleton  height={50} /></h4>
        <div className="center m-2 w-auto">
            <Skeleton  style={{margin : " 0 5px  ", width: "2.2rem" , minWidth : "2em" , height: "40px"}}/>
            <Skeleton  style={{margin : " 0 5px  ", width: "2.2rem" , minWidth : "2em" , height: "40px"}}/>
            <Skeleton  style={{margin : " 0 5px  ", width: "2.2rem" , minWidth : "2em" , height: "40px"}}/>
            <Skeleton  style={{margin : " 0 5px  ", width: "2.2rem" , minWidth : "2em" , height: "40px"}}/>
        </div>
      </div>
    </article>
  );
};

export default SkeletonSpecialOfferBox;
