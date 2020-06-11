import React from "react";
import "./menu-item.styles.scss";
import { findAllByPlaceholderText } from "@testing-library/react";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-Image"
      style={{
        backgroundImage: `url(${imageUrl})`,
        //backgroundColor: "black",
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;
