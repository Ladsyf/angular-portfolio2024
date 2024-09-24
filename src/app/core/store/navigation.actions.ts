import { createAction, props } from "@ngrx/store";

export const toggle = createAction('[core] toggleNavBar');
export const changeRoutePathValue = createAction("[core] changeRoutePathValue", props<{ path: string }>());
