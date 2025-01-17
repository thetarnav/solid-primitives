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
      h2: "h2",
      h3: "h3",
      pre: "pre",
      span: "span",
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
          {
            "A primitive to extend the types of values JSX can return. These JSX-elements are named "
          }
          <_components.code>{"tokens"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createJSXParser">
              <_components.code
                data-code-primitive-name="createJSXParser"
                data-code-package-name="jsx-parser"
              >
                {"createJSXParser"}
              </_components.code>
            </_components.a>
            {
              " — Creates a JSX Parser that can be used to create tokenized components and parse JSX Elements for tokens."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createToken">
              <_components.code
                data-code-primitive-name="createToken"
                data-code-package-name="jsx-parser"
              >
                {"createToken"}
              </_components.code>
            </_components.a>
            {" — Creates a token component associated with the corresponding jsx-parser."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#resolveTokens">
              <_components.code
                data-code-primitive-name="resolveTokens"
                data-code-package-name="jsx-parser"
              >
                {"resolveTokens"}
              </_components.code>
            </_components.a>
            {" — A function similar to Solid's "}
            <_components.code>{"children()"}</_components.code>
            {
              ", but that will only return valid token elements created by the corresponding parser's "
            }
            <_components.code
              data-code-primitive-name="createToken"
              data-code-package-name="jsx-parser"
            >
              {"createToken"}
            </_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#isToken">
              <_components.code
                data-code-primitive-name="isToken"
                data-code-package-name="jsx-parser"
              >
                {"isToken"}
              </_components.code>
            </_components.a>
            {" — A function to validate if an element is a "}
            <_components.code>{"token"}</_components.code>
            {" created by the corresponding parser's "}
            <_components.code
              data-code-primitive-name="createToken"
              data-code-package-name="jsx-parser"
            >
              {"createToken"}
            </_components.code>
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
      <CopyPackages packageName="@solid-primitives/jsx-parser" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createjsxparser">
          <_components.a className="header-anchor" href="#createjsxparser">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createJSXParser"
            data-code-package-name="jsx-parser"
          >
            {"createJSXParser"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Creates a JSX Parser that can be used to create tokenized components and parse JSX Elements for tokens."
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
          <_components.code
            data-code-primitive-name="createJSXParser"
            data-code-package-name="jsx-parser"
          >
            {"createJSXParser"}
          </_components.code>
          {" takes an optional options param with "}
          <_components.code>{"name"}</_components.code>
          {" property to identify the parser during development."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"It also takes as a generic the union of accepted token-types."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createJSXParser } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/jsx-parser"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">
              {"UnionOfAcceptedTokens"}
            </_components.span>
            {" = "}
            <_components.span className="hljs-title class_">{"Token1"}</_components.span>
            {" | "}
            <_components.span className="hljs-title class_">{"Token2"}</_components.span>
            {" | ...\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" parser = createJSXParser<"}
            <_components.span className="hljs-title class_">
              {"UnionOfAcceptedTokens"}
            </_components.span>
            {">("}
            <_components.span className="hljs-string">{"'parser-example'"}</_components.span>
            {");\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createtoken">
          <_components.a className="header-anchor" href="#createtoken">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createToken"
            data-code-package-name="jsx-parser"
          >
            {"createToken"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Creates a token component associated with the corresponding jsx-parser."}
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
            data-code-primitive-name="createToken"
            data-code-package-name="jsx-parser"
          >
            {"createToken"}
          </_components.code>
          {" takes three parameters:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"parser"}</_components.code>
            {" object returned by "}
            <_components.code
              data-code-primitive-name="createJSXParser"
              data-code-package-name="jsx-parser"
            >
              {"createJSXParser"}
            </_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"tokenData"}</_components.code>
            {" function that returns the data of the token "}
            <_components.em>{"(if one isn't passed, props will be used as data)"}</_components.em>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"render"}</_components.code>
            {" function that returns the fallback JSX Element to render "}
            <_components.em>{"(if one isn't passed, nothing will get rendred)"}</_components.em>
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createToken } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/jsx-parser"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"TokenExample"}</_components.span>
            {" = "}
            <_components.span className="hljs-title function_">{"createToken"}</_components.span>
            {"(\n  parser,\n  "}
            <_components.span className="hljs-comment">
              {
                "// function that returns the data of the token - called when the token is resolved by `resolveTokens`"
              }
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"props: { id: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
                {" }"}
              </_components.span>
              {") =>"}
            </_components.span>
            {" {\n    "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" value = "}
            <_components.span className="hljs-title class_">{"Math"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"random"}</_components.span>
            {"();\n    "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" {\n      props,\n      value,\n    };\n  },\n  "}
            <_components.span className="hljs-comment">
              {
                "// function that returns the fallback JSX Element to render - called when the token rendered by Solid"
              }
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"props"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"span"}</_components.span>
                {">"}
              </_components.span>
              {"{props.id}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"span"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {",\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"This token can then be used inside JSX as a component:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"App"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params" />
            {") => {\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"TokenExample"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"id"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"id"'}</_components.span>
                {" />"}
              </_components.span>
            </_components.span>
            {";\n};\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "TokenExample is typed as a JSXElement, this is so TokenExample can be used in JSX without causing type-errors."
          }
        </_components.p>
        {"\n"}
        <_components.h2 id="resolvetokens">
          <_components.a className="header-anchor" href="#resolvetokens">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="resolveTokens"
            data-code-package-name="jsx-parser"
          >
            {"resolveTokens"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"A function similar to Solid's "}
          <_components.a href="https://www.solidjs.com/docs/latest#children">
            <_components.code>{"children()"}</_components.code>
          </_components.a>
          {
            ", but that will only return valid token elements created by the corresponding parser's "
          }
          <_components.code
            data-code-primitive-name="createToken"
            data-code-package-name="jsx-parser"
          >
            {"createToken"}
          </_components.code>
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
          <_components.code
            data-code-primitive-name="createToken"
            data-code-package-name="jsx-parser"
          >
            {"createToken"}
          </_components.code>
          {" takes three parameters:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"parser"}</_components.code>
            {" object returned by "}
            <_components.code
              data-code-primitive-name="createJSXParser"
              data-code-package-name="jsx-parser"
            >
              {"createJSXParser"}
            </_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"fn"}</_components.code>
            {" accessor that returns a JSX Element"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"render"}</_components.code>
            {" function that returns the fallback JSX Element to render"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="resolveTokens"
            data-code-package-name="jsx-parser"
          >
            {"resolveTokens"}
          </_components.code>
          {" will return accessor of tokens associated with the corresponding jsx-parser"}
        </_components.p>
        {"\n"}
        <_components.p>
          {"Token data is available on the "}
          <_components.code>{"data"}</_components.code>
          {" property of the token."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { resolveTokens } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/jsx-parser"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" tokens = "}
            <_components.span className="hljs-title function_">{"resolveTokens"}</_components.span>
            {"(parser, "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" props."}
            <_components.span className="hljs-property">{"children"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-title function_">{"tokens"}</_components.span>
            {"()."}
            <_components.span className="hljs-title function_">{"forEach"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"token"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n    "}
            <_components.span className="hljs-comment">
              {"// token is a function that returns the JSX Element fallback"}
            </_components.span>
            {"\n    "}
            <_components.span className="hljs-comment">
              {"// token.data is the data returned by the tokenData function"}
            </_components.span>
            {"\n    "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(token."}
            <_components.span className="hljs-property">{"data"}</_components.span>
            {");\n  });\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="resolvedata">
          <_components.a className="header-anchor" href="#resolvedata">
            {"#"}
          </_components.a>
          <_components.code>{"resolveData"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"If you never intend to render the tokens, you can use "}
          <_components.code>{"resolveData"}</_components.code>
          {" instead of "}
          <_components.code
            data-code-primitive-name="resolveTokens"
            data-code-package-name="jsx-parser"
          >
            {"resolveTokens"}
          </_components.code>
          {". This will return the data of the tokens instead of the JSX Element fallback."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { resolveData } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/jsx-parser"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" tokens = "}
            <_components.span className="hljs-title function_">{"resolveData"}</_components.span>
            {"(parser, "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" props."}
            <_components.span className="hljs-property">{"children"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-title function_">{"tokens"}</_components.span>
            {"()."}
            <_components.span className="hljs-title function_">{"forEach"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"token"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n    "}
            <_components.span className="hljs-comment">
              {"// token is the data returned by the tokenData function"}
            </_components.span>
            {"\n    "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(token);\n  });\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="istoken">
          <_components.a className="header-anchor" href="#istoken">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="isToken" data-code-package-name="jsx-parser">
            {"isToken"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"A function to validate if a value is a token created by the corresponding jsx-parser."}
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
          <_components.code data-code-primitive-name="isToken" data-code-package-name="jsx-parser">
            {"isToken"}
          </_components.code>
          {" takes a value, often this would be a JSXElement. The function returns "}
          <_components.code>{"false"}</_components.code>
          {
            " in case the value is not a token created by the corresponding jsx-parser. In case the value is a token "
          }
          <_components.code data-code-primitive-name="isToken" data-code-package-name="jsx-parser">
            {"isToken"}
          </_components.code>
          {" returns the value cast to a "}
          <_components.code>{"token"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" value = props."}
            <_components.span className="hljs-property">{"children"}</_components.span>
            {"["}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {"]; "}
            <_components.span className="hljs-comment">
              {"// value is typed as a JSXElement"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" token = "}
            <_components.span className="hljs-title function_">{"isToken"}</_components.span>
            {"(value);\n"}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" (!token) "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {";\ntoken; "}
            <_components.span className="hljs-comment">
              {"// token is typed as UnionOfAcceptedTokens"}
            </_components.span>
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/jsx-parser/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"A working example can be found in the "}
          <_components.a href="./dev/index.tsx">{"dev folder"}</_components.a>
          {"."}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/jsx-parser/CHANGELOG.md">
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
      packageName="@solid-primitives/jsx-parser"
      name="jsx-parser"
      stage={0}
      packageList={[{ name: "jsx-parser", gzipped: "456 B", minified: "842 B" }]}
      primitiveList={[
        { name: "createToken", gzipped: "210 B", minified: "275 B" },
        { name: "resolveTokens", gzipped: "274 B", minified: "389 B" },
        { name: "isToken", gzipped: "108 B", minified: "128 B" },
        { name: "createJSXParser", gzipped: "133 B", minified: "155 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
