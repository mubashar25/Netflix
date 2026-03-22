import React from "react";
import Props from "./Props";

const ShopMen = () => {
  const MenCategories = [
    {
      name: "UNSTITCHED",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-95.jpg",
    },
    {
      name: "STITCHED",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-96.jpg",
    },
    {
      name: "KURTA",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-58.jpg",
    },
    {
      name: "BOTTOMS",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-59.jpg",
    },
  ];

  return (
    <div>
      <Props title="Shop By Men Category" products={MenCategories} />
    </div>
  );
};

export default ShopMen;