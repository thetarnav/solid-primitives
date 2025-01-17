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
      a: "a",
      h2: "h2",
      h3: "h3",
      pre: "pre",
      code: "code",
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
          {
            "Primitive providing the ability to watch for changes made to the DOM tree. A wrapper for Browser's "
          }
          <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver">
            {"MutationObserver"}
          </_components.a>
          {" API."}
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
      <CopyPackages packageName="@solid-primitives/mutation-observer" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="createmutationobserver">
          <_components.a className="header-anchor" href="#createmutationobserver">
            {"#"}
          </_components.a>
          {"createMutationObserver"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createMutationObserver } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/mutation-observer"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">
              {"// Simple usage with on a single parent element."}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"let"}</_components.span>
            {" ref!: "}
            <_components.span className="hljs-title class_">{"HTMLElement"}</_components.span>
            {";\n"}
            <_components.span className="hljs-title function_">
              {"createMutationObserver"}
            </_components.span>
            {"(\n  "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" ref,\n  { "}
            <_components.span className="hljs-attr">{"attributes"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"subtree"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" },\n  "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"records"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(records)\n);\n\n"}
            <_components.span className="hljs-comment">
              {"// Observing multiple parent elements:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"createMutationObserver"}
            </_components.span>
            {"(\n  "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" [el1, el2, el3],\n  { "}
            <_components.span className="hljs-attr">{"attributes"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"subtree"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" },\n  "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...}\n);\n\n"}
            <_components.span className="hljs-comment">
              {"// Set individual MutationObserver options:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"createMutationObserver"}
            </_components.span>
            {"(\n  [\n    [el, { "}
            <_components.span className="hljs-attr">{"attributes"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"subtree"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" }],\n    [el1, { "}
            <_components.span className="hljs-attr">{"childList"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" }]\n  ],\n  "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...}\n);\n\n"}
            <_components.span className="hljs-comment">
              {"// Primitive return usefull values:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [observe, {start, stop, instance}] = "}
            <_components.span className="hljs-title function_">
              {"createMutationObserver"}
            </_components.span>
            {"(el, options, handler)\n\n"}
            <_components.span className="hljs-title function_">{"observe"}</_components.span>
            {"(el1, { "}
            <_components.span className="hljs-attr">{"childList"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" })\n"}
            <_components.span className="hljs-title function_">{"stop"}</_components.span>
            {"()\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="directive-usage">
          <_components.a className="header-anchor" href="#directive-usage">
            {"#"}
          </_components.a>
          {"Directive Usage"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-comment">
              {'// You have to name it as "mutationObserver" when using typescript'}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [mutationObserver] = "}
            <_components.span className="hljs-title function_">
              {"createMutationObserver"}
            </_components.span>
            {"([], "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...})\n\n<div "}
            <_components.span className="hljs-attr">{"use"}</_components.span>
            {":mutationObserver={{ "}
            <_components.span className="hljs-attr">{"childList"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" }}>...</div>\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="standalone-directive-usage">
          <_components.a className="header-anchor" href="#standalone-directive-usage">
            {"#"}
          </_components.a>
          {"Standalone Directive Usage"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { mutationObserver } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/mutation-observer"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">
              {"// has to be used in code to avoid tree-shaking it:"}
            </_components.span>
            {"\nmutationObserver;\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"use:mutationObserver"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{[{"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"childList:"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"true"}</_components.span>
                {" }, "}
                <_components.span className="hljs-attr">{"e"}</_components.span>
                {" =>"}
              </_components.span>
              {" {...}]}>..."}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="types">
          <_components.a className="header-anchor" href="#types">
            {"#"}
          </_components.a>
          {"Types"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createMutationObserver"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {
                "\n  initial: MaybeAccessor<Node | Node[]>,\n  options: MutationObserverInit,\n  callback: MutationCallback,\n"
              }
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">
              {"MutationObserverReturn"}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createMutationObserver"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {
                "\n  initial: MaybeAccessor<[Node, MutationObserverInit][]>,\n  callback: MutationCallback,\n"
              }
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">
              {"MutationObserverReturn"}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">
              {"MutationObserverReturn"}
            </_components.span>
            {" = [\n  "}
            <_components.span className="hljs-attr">{"add"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">
              {"MutationObserverAdd"}
            </_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"rest"}</_components.span>
            {": {\n    "}
            <_components.span className="hljs-attr">{"start"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Fn"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"stop"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Fn"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"instance"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"MutationObserver"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"isSupported"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {";\n  },\n];\n\n"}
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">
              {"MutationObserverAdd"}
            </_components.span>
            {" = "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"target: Node, options?: MaybeAccessor<MutationObserverInit>"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/mutation-observer/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-mutation-observer-p59tu?file=/index.tsx">
            {"CodeSandbox"}
          </_components.a>
        </_components.p>
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/mutation-observer/CHANGELOG.md">
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
      packageName="@solid-primitives/mutation-observer"
      name="mutation-observer"
      stage={3}
      packageList={[{ name: "mutation-observer", gzipped: "456 B", minified: "768 B" }]}
      primitiveList={[{ name: "createMutationObserver", gzipped: "421 B", minified: "699 B" }]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
