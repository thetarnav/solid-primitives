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
      ul: "ul",
      li: "li",
      a: "a",
      code: "code",
      em: "em",
      h2: "h2",
      h3: "h3",
      pre: "pre",
      span: "span",
      strong: "strong",
      h4: "h4",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"A library of reactive primitives and helpers for handling promises."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#promiseTimeout">
              <_components.code
                data-code-primitive-name="promiseTimeout"
                data-code-package-name="promise"
              >
                {"promiseTimeout"}
              </_components.code>
            </_components.a>
            {" — Creates a promise that resolves "}
            <_components.em>{"(or rejects)"}</_components.em>
            {" after given time."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#raceTimeout">
              <_components.code
                data-code-primitive-name="raceTimeout"
                data-code-package-name="promise"
              >
                {"raceTimeout"}
              </_components.code>
            </_components.a>
            {" — Combination of "}
            <_components.code>{"Promise.race()"}</_components.code>
            {" and "}
            <_components.code
              data-code-primitive-name="promiseTimeout"
              data-code-package-name="promise"
            >
              {"promiseTimeout"}
            </_components.code>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#until">
              <_components.code data-code-primitive-name="until" data-code-package-name="promise">
                {"until"}
              </_components.code>
            </_components.a>
            {" — Promised one-time watch for changes. Await a reactive condition."}
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
      <CopyPackages packageName="@solid-primitives/promise" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="promisetimeout">
          <_components.a className="header-anchor" href="#promisetimeout">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="promiseTimeout"
            data-code-package-name="promise"
          >
            {"promiseTimeout"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Creates a promise that resolves "}
          <_components.em>{"(or rejects)"}</_components.em>
          {" after given time."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { promiseTimeout } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/promise"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"promiseTimeout"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {"// resolves after 1 second"}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-keyword">{"try"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"promiseTimeout"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {", "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"timeout"'}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {"// rejects with 'timeout' after 1 second"}
            </_components.span>
            {"\n} "}
            <_components.span className="hljs-keyword">{"catch"}</_components.span>
            {" (e) {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(e); "}
            <_components.span className="hljs-comment">{"// 'timeout'"}</_components.span>
            {"\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="racetimeout">
          <_components.a className="header-anchor" href="#racetimeout">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="raceTimeout" data-code-package-name="promise">
            {"raceTimeout"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Combination of "}
          <_components.code>{"Promise.race()"}</_components.code>
          {" and "}
          <_components.code
            data-code-primitive-name="promiseTimeout"
            data-code-package-name="promise"
          >
            {"promiseTimeout"}
          </_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-1">
          <_components.a className="header-anchor" href="#how-to-use-it-1">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { raceTimeout } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/promise"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"raceTimeout"}</_components.span>
            {"(myPromise, "}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {'// resolves after 1 second, or when "myPromise" resolves'}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-keyword">{"try"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"raceTimeout"}</_components.span>
            {"(myPromise, "}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {", "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"timeout"'}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {"// rejects with 'timeout' after 1 second, or resolves when \"myPromise\" resolves"}
            </_components.span>
            {"\n} "}
            <_components.span className="hljs-keyword">{"catch"}</_components.span>
            {" (e) {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(e); "}
            <_components.span className="hljs-comment">{"// 'timeout'"}</_components.span>
            {"\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="until">
          <_components.a className="header-anchor" href="#until">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="until" data-code-package-name="promise">
            {"until"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Promised one-time watch for changes. Await a reactive condition."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-2">
          <_components.a className="header-anchor" href="#how-to-use-it-2">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"It takes a signal or a reactive condition — which will resolve the promise "}
          <_components.strong>{"if truthy"}</_components.strong>
          {" — as an argument."}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "Returns a promise that resolves a truthy value of a condition. Or rejects when it's root get's disposed."
          }
        </_components.p>
        {"\n"}
        <_components.h4 id="with-a-custom-reactive-condition">
          <_components.a className="header-anchor" href="#with-a-custom-reactive-condition">
            {"#"}
          </_components.a>
          {"With a custom reactive condition:"}
        </_components.h4>
        {"\n"}
        <_components.p>{"no need for createMemo, it's memoized internally"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { until } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/promise"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, setCount] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"until"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"() > "}
            <_components.span className="hljs-number">{"5"}</_components.span>
            {");\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="with-createresource">
          <_components.a className="header-anchor" href="#with-createresource">
            {"#"}
          </_components.a>
          {"With "}
          <_components.code>{"createResource"}</_components.code>
        </_components.h4>
        {"\n"}
        <_components.p>
          {"It also can be used as a "}
          <_components.strong>{"source"}</_components.strong>
          {" for "}
          <_components.code>{"createResource"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { until } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/promise"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [state, setState] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [data] = "}
            <_components.span className="hljs-title function_">{"createResource"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"until"}</_components.span>
            {"(state));\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="with-racetimeout">
          <_components.a className="header-anchor" href="#with-racetimeout">
            {"#"}
          </_components.a>
          {"With "}
          <_components.code data-code-primitive-name="raceTimeout" data-code-package-name="promise">
            {"raceTimeout"}
          </_components.code>
        </_components.h4>
        {"\n"}
        <_components.p>{"To limit the maximum time it has for resolving"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { until, raceTimeout } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/promise"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"try"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" result = "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"raceTimeout"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"until"}</_components.span>
            {"(condition), "}
            <_components.span className="hljs-number">{"2000"}</_components.span>
            {", "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"until was too slow"'}</_components.span>
            {");\n  "}
            <_components.span className="hljs-comment">
              {"// if until is quicker:"}
            </_components.span>
            {"\n  result; "}
            <_components.span className="hljs-comment">
              {"// => truthy condition value"}
            </_components.span>
            {"\n} "}
            <_components.span className="hljs-keyword">{"catch"}</_components.span>
            {" (err) {\n  "}
            <_components.span className="hljs-comment">{"// if timeouts:"}</_components.span>
            {"\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(err); "}
            <_components.span className="hljs-comment">
              {'// => "until was too slow"'}
            </_components.span>
            {"\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="manually-stopping-computation">
          <_components.a className="header-anchor" href="#manually-stopping-computation">
            {"#"}
          </_components.a>
          {"Manually stopping computation"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"If you don't want to use "}
          <_components.code data-code-primitive-name="raceTimeout" data-code-package-name="promise">
            {"raceTimeout"}
          </_components.code>
          {", there are other ways to stop the reactive computation of "}
          <_components.code data-code-primitive-name="until" data-code-package-name="promise">
            {"until"}
          </_components.code>
          {" if needed."}
        </_components.p>
        {"\n"}
        <_components.p>{'First, it will stop itself "onCleanup".'}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"// the same goes for components as they are roots too"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"createRoot"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"dispose"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n\n  "}
            <_components.span className="hljs-comment">
              {"// disposing root causes the promise to reject,"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-comment">
              {"// so you need to catch that outcome to prevent errors"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-title function_">{"until"}</_components.span>
            {"(condition)\n    ."}
            <_components.span className="hljs-title function_">{"then"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"res"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...})\n    ."}
            <_components.span className="hljs-title function_">{"catch"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {})\n\n  "}
            <_components.span className="hljs-title function_">{"dispose"}</_components.span>
            {"()\n})\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"Second, using the "}
          <_components.code>{".dispose()"}</_components.code>
          {" method."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"// until returns a promise with a dispose method in it"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" promise = "}
            <_components.span className="hljs-title function_">{"until"}</_components.span>
            {"(condition);\n\n"}
            <_components.span className="hljs-comment">
              {"// you need to catch the rejection here too"}
            </_components.span>
            {"\npromise."}
            <_components.span className="hljs-title function_">{"then"}</_components.span>
            {"()."}
            <_components.span className="hljs-title function_">{"catch"}</_components.span>
            {"();\n\npromise."}
            <_components.span className="hljs-title function_">{"dispose"}</_components.span>
            {"();\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/promise/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code data-code-primitive-name="until" data-code-package-name="promise">
            {"until"}
          </_components.code>
          {" + "}
          <_components.code>{"createResource"}</_components.code>
          {" demo: "}
          <_components.a href="https://codesandbox.io/s/until-resource-demo-sfs7c?file=/src/index.tsx">
            {"CodeSandbox"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code data-code-primitive-name="until" data-code-package-name="promise">
            {"until"}
          </_components.code>
          {" as "}
          <_components.code>{"createResource"}</_components.code>
          {" fetcher: "}
          <_components.a href="https://codesandbox.io/s/until-as-resource-fetcher-6sl0e?file=/src/index.tsx">
            {"https://codesandbox.io/s/until-as-resource-fetcher-6sl0e?file=/src/index.tsx"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/promise/CHANGELOG.md">
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
          {"Original idea for this primitive comes from a "}
          <_components.a href="https://vueuse.org/shared/until">
            {"VueUse's function of the same name"}
          </_components.a>
          {"."}
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
      packageName="@solid-primitives/promise"
      name="promise"
      stage={3}
      packageList={[{ name: "promise", gzipped: "491 B", minified: "894 B" }]}
      primitiveList={[
        { name: "raceTimeout", gzipped: "385 B", minified: "665 B" },
        { name: "until", gzipped: "182 B", minified: "263 B" },
        { name: "promiseTimeout", gzipped: "149 B", minified: "207 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
