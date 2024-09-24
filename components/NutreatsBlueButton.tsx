import * as React from "react";
import {
  PlasmicNutreatsBlueButton,
  DefaultNutreatsBlueButtonProps
} from "./plasmic/nutreats/PlasmicNutreatsBlueButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface NutreatsBlueButtonProps
  extends DefaultNutreatsBlueButtonProps {
  // Feel free to add any additional props that this component should receive
}
function NutreatsBlueButton_(props: NutreatsBlueButtonProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicNutreatsBlueButton.useBehavior<NutreatsBlueButtonProps>(props, ref);
  return <PlasmicNutreatsBlueButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<NutreatsBlueButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<NutreatsBlueButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const NutreatsBlueButton = React.forwardRef(
  NutreatsBlueButton_
) as any as ButtonComponentType;

export default Object.assign(NutreatsBlueButton, { __plumeType: "button" });
