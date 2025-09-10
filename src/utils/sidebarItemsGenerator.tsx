import { NavLink } from 'react-router-dom';
import type { TSiderItem, TUserRouter } from '../types';


export const sideberItemsGenerator=(items:TUserRouter[],role:string)=>{
    const sidebarItems=items.reduce((acc:TSiderItem[],item)=>{
      if(item.name && item.path){
        acc.push({
          key:item.name,
          label:<NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
        })
      }
      if(item.children){
       acc.push({
        key:item.name,
        label:item.name,
        children:item?.children.map(child=>{
          if(child?.name){
            return{
          key:child.name,
          label:<NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
            }
        }})
       })
      }
      return acc 
},[])

return sidebarItems

}