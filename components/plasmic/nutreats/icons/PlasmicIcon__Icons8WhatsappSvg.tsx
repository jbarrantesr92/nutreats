// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8WhatsappSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8WhatsappSvgIcon(props: Icons8WhatsappSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 50 50"}
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
          "M25 2C12.318 2 2 12.318 2 25c0 3.96 1.023 7.854 2.963 11.29L2.037 46.73a.999.999 0 001.203 1.241l10.896-2.699A23.014 23.014 0 0025 48c12.682 0 23-10.318 23-23S37.682 2 25 2zm11.57 31.116c-.492 1.362-2.852 2.605-3.986 2.772-1.018.149-2.306.213-3.72-.231a34.606 34.606 0 01-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804-.295-.389-2.411-3.161-2.411-6.03s1.525-4.28 2.067-4.864c.542-.584 1.181-.73 1.575-.73s.787.005 1.132.021c.363.018.85-.137 1.329 1.001.492 1.168 1.673 4.037 1.819 4.33.148.292.246.633.05 1.022s-.294.632-.59.973-.62.76-.886 1.022c-.296.291-.603.606-.259 1.19s1.529 2.493 3.285 4.039c2.255 1.986 4.158 2.602 4.748 2.894.59.292.935.243 1.279-.146.344-.39 1.476-1.703 1.869-2.286s.787-.487 1.329-.292c.542.194 3.445 1.604 4.035 1.896.59.292.984.438 1.132.681.148.242.148 1.41-.344 2.771z"
        }
      ></path>
    </svg>
  );
}

export default Icons8WhatsappSvgIcon;
/* prettier-ignore-end */
