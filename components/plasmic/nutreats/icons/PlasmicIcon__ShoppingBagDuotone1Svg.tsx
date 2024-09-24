// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShoppingBagDuotone1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShoppingBagDuotone1SvgIcon(
  props: ShoppingBagDuotone1SvgIconProps
) {
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
          "M224 56v144a8 8 0 01-8 8H40a8 8 0 01-8-8V56a8 8 0 018-8h176a8 8 0 018 8z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M216 40H40a16 16 0 00-16 16v144a16 16 0 0016 16h176a16 16 0 0016-16V56a16 16 0 00-16-16zm0 160H40V56h176v144zM176 88a48 48 0 01-96 0 8 8 0 0116 0 32 32 0 0064 0 8 8 0 0116 0z"
        }
      ></path>
    </svg>
  );
}

export default ShoppingBagDuotone1SvgIcon;
/* prettier-ignore-end */
