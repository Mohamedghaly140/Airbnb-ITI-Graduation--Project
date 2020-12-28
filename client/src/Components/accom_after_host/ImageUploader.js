import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const Upload = props => {
  const [picture, setPicture] = useState();

  const onDrop = img => {
    setPicture(img[img.length - 1]);
    props.image(img[img.length - 1]);
  };

  return (
    <ImageUploader
      {...props}
      withIcon={true}
      label="Max file size = 5mb "
      buttonText=" Upload Your Image"
      buttonClassName="btn btn-primary ml-1"
      onChange={onDrop}
      imgExtension={[".jpg", ".png", ".jpeg", ".gif"]}
      maxFileSize={5242880}
    />
  );
};

export default Upload;
