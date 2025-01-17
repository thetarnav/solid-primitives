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
      em: "em",
      h2: "h2",
      a: "a",
      code: "code",
      h4: "h4",
      pre: "pre",
      span: "span",
      ul: "ul",
      li: "li",
      strong: "strong",
      h5: "h5",
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
          {"Primitive for destructuring reactive objects "}
          <_components.em>{"– like props or stores –"}</_components.em>
          {" or signals of them into a separate accessors updated individually."}
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
      <CopyPackages packageName="@solid-primitives/destructure" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="destructure">
          <_components.a className="header-anchor" href="#destructure">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="destructure"
            data-code-package-name="destructure"
          >
            {"destructure"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Spreads an reactive object "}
          <_components.em>{"(store or props)"}</_components.em>
          {" or a reactive object signal into a tuple/map of signals for each object key."}
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
            {" { destructure } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/destructure"'}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h4>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="destructure"
            data-code-package-name="destructure"
          >
            {"destructure"}
          </_components.code>
          {
            " is an reactive primitive, hence needs to be used under an reactive root. Pass an reactive object or a signal as it's first argument, and configure it's behavior via options:"
          }
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"memo"}</_components.code>
            {" - wraps accessors in "}
            <_components.code>{"createMemo"}</_components.code>
            {", making each property update independently. "}
            <_components.em>{"(enabled by default for signal source)"}</_components.em>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"lazy"}</_components.code>
            {
              " - property accessors are created on key read. enable if you want to only a subset of source properties, or use properties initially missing"
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"deep"}</_components.code>
            {" - destructure nested objects"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">{"// spread tuples"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [first, second, third] = "}
            <_components.span className="hljs-title function_">{"destructure"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" ["}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {"]);\n"}
            <_components.span className="hljs-title function_">{"first"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 1"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"second"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 2"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"third"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 3"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">{"// spread objects"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { name, age } = "}
            <_components.span className="hljs-title function_">{"destructure"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"John"'}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"age"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"36"}</_components.span>
            {" });\n"}
            <_components.span className="hljs-title function_">{"name"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{'// => "John"'}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"age"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 36"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="spread-component-props">
          <_components.a className="header-anchor" href="#spread-component-props">
            {"#"}
          </_components.a>
          {"Spread component props"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"ListItem"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Component"}</_components.span>
            {"<{ "}
            <_components.span className="hljs-attr">{"title"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {"; "}
            <_components.span className="hljs-attr">{"label"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {"; "}
            <_components.span className="hljs-attr">{"highlight"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {" }> = "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"props"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { title, label, highlight } = "}
            <_components.span className="hljs-title function_">{"destructure"}</_components.span>
            {"(props);\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"h2"}</_components.span>
                {">"}
              </_components.span>
              {"{title()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"h2"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n};\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="caching-keys-memo">
          <_components.a className="header-anchor" href="#caching-keys-memo">
            {"#"}
          </_components.a>
          {"Caching keys (memo)"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"By default keys of an accessor source are "}
          <_components.strong>{"cached"}</_components.strong>
          {" and keys of an object source "}
          <_components.strong>{"are not"}</_components.strong>
          {". "}
          <_components.em>
            {"(reactive objet like stores and props should be fine-grained anyway)"}
          </_components.em>
          {" But caching can be controlled by specifying a "}
          <_components.code>{"memo"}</_components.code>
          {" property in options."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [store, setStore] = "}
            <_components.span className="hljs-title function_">{"createStore"}</_components.span>
            {"({\n  "}
            <_components.span className="hljs-attr">{"user"}</_components.span>
            {": {\n    "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"John"'}</_components.span>
            {",\n    "}
            <_components.span className="hljs-attr">{"lastName"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"Brown"'}</_components.span>
            {",\n    "}
            <_components.span className="hljs-attr">{"age"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"25"}</_components.span>
            {",\n  },\n});\n"}
            <_components.span className="hljs-comment">
              {"// disable memo (for accessors is enabled by default)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { name, lastName, age } = "}
            <_components.span className="hljs-title function_">{"destructure"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" store."}
            <_components.span className="hljs-property">{"user"}</_components.span>
            {", { "}
            <_components.span className="hljs-attr">{"memo"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {" });\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="destructuring-nested-objects">
          <_components.a className="header-anchor" href="#destructuring-nested-objects">
            {"#"}
          </_components.a>
          {"Destructuring nested objects"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"The "}
          <_components.code>{"deep"}</_components.code>
          {" flag causes the all the nested objects to be destructured into signals as well."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [store, setStore] = "}
            <_components.span className="hljs-title function_">{"createStore"}</_components.span>
            {"({\n  "}
            <_components.span className="hljs-attr">{"user"}</_components.span>
            {": {\n    "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"Johnny"'}</_components.span>
            {",\n    "}
            <_components.span className="hljs-attr">{"lastName"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"Bravo"'}</_components.span>
            {",\n    "}
            <_components.span className="hljs-attr">{"age"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"19"}</_components.span>
            {",\n  },\n});\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-attr">{"user"}</_components.span>
            {": { name, lastName, age },\n} = "}
            <_components.span className="hljs-title function_">{"destructure"}</_components.span>
            {"(store, { "}
            <_components.span className="hljs-attr">{"deep"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-title function_">{"name"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{'// => "Johnny"'}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="lazy-vs-eager-evaluation">
          <_components.a className="header-anchor" href="#lazy-vs-eager-evaluation">
            {"#"}
          </_components.a>
          {"Lazy vs Eager Evaluation"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"By default, "}
          <_components.code
            data-code-primitive-name="destructure"
            data-code-package-name="destructure"
          >
            {"destructure"}
          </_components.code>
          {
            " loops over all the available keys eagerly - on init. Lazy evaluation can be enabled via "
          }
          <_components.code>{"lazy"}</_components.code>
          {" flag."}
        </_components.p>
        {"\n"}
        <_components.h5 id="accessing-keys-initially-missing">
          <_components.a className="header-anchor" href="#accessing-keys-initially-missing">
            {"#"}
          </_components.a>
          {"Accessing keys initially missing"}
        </_components.h5>
        {"\n"}
        <_components.p>
          {
            "Lazy access allows for getting hold of accessors to keys that are not in the object yet, while still being reactive, and updating when that key will be added."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [user, setUser] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"({\n  "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"John"'}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"lastName"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"Brown"'}</_components.span>
            {",\n});\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { age } = "}
            <_components.span className="hljs-title function_">{"destructure"}</_components.span>
            {"(user, { "}
            <_components.span className="hljs-attr">{"lazy"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" });\n"}
            <_components.span className="hljs-title function_">{"age"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// => undefined (not an error though)"}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-title function_">{"setUser"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"p"}</_components.span>
              {" =>"}
            </_components.span>
            {" ({\n  ...p,\n  "}
            <_components.span className="hljs-attr">{"age"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"34"}</_components.span>
            {",\n}));\n"}
            <_components.span className="hljs-title function_">{"age"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 34"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h5 id="caching-only-used-properties">
          <_components.a className="header-anchor" href="#caching-only-used-properties">
            {"#"}
          </_components.a>
          {"Caching only used properties"}
        </_components.h5>
        {"\n"}
        <_components.p>
          {"When "}
          <_components.a href="#caching-keys">{"caching"}</_components.a>
          {
            " is enabled, eager evaluation will create memos for each key, regardless of if it was accessed or not. As "
          }
          <_components.code>{"lazy"}</_components.code>
          {" waits for your read, the memos are created only for accessed keys."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [user, setUser] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"({\n  "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"John"'}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"lastName"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"Brown"'}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"age"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"25"}</_components.span>
            {",\n});\n"}
            <_components.span className="hljs-comment">
              {"// only the `age` key will be cached"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { age } = "}
            <_components.span className="hljs-title function_">{"destructure"}</_components.span>
            {"(user, { "}
            <_components.span className="hljs-attr">{"lazy"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" });\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h5 id="spreading-limitations">
          <_components.a className="header-anchor" href="#spreading-limitations">
            {"#"}
          </_components.a>
          {"Spreading limitations"}
        </_components.h5>
        {"\n"}
        <_components.p>
          {"No "}
          <_components.code>{"{...obj}"}</_components.code>
          {" or "}
          <_components.code>{"[...list]"}</_components.code>
          {" is possible with "}
          <_components.code>{"lazy"}</_components.code>
          {", all the keys have to accessed directly."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" obj = "}
            <_components.span className="hljs-title function_">{"destructure"}</_components.span>
            {"(user, { "}
            <_components.span className="hljs-attr">{"lazy"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" });\n"}
            <_components.span className="hljs-comment">{"// this won't work:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" newObj = { ...obj };\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"Only initially available indexes can be accessed while using this syntax: "}
          <_components.code>{"[a, b] = list"}</_components.code>
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">{"// DO NOT do this:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [a, b, c] = "}
            <_components.span className="hljs-title function_">{"destructure"}</_components.span>
            {"(["}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {"], { "}
            <_components.span className="hljs-attr">{"lazy"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" });\n"}
            <_components.span className="hljs-title function_">{"a"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 1"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"b"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 2"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"c"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// error (c will be undefined)"}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">{"// Do this instead:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" list = "}
            <_components.span className="hljs-title function_">{"destructure"}</_components.span>
            {"(["}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {"], { "}
            <_components.span className="hljs-attr">{"lazy"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" });\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [a, b] = list;\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" c = list["}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {"];\n"}
            <_components.span className="hljs-title function_">{"a"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 1"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"b"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 2"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"c"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// => undefined (no error)"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="acknowledgements">
          <_components.a className="header-anchor" href="#acknowledgements">
            {"#"}
          </_components.a>
          {"Acknowledgements"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            {"This package was initially based on the implementation of "}
            <_components.code>{"spread"}</_components.code>
            {" and "}
            <_components.code
              data-code-primitive-name="destructure"
              data-code-package-name="destructure"
            >
              {"destructure"}
            </_components.code>
            {" in "}
            <_components.a href="https://github.com/LXSMNSYC/solid-use">
              {"solid-use"}
            </_components.a>
            {"."}
          </_components.li>
          {"\n"}
        </_components.ul>
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/destructure/CHANGELOG.md">
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
      packageName="@solid-primitives/destructure"
      name="destructure"
      stage={2}
      packageList={[{ name: "destructure", gzipped: "509 B", minified: "939 B" }]}
      primitiveList={[{ name: "destructure", gzipped: "510 B", minified: "939 B" }]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
