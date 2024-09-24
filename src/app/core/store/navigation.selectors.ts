import { createSelector } from "@ngrx/store";
import { INavigationState } from "./navigation.state";

export const selectState = (state: INavigationState) => state;

export const selectNavbarOpened = createSelector(
  selectState,
  (state: INavigationState) => state.navbarOpened
);

export const selectRoutePathValue = createSelector(
  selectState,
  (state: INavigationState) => state.routePathValue
)
