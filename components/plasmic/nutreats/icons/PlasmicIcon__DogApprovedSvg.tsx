// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DogApprovedSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DogApprovedSvgIcon(props: DogApprovedSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 100.6 120.7"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M45.2 37.9c-1.2-.5-2.1.2-3.1 1.4-3.2 3.4-8.2 3-11.1-.8-.4-.5-.8-.7-1.5-.6-5.7.8-9.4-4-8.4-8.5.2-.6-.1-1-.6-1.3-4.2-2.8-4.2-9 0-11.8.5-.3.7-.8.5-1.4-.9-4.6 2.7-9.3 8.4-8.5.7.1 1 0 1.4-.5 3.2-4.3 8.7-4.3 11.9 0 .4.5.7.7 1.4.6 6.1-.8 9.4 4.3 8.4 8.4-.2.6 0 1 .5 1.4 4.3 2.7 4.3 9.1 0 11.9-.5.4-.6.8-.5 1.4.9 4.5-2.4 8.3-7.3 8.3zm-10.7-9.2c.5.1.9-.2 1.2-.5 3.2-3.2 6.4-6.3 9.6-9.5.5-.5.8-1.1.5-2-.6-1.3-2-1.5-3.2-.4-2.4 2.4-4.9 4.8-7.3 7.3-.8.8-1.2.8-1.9-.1L31 21.1c-.9-.9-2-1-2.7-.3-.8.8-.8 1.8.2 2.7 1.4 1.5 3 3 4.5 4.5.4.5.9.8 1.5.7z"
          }
          opacity={".35"}
        ></path>

        <path
          d={
            "M34.5 28.7c-.7.1-1.1-.2-1.5-.7-1.5-1.4-3-3-4.5-4.5-1-1-1-2-.2-2.7.8-.7 1.8-.6 2.7.3.8.8 1.7 1.5 2.4 2.4.7.8 1.1.8 1.9.1 2.4-2.5 4.9-4.9 7.3-7.3 1.1-1.1 2.6-.9 3.2.4.4.8 0 1.4-.5 2-3.2 3.2-6.4 6.4-9.6 9.5-.2.3-.7.6-1.2.5z"
          }
        ></path>
      </g>

      <path
        d={
          "M54.3 60.5L58 38.2c.3-1.8 1.9-3.2 3.7-3.2 1.2 0 2.4.5 3 1.5l2.7 3.6h8.4c2.1 0 4 .8 5.4 2.3l2.9 2.9H93c2.1 0 3.9 1.8 3.9 3.9v3.9C96.9 60.2 91.2 66 84 66H73l-.8 4.9-17.9-10.4zm17 15.6V112c0 2.8-2.3 5.1-5.1 5.1h-5.1c-2.8 0-5.1-2.3-5.1-5.1V93.6c-3.9 2-8.2 3-12.9 3s-9-1.1-12.9-3v18.5c0 2.8-2.3 5.1-5.1 5.1H20c-2.8 0-5.1-2.3-5.1-5.1V75.2c-4.6-1.8-8.2-5.6-9.5-10.7L4.8 62c-.7-2.7 1-5.6 3.7-6.2 2.7-.7 5.6 1 6.2 3.7l.6 2.5c.5 2.3 2.6 3.9 4.9 3.9h33.1l18 10.2zM79 47.9c0-1.4-1.1-2.6-2.6-2.6s-2.6 1.1-2.6 2.6c0 1.4 1.1 2.6 2.6 2.6s2.6-1.2 2.6-2.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DogApprovedSvgIcon;
/* prettier-ignore-end */
