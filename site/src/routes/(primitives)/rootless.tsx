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
      strong: "strong",
      h2: "h2",
      h6: "h6",
      h3: "h3",
      em: "em",
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
          {
            "A collection of helpers that aim to simplify using reactive primitives outside of reactive roots, and managing disposal of reactive roots."
          }
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createSubRoot">
              <_components.code
                data-code-primitive-name="createSubRoot"
                data-code-package-name="rootless"
              >
                {"createSubRoot"}
              </_components.code>
            </_components.a>
            {" - Creates a reactive "}
            <_components.strong>{"sub root"}</_components.strong>
            {", that will be automatically disposed when it's owner does."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createCallback">
              <_components.code
                data-code-primitive-name="createCallback"
                data-code-package-name="rootless"
              >
                {"createCallback"}
              </_components.code>
            </_components.a>
            {" - A wrapper for creating callbacks with "}
            <_components.code>{"runWithOwner"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createDisposable">
              <_components.code
                data-code-primitive-name="createDisposable"
                data-code-package-name="rootless"
              >
                {"createDisposable"}
              </_components.code>
            </_components.a>
            {" - For disposing computations early – before the root cleanup."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createSharedRoot">
              <_components.code
                data-code-primitive-name="createSharedRoot"
                data-code-package-name="rootless"
              >
                {"createSharedRoot"}
              </_components.code>
            </_components.a>
            {' - Share "global primitives" across multiple reactive scopes.'}
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
      <CopyPackages packageName="@solid-primitives/rootless" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createsubroot">
          <_components.a className="header-anchor" href="#createsubroot">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createSubRoot"
            data-code-package-name="rootless"
          >
            {"createSubRoot"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.h6 id="previously-createsubroot">
          <_components.a className="header-anchor" href="#previously-createsubroot">
            {"#"}
          </_components.a>
          {"Previously "}
          <_components.code
            data-code-primitive-name="createSubRoot"
            data-code-package-name="rootless"
          >
            {"createSubRoot"}
          </_components.code>
        </_components.h6>
        {"\n"}
        <_components.p>
          {"Creates a reactive "}
          <_components.strong>{"root branch"}</_components.strong>
          {", that will be automatically disposed when it's owner does."}
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
          {"Use it for nested roots "}
          <_components.em>
            {"(literally nested, or provided manually to dependency array)"}
          </_components.em>
          {" that should be disposed before or with their owner."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createSubRoot } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/rootless"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-title function_">{"createRoot"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"dispose"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-title function_">{"createSubRoot"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"disposeBranch"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n    "}
            <_components.span className="hljs-comment">
              {"// computations will be disposed with branch"}
            </_components.span>
            {"\n    "}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {...});\n\n    "}
            <_components.span className="hljs-comment">
              {"// disposes only the branch"}
            </_components.span>
            {"\n    "}
            <_components.span className="hljs-title function_">{"disposeBranch"}</_components.span>
            {"();\n  });\n\n  "}
            <_components.span className="hljs-comment">
              {"// disposes the outer root, AND all the nested branches"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-title function_">{"dispose"}</_components.span>
            {"();\n});\n"}
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
            <_components.span className="hljs-keyword">{"function"}</_components.span>
            {" createSubRoot<T>("}
            <_components.span className="hljs-attr">{"fn"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"dispose: VoidFunction"}</_components.span>
              {") =>"}
            </_components.span>
            {" T, ..."}
            <_components.span className="hljs-attr">{"owners"}</_components.span>
            {": ("}
            <_components.span className="hljs-title class_">{"Owner"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {")[]): T;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createcallback">
          <_components.a className="header-anchor" href="#createcallback">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createCallback"
            data-code-package-name="rootless"
          >
            {"createCallback"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"A wrapper for creating callbacks with "}
          <_components.code>{"runWithOwner"}</_components.code>
          {
            ".\nIt gives you the option to use reactive primitives after root setup and outside of effects."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.strong>{"Why?"}</_components.strong>
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "All of the callback-based (in opposite to effect-based) events is Solid don't have a root, because the root is changed synchronously after initialization finishes. So normally that would prevent you from using reactive primitives there."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code>{"runWithOwner"}</_components.code>
          {" attatches whatever computations created inside, to the owner passed to it."}
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
            <_components.span className="hljs-comment">{"// in component body"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" handleClick = "}
            <_components.span className="hljs-title function_">{"createCallback"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n   "}
            <_components.span className="hljs-comment">
              {"// the effect will be created normally, attached to the component's reactive root"}
            </_components.span>
            {"\n   "}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {...})\n})\n\n"}
            <_components.span className="hljs-comment">{"// in jsx"}</_components.span>
            {"\n<button onClick={handleClick} />\n"}
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
            {" createCallback<T "}
            <_components.span className="hljs-keyword">{"extends"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"AnyFunction"}</_components.span>
            {">("}
            <_components.span className="hljs-attr">{"callback"}</_components.span>
            {": T, owner?: "}
            <_components.span className="hljs-title class_">{"Owner"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {"): T;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createdisposable">
          <_components.a className="header-anchor" href="#createdisposable">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createDisposable"
            data-code-package-name="rootless"
          >
            {"createDisposable"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.h6 id="previously-runwithsubroot">
          <_components.a className="header-anchor" href="#previously-runwithsubroot">
            {"#"}
          </_components.a>
          {"Previously "}
          <_components.code>{"runWithSubRoot"}</_components.code>
        </_components.h6>
        {"\n"}
        <_components.p>
          {"For disposing computations early – before the root cleanup."}
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
          {"Executes provided function in a "}
          <_components.a href="#createSubRoot">
            <_components.code
              data-code-primitive-name="createSubRoot"
              data-code-package-name="rootless"
            >
              {"createSubRoot"}
            </_components.code>
          </_components.a>{" "}
          <_components.em>{"(auto-disposing root)"}</_components.em>
          {
            ", and returns a dispose function, to dispose computations used inside before automatic cleanup."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" dispose = "}
            <_components.span className="hljs-title function_">
              {"createDisposable"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"dispose"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n   "}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {...})\n});\n\n"}
            <_components.span className="hljs-comment">
              {"// dispose later (if not, will dispose automatically)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"dispose"}</_components.span>
            {"()\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="definition-2">
          <_components.a className="header-anchor" href="#definition-2">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"type"}</_components.span>
            {" runWithRootReturn<T> = T "}
            <_components.span className="hljs-keyword">{"extends"}</_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {"\n  ? "}
            <_components.span className="hljs-title class_">{"Dispose"}</_components.span>
            {"\n  : ["}
            <_components.span className="hljs-attr">{"returns"}</_components.span>
            {": T, "}
            <_components.span className="hljs-attr">{"dispose"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Dispose"}</_components.span>
            {"];\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" createDisposable = <T>("}
            <_components.span className="hljs-attr">{"fn"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" T, detachedOwner?: "}
            <_components.span className="hljs-title class_">{"Owner"}</_components.span>
            {"): runWithRootReturn<T>\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createsharedroot">
          <_components.a className="header-anchor" href="#createsharedroot">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createSharedRoot"
            data-code-package-name="rootless"
          >
            {"createSharedRoot"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.h6 id="added-in-110">
          <_components.a className="header-anchor" href="#added-in-110">
            {"#"}
          </_components.a>
          {"Added in "}
          <_components.code>{"@1.1.0"}</_components.code>
        </_components.h6>
        {"\n"}
        <_components.p>
          {
            "Creates a reactive root that is shared across every instance it was used in. Shared root gets created when the returned function gets first called, and disposed when last reactive context listening to it gets disposed. Only to be recreated again when a new listener appears."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {
            'Designed to make "global primitives" shareable, without instanciating them (recreating, state, computations, event listeners, etc.) every time they\'re used. For example a '
          }
          <_components.code>{"createLocationState"}</_components.code>
          {
            " primitive would work the same for every instance and provide the same data, so reinitializeing it every time is wastefull."
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
            data-code-primitive-name="createSharedRoot"
            data-code-package-name="rootless"
          >
            {"createSharedRoot"}
          </_components.code>
          {" primitive takes a single argument:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"factory"}</_components.code>
            {
              " - a function where can you initialize some reactive primitives, returned value will be shared across instances."
            }
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.p>
          {
            "And returns a function registering reactive owner as one of the listeners, returns the value "
          }
          <_components.code>{"factory"}</_components.code>
          {" function returned."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createSharedRoot } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/rootless"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" useState = "}
            <_components.span className="hljs-title function_">
              {"createSharedRoot"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n   "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"createMemo"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {...})\n});\n\n"}
            <_components.span className="hljs-comment">
              {"// later in a component:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" state = "}
            <_components.span className="hljs-title function_">{"useState"}</_components.span>
            {"();\n"}
            <_components.span className="hljs-title function_">{"state"}</_components.span>
            {"()\n\n"}
            <_components.span className="hljs-comment">
              {"// in another component"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// previously created primitive would get reused"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" state = "}
            <_components.span className="hljs-title function_">{"useState"}</_components.span>
            {"();\n...\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="type-definition">
          <_components.a className="header-anchor" href="#type-definition">
            {"#"}
          </_components.a>
          {"Type Definition"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>
            {" createSharedRoot<T>("}
            <_components.span className="hljs-attr">{"factory"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"dispose: Fn"}</_components.span>
              {") =>"}
            </_components.span>
            {" T): "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" T;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Usage of combining "}
          <_components.code
            data-code-primitive-name="createSharedRoot"
            data-code-package-name="rootless"
          >
            {"createSharedRoot"}
          </_components.code>
          {" with "}
          <_components.code>{"createMousePosition"}</_components.code>
          {": "}
          <_components.a href="https://codesandbox.io/s/shared-root-demo-fjl1l9?file=/index.tsx">
            {"https://codesandbox.io/s/shared-root-demo-fjl1l9?file=/index.tsx"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/rootless/CHANGELOG.md">
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
      packageName="@solid-primitives/rootless"
      name="rootless"
      stage={2}
      packageList={[{ name: "rootless", gzipped: "455 B", minified: "789 B" }]}
      primitiveList={[
        { name: "createCallback", gzipped: "130 B", minified: "160 B" },
        { name: "createDisposable", gzipped: "316 B", minified: "523 B" },
        { name: "createSharedRoot", gzipped: "188 B", minified: "253 B" },
        { name: "createSubRoot", gzipped: "301 B", minified: "474 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
