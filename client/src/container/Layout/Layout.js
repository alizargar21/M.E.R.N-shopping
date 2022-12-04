import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BackArrowComponent from "../../common/BackArrow/BackArrow";
import { useLocation } from "react-router-dom";
import { useLayoutEffect ,  useEffect} from "react";
import { useTheme } from "../../Provider/ThemeProvider";
import { SkeletonTheme } from "react-loading-skeleton";
const Layout = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(()=>{
    document.documentElement.scrollTo(0 ,0)
  },[location.pathname])
  const theme = useTheme()
  useEffect(()=> {
    console.log(theme)
  
  } , [theme])
  return (
    <SkeletonTheme baseColor={theme === "light" ? "#d4d4d8"  : "#1f2937" }highlightColor={theme === "light" ? "#a1a1aa"  : "#374151" }>
    <div className="min-w-lg  bg-containerBG dark:bg-containerBG-dark min-h-screen">
      <Header />
      {location.pathname !== "/" && <BackArrowComponent />}
      {children}

      <Footer />
    </div>
    </SkeletonTheme>
      );
};

export default Layout;
