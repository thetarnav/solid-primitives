// Do not modify
// Generated from "./scripts/update-site/build-pages"

import PrimitivePageMain from "~/components/Primitives/PrimitivePageMain";
import CodePrimitive from "~/components/Primitives/CodePrimitive";
import CopyPackages from "~/components/CopyPackage/CopyPackages";
import { NoHydration } from "solid-js/web";

/*@jsxRuntime automatic @jsxImportSource solid-js*/
import { useMDXComponents as _provideComponents } from "solid-mdx";
function _createMdxContent(props) {
  const _components = Object.assign(
    {
      p: "p",
      h2: "h2",
      a: "a",
      h3: "h3",
      code: "code",
      pre: "pre",
      span: "span",
      h4: "h4",
      ul: "ul",
      li: "li",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"Primitives to query and watch geolocation information from within the browser."}
        </_components.p>
        {"\n"}
        <_components.h2 id="installation">
          <_components.a className="header-anchor" href="#installation">
            {"#"}
          </_components.a>
          {"Installation"}
        </_components.h2>
        {"\n"}
      </NoHydration>
      <CopyPackages packageName="@solid-primitives/geolocation" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="creategeolocation">
          <_components.a className="header-anchor" href="#creategeolocation">
            {"#"}
          </_components.a>
          {"createGeolocation"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Used to fetch current geolocation data as a resource. This primitive uses "}
          <_components.code>{"createResource"}</_components.code>
          {" to return a location, so "}
          <_components.code>{"loading"}</_components.code>
          {", "}
          <_components.code>{"error"}</_components.code>
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [location, refetch] = "}
            <_components.span className="hljs-title function_">
              {"createGeolocation"}
            </_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"or with options:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [location, refetch] = "}
            <_components.span className="hljs-title function_">
              {"createGeolocation"}
            </_components.span>
            {"({\n  "}
            <_components.span className="hljs-attr">{"enableHighAccuracy"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"maximumAge"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"timeout"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"200"}</_components.span>
            {",\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="definition">
          <_components.a className="header-anchor" href="#definition">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-title function_">
              {"createGeolocation"}
            </_components.span>
            {"(\n  "}
            <_components.span className="hljs-attr">{"options"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"MaybeAccessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"PositionOptions"}</_components.span>
            {"> "}
            <_components.span className="hljs-comment">
              {"// these override basic defaults (see Types section)"}
            </_components.span>
            {"\n): [\n  "}
            <_components.span className="hljs-attr">{"location"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Resource"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">
              {"GeolocationCoordinates"}
            </_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {">,\n  "}
            <_components.span className="hljs-attr">{"refetch"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {">\n]\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="creategeolocationwatcher">
          <_components.a className="header-anchor" href="#creategeolocationwatcher">
            {"#"}
          </_components.a>
          {"createGeolocationWatcher"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "Creates a geolocation watcher and updates a signal with the latest coordinates. This primitive returns two reactive getters: "
          }
          <_components.code>{"location"}</_components.code>
          {" and "}
          <_components.code>{"error"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" watcher = "}
            <_components.span className="hljs-title function_">
              {"createGeolocationWatcher"}
            </_components.span>
            {"("}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {");\n"}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(watcher."}
            <_components.span className="hljs-property">{"location"}</_components.span>
            {");\n"}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(watcher."}
            <_components.span className="hljs-property">{"error"}</_components.span>
            {");\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="definition-1">
          <_components.a className="header-anchor" href="#definition-1">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-title function_">
              {"createGeolocationWatcher"}
            </_components.span>
            {"(\n  "}
            <_components.span className="hljs-attr">{"enabled"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"MaybeAccessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {">,\n  "}
            <_components.span className="hljs-attr">{"options"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"MaybeAccessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"PositionOptions"}</_components.span>
            {">\n): {\n  "}
            <_components.span className="hljs-attr">{"location"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">
              {"GeolocationCoordinates"}
            </_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"error"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">
              {"GeolocationPositionError"}
            </_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {"\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="types">
          <_components.a className="header-anchor" href="#types">
            {"#"}
          </_components.a>
          {"Types"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"The values returned in the location property are as follows:"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"interface"}</_components.span>{" "}
            <_components.span className="hljs-title class_">
              {"GeolocationCoordinates"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"readonly"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"accuracy"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-keyword">{"readonly"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"altitude"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-keyword">{"readonly"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"altitudeAccuracy"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-keyword">{"readonly"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"heading"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-keyword">{"readonly"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"latitude"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-keyword">{"readonly"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"longitude"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-keyword">{"readonly"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"speed"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {";\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"The options property defaults to the following value unless overwritten:"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"geolocationDefaults"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"PositionOptions"}</_components.span>
            {" = {\n  "}
            <_components.span className="hljs-attr">{"enableHighAccuracy"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"maximumAge"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"timeout"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Number"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"POSITIVE_INFINITY"}</_components.span>
            {",\n};\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h2>
        {"\n"}
        <_components.p>
          <_components.a href="https://solidjs-community.github.io/solid-primitives/geolocation/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"You may view a working example here: "}
          <_components.a href="https://stackblitz.com/edit/vitejs-vite-dvk4m4">
            {"StackBlitz"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="primitive-ideas">
          <_components.a className="header-anchor" href="#primitive-ideas">
            {"#"}
          </_components.a>
          {"Primitive Ideas"}
        </_components.h2>
        {"\n"}
        <_components.p>
          {"We're always looking to enhance our primitives. Some ideas:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"createDistance"}</_components.code>
            {" (supply a lat/lng and reactively calculate the difference in km/m)"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"createWithinRadius"}</_components.code>
            {" (a signal for tracking if a user is within a radius boundary)"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h2 id="changelog">
          <_components.a className="header-anchor" href="#changelog">
            {"#"}
          </_components.a>
          {"Changelog"}
        </_components.h2>
        {"\n"}
        <_components.p>
          {"See "}
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/geolocation/CHANGELOG.md">
            {"CHANGELOG.md"}
          </_components.a>
        </_components.p>
      </NoHydration>
    </>
  );
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = Object.assign({}, _provideComponents(), props.components);
  return MDXLayout ? (
    <MDXLayout {...props}>
      <_createMdxContent {...props} />
    </MDXLayout>
  ) : (
    _createMdxContent(props)
  );
}

function _missingMdxReference(id, component) {
  throw new Error(
    "Expected " +
      (component ? "component" : "object") +
      " `" +
      id +
      "` to be defined: you likely forgot to import, pass, or provide it.",
  );
}

export default function Index() {
  return (
    <PrimitivePageMain
      packageName="@solid-primitives/geolocation"
      name="geolocation"
      stage={3}
      packageList={[{ name: "geolocation", gzipped: "845 B", minified: "1.68 KB" }]}
      primitiveList={[
        { name: "createGeolocationWatcher", gzipped: "705 B", minified: "1.31 KB" },
        { name: "createGeolocation", gzipped: "466 B", minified: "756 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
