// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type House1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function House1SvgIcon(props: House1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M219.31 108.68l-80-80a16 16 0 00-22.62 0l-80 80A15.87 15.87 0 0032 120v96a8 8 0 008 8h64a8 8 0 008-8v-56h32v56a8 8 0 008 8h64a8 8 0 008-8v-96a15.87 15.87 0 00-4.69-11.32zM208 208h-48v-56a8 8 0 00-8-8h-48a8 8 0 00-8 8v56H48v-88l80-80 80 80z"
        }
      ></path>
    </svg>
  );
}

export default House1SvgIcon;
/* prettier-ignore-end */
