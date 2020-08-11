import React from "react";
import "./category-page.styles.scss";

import { connect } from "react-redux";
import { selectCategoryData } from "../../redux/shop-item/shop-item.selector";

const CategoryPage = ({ match, categoryItems }) => {
  return (
    <div className="category-page">
      <h1>Category Page</h1>
      {console.log(categoryItems)}
    </div>
  );
};

const mapStateToProps = (state, componentProps) => ({
  categoryItems: selectCategoryData(componentProps.match.params.categoryid)(
    state
  ),
});

export default connect(mapStateToProps)(CategoryPage);
