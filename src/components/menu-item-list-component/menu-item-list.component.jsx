import React from "react";
import "./menu-item-list.styles.scss";
import MenuItem from "../menu-item.component/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuSection } from "../../redux/menu-item/menu-item.selector";

const MenuItemList = ({ sections }) => (
  <div className="menu-item-list">
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSection,
});

export default connect(mapStateToProps)(MenuItemList);
