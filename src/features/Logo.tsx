import React from "react"

export const Logo = (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => (
  <img src={"/logo.svg"} {...props}/>
)