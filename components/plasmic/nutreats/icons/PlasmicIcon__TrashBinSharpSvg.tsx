// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrashBinSharpSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrashBinSharpSvgIcon(props: TrashBinSharpSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
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
        fill={"none"}
        d={
          "M337.46 240L312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z"
        }
      ></path>

      <path
        fill={"none"}
        d={
          "M337.46 240L312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z"
        }
      ></path>

      <path
        d={
          "M64 160l29.74 282.51A24 24 0 00117.61 464h276.78a24 24 0 0023.87-21.49L448 160zm248 217.46l-56-56-56 56L174.54 352l56-56-56-56L200 214.54l56 56 56-56L337.46 240l-56 56 56 56z"
        }
      ></path>

      <rect
        x={"32"}
        y={"48"}
        width={"448"}
        height={"80"}
        rx={"12"}
        ry={"12"}
      ></rect>
    </svg>
  );
}

export default TrashBinSharpSvgIcon;
/* prettier-ignore-end */
