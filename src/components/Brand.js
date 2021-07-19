import React from "react";

import { brandLogo } from "../postData";

const Brand = () => {
  return (
    <>
      <div className="brand-container">
        {brandLogo.map((brand) => {
          const { id, img, title } = brand;
          return (
            <div key={id} className="brand-section">
              <h2>{title}</h2>
              <img src={img.url} alt={title} className="brand-logo" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Brand;
