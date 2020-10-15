import React from "react";
import Gallery from "react-grid-gallery";

const ImageGallery = (props) => {
  return (
    <div style={{ maxHeight: 200, overflow: "auto" }}>
      <Gallery images={props.imageList} />
    </div>
  );
};
export default ImageGallery;
