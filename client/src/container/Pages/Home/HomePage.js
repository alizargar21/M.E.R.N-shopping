import Layout from "../../Layout/Layout";
import Landing from "../../../components/Landing/Landing";
import OfferBox from "../../../components/OfferBox/OfferBox";
import Possibilities from "../../../components/Possibilities/Possibilities";
import Background from "../../../components/background/Background";
import SpecialOffer from "../../../components/SpecialOffer/SpecialOffer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProducts } from "../../../features/ProductsSlice/ProductsSlice";
import Spinner from "../../../common/Spinner/Spinner";

const HomePage = () => {
 const {products ,loading , error} = useSelector(state => state.products)
 const dispatch = useDispatch()
 
 useEffect(()=>{
  dispatch(getAsyncProducts())
}, [])
  return (
    <Layout>
      <Landing />
    
     <SpecialOffer loading={loading} data={products}/> 
      <Background />
      {loading ? <Spinner /> : <OfferBox products={products} loading={loading}/>}
      <Possibilities />
    </Layout>
  );
};

export default HomePage;
