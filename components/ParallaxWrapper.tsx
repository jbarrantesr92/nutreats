import React, { ComponentProps, useContext } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { PlasmicCanvasContext } from '@plasmicapp/react-web/lib/host';

export default function ParallaxWrapper(props: ComponentProps<typeof Parallax>) {
  const inEditor = useContext(PlasmicCanvasContext);

  return (
    <ParallaxProvider>
      <Parallax {...props} {...(inEditor ? { disabled: true } : {})}>
        {props.children}
      </Parallax>
    </ParallaxProvider>
  );
}
