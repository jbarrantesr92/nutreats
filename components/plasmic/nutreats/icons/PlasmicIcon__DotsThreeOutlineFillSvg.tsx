// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DotsThreeOutlineFillSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DotsThreeOutlineFillSvgIcon(
  props: DotsThreeOutlineFillSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h256v256H0z"}></path>

      <path
        d={
          "M156 128a28 28 0 11-28-28 28 28 0 0128 28zM48 100a28 28 0 1028 28 28 28 0 00-28-28zm160 0a28 28 0 1028 28 28 28 0 00-28-28z"
        }
      ></path>
    </svg>
  );
}

export default DotsThreeOutlineFillSvgIcon;
/* prettier-ignore-end */
