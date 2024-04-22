import { ReactNode } from "react";

export interface Route {
  path: string;
  element: ReactNode;
}

export interface TSidebarItem {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
}

export type TUserPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: Route[];
};
