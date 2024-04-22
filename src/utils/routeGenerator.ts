import { ReactNode } from "react";

interface Route {
    path: string;
    element: ReactNode;
  }

  type TUserPaths = {
    name: string;
    path?: string;
    element?: ReactNode;
    children? : Route[] ; 
  }


export const routeGenerator = (items : TUserPaths[]) => {
     const routes: Route[] = items.reduce((acc: Route[], item) => {
        if (item?.path && item?.element) {
          acc.push({
            path: item.path,
            element: item.element,
          });
        }
      
        if (item?.children) {
          item?.children?.forEach((child) => {
            if (child?.path && child?.element) {
              acc.push({
                path: child.path!,
                element: child.element,
              });
            }
          });
        }
      
        return acc;
      }, []);

      return routes
}