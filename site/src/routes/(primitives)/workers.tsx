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
      h2: "h2",
      a: "a",
      h3: "h3",
      pre: "pre",
      span: "span",
    },
    _provideComponents(),
    props.components,
  );
  return (
    <>
      <_components.p>
        {"A set of utility to support using Web Workers and Shared Workers:"}
      </_components.p>
      {"\n"}
      <_components.p>
        <_components.code data-code-primitive-name="createWorker" data-code-package-name="workers">
          {"createWorker"}
        </_components.code>
        {" - Provides a getter and setter for the primitive."}
      </_components.p>
      {"\n"}
      <_components.p>
        <_components.code
          data-code-primitive-name="createWorkerPool"
          data-code-package-name="workers"
        >
          {"createWorkerPool"}
        </_components.code>
        {" - Creates a pool of workers and round-robins requests between each."}
      </_components.p>
      {"\n"}
      <_components.p>
        <_components.code
          data-code-primitive-name="createSignaledWorker"
          data-code-package-name="workers"
        >
          {"createSignaledWorker"}
        </_components.code>
        {" - Creates a work with that reads and writes to signals."}
      </_components.p>
      {"\n"}
      <_components.h2 id="how-to-use-it">
        <_components.a className="header-anchor" href="#how-to-use-it">
          {"#"}
        </_components.a>
        {"How to use it"}
      </_components.h2>
      {"\n"}
      <_components.h3 id="createworker">
        <_components.a className="header-anchor" href="#createworker">
          {"#"}
        </_components.a>
        {"createWorker"}
      </_components.h3>
      {"\n"}
      <_components.p>{"Create a basic web worker:"}</_components.p>
      {"\n"}
      <_components.pre>
        <_components.code className="hljs language-ts">
          <_components.span className="hljs-keyword">{"const"}</_components.span>
          {" [worker, start, stop] = "}
          <_components.span className="hljs-title function_">{"createWorker"}</_components.span>
          {"("}
          <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
          <_components.span className="hljs-title function_">{"add"}</_components.span>
          {"("}
          <_components.span className="hljs-params">{"a, b"}</_components.span>
          {") {\n  "}
          <_components.span className="hljs-keyword">{"return"}</_components.span>
          {" a + b;\n});\n"}
          <_components.span className="hljs-variable language_">{"console"}</_components.span>
          {"."}
          <_components.span className="hljs-title function_">{"log"}</_components.span>
          {"("}
          <_components.span className="hljs-keyword">{"await"}</_components.span>
          {" worker."}
          <_components.span className="hljs-title function_">{"add"}</_components.span>
          {"("}
          <_components.span className="hljs-number">{"1"}</_components.span>
          {", "}
          <_components.span className="hljs-number">{"2"}</_components.span>
          {"));\n"}
          <_components.span className="hljs-comment">{"// output: 3"}</_components.span>
          {"\n"}
        </_components.code>
      </_components.pre>
      {"\n"}
      <_components.h3 id="createworkerpool">
        <_components.a className="header-anchor" href="#createworkerpool">
          {"#"}
        </_components.a>
        {"createWorkerPool"}
      </_components.h3>
      {"\n"}
      <_components.p>{"Create a worker pool with a set concurrency:"}</_components.p>
      {"\n"}
      <_components.pre>
        <_components.code className="hljs language-ts">
          <_components.span className="hljs-keyword">{"const"}</_components.span>
          {" [pool, start, stop] = "}
          <_components.span className="hljs-title function_">{"createWorkerPool"}</_components.span>
          {"("}
          <_components.span className="hljs-number">{"4"}</_components.span>
          {", "}
          <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
          <_components.span className="hljs-title function_">{"add"}</_components.span>
          {"("}
          <_components.span className="hljs-params">{"a, b"}</_components.span>
          {") {\n  "}
          <_components.span className="hljs-keyword">{"return"}</_components.span>
          {" a + b;\n});\n"}
          <_components.span className="hljs-variable language_">{"console"}</_components.span>
          {"."}
          <_components.span className="hljs-title function_">{"log"}</_components.span>
          {"("}
          <_components.span className="hljs-keyword">{"await"}</_components.span>
          {" pool."}
          <_components.span className="hljs-title function_">{"add"}</_components.span>
          {"("}
          <_components.span className="hljs-number">{"1"}</_components.span>
          {", "}
          <_components.span className="hljs-number">{"2"}</_components.span>
          {"));\n"}
          <_components.span className="hljs-comment">{"// output: 3"}</_components.span>
          {"\n"}
        </_components.code>
      </_components.pre>
      {"\n"}
      <_components.h3 id="createsignaledworker">
        <_components.a className="header-anchor" href="#createsignaledworker">
          {"#"}
        </_components.a>
        {"createSignaledWorker"}
      </_components.h3>
      {"\n"}
      <_components.p>
        {"Create a more advanced worker that accepts multiple instructional inputs:"}
      </_components.p>
      {"\n"}
      <_components.pre>
        <_components.code className="hljs language-ts">
          <_components.span className="hljs-keyword">{"const"}</_components.span>
          {" [input, setInput] = "}
          <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
          {"(["}
          <_components.span className="hljs-number">{"1"}</_components.span>
          {", "}
          <_components.span className="hljs-number">{"1"}</_components.span>
          {"]);\n"}
          <_components.span className="hljs-keyword">{"const"}</_components.span>
          {" [output, setOutput] = "}
          <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
          {"(["}
          <_components.span className="hljs-number">{"1"}</_components.span>
          {", "}
          <_components.span className="hljs-number">{"1"}</_components.span>
          {"]);\n"}
          <_components.span className="hljs-title function_">
            {"createSignaledWorker"}
          </_components.span>
          {"({\n  input,\n  "}
          <_components.span className="hljs-attr">{"output"}</_components.span>
          {": setOutput,\n  "}
          <_components.span className="hljs-attr">{"func"}</_components.span>
          {": "}
          <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
          <_components.span className="hljs-title function_">{"add"}</_components.span>
          {"("}
          <_components.span className="hljs-params">{"[a, b]"}</_components.span>
          {") {\n    "}
          <_components.span className="hljs-keyword">{"return"}</_components.span>
          {" a + b;\n  },\n});\n"}
          <_components.span className="hljs-title function_">{"setInput"}</_components.span>
          {"(["}
          <_components.span className="hljs-number">{"1"}</_components.span>
          {", "}
          <_components.span className="hljs-number">{"2"}</_components.span>
          {"]);\n"}
          <_components.span className="hljs-variable language_">{"console"}</_components.span>
          {"."}
          <_components.span className="hljs-title function_">{"log"}</_components.span>
          {"("}
          <_components.span className="hljs-title function_">{"output"}</_components.span>
          {"());\n"}
          <_components.span className="hljs-comment">{"// output: 3"}</_components.span>
          {"\n"}
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
        <_components.a href="https://solidjs-community.github.io/solid-primitives/workers/">
          {"Live Site"}
        </_components.a>
      </_components.p>
      {"\n"}
      <_components.p>
        {"You may view a working example here: [ link to Stackblize or CodeSandBox ]"}
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
        <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/workers/CHANGELOG.md">
          {"CHANGELOG.md"}
        </_components.a>
      </_components.p>
      {"\n"}
      <_components.h2 id="inspiration">
        <_components.a className="header-anchor" href="#inspiration">
          {"#"}
        </_components.a>
        {"Inspiration"}
      </_components.h2>
      {"\n"}
      <_components.p>
        {"Inspired by Jason Miller's worker function. Borrows the RPC and function export method."}
      </_components.p>
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

export default function Index() {
  return (
    <PrimitivePageMain
      packageName="@solid-primitives/workers"
      name="workers"
      stage={0}
      packageList={[{ name: "workers", gzipped: "1.17 KB", minified: "2.12 KB" }]}
      primitiveList={[
        { name: "createWorkerPool", gzipped: "1.06 KB", minified: "1.87 KB" },
        { name: "createSignaledWorker", gzipped: "1.03 KB", minified: "1.79 KB" },
        { name: "createWorker", gzipped: "926 B", minified: "1.57 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
