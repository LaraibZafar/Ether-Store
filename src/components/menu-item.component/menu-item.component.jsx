import React from "react";
import "./menu-item.styles.scss";
import { findAllByPlaceholderText } from "@testing-library/react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${title}`)}
  >
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
export default withRouter(MenuItem);
