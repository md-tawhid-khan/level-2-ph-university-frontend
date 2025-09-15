import type { TRouter, TUserRouter } from "../types"


 
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

        if(item.path && item.element){
            acc.push({
                path:item.path,
                element:item.element
            })
        }

        return acc
      },[] ) 
     
      return routesPath
}

export default routeGenaretor