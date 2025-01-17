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
      a: "a",
      em: "em",
      h2: "h2",
      h3: "h3",
      pre: "pre",
      span: "span",
      h6: "h6",
      strong: "strong",
      blockquote: "blockquote",
      h4: "h4",
      ol: "ol",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"Collection of custom "}
          <_components.code>{"createMemo"}</_components.code>
          {" primitives. They extend it's functionality while keeping the usage similar."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createLatest">
              <_components.code
                data-code-primitive-name="createLatest"
                data-code-package-name="memo"
              >
                {"createLatest"}
              </_components.code>
            </_components.a>
            {" - A combined memo of a list of sources, where last updated will be the value."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createWritableMemo">
              <_components.code
                data-code-primitive-name="createWritableMemo"
                data-code-package-name="memo"
              >
                {"createWritableMemo"}
              </_components.code>
            </_components.a>
            {" - Solid's "}
            <_components.code>{"createMemo"}</_components.code>
            {" which value can be overwritten by a setter."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createLazyMemo">
              <_components.code
                data-code-primitive-name="createLazyMemo"
                data-code-package-name="memo"
              >
                {"createLazyMemo"}
              </_components.code>
            </_components.a>
            {" - Lazily evaluated memo. Will run the calculation only if is being listened to."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createAsyncMemo">
              <_components.code
                data-code-primitive-name="createAsyncMemo"
                data-code-package-name="memo"
              >
                {"createAsyncMemo"}
              </_components.code>
            </_components.a>
            {" - Memo that allows for asynchronous calculations."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createDebouncedMemo">
              <_components.code
                data-code-primitive-name="createDebouncedMemo"
                data-code-package-name="memo"
              >
                {"createDebouncedMemo"}
              </_components.code>
            </_components.a>
            {" - Memo which returned signal is debounced."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createDebouncedMemoOn">
              <_components.code
                data-code-primitive-name="createDebouncedMemoOn"
                data-code-package-name="memo"
              >
                {"createDebouncedMemoOn"}
              </_components.code>
            </_components.a>
            {" - Memo which callback is debounced."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createThrottledMemo">
              <_components.code
                data-code-primitive-name="createThrottledMemo"
                data-code-package-name="memo"
              >
                {"createThrottledMemo"}
              </_components.code>
            </_components.a>
            {" - Memo which callback is throttled."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createPureReaction">
              <_components.code
                data-code-primitive-name="createPureReaction"
                data-code-package-name="memo"
              >
                {"createPureReaction"}
              </_components.code>
            </_components.a>
            {" - A "}
            <_components.code>{"createReaction"}</_components.code>
            {" that runs before render "}
            <_components.em>{"(non-batching)"}</_components.em>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createMemoCache">
              <_components.code
                data-code-primitive-name="createMemoCache"
                data-code-package-name="memo"
              >
                {"createMemoCache"}
              </_components.code>
            </_components.a>
            {" - Custom, lazily-evaluated, memo, with caching based on keys."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createReducer">
              <_components.code
                data-code-primitive-name="createReducer"
                data-code-package-name="memo"
              >
                {"createReducer"}
              </_components.code>
            </_components.a>
            {" - Primitive for updating signal in a predictable way."}
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
      <CopyPackages packageName="@solid-primitives/memo" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createlatest">
          <_components.a className="header-anchor" href="#createlatest">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="createLatest" data-code-package-name="memo">
            {"createLatest"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "A combined memo of multiple sources, last updated source will be the value of the returned signal."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code data-code-primitive-name="createLatest" data-code-package-name="memo">
            {"createLatest"}
          </_components.code>
          {" takes three arguments:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"sources"}</_components.code>
            {" - list of reactive calculations/signals/memos"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"value"}</_components.code>
            {" - initial value of returned signal"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"options"}</_components.code>
            {" - signal options"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.p>{"And returns a signal with value of the last change"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createLatest } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/memo"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, setCount] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [x, setX] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {" = "}
            <_components.span className="hljs-title function_">{"createMemo"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"otherValue"}</_components.span>
            {"() * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" lastUpdated = "}
            <_components.span className="hljs-title function_">{"createLatest"}</_components.span>
            {"([count, "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {", "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"x"}</_components.span>
            {"() / "}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {"]);\n"}
            <_components.span className="hljs-title function_">{"lastUpdated"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => undefined"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setCount"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"4"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"lastUpdated"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 4"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setX"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"9"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"lastUpdated"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 3"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createwritablememo">
          <_components.a className="header-anchor" href="#createwritablememo">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createWritableMemo"
            data-code-package-name="memo"
          >
            {"createWritableMemo"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Solid's "}
          <_components.code>{"createMemo"}</_components.code>
          {" which value can be overwritten by a setter."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-1">
          <_components.a className="header-anchor" href="#how-to-use-it-1">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createWritableMemo"
            data-code-package-name="memo"
          >
            {"createWritableMemo"}
          </_components.code>
          {" takes the same arguments as Solid's "}
          <_components.code>{"createMemo"}</_components.code>
          {":"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"calc"}</_components.code>
            {" - callback that calculates the value"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"value"}</_components.code>
            {" - initial value (for calcultion)"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"options"}</_components.code>
            {" - give a name to the reactive computation, or change "}
            <_components.code>{"equals"}</_components.code>
            {" method."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.p>
          {
            "And returns a signal with value of the last change, set by a setter or a memo calculation."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createWritableMemo } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/memo"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, setCount] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [result, setResult] = "}
            <_components.span className="hljs-title function_">
              {"createWritableMemo"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"() * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"result"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 2"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setResult"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"5"}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {"// overwrites calculation result"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"result"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 10"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createlazymemo">
          <_components.a className="header-anchor" href="#createlazymemo">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="createLazyMemo" data-code-package-name="memo">
            {"createLazyMemo"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Lazily evaluated "}
          <_components.code>{"createMemo"}</_components.code>
          {". Will run the calculation only if is being listened to."}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "It may be useful for memos that aren't being listened to all the time, to reduce performance cost of wastefull computations."
          }
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
          {"It's usage is almost the same as Solid's "}
          <_components.code>{"createMemo"}</_components.code>
          {". Similarly it should be placed inside a reactive root — component or createRoot."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createLazyMemo } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/memo"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">
              {"// use like a createMemo"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" double = "}
            <_components.span className="hljs-title function_">{"createLazyMemo"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"() * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"double"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: number"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"Set the initial value, or type of the previous value in calculation function will be "}
          <_components.code>{"T | undefined"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"// set the initial value"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" memo = "}
            <_components.span className="hljs-title function_">{"createLazyMemo"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"prev"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"() + prev, "}
            <_components.span className="hljs-number">{"123"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"memo"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: number"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h6 id="see-the-tests-for-better-usage-reference">
          <_components.a className="header-anchor" href="#see-the-tests-for-better-usage-reference">
            {"#"}
          </_components.a>
          {"See "}
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/memo/test/lazy.test.ts">
            {"the tests"}
          </_components.a>
          {" for better usage reference."}
        </_components.h6>
        {"\n"}
        <_components.h3 id="usage-caveats">
          <_components.a className="header-anchor" href="#usage-caveats">
            {"#"}
          </_components.a>
          {"Usage caveats"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "There are vary few actual good applications of a lazy memo, that couldn't be solved with other means — like improving the data architecture. For example, you can always only create memos in places that you intend to use it in, instead of declaring it prematurely."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"// instead of memo, distribute only a calculation function"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"getDouble"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params">
              {"n: "}
              <_components.span className="hljs-built_in">{"number"}</_components.span>
            </_components.span>
            {") => n * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {";\n"}
            <_components.span className="hljs-comment">
              {"// and only declare memo where you want to use it"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" double = "}
            <_components.span className="hljs-title function_">{"createMemo"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"getDouble"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"()));\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"A lazy memo won't work reliably with "}
          <_components.a href="https://www.solidjs.com/docs/latest/api#%3Csuspense%3E">
            {"Suspense"}
          </_components.a>
          {"."}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "There is a performance cost, from recreating and disposing computations, involved with using it over normal memo."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-memo-demo-3w0oz?file=/index.tsx">
            {"https://codesandbox.io/s/solid-primitives-memo-demo-3w0oz?file=/index.tsx"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="createasyncmemo">
          <_components.a className="header-anchor" href="#createasyncmemo">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createAsyncMemo"
            data-code-package-name="memo"
          >
            {"createAsyncMemo"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Solid's "}
          <_components.code>{"createMemo"}</_components.code>
          {" that allows for asynchronous calculations."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-3">
          <_components.a className="header-anchor" href="#how-to-use-it-3">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"It's usage is almost the same as Solid's "}
          <_components.code>{"createMemo"}</_components.code>
          {". Similarly it should be placed inside a reactive root — component or createRoot."}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "The function argument can return a promise. Promises will be handled with preserving the order of execution, that means if a promise would take more time to execute it won't overwrite thouse that start after it but finish quicker."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createAsyncMemo } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/memo"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" memo = "}
            <_components.span className="hljs-title function_">
              {"createAsyncMemo"}
            </_components.span>
            {"(\n  "}
            <_components.span className="hljs-keyword">{"async"}</_components.span>
            {" prev => {\n    "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" value = "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"myAsyncFunc"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"signal"}</_components.span>
            {"());\n    "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" value."}
            <_components.span className="hljs-property">{"data"}</_components.span>
            {";\n  },\n  { "}
            <_components.span className="hljs-attr">{"value"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"initial value"'}</_components.span>
            {" },\n);\n"}
            <_components.span className="hljs-comment">
              {"// initial value can be set to prevent returned signal from being undefined"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          <_components.strong>
            {"calculation will track reactive reads synchronously — stops tracking after first "}
            <_components.code>{"await"}</_components.code>
          </_components.strong>
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" memo = "}
            <_components.span className="hljs-title function_">
              {"createAsyncMemo"}
            </_components.span>
            {"("}
            <_components.span className="hljs-keyword">{"async"}</_components.span>
            {" prev => {\n  "}
            <_components.span className="hljs-comment">
              {"// signal() will be tracked"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" value = "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"myAsyncFunc"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"signal"}</_components.span>
            {"());\n  "}
            <_components.span className="hljs-comment">
              {"// otherSignal() is after await so it won't be tracked"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" data = "}
            <_components.span className="hljs-title function_">{"otherSignal"}</_components.span>
            {"() + value;\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" value;\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="demo-1">
          <_components.a className="header-anchor" href="#demo-1">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Demo uses fetching because it is the simplest example to make, but "}
          <_components.strong>
            {"please don't use it instead of createResource for fetching data."}
          </_components.strong>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-async-memo-fetch-demo-htne6?file=/index.tsx">
            {
              "https://codesandbox.io/s/solid-primitives-async-memo-fetch-demo-htne6?file=/index.tsx"
            }
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"// createResource also can reactively refetch once source changes"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [data] = "}
            <_components.span className="hljs-title function_">{"createResource"}</_components.span>
            {"(signal, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"value"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...})\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createdebouncedmemo">
          <_components.a className="header-anchor" href="#createdebouncedmemo">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createDebouncedMemo"
            data-code-package-name="memo"
          >
            {"createDebouncedMemo"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Solid's "}
          <_components.code>{"createMemo"}</_components.code>
          {" which returned signal is debounced. "}
          <_components.em>{"(The callback is not debounced!)"}</_components.em>
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-4">
          <_components.a className="header-anchor" href="#how-to-use-it-4">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createDebouncedMemo } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/memo"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">{"// base usage:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" double = "}
            <_components.span className="hljs-title function_">
              {"createDebouncedMemo"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"prev"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"() * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"200"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">{"// with initial value:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" double = "}
            <_components.span className="hljs-title function_">
              {"createDebouncedMemo"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"prev"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"() * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"200"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.blockquote>
          {"\n"}
          <_components.p>
            <_components.strong>{"Note"}</_components.strong>
            {
              " The callback is not perfectly debounced, it will be fired every time the source changes. It's the updates of the returned signal that are debounced. If you want to debounce the callback, use "
            }
            <_components.a href="#createDebouncedMemoOn">
              <_components.code
                data-code-primitive-name="createDebouncedMemoOn"
                data-code-package-name="memo"
              >
                {"createDebouncedMemoOn"}
              </_components.code>
            </_components.a>
            {" instead."}
          </_components.p>
          {"\n"}
        </_components.blockquote>
        {"\n"}
        <_components.h2 id="createdebouncedmemoon">
          <_components.a className="header-anchor" href="#createdebouncedmemoon">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createDebouncedMemoOn"
            data-code-package-name="memo"
          >
            {"createDebouncedMemoOn"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Solid's "}
          <_components.code>{"createMemo"}</_components.code>
          {" with explicit sources, and debounced callback execution."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"The "}
          <_components.code>{"deps"}</_components.code>
          {" and "}
          <_components.code>{"fn"}</_components.code>
          {" arguments are the same as in Solid's "}
          <_components.code>{"on"}</_components.code>
          {" halper."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-5">
          <_components.a className="header-anchor" href="#how-to-use-it-5">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createDebouncedMemoOn } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/memo"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" double = "}
            <_components.span className="hljs-title function_">
              {"createDebouncedMemoOn"}
            </_components.span>
            {"(count, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"v"}</_components.span>
              {" =>"}
            </_components.span>
            {" v * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"200"}</_components.span>
            {");\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="demo-2">
          <_components.a className="header-anchor" href="#demo-2">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"A stackblitz demo of the primitive: "}
          <_components.a href="https://stackblitz.com/edit/solid-vite-unocss-xmnubd?file=index.tsx">
            {"https://stackblitz.com/edit/solid-vite-unocss-xmnubd?file=index.tsx"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="createthrottledmemo">
          <_components.a className="header-anchor" href="#createthrottledmemo">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createThrottledMemo"
            data-code-package-name="memo"
          >
            {"createThrottledMemo"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Solid's "}
          <_components.code>{"createMemo"}</_components.code>
          {" which callback execution is throttled."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-6">
          <_components.a className="header-anchor" href="#how-to-use-it-6">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createThrottledMemo } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/memo"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">{"// base usage:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" double = "}
            <_components.span className="hljs-title function_">
              {"createThrottledMemo"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"prev"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"() * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"200"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">{"// with initial value:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" double = "}
            <_components.span className="hljs-title function_">
              {"createThrottledMemo"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"prev"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"() * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"200"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="demo-3">
          <_components.a className="header-anchor" href="#demo-3">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"A stackblitz demo of the primitive: "}
          <_components.a href="https://stackblitz.com/edit/solid-vite-unocss-xmnubd?file=index.tsx">
            {"https://stackblitz.com/edit/solid-vite-unocss-xmnubd?file=index.tsx"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="createpurereaction">
          <_components.a className="header-anchor" href="#createpurereaction">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createPureReaction"
            data-code-package-name="memo"
          >
            {"createPureReaction"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Solid's "}
          <_components.a href="#https://www.solidjs.com/docs/latest/api#createreaction">
            <_components.code>{"createReaction"}</_components.code>
          </_components.a>
          {" that is based on pure computation "}
          <_components.em>{"(runs before render, and is non-batching)"}</_components.em>
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-7">
          <_components.a className="header-anchor" href="#how-to-use-it-7">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "It's usage exactly matches the original. The only difference is in when the callback is being executed, the normal createReaction runs it after render, similar to how effects work, while the createPureReaction is more like createComputed."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createPureReaction } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/memo"'}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, setCount] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" track = "}
            <_components.span className="hljs-title function_">
              {"createPureReaction"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {...});\n"}
            <_components.span className="hljs-title function_">{"track"}</_components.span>
            {"(count);\n"}
            <_components.span className="hljs-title function_">{"setCount"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">{"// triggers callback"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">
              {"// sources need to be re-tracked every time"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setCount"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {"// doesn't trigger callback"}
            </_components.span>
            {"\n"}
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
              {"createPureReaction"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"onInvalidate: Fn, options?: EffectOptions"}
            </_components.span>
            {"): "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"tracking: Fn"}</_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="creatememocache">
          <_components.a className="header-anchor" href="#creatememocache">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createMemoCache"
            data-code-package-name="memo"
          >
            {"createMemoCache"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Custom, lazily-evaluated, cached memo. The caching is based on a "}
          <_components.code>{"key"}</_components.code>
          {
            ", it has to be declared up-front as a reactive source, or passed to the signal access function."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-8">
          <_components.a className="header-anchor" href="#how-to-use-it-8">
            {"#"}
          </_components.a>
          {"how to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>{"It takes params:"}</_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"key"}</_components.code>
            {
              " a reactive source, that will serve as cache key (later value access for the same key will be taken from cache instead of recalculated)"
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"calc"}</_components.code>
            {" calculation function returning value to cache. the function is "}
            <_components.strong>{"tracking"}</_components.strong>
            {" - will recalculate when the accessed signals change."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"options"}</_components.code>
            {" set maximum "}
            <_components.strong>{"size"}</_components.strong>
            {" of the cache, or memo options."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.p>{"Returns a signal access function."}</_components.p>
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
            {" { createMemoCache } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/memo"'}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="setting-the-key-up-front-as-a-reactive-source">
          <_components.a
            className="header-anchor"
            href="#setting-the-key-up-front-as-a-reactive-source"
          >
            {"#"}
          </_components.a>
          {"Setting the key up-front as a reactive source"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, setCount] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" double = "}
            <_components.span className="hljs-title function_">
              {"createMemoCache"}
            </_components.span>
            {"(count, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"n"}</_components.span>
              {" =>"}
            </_components.span>
            {" n * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\n"}
            <_components.span className="hljs-comment">{"// access value:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"double"}</_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="provide-the-key-by-passing-it-to-the-access-function">
          <_components.a
            className="header-anchor"
            href="#provide-the-key-by-passing-it-to-the-access-function"
          >
            {"#"}
          </_components.a>
          {"Provide the key by passing it to the access function"}
        </_components.h4>
        {"\n"}
        <_components.p>{"let's accessing different keys in different places"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, setCount] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" double = "}
            <_components.span className="hljs-title function_">
              {"createMemoCache"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"n: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>
            {" n * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\n"}
            <_components.span className="hljs-comment">
              {"// access value with key:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"double"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"());\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="calculation-function-is-reactive">
          <_components.a className="header-anchor" href="#calculation-function-is-reactive">
            {"#"}
          </_components.a>
          {"Calculation function is reactive"}
        </_components.h4>
        {"\n"}
        <_components.p>{"will recalculate when the accessed signals change."}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"// changing number creates new entry in cache"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" ["}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {", setNumber] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {");\n"}
            <_components.span className="hljs-comment">
              {"// changing divisor will force cache to be recalculated"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [divisor, setDivisor] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">
              {"// calculation subscribes to divisor signal"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" result = "}
            <_components.span className="hljs-title function_">
              {"createMemoCache"}
            </_components.span>
            {"("}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {", n / "}
            <_components.span className="hljs-title function_">{"divisor"}</_components.span>
            {"());\n"}
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
            <_components.span className="hljs-keyword">{"function"}</_components.span>
            {" createMemoCache<"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {", "}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {">(\n  "}
            <_components.span className="hljs-attr">{"key"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {">,\n  "}
            <_components.span className="hljs-attr">{"calc"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"CacheCalculation"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {", "}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {">,\n  options?: "}
            <_components.span className="hljs-title class_">{"CacheOptions"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {">,\n): "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {">;\n"}
            <_components.span className="hljs-keyword">{"function"}</_components.span>
            {" createMemoCache<"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {", "}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {">(\n  "}
            <_components.span className="hljs-attr">{"calc"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"CacheCalculation"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {", "}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {">,\n  options?: "}
            <_components.span className="hljs-title class_">{"CacheOptions"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {">,\n): "}
            <_components.span className="hljs-title class_">{"CacheKeyAccessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {", "}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {">;\n\n"}
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"CacheCalculation"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {", "}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {"> = "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"key: Key, prev: Value | "}
                <_components.span className="hljs-literal">{"undefined"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"CacheKeyAccessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {", "}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {"> = "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"key: Key"}</_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"CacheOptions"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {"> = "}
            <_components.span className="hljs-title class_">{"MemoOptions"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Value"}</_components.span>
            {"> & { size?: "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {" };\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createreducer">
          <_components.a className="header-anchor" href="#createreducer">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="createReducer" data-code-package-name="memo">
            {"createReducer"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Primitive for updating signal in a predictable way. SolidJS equivalent of React's "}
          <_components.a href="https://reactjs.org/docs/hooks-reference.html#usereducer">
            {"useReducer"}
          </_components.a>
          {"."}
        </_components.p>
        {"\n"}
        <_components.h3 id="when-to-use-it">
          <_components.a className="header-anchor" href="#when-to-use-it">
            {"#"}
          </_components.a>
          {"When to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code data-code-primitive-name="createReducer" data-code-package-name="memo">
            {"createReducer"}
          </_components.code>
          {" is useful for:"}
        </_components.p>
        {"\n"}
        <_components.ol>
          {"\n"}
          <_components.li>
            {"DRY the code of the "}
            <_components.code>{"set"}</_components.code>
            {"s of a signal"}
          </_components.li>
          {"\n"}
          <_components.li>{"Ensure the signal is always in a valid state"}</_components.li>
          {"\n"}
          <_components.li>
            {"Make it easier to understand for what a signal is used"}
          </_components.li>
          {"\n"}
        </_components.ol>
        {"\n"}
        <_components.h3 id="how-to-use-it-9">
          <_components.a className="header-anchor" href="#how-to-use-it-9">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>
            {" createReducer<T, "}
            <_components.span className="hljs-title class_">{"ActionData"}</_components.span>{" "}
            <_components.span className="hljs-keyword">{"extends"}</_components.span>{" "}
            <_components.span className="hljs-built_in">{"any"}</_components.span>
            {"[]>(\n  "}
            <_components.span className="hljs-attr">{"dispatcher"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"state: T, ...args: ActionData"}
              </_components.span>
              {") =>"}
            </_components.span>
            {" T,\n  "}
            <_components.span className="hljs-attr">{"initialValue"}</_components.span>
            {": T,\n  options?: "}
            <_components.span className="hljs-title class_">{"SignalOptions"}</_components.span>
            {"<T>,\n): ["}
            <_components.span className="hljs-attr">{"accessor"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<T>, "}
            <_components.span className="hljs-attr">{"dispatch"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"...args: ActionData"}</_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {"];\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          <_components.code>{"dispatcher"}</_components.code>
          {
            " is the reducer, it's 1st parameter always is the current state of the reducer and it returns the new state of the reducer."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code>{"accessor"}</_components.code>
          {" can be used as you use a normal signal: "}
          <_components.code>{"accessor()"}</_components.code>
          {". It contains the state of the reducer."}
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code>{"dispatch"}</_components.code>
          {" is the action of the reducer, it is a sort of "}
          <_components.code>{"setSignal"}</_components.code>
          {
            " that does NOT receive the new state, but instructions to create it from the current state."
          }
        </_components.p>
        {"\n"}
        <_components.p>{"For example:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createReducer } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/memo"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"Counter"}</_components.span>
            {"("}
            <_components.span className="hljs-params" />
            {") {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, double] = "}
            <_components.span className="hljs-title function_">{"createReducer"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"c"}</_components.span>
              {" =>"}
            </_components.span>
            {" c * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {");\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{double}"}</_components.span>
                {">"}
              </_components.span>
              {"{count()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"The reducer also can receive other arguments:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createReducer } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/memo"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"dispatcher"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params">
              {"c: "}
              <_components.span className="hljs-built_in">{"number"}</_components.span>
              {", "}
              <_components.span className="hljs-keyword">{"type"}</_components.span>
              {": "}
              <_components.span className="hljs-string">{'"double"'}</_components.span>
              {" | "}
              <_components.span className="hljs-string">{'"increment"'}</_components.span>
            </_components.span>
            {") => {\n  "}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" ("}
            <_components.span className="hljs-keyword">{"type"}</_components.span>
            {" == "}
            <_components.span className="hljs-string">{'"double"'}</_components.span>
            {") {\n    "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" c * "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {";\n  } "}
            <_components.span className="hljs-keyword">{"else"}</_components.span>
            {" {\n    "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" c + "}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {";\n  }\n};\n\n"}
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"Counter"}</_components.span>
            {"("}
            <_components.span className="hljs-params" />
            {") {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, handleClick] = "}
            <_components.span className="hljs-title function_">{"createReducer"}</_components.span>
            {"(dispatcher, "}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {");\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n    "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"span"}</_components.span>
                {">"}
              </_components.span>
              {"{count()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"span"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {' handleClick("double")}>Double'}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {' handleClick("increment")}>Increment'}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n  );\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"React allows a 3rd argument:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"fib"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params">
              {"n: "}
              <_components.span className="hljs-built_in">{"number"}</_components.span>
            </_components.span>
            {") => (n < "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {" ? n : "}
            <_components.span className="hljs-title function_">{"fib"}</_components.span>
            {"(n - "}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {") + "}
            <_components.span className="hljs-title function_">{"fib"}</_components.span>
            {"(n - "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {"));\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"nextFib"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params">
              {"n: "}
              <_components.span className="hljs-built_in">{"number"}</_components.span>
            </_components.span>
            {") => "}
            <_components.span className="hljs-title class_">{"Math"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"round"}</_components.span>
            {"((n * ("}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {" + "}
            <_components.span className="hljs-title function_">{"sqrt"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"5"}</_components.span>
            {"))) / "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [fibonacci, nextFibonacci] = "}
            <_components.span className="hljs-title function_">{"useReducer"}</_components.span>
            {"(nextFib, "}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {", fib);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"You need to convert that to the following format:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [fibonacci, nextFibonacci] = "}
            <_components.span className="hljs-title function_">{"createReducer"}</_components.span>
            {"(nextFib, "}
            <_components.span className="hljs-title function_">{"fib"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {"));\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="demo-4">
          <_components.a className="header-anchor" href="#demo-4">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-reducer-demo-7nrfs2?file=/index.tsx">
            {"https://codesandbox.io/s/solid-primitives-reducer-demo-7nrfs2?file=/index.tsx"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/memo/CHANGELOG.md">
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
      packageName="@solid-primitives/memo"
      name="memo"
      stage={3}
      packageList={[{ name: "memo", gzipped: "1.39 KB", minified: "3.15 KB" }]}
      primitiveList={[
        { name: "createWritableMemo", gzipped: "304 B", minified: "479 B" },
        { name: "createLazyMemo", gzipped: "435 B", minified: "738 B" },
        { name: "createAsyncMemo", gzipped: "309 B", minified: "465 B" },
        { name: "createDebouncedMemo", gzipped: "450 B", minified: "954 B" },
        { name: "createDebouncedMemoOn", gzipped: "477 B", minified: "1.01 KB" },
        { name: "createThrottledMemo", gzipped: "599 B", minified: "1.26 KB" },
        { name: "createPureReaction", gzipped: "295 B", minified: "454 B" },
        { name: "createMemoCache", gzipped: "575 B", minified: "1.06 KB" },
        { name: "createReducer", gzipped: "192 B", minified: "278 B" },
        { name: "createLatest", gzipped: "213 B", minified: "310 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
