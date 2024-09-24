// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PencilSimpleLineDuotoneSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function PencilSimpleLineDuotoneSvgIcon(
  props: PencilSimpleLineDuotoneSvgIconProps
) {
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
        d={
          "M221.66 90.34L192 120l-56-56 29.66-29.66a8 8 0 0111.31 0L221.66 79a8 8 0 010 11.34z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M227.32 73.37l-44.69-44.68a16 16 0 00-22.63 0L36.69 152A15.86 15.86 0 0032 163.31V208a16 16 0 0016 16h168a8 8 0 000-16H115.32l112-112a16 16 0 000-22.63zM48 163.31l88-88L180.69 120l-88 88H48zm144-54.62L147.32 64l24-24L216 84.69z"
        }
      ></path>
    </svg>
  );
}

export default PencilSimpleLineDuotoneSvgIcon;
/* prettier-ignore-end */
