import React from "react";
import Props from "./Props";

const Shop = () => {
  const womenCategories = [
    {
      name: "UNSTITCHED",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-94.jpg",
    },
    {
      name: "STITCHED",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-93.jpg",
    },
    {
      name: "KURTA",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-85.jpg",
    },
    {
      name: "BOTTOMS",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-85.jpg",
    },
  ];

  return (
    <div>
      <Props title="Shop By Women Category" products={womenCategories} />
    </div>
  );
};

export default Shop;