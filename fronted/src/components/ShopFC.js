import React from "react";
import Props from "./Props";

const ShopFC = () => {
  const ShopByFragrancesCosmetics = [
    {
      name: "UNSTITCHED",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-97.jpg",
    },
    {
      name: "STITCHED",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-80.jpg",
    },
    {
      name: "KURTA",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-68.jpg",
    },
    {
      name: "BOTTOMS",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-87.jpg",
    },
  ];

  return (
    <div>
      <Props title="Shop By Fragrances & Cosmetics" products={ShopByFragrancesCosmetics} />
    </div>
  );
};

export default ShopFC;