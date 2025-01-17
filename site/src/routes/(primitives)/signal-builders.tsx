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
      strong: "strong",
      h2: "h2",
      a: "a",
      code: "code",
      h3: "h3",
      pre: "pre",
      span: "span",
      ul: "ul",
      li: "li",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"A collection of chainable and composable reactive signal calculations, "}
          <_components.em>{"AKA"}</_components.em>{" "}
          <_components.strong>{"Signal Builders"}</_components.strong>
          {"."}
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
      <CopyPackages packageName="@solid-primitives/signal-builders" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Signal buildres are creating computations when used, so they need to be used under a reactive root."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"Note, since all of signal builders use "}
          <_components.a href="https://www.solidjs.com/docs/latest/api#creatememo">
            <_components.code>{"createMemo"}</_components.code>
          </_components.a>
          {
            " to wrap the calculaion, updates will be caused only when the calcualted value changes. Also the calculations should stay 'pure' – try to not cause side effects inside them."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="array">
          <_components.a className="header-anchor" href="#array">
            {"#"}
          </_components.a>
          {"Array"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { push, flatten, remove } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/signal-builders"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [fruits, setFruits] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"(["}
            <_components.span className="hljs-string">{'"apples"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"bananas"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"oranges"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"tomatoes"'}</_components.span>
            {"]);\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [toRemove, setToRemove] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"tomatoes"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" list = "}
            <_components.span className="hljs-title function_">{"flatten"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"remove"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"push"}</_components.span>
            {"(fruits, ["}
            <_components.span className="hljs-string">{'"kiwis"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"avocados"'}</_components.span>
            {"]), toRemove));\n\n"}
            <_components.span className="hljs-title function_">{"list"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {'// ["apples", "bananas", "oranges", "kiwis", "avocados"]'}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="object">
          <_components.a className="header-anchor" href="#object">
            {"#"}
          </_components.a>
          {"Object"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { update, merge } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/signal-builders"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [user, setUser] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": { "}
            <_components.span className="hljs-attr">{"first"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"John"'}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"last"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"Doe"'}</_components.span>
            {" } });\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [last, setLast] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Solid"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" modifiedUser = "}
            <_components.span className="hljs-title function_">{"merge"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"update"}</_components.span>
            {"(user, "}
            <_components.span className="hljs-string">{'"name"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"last"'}</_components.span>
            {", last), { "}
            <_components.span className="hljs-attr">{"age"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"21"}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-title function_">{"modifiedUser"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {'// { name: { first: "John", last: "Solid" }, age: 21 }'}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="number">
          <_components.a className="header-anchor" href="#number">
            {"#"}
          </_components.a>
          {"Number"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { add, multiply, clamp, int } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/signal-builders"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [input, setInput] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"123"'}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [ing, setIng] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"(-"}
            <_components.span className="hljs-number">{"45"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [max, setMax] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" value = "}
            <_components.span className="hljs-title function_">{"clamp"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"multiply"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"int"}</_components.span>
            {"(input), "}
            <_components.span className="hljs-title function_">{"add"}</_components.span>
            {"(ing, "}
            <_components.span className="hljs-number">{"54"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"9"}</_components.span>
            {")), "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {", max);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="string">
          <_components.a className="header-anchor" href="#string">
            {"#"}
          </_components.a>
          {"String"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { lowercase, substring, template, add } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/signal-builders"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [greeting, setGreeting] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Hello"'}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [target, setTarget] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"World"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" message = template"}
            <_components.span className="hljs-string">
              {"`"}
              <_components.span className="hljs-subst">{"${greeting}"}</_components.span>
              {", "}
              <_components.span className="hljs-subst">{"${target}"}</_components.span>
              {"!`"}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-title function_">{"message"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => Hello, World!"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" solidMessage = "}
            <_components.span className="hljs-title function_">{"lowercase"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"add"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"substring"}</_components.span>
            {"(message, "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"7"}</_components.span>
            {"), "}
            <_components.span className="hljs-string">{'"Solid"'}</_components.span>
            {"));\n"}
            <_components.span className="hljs-title function_">{"solidMessage"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => hello, solid"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="list-of-builders">
          <_components.a className="header-anchor" href="#list-of-builders">
            {"#"}
          </_components.a>
          {"List of builders"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="array-1">
          <_components.a className="header-anchor" href="#array-1">
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
            {" - basically "}
            <_components.code>{"Array.prototype.push()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"drop"}</_components.code>
            </_components.strong>
            {" - drop n items from the array start"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"dropRight"}</_components.code>
            </_components.strong>
            {" - drop n items from the end of the array"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"filter"}</_components.code>
            </_components.strong>
            {" - basically "}
            <_components.code>{"Array.prototype.filter()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"filterOut"}</_components.code>
            </_components.strong>
            {" - filter out passed item from an array"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"remove"}</_components.code>
            </_components.strong>
            {" - removes passed item from an array (first one from the start)"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"removeItems"}</_components.code>
            </_components.strong>
            {" - removes multiple items from an array"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"splice"}</_components.code>
            </_components.strong>
            {" - signal-builder "}
            <_components.code>{"Array.prototype.splice()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"slice"}</_components.code>
            </_components.strong>
            {" - signal-builder "}
            <_components.code>{"Array.prototype.slice()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"map"}</_components.code>
            </_components.strong>
            {" - signal-builder "}
            <_components.code>{"Array.prototype.map()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"sort"}</_components.code>
            </_components.strong>
            {" - signal-builder "}
            <_components.code>{"Array.prototype.sort()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"concat"}</_components.code>
            </_components.strong>
            {" - Append multiple arrays together"}
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
            {" - filter list: only leave items that are instances of specified Classes"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"filterOutInstance"}</_components.code>
            </_components.strong>
            {" - filter list: remove items that are instances of specified Classes"}
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
        <_components.h3 id="object-1">
          <_components.a className="header-anchor" href="#object-1">
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
            {" - get an object copy without the provided keys"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"pick"}</_components.code>
            </_components.strong>
            {" - get an object copy with only the provided keys"}
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
        <_components.h3 id="convert">
          <_components.a className="header-anchor" href="#convert">
            {"#"}
          </_components.a>
          {"Convert"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"string"}</_components.code>
            </_components.strong>
            {" - turns passed value to a string"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"float"}</_components.code>
            </_components.strong>
            {" - turns passed string to an float number"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"int"}</_components.code>
            </_components.strong>
            {" - turns passed string to an intiger"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"join"}</_components.code>
            </_components.strong>
            {" - join array with a separator to a string"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="number-1">
          <_components.a className="header-anchor" href="#number-1">
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
            <_components.code>{"a + b + c + ..."}</_components.code>
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
          <_components.li>
            <_components.strong>
              <_components.code>{"round"}</_components.code>
            </_components.strong>
            {" - "}
            <_components.code>{"Math.round()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"ceil"}</_components.code>
            </_components.strong>
            {" - "}
            <_components.code>{"Math.ceil()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"floor"}</_components.code>
            </_components.strong>
            {" - "}
            <_components.code>{"Math.floor()"}</_components.code>
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="string-1">
          <_components.a className="header-anchor" href="#string-1">
            {"#"}
          </_components.a>
          {"String"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"add"}</_components.code>
            </_components.strong>
            {" - "}
            <_components.code>{"a + b + c + ..."}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"lowercase"}</_components.code>
            </_components.strong>
            {" - signal builder "}
            <_components.code>{"String.prototype.toLowerCase()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"uppercase"}</_components.code>
            </_components.strong>
            {" - signal builder "}
            <_components.code>{"String.prototype.toUpperCase()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"capitalize"}</_components.code>
            </_components.strong>
            {" - capitalize a string input e.g. "}
            <_components.code>{'"solidJS"'}</_components.code>
            {" -> "}
            <_components.code>{'"Solidjs"'}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"substring"}</_components.code>
            </_components.strong>
            {" - signal builder "}
            <_components.code>{"String.prototype.substring()"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              <_components.code>{"template"}</_components.code>
            </_components.strong>
            {" - Create reactive string templates"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h2 id="a-call-for-feedback">
          <_components.a className="header-anchor" href="#a-call-for-feedback">
            {"#"}
          </_components.a>
          {"A call for feedback"}
        </_components.h2>
        {"\n"}
        <_components.p>
          <_components.code>{"signal-builders"}</_components.code>
          {
            " package is now a proof of concept of a fresh and experimental idea. Therefore all feedback/ideas/issues are highly welcome! :)"
          }
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/signal-builders/CHANGELOG.md">
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
      packageName="@solid-primitives/signal-builders"
      name="signal-builders"
      stage={2}
      packageList={[{ name: "signal-builders", gzipped: "1.54 KB", minified: "4.03 KB" }]}
      primitiveList={[
        { name: "add", gzipped: "249 B", minified: "396 B" },
        { name: "substract", gzipped: "253 B", minified: "392 B" },
        { name: "multiply", gzipped: "253 B", minified: "391 B" },
        { name: "divide", gzipped: "251 B", minified: "389 B" },
        { name: "power", gzipped: "252 B", minified: "390 B" },
        { name: "clamp", gzipped: "235 B", minified: "359 B" },
        { name: "update", gzipped: "356 B", minified: "625 B" },
        { name: "omit", gzipped: "297 B", minified: "459 B" },
        { name: "pick", gzipped: "262 B", minified: "400 B" },
        { name: "get", gzipped: "258 B", minified: "400 B" },
        { name: "merge", gzipped: "260 B", minified: "406 B" },
        { name: "push", gzipped: "273 B", minified: "436 B" },
        { name: "drop", gzipped: "225 B", minified: "333 B" },
        { name: "dropRight", gzipped: "234 B", minified: "349 B" },
        { name: "filterOut", gzipped: "261 B", minified: "413 B" },
        { name: "filter", gzipped: "247 B", minified: "380 B" },
        { name: "sort", gzipped: "224 B", minified: "338 B" },
        { name: "map", gzipped: "218 B", minified: "328 B" },
        { name: "slice", gzipped: "223 B", minified: "340 B" },
        { name: "splice", gzipped: "288 B", minified: "464 B" },
        { name: "concat", gzipped: "279 B", minified: "434 B" },
        { name: "remove", gzipped: "295 B", minified: "480 B" },
        { name: "removeItems", gzipped: "309 B", minified: "468 B" },
        { name: "flatten", gzipped: "248 B", minified: "367 B" },
        { name: "filterInstance", gzipped: "282 B", minified: "443 B" },
        { name: "filterOutInstance", gzipped: "285 B", minified: "451 B" },
        { name: "string", gzipped: "206 B", minified: "303 B" },
        { name: "float", gzipped: "215 B", minified: "318 B" },
        { name: "int", gzipped: "218 B", minified: "320 B" },
        { name: "join", gzipped: "212 B", minified: "313 B" },
        { name: "lowercase", gzipped: "92 B", minified: "104 B" },
        { name: "uppercase", gzipped: "92 B", minified: "104 B" },
        { name: "capitalize", gzipped: "121 B", minified: "139 B" },
        { name: "substring", gzipped: "224 B", minified: "338 B" },
        { name: "template", gzipped: "268 B", minified: "408 B" },
        { name: "round", gzipped: "209 B", minified: "311 B" },
        { name: "ceil", gzipped: "208 B", minified: "309 B" },
        { name: "floor", gzipped: "208 B", minified: "311 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
