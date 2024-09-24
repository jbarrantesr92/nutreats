// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TiktokSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TiktokSvgIcon(props: TiktokSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 448 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M448 209.9a210.1 210.1 0 01-122.8-39.3v178.8A162.6 162.6 0 11185 188.3v89.9a74.6 74.6 0 1052.2 71.2V0h88a121.2 121.2 0 001.9 22.2 122.2 122.2 0 0053.9 80.2 121.4 121.4 0 0067 20.1z"
        }
      ></path>
    </svg>
  );
}

export default TiktokSvgIcon;
/* prettier-ignore-end */
