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
      pre: "pre",
      code: "code",
      span: "span",
      h3: "h3",
      ul: "ul",
      li: "li",
      strong: "strong",
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
            "Functional programming helpers for making non-mutating changes to data. Keeping it immutable."
          }
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
      <CopyPackages packageName="@solid-primitives/immutable" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h2>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { pick } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/immutable"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" original = { "}
            <_components.span className="hljs-attr">{"foo"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"123"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"bar"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"baz"'}</_components.span>
            {" };\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" newObj = "}
            <_components.span className="hljs-title function_">{"pick"}</_components.span>
            {"(original, "}
            <_components.span className="hljs-string">{'"foo"'}</_components.span>
            {");\noriginal; "}
            <_components.span className="hljs-comment">
              {'// { foo: 123, bar: "baz" }'}
            </_components.span>
            {"\nnewObj; "}
            <_components.span className="hljs-comment">{"// { foo: 123 }"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"Use it for changing signals:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { push, update } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/immutable"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [list, setList] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"(["}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {"]);\n"}
            <_components.span className="hljs-title function_">{"setList"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"p"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"push"}</_components.span>
            {"(p, "}
            <_components.span className="hljs-number">{"4"}</_components.span>
            {"));\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [user, setUser] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"({\n  "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"John"'}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"street"}</_components.span>
            {": { "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"Kingston Cei"'}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"number"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"24"}</_components.span>
            {" },\n});\n"}
            <_components.span className="hljs-title function_">{"setUser"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"p"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"update"}</_components.span>
            {"(p, "}
            <_components.span className="hljs-string">{'"street"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"number"'}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"64"}</_components.span>
            {"));\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="list-of-functions">
          <_components.a className="header-anchor" href="#list-of-functions">
            {"#"}
          </_components.a>
          {"List of functions:"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="copying">
          <_components.a className="header-anchor" href="#copying">
            {"#"}
          </_components.a>
          {"Copying"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"shallowArrayCopy"}</_components.code>
            </_components.strong>
            {" - make shallow copy of an array"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"shallowObjectCopy"}</_components.code>
            </_components.strong>
            {" - make shallow copy of an object"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"shallowCopy"}</_components.code>
            </_components.strong>
            {" - make shallow copy of an array/object"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"withArrayCopy"}</_components.code>
            </_components.strong>
            {" - apply mutations to the an array without changing the original"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"withObjectCopy"}</_components.code>
            </_components.strong>
            {" - apply mutations to the an object without changing the original"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"withCopy"}</_components.code>
            </_components.strong>
            {" - apply mutations to the an object/array without changing the original"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="array">
          <_components.a className="header-anchor" href="#array">
            {"#"}
          </_components.a>
          {"Array"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"push"}</_components.code>
            </_components.strong>
            {" - non-mutating "}
            <_components.code>{"Array.prototype.push()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"drop"}</_components.code>
            </_components.strong>
            {" - non-mutating function that drops n items from the array start"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"dropRight"}</_components.code>
            </_components.strong>
            {" - non-mutating function that drops n items from the array end"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"filterOut"}</_components.code>
            </_components.strong>
            {" - standalone "}
            <_components.code>{"Array.prototype.filter()"}</_components.code>
            {" that filters out passed item"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"filter"}</_components.code>
            </_components.strong>
            {" - standalone "}
            <_components.code>{"Array.prototype.filter()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"sort"}</_components.code>
            </_components.strong>
            {" - non-mutating "}
            <_components.code>{"Array.prototype.sort()"}</_components.code>
            {" as a standalone function"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"sortBy"}</_components.code>
            </_components.strong>
            {" - Sort an array by object key, or multiple keys"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"map"}</_components.code>
            </_components.strong>
            {" - standalone "}
            <_components.code>{"Array.prototype.map()"}</_components.code>
            {" function"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"slice"}</_components.code>
            </_components.strong>
            {" - standalone "}
            <_components.code>{"Array.prototype.slice()"}</_components.code>
            {" function"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"splice"}</_components.code>
            </_components.strong>
            {" - non-mutating "}
            <_components.code>{"Array.prototype.splice()"}</_components.code>
            {" as a standalone function"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"fill"}</_components.code>
            </_components.strong>
            {" - non-mutating "}
            <_components.code>{"Array.prototype.fill()"}</_components.code>
            {" as a standalone function"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"concat"}</_components.code>
            </_components.strong>
            {" - Creates a new array concatenating array with any additional arrays and/or values."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"remove"}</_components.code>
            </_components.strong>
            {" - Remove item from array"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"removeItems"}</_components.code>
            </_components.strong>
            {" - Remove multiple items from an array"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"flatten"}</_components.code>
            </_components.strong>
            {" - Flattens a nested array into a one-level array"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"filterInstance"}</_components.code>
            </_components.strong>
            {" - Flattens a nested array into a one-level array"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"filterOutInstance"}</_components.code>
            </_components.strong>
            {" - Flattens a nested array into a one-level array"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="object">
          <_components.a className="header-anchor" href="#object">
            {"#"}
          </_components.a>
          {"Object"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"omit"}</_components.code>
            </_components.strong>
            {" - Create a new subset object without the provided keys"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"pick"}</_components.code>
            </_components.strong>
            {" - Create a new subset object with only the provided keys"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"split"}</_components.code>
            </_components.strong>
            {" - Split object into multiple subset objects."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"merge"}</_components.code>
            </_components.strong>
            {" - Merges multiple objects into a single one."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="objectarray">
          <_components.a className="header-anchor" href="#objectarray">
            {"#"}
          </_components.a>
          {"Object/Array"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"get"}</_components.code>
            </_components.strong>
            {" - Get a single property value of an object by specifying a path to it."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"update"}</_components.code>
            </_components.strong>
            {" - Change single value in an object by key, or series of recursing keys."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="number">
          <_components.a className="header-anchor" href="#number">
            {"#"}
          </_components.a>
          {"Number"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"add"}</_components.code>
            </_components.strong>
            {" - "}
            <_components.code>{"a + b + c + ..."}</_components.code>{" "}
            <_components.em>{"(works for numbers or strings)"}</_components.em>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"substract"}</_components.code>
            </_components.strong>
            {" - "}
            <_components.code>{"a - b - c - ..."}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"multiply"}</_components.code>
            </_components.strong>
            {" - "}
            <_components.code>{"a * b * c * ..."}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"divide"}</_components.code>
            </_components.strong>
            {" - "}
            <_components.code>{"a / b / c / ..."}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"power"}</_components.code>
            </_components.strong>
            {" - "}
            <_components.code>{"a ** b ** c ** ..."}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"clamp"}</_components.code>
            </_components.strong>
            {" - clamp a number value between two other values"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/immutable/CHANGELOG.md">
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
      packageName="@solid-primitives/immutable"
      name="immutable"
      stage={2}
      packageList={[{ name: "immutable", gzipped: "1.17 KB", minified: "2.69 KB" }]}
      primitiveList={[
        { name: "shallowArrayCopy", gzipped: "50 B", minified: "50 B" },
        { name: "shallowObjectCopy", gzipped: "57 B", minified: "61 B" },
        { name: "shallowCopy", gzipped: "91 B", minified: "102 B" },
        { name: "withArrayCopy", gzipped: "81 B", minified: "87 B" },
        { name: "withObjectCopy", gzipped: "92 B", minified: "98 B" },
        { name: "withCopy", gzipped: "126 B", minified: "183 B" },
        { name: "add", gzipped: "69 B", minified: "72 B" },
        { name: "substract", gzipped: "68 B", minified: "71 B" },
        { name: "multiply", gzipped: "69 B", minified: "70 B" },
        { name: "divide", gzipped: "67 B", minified: "68 B" },
        { name: "power", gzipped: "68 B", minified: "69 B" },
        { name: "clamp", gzipped: "56 B", minified: "61 B" },
        { name: "update", gzipped: "199 B", minified: "311 B" },
        { name: "omit", gzipped: "119 B", minified: "138 B" },
        { name: "pick", gzipped: "76 B", minified: "79 B" },
        { name: "get", gzipped: "73 B", minified: "76 B" },
        { name: "split", gzipped: "173 B", minified: "219 B" },
        { name: "merge", gzipped: "83 B", minified: "89 B" },
        { name: "push", gzipped: "93 B", minified: "115 B" },
        { name: "drop", gzipped: "45 B", minified: "45 B" },
        { name: "dropRight", gzipped: "61 B", minified: "61 B" },
        { name: "filterOut", gzipped: "100 B", minified: "122 B" },
        { name: "filter", gzipped: "80 B", minified: "92 B" },
        { name: "sort", gzipped: "46 B", minified: "50 B" },
        { name: "map", gzipped: "39 B", minified: "40 B" },
        { name: "slice", gzipped: "42 B", minified: "48 B" },
        { name: "splice", gzipped: "98 B", minified: "129 B" },
        { name: "fill", gzipped: "51 B", minified: "58 B" },
        { name: "concat", gzipped: "95 B", minified: "120 B" },
        { name: "remove", gzipped: "130 B", minified: "189 B" },
        { name: "removeItems", gzipped: "130 B", minified: "147 B" },
        { name: "flatten", gzipped: "80 B", minified: "85 B" },
        { name: "sortBy", gzipped: "314 B", minified: "471 B" },
        { name: "filterInstance", gzipped: "234 B", minified: "338 B" },
        { name: "filterOutInstance", gzipped: "236 B", minified: "346 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
