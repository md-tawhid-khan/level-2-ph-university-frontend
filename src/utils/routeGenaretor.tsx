import type { ReactNode } from "react";

 type TRouter={
    path:string;
    element:ReactNode
 }

 type TUserRouter={
    name:string,
    path?:string,
    element?:ReactNode,
    children?:TUserRouter[]
 }

 const routeGenaretor=(items:TUserRouter[])=>{
      const routesPath=items.reduce((acc:TRouter[],item)=>{
        if(item.name && item.path){
            acc.push({
                path:item.path,
                element:item.element
            })
        }

        if(item.children){
            item.children.forEach(child=>{
                acc.push({
                    path:child.path!,
                element:child.element
                })
                
            })
        }

        return acc
      },[] ) 
     
      return routesPath
}

export default routeGenaretor