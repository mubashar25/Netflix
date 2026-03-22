import React from "react";
import Props from "./Props";

const ShopKids = () => {
  const BoysGirlsCategory = [
    {
      name: "UNSTITCHED",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-89.jpg",
    },
    {
      name: "STITCHED",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-92.jpg",
    },
    {
      name: "KURTA",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-90.jpg",
    },
    {
      name: "BOTTOMS",
      image:
        "https://www.junaidjamshed.com/media/wysiwyg/vol3b-91.jpg",
    },
  ];

  return (
    <div>
      <Props title="Shop By Boys & Girls Category" products={BoysGirlsCategory} />
    </div>
  );
};

export default ShopKids;