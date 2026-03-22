import React from "react";
import TopHeader from "./components/TopHeader";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar1";
import CategoryBar from "./components/CategoryBar";
import Featured from "./components/Featured";
import WatchBuy from "./components/WatchBuy";
import Shop from "./components/Shop";
import ShopMen from "./components/ShopMen";
import ShopFC from "./components/ShopFC";
import ShopKids from "./components/ShopKids";
import Skincare from "./components/Skincare";
import EmailInput from "./components/EmailInput";
import Footer from "./components/Footer";

const ProductList = () => {
  return (
    <div>
     <TopHeader/>
     <Navbar/>
     <Carousel/>
     <CategoryBar/>
     <Featured/>
     <WatchBuy/>
     <Shop/>
     <ShopMen/>
     <ShopFC/>
     <ShopKids/>
     <Skincare/>
     <EmailInput/>
     <Footer/>
    </div>
  );
};

export default ProductList;