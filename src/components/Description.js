import React from "react";
import './Description.css'
function Description() {
  return (
    <>
      <div className="description-container">
        <div className="des-img-container">
          <img className="image1" src="images/img1.jpg" alt="" srcset="" />
          <img className="image2" src="images/img2.jpg" alt="" srcset="" />
        </div>
        <div className="des-text-container">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          rerum, ex consequuntur facere eveniet error vitae mollitia, nemo illo
          porro, tempora quaerat architecto? Natus, hic debitis distinctio
          aliquam, nulla non facere deserunt, maxime cum velit dolor dolorum
          beatae vero rem praesentium ullam fuga necessitatibus at quaerat
          minima! Incidunt beatae eum ducimus laborum architecto eveniet?
        </div>
      </div>
    </>
  );
}

export default Description;
