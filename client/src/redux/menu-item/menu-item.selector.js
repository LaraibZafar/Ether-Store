import { createSelector } from "reselect";

const selectMenuItem = (state) => state.menuItem;

export const selectMenuSection = createSelector(
  [selectMenuItem],
  (menuItem) => menuItem.sections
);
