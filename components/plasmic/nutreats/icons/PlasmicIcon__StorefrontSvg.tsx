// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StorefrontSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StorefrontSvgIcon(props: StorefrontSvgIconProps) {
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
          "M232 96a7.89 7.89 0 00-.3-2.2l-14.35-50.2A16.07 16.07 0 00202 32H54a16.07 16.07 0 00-15.35 11.6L24.31 93.8A7.89 7.89 0 0024 96v16a40 40 0 0016 32v72a8 8 0 008 8h160a8 8 0 008-8v-72a40 40 0 0016-32V96zM54 48h148l11.42 40H42.61zm50 56h48v8a24 24 0 01-48 0zm-16 0v8a24 24 0 01-35.12 21.26 7.88 7.88 0 00-1.82-1.06A24 24 0 0140 112v-8zm112 104H56v-56.8a40.57 40.57 0 008 .8 40 40 0 0032-16 40 40 0 0064 0 40 40 0 0032 16 40.57 40.57 0 008-.8zm4.93-75.8a8.08 8.08 0 00-1.8 1.05A24 24 0 01168 112v-8h48v8a24 24 0 01-11.07 20.2z"
        }
      ></path>
    </svg>
  );
}

export default StorefrontSvgIcon;
/* prettier-ignore-end */
