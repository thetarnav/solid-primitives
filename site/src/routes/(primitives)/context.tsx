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
      h2: "h2",
      a: "a",
      code: "code",
      h4: "h4",
      pre: "pre",
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
          {"Primitives simplifying the creation and use of SolidJS Context Providers."}
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
      <CopyPackages packageName="@solid-primitives/context" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createcontextprovider">
          <_components.a className="header-anchor" href="#createcontextprovider">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createContextProvider"
            data-code-package-name="context"
          >
            {"createContextProvider"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Create the Context Provider component and useContext function with types inferred from the factory function."
          }
        </_components.p>
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
            {" { createContextProvider } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/context"'}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="creating-the-context-provider">
          <_components.a className="header-anchor" href="#creating-the-context-provider">
            {"#"}
          </_components.a>
          {"Creating the Context Provider"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"Given a factory function, "}
          <_components.code
            data-code-primitive-name="createContextProvider"
            data-code-package-name="context"
          >
            {"createContextProvider"}
          </_components.code>
          {
            " creates a SolidJS Context and returns both a Provider component for setting the context, and a useContext helper for getting the context. The factory function gets called when the provider component gets executed; all "
          }
          <_components.code>{"props"}</_components.code>
          {
            " of the provider component get passed into the factory function, and what it returns will be available in the contexts for all the underlying components. The types of the provider props and context are inferred from the factory function."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" ["}
            <_components.span className="hljs-title class_">{"CounterProvider"}</_components.span>
            {", useCounter] = "}
            <_components.span className="hljs-title function_">
              {"createContextProvider"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"props: { initial: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {" }"}
              </_components.span>
              {") =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, setCount] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"(props."}
            <_components.span className="hljs-property">{"initial"}</_components.span>
            {");\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"increment"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params" />
            {") => "}
            <_components.span className="hljs-title function_">{"setCount"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"() + "}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {");\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" { count, increment };\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="set-context-using-the-provider">
          <_components.a className="header-anchor" href="#set-context-using-the-provider">
            {"#"}
          </_components.a>
          {"Set Context using the Provider"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"The provider component takes "}
          <_components.code>{"props"}</_components.code>
          {" declared as arguments of the factory functions."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-comment">{"// Provide the context"}</_components.span>
            {"\n<"}
            <_components.span className="hljs-title class_">{"CounterProvider"}</_components.span>
            {" initial={"}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {"}>\n  "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"App"}</_components.span>
                {" />"}
              </_components.span>
            </_components.span>
            {"\n</"}
            <_components.span className="hljs-title class_">{"CounterProvider"}</_components.span>
            {">\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="use-context-in-children-components">
          <_components.a className="header-anchor" href="#use-context-in-children-components">
            {"#"}
          </_components.a>
          {"Use context in children components"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"The context will by default be "}
          <_components.code>{"T | undefined"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">{"// get the context"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" ctx = "}
            <_components.span className="hljs-title function_">{"useCounter"}</_components.span>
            {"();\nctx?."}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 1"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="providing-context-fallback">
          <_components.a className="header-anchor" href="#providing-context-fallback">
            {"#"}
          </_components.a>
          {"Providing context fallback"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"The "}
          <_components.code
            data-code-primitive-name="createContextProvider"
            data-code-package-name="context"
          >
            {"createContextProvider"}
          </_components.code>
          {
            " primitive takes a second, optional argument for providing context defaults for when the context wouldn't be provided higher in the component tree.\nProviding a fallback also removes "
          }
          <_components.code>{"undefined"}</_components.code>
          {" from "}
          <_components.code>{"T | undefined"}</_components.code>
          {" return type of the "}
          <_components.code>{"useContext"}</_components.code>
          {" function."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" ["}
            <_components.span className="hljs-title class_">{"CounterProvider"}</_components.span>
            {", useCounter] = "}
            <_components.span className="hljs-title function_">
              {"createContextProvider"}
            </_components.span>
            {"(\n  "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n    "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, setCount] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\n    "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"increment"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params" />
            {") => "}
            <_components.span className="hljs-title function_">{"setCount"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"() + "}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {");\n    "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" { count, increment };\n  },\n  {\n    "}
            <_components.span className="hljs-attr">{"count"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {",\n    "}
            <_components.span className="hljs-attr">{"increment"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {},\n  },\n);\n\n"}
            <_components.span className="hljs-comment">
              {"// then when using the context:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { count } = "}
            <_components.span className="hljs-title function_">{"useCounter"}</_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"Definite context types without defaults:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"useDefiniteCounter"}
            </_components.span>
            {" = ("}
            <_components.span className="hljs-params" />
            {") => "}
            <_components.span className="hljs-title function_">{"useCounter"}</_components.span>
            {"()!;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="type-definition">
          <_components.a className="header-anchor" href="#type-definition">
            {"#"}
          </_components.a>
          {"Type Definition"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>
            {" createContextProvider<T, P "}
            <_components.span className="hljs-keyword">{"extends"}</_components.span>{" "}
            <_components.span className="hljs-title class_">
              {"ContextProviderProps"}
            </_components.span>
            {">(\n  "}
            <_components.span className="hljs-attr">{"factoryFn"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"props: P"}</_components.span>
              {") =>"}
            </_components.span>
            {" T,\n  "}
            <_components.span className="hljs-attr">{"defaults"}</_components.span>
            {": T,\n): ["}
            <_components.span className="hljs-attr">{"provider"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"ContextProvider"}</_components.span>
            {"<P>, "}
            <_components.span className="hljs-attr">{"useContext"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" T];\n"}
            <_components.span className="hljs-keyword">{"function"}</_components.span>
            {" createContextProvider<T, P "}
            <_components.span className="hljs-keyword">{"extends"}</_components.span>{" "}
            <_components.span className="hljs-title class_">
              {"ContextProviderProps"}
            </_components.span>
            {">(\n  "}
            <_components.span className="hljs-attr">{"factoryFn"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"props: P"}</_components.span>
              {") =>"}
            </_components.span>
            {" T,\n): ["}
            <_components.span className="hljs-attr">{"provider"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"ContextProvider"}</_components.span>
            {"<P>, "}
            <_components.span className="hljs-attr">{"useContext"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" T | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {"];\n\n"}
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">
              {"ContextProviderProps"}
            </_components.span>
            {" = {\n  children?: "}
            <_components.span className="hljs-variable constant_">{"JSX"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"Element"}</_components.span>
            {";\n} & "}
            <_components.span className="hljs-title class_">{"Record"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {", "}
            <_components.span className="hljs-built_in">{"unknown"}</_components.span>
            {">;\n"}
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"ContextProvider"}</_components.span>
            {"<T "}
            <_components.span className="hljs-keyword">{"extends"}</_components.span>{" "}
            <_components.span className="hljs-title class_">
              {"ContextProviderProps"}
            </_components.span>
            {"> = "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"\n  props: { children: JSX.Element } & T,\n"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable constant_">{"JSX"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"Element"}</_components.span>
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/context/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-context-demo-oqyie2?file=/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/context/CHANGELOG.md">
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
      packageName="@solid-primitives/context"
      name="context"
      stage={2}
      packageList={[{ name: "context", gzipped: "152 B", minified: "222 B" }]}
      primitiveList={[{ name: "createContextProvider", gzipped: "151 B", minified: "222 B" }]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
