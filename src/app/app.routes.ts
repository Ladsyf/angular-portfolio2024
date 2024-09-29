import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { BackgroundComponent as AboutBackgroundComponent } from './about/background/background.component';
import { BackgroundComponent as HomeBackgroundComponent } from './home/background/background.component';
import { BackgroundComponent as ProjectsBackgroundComponent } from './projects/background/background.component';

export enum RoutePathValue {
  home = 0,
  about = 1,
  projects = 2
}

export interface IRoutePath {
  caption: string,
  value: RoutePathValue,
  path: string,
  background: Type<object>
}

export const routePaths: IRoutePath[] = [
  {
    caption: "Home",
    value: RoutePathValue.home,
    path: "",
    background: HomeBackgroundComponent
  },
  {
    caption: "About",
    value: RoutePathValue.about,
    path: "about",
    background: AboutBackgroundComponent
  },
  {
    caption: "Projects",
    value: RoutePathValue.projects,
    path: "projects",
    background: ProjectsBackgroundComponent
  }
]

export function getRoutePath(value: RoutePathValue): string | undefined {
  return routePaths.find(x => x.value === value)?.path ?? undefined;
}

export function getRouteValue(path: string): RoutePathValue {
  return routePaths.find(x => x.path === path)?.value ?? RoutePathValue.home;
}

export const getRouteInfo = (predicate: (value: typeof routePaths[0]) => boolean): typeof routePaths[0] =>
{
  return routePaths.find(predicate) ?? routePaths[0];
}

export const routes: Routes = [
  {
    path: getRoutePath(RoutePathValue.home),
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
  },
  {
    path: getRoutePath(RoutePathValue.about),
    loadChildren: () => import("./about/about.module").then(m => m.AboutModule),
  },
  {
    path: getRoutePath(RoutePathValue.projects),
    loadChildren: () => import("./projects/projects.module").then(m => m.ProjectsModule),
  },
  {
    path: "**",
    redirectTo: ""
  }
];
