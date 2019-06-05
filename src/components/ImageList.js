import React from "react";
import ImageCard from "./ImageCard";
import "../styles.css";

const ImageList = props => {
  return (
    <div className="image-list">
      {props.images.map(image => {
        return <ImageCard image={image} key={image.id} />;
      })}
    </div>
  );
};

export default ImageList;
