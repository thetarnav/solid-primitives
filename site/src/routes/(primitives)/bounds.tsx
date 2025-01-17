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
      pre: "pre",
      span: "span",
      h3: "h3",
      em: "em",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"Primitives for tracking HTML element size and position on screen as it changes."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createElementBounds">
              <_components.code
                data-code-primitive-name="createElementBounds"
                data-code-package-name="bounds"
              >
                {"createElementBounds"}
              </_components.code>
            </_components.a>
            {
              " - Creates a reactive store-like object of current element bounds — position on the screen, and size dimensions."
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
      <CopyPackages packageName="@solid-primitives/bounds" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createelementbounds">
          <_components.a className="header-anchor" href="#createelementbounds">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createElementBounds"
            data-code-package-name="bounds"
          >
            {"createElementBounds"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Creates a reactive store-like object of current element bounds — position on the screen, and size dimensions. Bounds will be automatically updated on scroll, resize events and updates to the DOM."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createElementBounds } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/bounds"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" target = "}
            <_components.span className="hljs-variable language_">{"document"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"querySelector"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"#my_elem"'}</_components.span>
            {")!;\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" bounds = "}
            <_components.span className="hljs-title function_">
              {"createElementBounds"}
            </_components.span>
            {"(target);\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(\n    bounds."}
            <_components.span className="hljs-property">{"width"}</_components.span>
            {", "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n    bounds."}
            <_components.span className="hljs-property">{"height"}</_components.span>
            {", "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n    bounds."}
            <_components.span className="hljs-property">{"top"}</_components.span>
            {", "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n    bounds."}
            <_components.span className="hljs-property">{"left"}</_components.span>
            {", "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n    bounds."}
            <_components.span className="hljs-property">{"right"}</_components.span>
            {", "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n    bounds."}
            <_components.span className="hljs-property">{"bottom"}</_components.span>
            {", "}
            <_components.span className="hljs-comment">{"// => number"}</_components.span>
            {"\n  );\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="reactive-target">
          <_components.a className="header-anchor" href="#reactive-target">
            {"#"}
          </_components.a>
          {"Reactive target"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"The element target can be a reactive signal. Set to falsy value to disable tracking."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [target, setTarget] = createSignal<"}
            <_components.span className="hljs-title class_">{"HTMLElement"}</_components.span>
            {">();\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" bounds = "}
            <_components.span className="hljs-title function_">
              {"createElementBounds"}
            </_components.span>
            {"(target);\n\n"}
            <_components.span className="hljs-comment">
              {"// if target is undefined, scroll values will be null"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  bounds."}
            <_components.span className="hljs-property">{"width"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// => number | null"}</_components.span>
            {"\n  bounds."}
            <_components.span className="hljs-property">{"height"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// => number | null"}</_components.span>
            {"\n});\n\n"}
            <_components.span className="hljs-comment">
              {"// bounds object will always be in sync with current target"}
            </_components.span>
            {"\n"}
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
        <_components.h3 id="disabling-types-of-tracking">
          <_components.a className="header-anchor" href="#disabling-types-of-tracking">
            {"#"}
          </_components.a>
          {"Disabling types of tracking"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"These types of tracking are available: "}
          <_components.em>{"(all are enabled by default)"}</_components.em>
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"trackScroll"}</_components.code>
            {" — listen to window scroll events"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"trackMutation"}</_components.code>
            {" — listen to changes to the dom structure/styles"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"trackResize"}</_components.code>
            {" — listen to element's resize events"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"// won't track mutations nor scroll events"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" bounds = "}
            <_components.span className="hljs-title function_">
              {"createElementBounds"}
            </_components.span>
            {"(target, {\n  "}
            <_components.span className="hljs-attr">{"trackScroll"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"trackMutation"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {",\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="throttling-updates">
          <_components.a className="header-anchor" href="#throttling-updates">
            {"#"}
          </_components.a>
          {"Throttling updates"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Options "}
          <_components.a href="#disabling-types-of-tracking">{"above"}</_components.a>
          {" allow passing a guarding function for controlling frequency of updates."}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "The scroll event/mutations/resizing can be triggered dozens of times per second, causing calculating bounds and updating the store every time. Hence it is a good idea to "
          }
          <_components.a href="https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#readme">
            {"throttle/debounce"}
          </_components.a>
          {" updates."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { "}
            <_components.span className="hljs-title class_">{"UpdateGuard"}</_components.span>
            {", createElementBounds } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/bounds"'}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { throttle } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/scheduled"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"throttleUpdate"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"UpdateGuard"}</_components.span>
            {" = "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"fn"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"throttle"}</_components.span>
            {"(fn, "}
            <_components.span className="hljs-number">{"500"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" bounds = "}
            <_components.span className="hljs-title function_">
              {"createElementBounds"}
            </_components.span>
            {"(target, {\n  "}
            <_components.span className="hljs-attr">{"trackMutation"}</_components.span>
            {": throttleUpdate,\n  "}
            <_components.span className="hljs-attr">{"trackScroll"}</_components.span>
            {": throttleUpdate,\n});\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/bounds/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-bounds-64rls0?file=/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/bounds/CHANGELOG.md">
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
      packageName="@solid-primitives/bounds"
      name="bounds"
      stage={1}
      packageList={[{ name: "bounds", gzipped: "1.43 KB", minified: "3.05 KB" }]}
      primitiveList={[{ name: "createElementBounds", gzipped: "1.42 KB", minified: "3.03 KB" }]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
