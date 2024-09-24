// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: h8C9fz9kVsxnVEjHjpK7So
// Component: 0np65JwHhSJY

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { RichLayout } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-layout";
import { LoadingBoundary } from "@plasmicpkgs/plasmic-basic-components";

import { useScreenVariants as useScreenVariantszwwmRsht6Acu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: zwwmRsht6Acu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: h8C9fz9kVsxnVEjHjpK7So/projectcss
import sty from "./PlasmicPageLayout.module.css"; // plasmic-import: 0np65JwHhSJY/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: dutHsrMauFCJ/icon
import NutreatsLogoSvgIcon from "./icons/PlasmicIcon__NutreatsLogoSvg"; // plasmic-import: yEf-dkuoJ7m9/icon

createPlasmicElementProxy;

export type PlasmicPageLayout__VariantMembers = {
  sidebar: "sidebar";
};
export type PlasmicPageLayout__VariantsArgs = {
  sidebar?: SingleBooleanChoiceArg<"sidebar">;
};
type VariantPropType = keyof PlasmicPageLayout__VariantsArgs;
export const PlasmicPageLayout__VariantProps = new Array<VariantPropType>(
  "sidebar"
);

export type PlasmicPageLayout__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPageLayout__ArgsType;
export const PlasmicPageLayout__ArgProps = new Array<ArgPropType>("children");

export type PlasmicPageLayout__OverridesType = {
  root?: Flex__<typeof RichLayout>;
  loadingBoundary?: Flex__<typeof LoadingBoundary>;
};

export interface DefaultPageLayoutProps {
  children?: React.ReactNode;
  sidebar?: SingleBooleanChoiceArg<"sidebar">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPageLayout__RenderFunc(props: {
  variants: PlasmicPageLayout__VariantsArgs;
  args: PlasmicPageLayout__ArgsType;
  overrides: PlasmicPageLayout__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "sidebar",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.sidebar
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszwwmRsht6Acu()
  });

  return (
    <RichLayout
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        { [sty.rootsidebar]: hasVariant($state, "sidebar", "sidebar") }
      )}
      fixSiderbar={hasVariant($state, "sidebar", "sidebar") ? true : undefined}
      fixedHeader={true}
      layout={
        hasVariant($state, "sidebar", "sidebar")
          ? "side"
          : hasVariant(globalVariants, "screen", "mobileOnly")
          ? "side"
          : "top"
      }
      logoElement={
        <NutreatsLogoSvgIcon
          className={classNames(projectcss.all, sty.svg__jtdd7, {
            [sty.svgsidebar__jtdd7RfAt4]: hasVariant(
              $state,
              "sidebar",
              "sidebar"
            )
          })}
          role={"img"}
        />
      }
      menu={
        hasVariant(globalVariants, "screen", "mobileOnly")
          ? (() => {
              const __composite = { hideMenuWhenCollapsed: null };
              __composite["hideMenuWhenCollapsed"] = true;
              return __composite;
            })()
          : (() => {
              const __composite = { hideMenuWhenCollapsed: null };
              __composite["hideMenuWhenCollapsed"] = false;
              return __composite;
            })()
      }
      navMenuItems={(() => {
        const __composite = [
          { name: null, path: null },
          { path: null, name: null }
        ];
        __composite["0"]["name"] = "Productos";
        __composite["0"]["path"] = "/#productos";
        __composite["1"]["path"] = "/#ubicaciones";
        __composite["1"]["name"] = "Puntos de venta";
        return __composite;
      })()}
      simpleNavTheme={
        hasVariant(globalVariants, "screen", "mobileOnly")
          ? (() => {
              const __composite = { scheme: null };
              __composite["scheme"] = "default";
              return __composite;
            })()
          : undefined
      }
      title={``}
    >
      <LoadingBoundary
        data-plasmic-name={"loadingBoundary"}
        data-plasmic-override={overrides.loadingBoundary}
        className={classNames("__wab_instance", sty.loadingBoundary, {
          [sty.loadingBoundarysidebar]: hasVariant($state, "sidebar", "sidebar")
        })}
        loadingState={
          <DataCtxReader__>
            {$ctx => (
              <div className={classNames(projectcss.all, sty.freeBox__y42Io)}>
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__kKpLd)}
                  role={"img"}
                />
              </div>
            )}
          </DataCtxReader__>
        }
      >
        <DataCtxReader__>
          {$ctx => (
            <div
              className={classNames(projectcss.all, sty.freeBox__gl6Dm, {
                [sty.freeBoxsidebar__gl6DmRfAt4]: hasVariant(
                  $state,
                  "sidebar",
                  "sidebar"
                )
              })}
            >
              {renderPlasmicSlot({
                defaultContents: (
                  <section
                    className={classNames(projectcss.all, sty.section__rzuRx)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1__zIcbY
                      )}
                    >
                      {"Untitled page"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bguIa
                      )}
                    >
                      {
                        "Press the big blue + button to insert components like Tables, Text, Buttons, and Forms.\n\nJoin our Slack Community (icon in bottom left) for help!"
                      }
                    </div>
                  </section>
                ),
                value: args.children
              })}
            </div>
          )}
        </DataCtxReader__>
      </LoadingBoundary>
    </RichLayout>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "loadingBoundary"],
  loadingBoundary: ["loadingBoundary"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof RichLayout;
  loadingBoundary: typeof LoadingBoundary;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPageLayout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPageLayout__VariantsArgs;
    args?: PlasmicPageLayout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPageLayout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPageLayout__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPageLayout__ArgProps,
          internalVariantPropNames: PlasmicPageLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPageLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageLayout";
  } else {
    func.displayName = `PlasmicPageLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicPageLayout = Object.assign(
  // Top-level PlasmicPageLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loadingBoundary: makeNodeComponent("loadingBoundary"),

    // Metadata about props expected for PlasmicPageLayout
    internalVariantProps: PlasmicPageLayout__VariantProps,
    internalArgProps: PlasmicPageLayout__ArgProps
  }
);

export default PlasmicPageLayout;
/* prettier-ignore-end */
