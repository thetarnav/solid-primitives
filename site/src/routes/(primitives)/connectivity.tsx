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
      code: "code",
      em: "em",
      ul: "ul",
      li: "li",
      h2: "h2",
      pre: "pre",
      span: "span",
      h3: "h3",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"A "}
          <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/Online_and_offline_events">
            <_components.code>{"navigator.onLine"}</_components.code>
          </_components.a>
          {" signal that tells you when the browser "}
          <_components.em>{"thinks"}</_components.em>
          {
            " you're online. Connectivity is determined by your browser, which is a best-effort process."
          }
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#makeConnectivityListener">
              <_components.code>{"makeConnectivityListener"}</_components.code>
            </_components.a>
            {" - Attaches event listeners and fires callback whenever "}
            <_components.code>{"window.onLine"}</_components.code>
            {" changes."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createConnectivitySignal">
              <_components.code
                data-code-primitive-name="createConnectivitySignal"
                data-code-package-name="connectivity"
              >
                {"createConnectivitySignal"}
              </_components.code>
            </_components.a>
            {
              " - A signal representing the browser's interpretation of whether it is on- or offline."
            }
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
      <CopyPackages packageName="@solid-primitives/connectivity" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="makeconnectivitylistener">
          <_components.a className="header-anchor" href="#makeconnectivitylistener">
            {"#"}
          </_components.a>
          <_components.code>{"makeConnectivityListener"}</_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Attaches event listeners and fires callback whenever "}
          <_components.code>{"window.onLine"}</_components.code>
          {" changes."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { makeConnectivityListener } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/connectivity"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" clear = "}
            <_components.span className="hljs-title function_">
              {"makeConnectivityListener"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"isOnline"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(isOnline); "}
            <_components.span className="hljs-comment">{"// T: booelan"}</_components.span>
            {"\n});\n"}
            <_components.span className="hljs-comment">
              {"// remove event listeners (happens also on cleanup)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"clear"}</_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="definition">
          <_components.a className="header-anchor" href="#definition">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"makeConnectivityListener"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"callback: (isOnline: "}
              <_components.span className="hljs-built_in">{"boolean"}</_components.span>
              {") => "}
              <_components.span className="hljs-built_in">{"void"}</_components.span>
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createconnectivitysignal">
          <_components.a className="header-anchor" href="#createconnectivitysignal">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createConnectivitySignal"
            data-code-package-name="connectivity"
          >
            {"createConnectivitySignal"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"A signal representing the browser's interpretation of whether it is on- or offline."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createConnectivitySignal } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/connectivity"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" isOnline = "}
            <_components.span className="hljs-title function_">
              {"createConnectivitySignal"}
            </_components.span>
            {"();\n"}
            <_components.span className="hljs-title function_">{"isOnline"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: boolean"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="useconnectivitysignal">
          <_components.a className="header-anchor" href="#useconnectivitysignal">
            {"#"}
          </_components.a>
          <_components.code>{"useConnectivitySignal"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"This primitive provides a "}
          <_components.a href="https://github.com/solidjs-community/solid-primitives/tree/main/packages/rootless#createSharedRoot">
            {"shared root"}
          </_components.a>
          {" variant that will reuse event listeners and signals across dependents."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"It's behavior is the same as "}
          <_components.a href="#createConnectivitySignal">
            <_components.code
              data-code-primitive-name="createConnectivitySignal"
              data-code-package-name="connectivity"
            >
              {"createConnectivitySignal"}
            </_components.code>
          </_components.a>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { useConnectivitySignal } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/connectivity"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" isOnline = "}
            <_components.span className="hljs-title function_">
              {"useConnectivitySignal"}
            </_components.span>
            {"();\n"}
            <_components.span className="hljs-title function_">{"isOnline"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: boolean"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="definition-1">
          <_components.a className="header-anchor" href="#definition-1">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createConnectivitySignal"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params" />
            {"): "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {">;\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/connectivity/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-connectivity-demo-2m76q?file=/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/connectivity/CHANGELOG.md">
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
      packageName="@solid-primitives/connectivity"
      name="connectivity"
      stage={2}
      packageList={[{ name: "connectivity", gzipped: "569 B", minified: "1.16 KB" }]}
      primitiveList={[{ name: "createConnectivitySignal", gzipped: "553 B", minified: "1.1 KB" }]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
