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
      code: "code",
      ul: "ul",
      li: "li",
      strong: "strong",
      a: "a",
      h2: "h2",
      em: "em",
      h3: "h3",
      h4: "h4",
      pre: "pre",
      span: "span",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"The reactive versions of "}
          <_components.code>{"Map"}</_components.code>
          {" & "}
          <_components.code>{"WeakMap"}</_components.code>
          {" built-in data structures."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.a href="#reactivemap-and-reactiveweakmap">
                <_components.code
                  data-code-primitive-name="ReactiveMap"
                  data-code-package-name="map"
                >
                  {"ReactiveMap"}
                </_components.code>
              </_components.a>
            </_components.strong>
            {" - A reactive "}
            <_components.code>{"Map"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.a href="#reactivemap-and-reactiveweakmap">
                <_components.code
                  data-code-primitive-name="ReactiveWeakMap"
                  data-code-package-name="map"
                >
                  {"ReactiveWeakMap"}
                </_components.code>
              </_components.a>
            </_components.strong>
            {" - A reactive "}
            <_components.code>{"WeakMap"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h2 id="installation">
          <_components.a className="header-anchor" href="#installation">
            {"#"}
          </_components.a>
          {"Installation"}
        </_components.h2>
        {"\n"}
      </NoHydration>
      <CopyPackages packageName="@solid-primitives/map" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="reactivemap-and-reactiveweakmap">
          <_components.a className="header-anchor" href="#reactivemap-and-reactiveweakmap">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="ReactiveMap" data-code-package-name="map">
            {"ReactiveMap"}
          </_components.code>
          {" and "}
          <_components.code data-code-primitive-name="ReactiveWeakMap" data-code-package-name="map">
            {"ReactiveWeakMap"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"A reactive version of "}
          <_components.code>{"Map"}</_components.code>
          {"/"}
          <_components.code>{"WeakMap"}</_components.code>
          {" data structure. All the reads "}
          <_components.em>
            {"(e.g. "}
            <_components.code>{"get"}</_components.code>
            {" or "}
            <_components.code>{"has"}</_components.code>
            {")"}
          </_components.em>
          {" are signals, and all the writes "}
          <_components.em>
            {"(e.g. "}
            <_components.code>{"delete"}</_components.code>
            {" or "}
            <_components.code>{"set"}</_components.code>
            {")"}
          </_components.em>
          {" will cause updates to appropriate signals."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.h4 id="import">
          <_components.a className="header-anchor" href="#import">
            {"#"}
          </_components.a>
          {"Import"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { "}
            <_components.span className="hljs-title class_">{"ReactiveMap"}</_components.span>
            {" } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"@solid-primitives/map"'}</_components.span>
            {";\n"}
            <_components.span className="hljs-comment">{"// or"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { "}
            <_components.span className="hljs-title class_">{"ReactiveWeakMap"}</_components.span>
            {" } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"@solid-primitives/map"'}</_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="basic-usage">
          <_components.a className="header-anchor" href="#basic-usage">
            {"#"}
          </_components.a>
          {"Basic usage"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"The usage is almost the same as the original Javascript structures."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" userPoints = "}
            <_components.span className="hljs-keyword">{"new"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"ReactiveMap"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"User"}</_components.span>
            {", "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {">();\n"}
            <_components.span className="hljs-comment">
              {"// reads can be listened to reactively"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  userPoints."}
            <_components.span className="hljs-title function_">{"get"}</_components.span>
            {"(user1); "}
            <_components.span className="hljs-comment">
              {"// => T: number | undefined (reactive)"}
            </_components.span>
            {"\n  userPoints."}
            <_components.span className="hljs-title function_">{"has"}</_components.span>
            {"(user1); "}
            <_components.span className="hljs-comment">
              {"// => T: boolean (reactive)"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-comment">
              {"// ReactiveWeakMap won't have .size or any methods that loop over the values"}
            </_components.span>
            {"\n  userPoints."}
            <_components.span className="hljs-property">{"size"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">
              {"// => T: number (reactive)"}
            </_components.span>
            {"\n});\n"}
            <_components.span className="hljs-comment">{"// apply changes"}</_components.span>
            {"\nuserPoints."}
            <_components.span className="hljs-title function_">{"set"}</_components.span>
            {"(user1, "}
            <_components.span className="hljs-number">{"100"}</_components.span>
            {");\nuserPoints."}
            <_components.span className="hljs-title function_">{"delete"}</_components.span>
            {"(user2);\nuserPoints."}
            <_components.span className="hljs-title function_">{"set"}</_components.span>
            {"(user1, { "}
            <_components.span className="hljs-attr">{"foo"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"bar"'}</_components.span>
            {" });\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="constructor-arguments">
          <_components.a className="header-anchor" href="#constructor-arguments">
            {"#"}
          </_components.a>
          {"Constructor arguments"}
        </_components.h4>
        {"\n"}
        <_components.p>
          <_components.code data-code-primitive-name="ReactiveMap" data-code-package-name="map">
            {"ReactiveMap"}
          </_components.code>
          {"'s and "}
          <_components.code data-code-primitive-name="ReactiveWeakMap" data-code-package-name="map">
            {"ReactiveWeakMap"}
          </_components.code>
          {"'s constructor one optional argument that is the initial entries of the map."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" map = "}
            <_components.span className="hljs-keyword">{"new"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"ReactiveMap"}</_components.span>
            {"([\n  ["}
            <_components.span className="hljs-string">{'"foo"'}</_components.span>
            {", ["}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {"]],\n  ["}
            <_components.span className="hljs-string">{'"bar"'}</_components.span>
            {", ["}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"4"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"5"}</_components.span>
            {"]],\n]);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="values-are-shallowly-wrapped">
          <_components.a className="header-anchor" href="#values-are-shallowly-wrapped">
            {"#"}
          </_components.a>
          {"Values are shallowly wrapped"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"Treat the values of "}
          <_components.code data-code-primitive-name="ReactiveMap" data-code-package-name="map">
            {"ReactiveMap"}
          </_components.code>
          {" and "}
          <_components.code data-code-primitive-name="ReactiveMap" data-code-package-name="map">
            {"ReactiveMap"}
          </_components.code>
          {" as individual signals, to cause updates, they have to be set through the "}
          <_components.code>{".set()"}</_components.code>
          {" method, no mutations."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" map = "}
            <_components.span className="hljs-keyword">{"new"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"ReactiveMap"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {", { "}
            <_components.span className="hljs-attr">{"age"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {" }>();\nmap."}
            <_components.span className="hljs-title function_">{"set"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"John"'}</_components.span>
            {", { "}
            <_components.span className="hljs-attr">{"age"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"34"}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-comment">
              {"// this won't cause any updates:"}
            </_components.span>
            {"\nmap."}
            <_components.span className="hljs-title function_">{"get"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"John"'}</_components.span>
            {")."}
            <_components.span className="hljs-property">{"age"}</_components.span>
            {" = "}
            <_components.span className="hljs-number">{"35"}</_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">{"// this will:"}</_components.span>
            {"\nmap."}
            <_components.span className="hljs-title function_">{"set"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"John"'}</_components.span>
            {", { "}
            <_components.span className="hljs-attr">{"age"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"35"}</_components.span>
            {" });\n"}
          </_components.code>
        </_components.pre>
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/map/CHANGELOG.md">
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
      packageName="@solid-primitives/map"
      name="map"
      stage={2}
      packageList={[{ name: "map", gzipped: "672 B", minified: "1.98 KB" }]}
      primitiveList={[
        { name: "ReactiveWeakMap", gzipped: "603 B", minified: "1.82 KB" },
        { name: "ReactiveMap", gzipped: "571 B", minified: "1.39 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
