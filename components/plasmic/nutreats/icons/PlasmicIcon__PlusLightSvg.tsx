// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlusLightSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlusLightSvgIcon(props: PlusLightSvgIconProps) {
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
          "M222 128a6 6 0 01-6 6h-82v82a6 6 0 01-12 0v-82H40a6 6 0 010-12h82V40a6 6 0 0112 0v82h82a6 6 0 016 6z"
        }
      ></path>
    </svg>
  );
}

export default PlusLightSvgIcon;
/* prettier-ignore-end */
