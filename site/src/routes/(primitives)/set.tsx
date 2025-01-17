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
          {"The Javascript built-in "}
          <_components.code>{"Set"}</_components.code>
          {" & "}
          <_components.code>{"WeakSet"}</_components.code>
          {" data structures as a reactive signals."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.a href="#ReactiveSet">
                <_components.code
                  data-code-primitive-name="ReactiveSet"
                  data-code-package-name="set"
                >
                  {"ReactiveSet"}
                </_components.code>
              </_components.a>
            </_components.strong>
            {" - A reactive version of a Javascript built-in "}
            <_components.code>{"Set"}</_components.code>
            {" class."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.a href="#ReactiveWeakSet">
                <_components.code
                  data-code-primitive-name="ReactiveWeakSet"
                  data-code-package-name="set"
                >
                  {"ReactiveWeakSet"}
                </_components.code>
              </_components.a>
            </_components.strong>
            {" - A reactive version of a Javascript built-in "}
            <_components.code>{"WeakSet"}</_components.code>
            {" class."}
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
      <CopyPackages packageName="@solid-primitives/set" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="reactiveset">
          <_components.a className="header-anchor" href="#reactiveset">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="ReactiveSet" data-code-package-name="set">
            {"ReactiveSet"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"A reactive version of a Javascript built-in "}
          <_components.code>{"Set"}</_components.code>
          {" class."}
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
            <_components.span className="hljs-title class_">{"ReactiveSet"}</_components.span>
            {" } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"@solid-primitives/set"'}</_components.span>
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
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" set = "}
            <_components.span className="hljs-keyword">{"new"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"ReactiveSet"}</_components.span>
            {"(["}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {"]);\n\n"}
            <_components.span className="hljs-comment">
              {"// listen for changes reactively"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  [...set]; "}
            <_components.span className="hljs-comment">
              {"// => [1,2,3] (reactive on any change)"}
            </_components.span>
            {"\n  set."}
            <_components.span className="hljs-title function_">{"has"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {"// => true (reactive on change to the result)"}
            </_components.span>
            {"\n});\n\n"}
            <_components.span className="hljs-comment">
              {"// apply like with normal Set"}
            </_components.span>
            {"\nset."}
            <_components.span className="hljs-title function_">{"add"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"4"}</_components.span>
            {");\nset."}
            <_components.span className="hljs-title function_">{"delete"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\nset."}
            <_components.span className="hljs-title function_">{"clear"}</_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="reactiveweakset">
          <_components.a className="header-anchor" href="#reactiveweakset">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="ReactiveWeakSet" data-code-package-name="set">
            {"ReactiveWeakSet"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"A reactive version of a Javascript built-in "}
          <_components.code>{"WeakSet"}</_components.code>
          {" class."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-1">
          <_components.a className="header-anchor" href="#how-to-use-it-1">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.h4 id="import-1">
          <_components.a className="header-anchor" href="#import-1">
            {"#"}
          </_components.a>
          {"Import"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { "}
            <_components.span className="hljs-title class_">{"ReactiveWeakSet"}</_components.span>
            {" } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"@solid-primitives/set"'}</_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="basic-usage-1">
          <_components.a className="header-anchor" href="#basic-usage-1">
            {"#"}
          </_components.a>
          {"Basic usage"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" set = "}
            <_components.span className="hljs-keyword">{"new"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"ReactiveWeakSet"}</_components.span>
            {"(["}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {"]);\n\n"}
            <_components.span className="hljs-comment">
              {"// listen for changes reactively"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  set."}
            <_components.span className="hljs-title function_">{"has"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {"// => true (reactive on change to the result)"}
            </_components.span>
            {"\n});\n\n"}
            <_components.span className="hljs-comment">
              {"// apply changes like with normal Set"}
            </_components.span>
            {"\nset."}
            <_components.span className="hljs-title function_">{"add"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"4"}</_components.span>
            {");\nset."}
            <_components.span className="hljs-title function_">{"delete"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\n"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/set/CHANGELOG.md">
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
      packageName="@solid-primitives/set"
      name="set"
      stage={2}
      packageList={[{ name: "set", gzipped: "607 B", minified: "1.55 KB" }]}
      primitiveList={[
        { name: "ReactiveWeakSet", gzipped: "536 B", minified: "1.39 KB" },
        { name: "ReactiveSet", gzipped: "505 B", minified: "1.12 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
