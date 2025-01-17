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
      em: "em",
      h3: "h3",
      pre: "pre",
      span: "span",
      h4: "h4",
      strong: "strong",
      h5: "h5",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>{"Library of primitives focused around component props."}</_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#combineProps">
              <_components.code
                data-code-primitive-name="combineProps"
                data-code-package-name="props"
              >
                {"combineProps"}
              </_components.code>
            </_components.a>
            {
              " - Reactively merges multiple props objects together while smartly combining some of Solid's JSX/DOM attributes."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#filterProps">
              <_components.code
                data-code-primitive-name="filterProps"
                data-code-package-name="props"
              >
                {"filterProps"}
              </_components.code>
            </_components.a>
            {" - Create a new props object with only the property names that match the predicate."}
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
      <CopyPackages packageName="@solid-primitives/props" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="combineprops">
          <_components.a className="header-anchor" href="#combineprops">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="combineProps" data-code-package-name="props">
            {"combineProps"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "A helper that reactively merges multiple props objects together while smartly combining some of Solid's JSX/HTML attributes."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"Event handlers "}
          <_components.em>{"(onClick, onclick, onMouseMove, onSomething)"}</_components.em>
          {", and refs "}
          <_components.em>{"(props.ref)"}</_components.em>
          {" are chained."}
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code>{"class"}</_components.code>
          {", "}
          <_components.code>{"className"}</_components.code>
          {", "}
          <_components.code>{"classList"}</_components.code>
          {" and "}
          <_components.code>{"style"}</_components.code>
          {" are combined."}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "For all other props, the last prop object overrides all previous ones. Similarly to Solid's "
          }
          <_components.a href="https://www.solidjs.com/docs/latest/api#mergeprops">
            {"mergeProps"}
          </_components.a>
          {"."}
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
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { combineProps } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/props"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"MyButton"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Component"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"ButtonProps"}</_components.span>
            {"> = "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"props"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-comment">
              {"// primitives of a lot of headless ui libraries will provide props to spread"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { buttonProps } = "}
            <_components.span className="hljs-title function_">{"createButton"}</_components.span>
            {"();\n  "}
            <_components.span className="hljs-comment">
              {"// they can be combined with user's props easily"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" combined = "}
            <_components.span className="hljs-title function_">{"combineProps"}</_components.span>
            {"(props, buttonProps);\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {" {"}
                <_components.span className="hljs-attr">{"...combined"}</_components.span>
                {"} />"}
              </_components.span>
            </_components.span>
            {";\n};\n\n"}
            <_components.span className="hljs-comment">
              {"// component consumer can provide button props"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// they will be combined with those provided by createButton() primitive"}
            </_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"MyButton"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"style"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{{"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"margin:"}</_components.span>
                {' "'}
                <_components.span className="hljs-attr">{"24px"}</_components.span>
                {'" }} />'}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="chaining-of-event-listeners">
          <_components.a className="header-anchor" href="#chaining-of-event-listeners">
            {"#"}
          </_components.a>
          {"Chaining of event listeners"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"Every "}
          <_components.a href="https://www.solidjs.com/docs/latest/api#on___">
            {"function/tuple"}
          </_components.a>
          {" property with "}
          <_components.code>{"on___"}</_components.code>
          {
            " name get's chained. That could potentially include properties that are not actually event-listeners – such as "
          }
          <_components.code>{"only"}</_components.code>
          {" or "}
          <_components.code>{"once"}</_components.code>
          {". Hence you should remove them from the props (with "}
          <_components.a href="https://www.solidjs.com/docs/latest/api#splitprops">
            {"splitProps"}
          </_components.a>
          {")."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"Chained functions will always return "}
          <_components.code>{"void"}</_components.code>
          {
            ". If you want to get the returned value from a callback, you have to split those props and handle them yourself."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.strong>{"Warning:"}</_components.strong>
          {
            " The types for event-listeners often won't correctly represent the values. Chaining is meant only for DOM Events spreading to an element."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" combined = "}
            <_components.span className="hljs-title function_">{"combineProps"}</_components.span>
            {"(\n  {\n    "}
            <_components.span className="hljs-attr">{"onClick"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {},\n    "}
            <_components.span className="hljs-attr">{"onclick"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {},\n  },\n  {\n    "}
            <_components.span className="hljs-attr">{"onClick"}</_components.span>
            {": ["}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"n, e"}</_components.span>
              {") =>"}
            </_components.span>
            {" {}, "}
            <_components.span className="hljs-number">{"123"}</_components.span>
            {"],\n  },\n);\n"}
            <_components.span className="hljs-comment">
              {"// combined.onClick() will call all 3 of the functions above"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "The default order of execution is left-to-right. If you want to change it, you can use an options object as the last argument: ("
          }
          <_components.code>{"reverseEventHandlers: true"}</_components.code>
          {")"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" combined = "}
            <_components.span className="hljs-title function_">{"combineProps"}</_components.span>
            {"(\n  "}
            <_components.span className="hljs-comment">
              {"// props need to be passed in an array"}
            </_components.span>
            {"\n  [{ "}
            <_components.span className="hljs-attr">{"onClick"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"parent"'}</_components.span>
            {") }, { "}
            <_components.span className="hljs-attr">{"onClick"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"child"'}</_components.span>
            {") }],\n  {\n    "}
            <_components.span className="hljs-attr">{"reverseEventHandlers"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {",\n  },\n);\ncombined."}
            <_components.span className="hljs-title function_">{"onClick"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{'// "child" "parent"'}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h5 id="for-better-reference-of-how-exactly-combineprops-works-see-the-tests">
          <_components.a
            className="header-anchor"
            href="#for-better-reference-of-how-exactly-combineprops-works-see-the-tests"
          >
            {"#"}
          </_components.a>
          {"For better reference of how exactly "}
          <_components.code data-code-primitive-name="combineProps" data-code-package-name="props">
            {"combineProps"}
          </_components.code>
          {" works, see the "}
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/props/test/combineProps.test.ts">
            {"TESTS"}
          </_components.a>
        </_components.h5>
        {"\n"}
        <_components.h3 id="additional-helpers">
          <_components.a className="header-anchor" href="#additional-helpers">
            {"#"}
          </_components.a>
          {"Additional helpers"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"A couple of lower-lever helpers that power "}
          <_components.code data-code-primitive-name="combineProps" data-code-package-name="props">
            {"combineProps"}
          </_components.code>
          {":"}
        </_components.p>
        {"\n"}
        <_components.h4 id="stringstyletoobject">
          <_components.a className="header-anchor" href="#stringstyletoobject">
            {"#"}
          </_components.a>
          <_components.code>{"stringStyleToObject"}</_components.code>
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" styles = "}
            <_components.span className="hljs-title function_">
              {"stringStyleToObject"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">
              {'"margin: 24px; border: 1px solid #121212"'}
            </_components.span>
            {");\nstyles; "}
            <_components.span className="hljs-comment">
              {'// { margin: "24px", border: "1px solid #121212" }'}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="combinestyle">
          <_components.a className="header-anchor" href="#combinestyle">
            {"#"}
          </_components.a>
          <_components.code>{"combineStyle"}</_components.code>
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" styles = "}
            <_components.span className="hljs-title function_">{"combineStyle"}</_components.span>
            {"("}
            <_components.span className="hljs-string">
              {'"margin: 24px; border: 1px solid #121212"'}
            </_components.span>
            {", {\n  "}
            <_components.span className="hljs-attr">{"margin"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"2rem"'}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"padding"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"16px"'}</_components.span>
            {",\n});\nstyles; "}
            <_components.span className="hljs-comment">
              {'// { margin: "2rem", border: "1px solid #121212", padding: "16px" }'}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"DEMO"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/combineprops-demo-ytw247?file=/index.tsx">
            {"https://codesandbox.io/s/combineprops-demo-ytw247?file=/index.tsx"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="filterprops">
          <_components.a className="header-anchor" href="#filterprops">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="filterProps" data-code-package-name="props">
            {"filterProps"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "A helper that creates a new props object with only the property names that match the predicate."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"An alternative primitive to Solid's "}
          <_components.a href="https://www.solidjs.com/docs/latest/api#splitprops">
            {"splitProps"}
          </_components.a>
          {
            " that will split the props eagerly, without letting you change the omitted keys afterwards."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"The "}
          <_components.code>{"predicate"}</_components.code>
          {" is run for every property read lazily — any signal accessed within the "}
          <_components.code>{"predicate"}</_components.code>
          {" will be tracked, and "}
          <_components.code>{"predicate"}</_components.code>
          {" re-executed if changed."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-1">
          <_components.a className="header-anchor" href="#how-to-use-it-1">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>{"Params:"}</_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"props"}</_components.code>
            {" — The props object to filter."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"predicate"}</_components.code>
            {" — A function that returns "}
            <_components.code>{"true"}</_components.code>
            {" if the property should be included in the filtered object."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.p>
          {"Returns A new props object with only the properties that match the predicate."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { filterProps } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/props"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"MyComponent"}</_components.span>
            {" = props => {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" dataProps = "}
            <_components.span className="hljs-title function_">{"filterProps"}</_components.span>
            {"(props, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"key"}</_components.span>
              {" =>"}
            </_components.span>
            {" key."}
            <_components.span className="hljs-title function_">{"startsWith"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"data-"'}</_components.span>
            {"));\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {" {"}
                <_components.span className="hljs-attr">{"...dataProps"}</_components.span>
                {"} />"}
              </_components.span>
            </_components.span>
            {";\n};\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createpropspredicate">
          <_components.a className="header-anchor" href="#createpropspredicate">
            {"#"}
          </_components.a>
          <_components.code>{"createPropsPredicate"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "Creates a predicate function that can be used to filter props by the prop name dynamically."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"The provided "}
          <_components.code>{"predicate"}</_components.code>
          {
            " function get's wrapped with a cache layer to prevent unnecessary re-evaluation. If one property is requested multiple times, the "
          }
          <_components.code>{"predicate"}</_components.code>
          {" will only be evaluated once."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"The cache is only cleared when the keys of the props object change. "}
          <_components.em>{"(when spreading props from a singal)"}</_components.em>
          {" This also means that any signal accessed within the "}
          <_components.code>{"predicate"}</_components.code>
          {" won't be tracked."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { filterProps, createPropsPredicate } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/props"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"MyComponent"}</_components.span>
            {" = props => {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" predicate = "}
            <_components.span className="hljs-title function_">
              {"createPropsPredicate"}
            </_components.span>
            {"(props, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"key"}</_components.span>
              {" =>"}
            </_components.span>
            {" key."}
            <_components.span className="hljs-title function_">{"startsWith"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"data-"'}</_components.span>
            {"));\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" dataProps = "}
            <_components.span className="hljs-title function_">{"filterProps"}</_components.span>
            {"(props, predicate);\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {" {"}
                <_components.span className="hljs-attr">{"...dataProps"}</_components.span>
                {"} />"}
              </_components.span>
            </_components.span>
            {";\n};\n"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/props/CHANGELOG.md">
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
      packageName="@solid-primitives/props"
      name="props"
      stage={3}
      packageList={[{ name: "props", gzipped: "1.09 KB", minified: "2.4 KB" }]}
      primitiveList={[
        { name: "filterProps", gzipped: "268 B", minified: "502 B" },
        { name: "combineProps", gzipped: "934 B", minified: "1.97 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
