import React from "react";
import "./category-page.styles.scss";

import { connect } from "react-redux";
import { selectCategoryData } from "../../redux/shop-item/shop-item.selector";

import ShopItem from "../../components/shop-item-component/shop-item.component";

const CategoryPage = ({ match, categoryItems }) => {
  const { title, items } = categoryItems;
  console.log(items);
  return (
    <div className="category-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map(({ id, ...othervars }) => (
          <ShopItem key={id} {...othervars} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, componentProps) => ({
  categoryItems: selectCategoryData(componentProps.match.params.categoryid)(
    state
  ),
});

export default connect(mapStateToProps)(CategoryPage);
