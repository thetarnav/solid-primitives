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
      h5: "h5",
      a: "a",
      ul: "ul",
      li: "li",
      code: "code",
      h2: "h2",
      h6: "h6",
      p: "p",
      pre: "pre",
      span: "span",
      h4: "h4",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.h5 id="non-reactive-primitives">
          <_components.a className="header-anchor" href="#non-reactive-primitives">
            {"#"}
          </_components.a>
          {"Non-reactive primitives:"}
        </_components.h5>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#makeActiveElementListener">
              <_components.code>{"makeActiveElementListener"}</_components.code>
            </_components.a>
            {" - Listen for changes to the "}
            <_components.code>{"document.activeElement"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#makeFocusListener">
              <_components.code>{"makeFocusListener"}</_components.code>
            </_components.a>
            {' - Attaches "blur" and "focus" event listeners to the element.'}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h5 id="reactive-primitives">
          <_components.a className="header-anchor" href="#reactive-primitives">
            {"#"}
          </_components.a>
          {"Reactive primitives:"}
        </_components.h5>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createActiveElement">
              <_components.code
                data-code-primitive-name="createActiveElement"
                data-code-package-name="active-element"
              >
                {"createActiveElement"}
              </_components.code>
            </_components.a>
            {" - Provides reactive signal of "}
            <_components.code>{"document.activeElement"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createFocusSignal">
              <_components.code
                data-code-primitive-name="createFocusSignal"
                data-code-package-name="active-element"
              >
                {"createFocusSignal"}
              </_components.code>
            </_components.a>
            {" - Provides a signal representing element's focus state."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h5 id="directives">
          <_components.a className="header-anchor" href="#directives">
            {"#"}
          </_components.a>
          {"Directives:"}
        </_components.h5>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#focus">
              <_components.code>{"focus"}</_components.code>
            </_components.a>
            {" - A directive that notifies you when the element becomes active or inactive."}
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
      <CopyPackages packageName="@solid-primitives/active-element" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="makeactiveelementlistener">
          <_components.a className="header-anchor" href="#makeactiveelementlistener">
            {"#"}
          </_components.a>
          <_components.code>{"makeActiveElementListener"}</_components.code>
        </_components.h2>
        {"\n"}
        <_components.h6 id="added-id-200">
          <_components.a className="header-anchor" href="#added-id-200">
            {"#"}
          </_components.a>
          {"Added id "}
          <_components.code>{"@2.0.0"}</_components.code>
        </_components.h6>
        {"\n"}
        <_components.p>
          {"Attaches event listeners to window, listening for the changes of the "}
          <_components.code>{"document.activeElement"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { makeActiveElementListener } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/active-element"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [activeElement, setActiveElement] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" clear = "}
            <_components.span className="hljs-title function_">
              {"makeActiveElementListener"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"el"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"setActiveElement"}
            </_components.span>
            {"(el));\n\n"}
            <_components.span className="hljs-comment">
              {"// remove listeners (happens also on cleanup)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"clear"}</_components.span>
            {"();\n"}
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
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"makeActiveElementListener"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"callback: (element: Element | "}
              <_components.span className="hljs-literal">{"null"}</_components.span>
              {") => "}
              <_components.span className="hljs-built_in">{"void"}</_components.span>
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="makefocuslistener">
          <_components.a className="header-anchor" href="#makefocuslistener">
            {"#"}
          </_components.a>
          <_components.code>{"makeFocusListener"}</_components.code>
        </_components.h2>
        {"\n"}
        <_components.h6 id="added-id-200-1">
          <_components.a className="header-anchor" href="#added-id-200-1">
            {"#"}
          </_components.a>
          {"Added id "}
          <_components.code>{"@2.0.0"}</_components.code>
        </_components.h6>
        {"\n"}
        <_components.p>
          {'Attaches "blur" and "focus" event listeners to the element.'}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { makeFocusListener } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/active-element"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [isFocused, setIsFocused] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" clear = "}
            <_components.span className="hljs-title function_">
              {"makeFocusListener"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"focused"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"setIsFocused"}</_components.span>
            {"(focused));\n\n"}
            <_components.span className="hljs-comment">
              {"// remove listeners (happens also on cleanup)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"clear"}</_components.span>
            {"();\n"}
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
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"makeFocusListener"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"\n  target: Element,\n  callback: (isActive: "}
              <_components.span className="hljs-built_in">{"boolean"}</_components.span>
              {") => "}
              <_components.span className="hljs-built_in">{"void"}</_components.span>
              {",\n  useCapture?: "}
              <_components.span className="hljs-built_in">{"boolean"}</_components.span>
              {",\n"}
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createactiveelement">
          <_components.a className="header-anchor" href="#createactiveelement">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createActiveElement"
            data-code-package-name="active-element"
          >
            {"createActiveElement"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Provides reactive signal of "}
          <_components.code>{"document.activeElement"}</_components.code>
          {". Check which element is currently focused."}
        </_components.p>
        {"\n"}
        <_components.h4 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createActiveElement } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/active-element"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" activeEl = "}
            <_components.span className="hljs-title function_">
              {"createActiveElement"}
            </_components.span>
            {"();\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"activeEl"}</_components.span>
            {"()); "}
            <_components.span className="hljs-comment">{"// T: Element | null"}</_components.span>
            {"\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="definition-2">
          <_components.a className="header-anchor" href="#definition-2">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createActiveElement"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params" />
            {"): "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Element"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {">;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createfocussignal">
          <_components.a className="header-anchor" href="#createfocussignal">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createFocusSignal"
            data-code-package-name="active-element"
          >
            {"createFocusSignal"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>{"Provides a signal representing element's focus state."}</_components.p>
        {"\n"}
        <_components.h4 id="how-to-use-it-1">
          <_components.a className="header-anchor" href="#how-to-use-it-1">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createFocusSignal } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/active-element"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" isFocused = "}
            <_components.span className="hljs-title function_">
              {"createFocusSignal"}
            </_components.span>
            {"(el);\n"}
            <_components.span className="hljs-title function_">{"isFocused"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: boolean"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">
              {"// you can also use signals for ref"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [ref, setRef] = createSignal<"}
            <_components.span className="hljs-title class_">{"Element"}</_components.span>
            {">(el);\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" isFocused = "}
            <_components.span className="hljs-title function_">
              {"createFocusSignal"}
            </_components.span>
            {"(ref);\n"}
            <_components.span className="hljs-comment">
              {"// this way if the element changes,"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {'// the "isFocused" will start checking the new element'}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">
              {"// is targeting a ref from jsx, pass it as a function"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// or wrap primitive in onMount, so that it is accessed once mounted"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"let"}</_components.span>
            {" ref;\n"}
            <_components.span className="hljs-title function_">
              {"createFocusSignal"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" ref);\n"}
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
        <_components.h4 id="definition-3">
          <_components.a className="header-anchor" href="#definition-3">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createFocusSignal"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"target: MaybeAccessor<Element>"}
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {">;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="focus">
          <_components.a className="header-anchor" href="#focus">
            {"#"}
          </_components.a>
          <_components.code>{"focus"}</_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"A directive that notifies you when the element becomes active or inactive."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [active, setActive] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {")\n<input "}
            <_components.span className="hljs-attr">{"use"}</_components.span>
            {":focus={setActive} />\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="definition-4">
          <_components.a className="header-anchor" href="#definition-4">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-title class_">{"Directive"}</_components.span>
            {"<"}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"isActive: "}
                <_components.span className="hljs-built_in">{"boolean"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/active-element/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-active-element-q4kul?file=/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/active-element/CHANGELOG.md">
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
      packageName="@solid-primitives/active-element"
      name="active-element"
      stage={3}
      packageList={[{ name: "active-element", gzipped: "661 B", minified: "1.49 KB" }]}
      primitiveList={[
        { name: "createFocusSignal", gzipped: "479 B", minified: "875 B" },
        { name: "createActiveElement", gzipped: "429 B", minified: "820 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
