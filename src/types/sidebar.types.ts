import type { ReactNode } from "react";

export type TRouter={
    path:string;
    element:ReactNode
 }

export type TSiderItem={
  key:string,
  label:ReactNode,
  children?:TSiderItem[]
} | undefined

 export type TUserRouter={
    name:string,
    path?:string,
    element?:ReactNode,
    children?:TUserRouter[]
 }