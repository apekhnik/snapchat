import React from "react";
import { useSelector } from "react-redux";

const Preview = () => {
  const imgSrc = useSelector((state) => state.camera.cameraImage);
  return (
    <div>
      <img src={imgSrc} alt="" />
    </div>
  );
};
export default Preview;
