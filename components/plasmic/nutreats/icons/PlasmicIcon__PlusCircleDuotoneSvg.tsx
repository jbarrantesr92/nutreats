// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlusCircleDuotoneSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlusCircleDuotoneSvgIcon(props: PlusCircleDuotoneSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 256 256"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M224 128a96 96 0 11-96-96 96 96 0 0196 96z"}
        opacity={".2"}
      ></path>

      <path
        d={
          "M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm0 192a88 88 0 1188-88 88.1 88.1 0 01-88 88zm48-88a8 8 0 01-8 8h-32v32a8 8 0 01-16 0v-32H88a8 8 0 010-16h32V88a8 8 0 0116 0v32h32a8 8 0 018 8z"
        }
      ></path>
    </svg>
  );
}

export default PlusCircleDuotoneSvgIcon;
/* prettier-ignore-end */
