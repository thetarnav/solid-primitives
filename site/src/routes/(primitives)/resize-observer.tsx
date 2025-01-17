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
      h2: "h2",
      h3: "h3",
      pre: "pre",
      span: "span",
      h4: "h4",
      strong: "strong",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"Reactive primitives for observing resizing of HTML elements."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#makeResizeObserver">
              <_components.code>{"makeResizeObserver"}</_components.code>
            </_components.a>
            {" — Instantiate a new ResizeObserver that automatically get's disposed on cleanup."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createResizeObserver">
              <_components.code
                data-code-primitive-name="createResizeObserver"
                data-code-package-name="resize-observer"
              >
                {"createResizeObserver"}
              </_components.code>
            </_components.a>
            {
              " — Create resize observer instance, listening for changes to size of reactive element targets array."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createWindowSize">
              <_components.code
                data-code-primitive-name="createWindowSize"
                data-code-package-name="resize-observer"
              >
                {"createWindowSize"}
              </_components.code>
            </_components.a>
            {
              " — Creates a reactive store-like object of current width and height dimensions of the browser window."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createElementSize">
              <_components.code
                data-code-primitive-name="createElementSize"
                data-code-package-name="resize-observer"
              >
                {"createElementSize"}
              </_components.code>
            </_components.a>
            {
              " — Creates a reactive store-like object of current width and height dimensions of html element."
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
      <CopyPackages packageName="@solid-primitives/resize-observer" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="makeresizeobserver">
          <_components.a className="header-anchor" href="#makeresizeobserver">
            {"#"}
          </_components.a>
          <_components.code>{"makeResizeObserver"}</_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Instantiate a new ResizeObserver that automatically get's disposed on cleanup."}
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
          <_components.code>{"makeResizeObserver"}</_components.code>
          {" returns "}
          <_components.code>{"observe"}</_components.code>
          {" and "}
          <_components.code>{"unobserve"}</_components.code>
          {" functions for managing targets."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { makeResizeObserver } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/resize-observer"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { observe, unobserve } = "}
            <_components.span className="hljs-title function_">
              {"makeResizeObserver"}
            </_components.span>
            {"(handleObserverCallback, { "}
            <_components.span className="hljs-attr">{"box"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"content-box"'}</_components.span>
            {" });\n"}
            <_components.span className="hljs-title function_">{"observe"}</_components.span>
            {"("}
            <_components.span className="hljs-variable language_">{"document"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"body"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"observe"}</_components.span>
            {"(ref);\n\n"}
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"handleObserverCallback"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"entries: ResizeObserverEntry[]"}
            </_components.span>
            {") {\n  "}
            <_components.span className="hljs-keyword">{"for"}</_components.span>
            {" ("}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" entry "}
            <_components.span className="hljs-keyword">{"of"}</_components.span>
            {" entries) {\n    "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(entry."}
            <_components.span className="hljs-property">{"contentRect"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"width"}</_components.span>
            {");\n  }\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="disposing">
          <_components.a className="header-anchor" href="#disposing">
            {"#"}
          </_components.a>
          {"Disposing"}
        </_components.h4>
        {"\n"}
        <_components.p>
          <_components.code>{"makeResizeObserver"}</_components.code>
          {" will dispose itself with it's parent reactive owner."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"To dispose early, wrap the primitive with a "}
          <_components.a href="https://www.solidjs.com/docs/latest/api#createroot">
            <_components.code>{"createRoot"}</_components.code>
          </_components.a>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { dispose } = "}
            <_components.span className="hljs-title function_">{"createRoot"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"dispose"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { observe, unobserve } = "}
            <_components.span className="hljs-title function_">
              {"makeResizeObserver"}
            </_components.span>
            {"(handleObserverCallback);\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" { dispose, observe, unobserve };\n});\n"}
            <_components.span className="hljs-comment">{"// dispose early"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"dispose"}</_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createresizeobserver">
          <_components.a className="header-anchor" href="#createresizeobserver">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createResizeObserver"
            data-code-package-name="resize-observer"
          >
            {"createResizeObserver"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Create resize observer instance, listening for changes to size of reactive element targets array."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"Disposes automatically itself with it's parent reactive owner."}
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
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createResizeObserver } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/resize-observer"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"let"}</_components.span>
            {" ref!: "}
            <_components.span className="hljs-title class_">{"HTMLDivElement"}</_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">
              {"// can in onMount if the target variable isn't yet populated"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"onMount"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-title function_">
              {"createResizeObserver"}
            </_components.span>
            {"(ref, "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"{ width, height }, el"}</_components.span>
              {") =>"}
            </_components.span>
            {" {\n    "}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" (el === ref) "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(width, height);\n  });\n});\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{ref}"}</_components.span>
                {" />"}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="reactive-targets">
          <_components.a className="header-anchor" href="#reactive-targets">
            {"#"}
          </_components.a>
          {"Reactive targets"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"The "}
          <_components.code>{"targets"}</_components.code>
          {" argument can be a reactive signal or top-level store array."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [targets, setTargets] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"(["}
            <_components.span className="hljs-variable language_">{"document"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"body"}</_components.span>
            {"]);\n"}
            <_components.span className="hljs-title function_">
              {"createResizeObserver"}
            </_components.span>
            {"(targets, "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"{ width, height }, el"}</_components.span>
              {") =>"}
            </_components.span>
            {" {});\n"}
            <_components.span className="hljs-comment">
              {"// updating the signal will unobserve removed elements and observe added ones"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setTargets"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"p"}</_components.span>
              {" =>"}
            </_components.span>
            {" [...p, element]);\n\n"}
            <_components.span className="hljs-comment">
              {"// createResizeObserver supports top-lever store arrays too"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [targets, setTargets] = "}
            <_components.span className="hljs-title function_">{"createStore"}</_components.span>
            {"(["}
            <_components.span className="hljs-variable language_">{"document"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"body"}</_components.span>
            {"]);\n"}
            <_components.span className="hljs-title function_">
              {"createResizeObserver"}
            </_components.span>
            {"(targets, "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"{ width, height }, el"}</_components.span>
              {") =>"}
            </_components.span>
            {" {});\n"}
            <_components.span className="hljs-title function_">{"setTargets"}</_components.span>
            {"(targets."}
            <_components.span className="hljs-property">{"length"}</_components.span>
            {", element);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createwindowsize">
          <_components.a className="header-anchor" href="#createwindowsize">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createWindowSize"
            data-code-package-name="resize-observer"
          >
            {"createWindowSize"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Creates a reactive store-like object of current width and height dimensions of the browser window."
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
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createWindowSize } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/resize-observer"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" size = "}
            <_components.span className="hljs-title function_">
              {"createWindowSize"}
            </_components.span>
            {"();\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  size."}
            <_components.span className="hljs-property">{"width"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n  size."}
            <_components.span className="hljs-property">{"height"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="usewindowsize">
          <_components.a className="header-anchor" href="#usewindowsize">
            {"#"}
          </_components.a>
          <_components.code>{"useWindowSize"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code>{"useWindowSize"}</_components.code>
          {" is a "}
          <_components.a href="https://github.com/solidjs-community/solid-primitives/tree/main/packages/rootless#createSharedRoot">
            {"shared root"}
          </_components.a>
          {" primitive. It is providing the same reactive object as "}
          <_components.code
            data-code-primitive-name="createWindowSize"
            data-code-package-name="resize-observer"
          >
            {"createWindowSize"}
          </_components.code>
          {
            ", but the object instance, signals and event-listeners are shared between dependents, making it more optimized to use in multiple places at once."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { useWindowSize } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/resize-observer"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" size = "}
            <_components.span className="hljs-title function_">{"useWindowSize"}</_components.span>
            {"();\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  size."}
            <_components.span className="hljs-property">{"width"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n  size."}
            <_components.span className="hljs-property">{"height"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="media-queries">
          <_components.a className="header-anchor" href="#media-queries">
            {"#"}
          </_components.a>
          {"Media Queries"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.strong>
            {"The "}
            <_components.code
              data-code-primitive-name="createWindowSize"
              data-code-package-name="resize-observer"
            >
              {"createWindowSize"}
            </_components.code>
            {" isn't meant to be used for creating media queries."}
          </_components.strong>
        </_components.p>
        {"\n"}
        <_components.p>
          {"If you want a reactive interface for media-queries, please checkout "}
          <_components.a href="https://github.com/solidjs-community/solid-primitives/tree/main/packages/media#readme">
            {"the media package"}
          </_components.a>
          {"."}
        </_components.p>
        {"\n"}
        <_components.h2 id="createelementsize">
          <_components.a className="header-anchor" href="#createelementsize">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createElementSize"
            data-code-package-name="resize-observer"
          >
            {"createElementSize"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Creates a reactive store-like object of current width and height dimensions of html element."
          }
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
          <_components.code
            data-code-primitive-name="createElementSize"
            data-code-package-name="resize-observer"
          >
            {"createElementSize"}
          </_components.code>
          {
            " needs to be provided a target. It can be an HTML element, or a reactive signal returning one. Target also takes falsy values to disable tracking."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createElementSize } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/resize-observer"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" size = "}
            <_components.span className="hljs-title function_">
              {"createElementSize"}
            </_components.span>
            {"("}
            <_components.span className="hljs-variable language_">{"document"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"body"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  size."}
            <_components.span className="hljs-property">{"width"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n  size."}
            <_components.span className="hljs-property">{"height"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n});\n\n"}
            <_components.span className="hljs-comment">{"// reactive target"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [target, setTarget] = createSignal<"}
            <_components.span className="hljs-title class_">{"HTMLElement"}</_components.span>
            {">();\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" size = "}
            <_components.span className="hljs-title function_">
              {"createElementSize"}
            </_components.span>
            {"(target);\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  size."}
            <_components.span className="hljs-property">{"width"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// => number | null"}</_components.span>
            {"\n  size."}
            <_components.span className="hljs-property">{"height"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// => number | null"}</_components.span>
            {"\n});\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{setTarget}"}</_components.span>
                {" />"}
              </_components.span>
            </_components.span>
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/resize-observer/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-resize-observer-yg41gd?file=/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/resize-observer/CHANGELOG.md">
            {"CHANGELOG.md"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="contributors">
          <_components.a className="header-anchor" href="#contributors">
            {"#"}
          </_components.a>
          {"Contributors"}
        </_components.h2>
        {"\n"}
        <_components.p>{"Thanks to Moshe Udimar for this contribution!"}</_components.p>
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
      packageName="@solid-primitives/resize-observer"
      name="resize-observer"
      stage={3}
      packageList={[{ name: "resize-observer", gzipped: "1.33 KB", minified: "2.96 KB" }]}
      primitiveList={[
        { name: "createWindowSize", gzipped: "664 B", minified: "1.29 KB" },
        { name: "createElementSize", gzipped: "1.04 KB", minified: "2.18 KB" },
        { name: "createResizeObserver", gzipped: "653 B", minified: "1.23 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
