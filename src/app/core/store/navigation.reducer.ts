import { createReducer, on } from "@ngrx/store";
import { INavigationState } from "./navigation.state";
import * as actions from "./navigation.actions";
import { getRouteValue, RoutePathValue } from "../../app.routes";

export const navigationFeatureKey = "navigation";

export const initialState: INavigationState =
{
  navbarOpened: false,
  routePathValue: RoutePathValue.home,
}

export const navigationReducer = createReducer(
  initialState,
  on(actions.toggle, state => ({ ...state, navbarOpened: !state.navbarOpened })),
  on(actions.changeRoutePathValue, (state, { path }) => {
    return { ...state, routePathValue: getRouteValue(path) };
  })
);
