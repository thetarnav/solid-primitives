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
      h4: "h4",
      pre: "pre",
      span: "span",
      em: "em",
      blockquote: "blockquote",
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
          {
            "Control Flow primitives and components that require specifying explicit keys to identify or rerender elements."
          }
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#keyArray">
              <_components.code data-code-primitive-name="keyArray" data-code-package-name="keyed">
                {"keyArray"}
              </_components.code>
            </_components.a>
            {
              " - Reactively maps an array by specified key with a callback function - underlying helper for the "
            }
            <_components.code data-code-primitive-name="Key" data-code-package-name="keyed">
              {"<Key>"}
            </_components.code>
            {" control flow."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#Key">
              <_components.code data-code-primitive-name="Key" data-code-package-name="keyed">
                {"Key"}
              </_components.code>
            </_components.a>
            {" - Creates a list of elements by mapping items by provided key."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#Entries">
              <_components.code data-code-primitive-name="Entries" data-code-package-name="keyed">
                {"Entries"}
              </_components.code>
            </_components.a>
            {" - Creates a list of elements by mapping object entries."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#Rerun">
              <_components.code>{"Rerun"}</_components.code>
            </_components.a>
            {" - Causes the children to rerender when the "}
            <_components.code>{"on"}</_components.code>
            {" changes."}
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
      <CopyPackages packageName="@solid-primitives/keyed" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="keyarray">
          <_components.a className="header-anchor" href="#keyarray">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="keyArray" data-code-package-name="keyed">
            {"keyArray"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Reactively maps an array by specified key with a callback function - underlying helper for the "
          }
          <_components.a href="#Key">
            <_components.code data-code-primitive-name="Key" data-code-package-name="keyed">
              {"<Key>"}
            </_components.code>
          </_components.a>
          {" control flow."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
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
            {" { keyArray } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/keyed"'}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="basic-usage">
          <_components.a className="header-anchor" href="#basic-usage">
            {"#"}
          </_components.a>
          {"Basic usage"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"The "}
          <_components.code data-code-primitive-name="keyArray" data-code-package-name="keyed">
            {"keyArray"}
          </_components.code>
          {" primitive takes 4 arguments:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"list"}</_components.code>
            {" - input list of values to map"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"keyFn"}</_components.code>
            {
              " - key getter, items will be identified by it's value. changing the value is changing the item."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"mapFn"}</_components.code>
            {" - reactive function used to create mapped output item. Similar to "}
            <_components.code>{"Array.prototype.map"}</_components.code>
            {" but both item and index are signals, that could change over time."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"options"}</_components.code>
            {" - a fallback for when the input list is empty or missing "}
            <_components.em>{"(Optional)"}</_components.em>
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" mapped = "}
            <_components.span className="hljs-title function_">{"keyArray"}</_components.span>
            {"(source, "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"model, index"}</_components.span>
              {") =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [name, setName] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"model"}</_components.span>
            {"()."}
            <_components.span className="hljs-property">{"name"}</_components.span>
            {");\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [description, setDescription] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"model"}</_components.span>
            {"()."}
            <_components.span className="hljs-property">{"description"}</_components.span>
            {");\n\n  "}
            <_components.span className="hljs-title function_">{"createComputed"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n    "}
            <_components.span className="hljs-title function_">{"setName"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"model"}</_components.span>
            {"()."}
            <_components.span className="hljs-property">{"name"}</_components.span>
            {");\n    "}
            <_components.span className="hljs-title function_">{"setDescription"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"model"}</_components.span>
            {"()."}
            <_components.span className="hljs-property">{"description"}</_components.span>
            {");\n  });\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" {\n    "}
            <_components.span className="hljs-attr">{"id"}</_components.span>
            {": model."}
            <_components.span className="hljs-property">{"id"}</_components.span>
            {",\n    "}
            <_components.span className="hljs-keyword">{"get"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"name"}</_components.span>
            {"() {\n      "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"name"}</_components.span>
            {"();\n    },\n    "}
            <_components.span className="hljs-keyword">{"get"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"description"}</_components.span>
            {"() {\n      "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"description"}</_components.span>
            {"();\n    },\n    "}
            <_components.span className="hljs-keyword">{"get"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"index"}</_components.span>
            {"() {\n      "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"index"}</_components.span>
            {"();\n    },\n    setName,\n    setDescription,\n  };\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "Notice that both the value and index arguments are singlas. Items are identified only by keys, it means that the items could be copied, replaced, changed, but as long as the key is the same, "
          }
          <_components.code data-code-primitive-name="keyArray" data-code-package-name="keyed">
            {"keyArray"}
          </_components.code>
          {" will treat it as the same item."}
        </_components.p>
        {"\n"}
        <_components.h2 id="key">
          <_components.a className="header-anchor" href="#key">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="Key" data-code-package-name="keyed">
            {"<Key>"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Creates a list of elements by mapping items by provided key. Similar to Solid's "}
          <_components.code>{"<For>"}</_components.code>
          {" and "}
          <_components.code>{"<Index>"}</_components.code>
          {", but here, both value and index arguments are signals."}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "But changing the value does not rerender the element, only where the value is being used."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-1">
          <_components.a className="header-anchor" href="#how-to-use-it-1">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.h4 id="import-1">
          <_components.a className="header-anchor" href="#import-1">
            {"#"}
          </_components.a>
          {"Import"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { "}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {" } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/keyed"'}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="typical-usage">
          <_components.a className="header-anchor" href="#typical-usage">
            {"#"}
          </_components.a>
          {"Typical usage"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"Both "}
          <_components.code>{"each"}</_components.code>
          {" and "}
          <_components.code>{"by"}</_components.code>
          {" have to be provided. The "}
          <_components.code>{"fallback"}</_components.code>
          {" prop is optional, it will be displayed when the list in "}
          <_components.code>{"each"}</_components.code>
          {" is missing or empty."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            {"<"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {" each={"}
            <_components.span className="hljs-title function_">{"items"}</_components.span>
            {"()} by={"}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"item"}</_components.span>
              {" =>"}
            </_components.span>
            {" item."}
            <_components.span className="hljs-property">{"id"}</_components.span>
            {"} fallback={"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"No items"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"}>\n  {"}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"item"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"{item()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"}\n</"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {">\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="key-shortcut">
          <_components.a className="header-anchor" href="#key-shortcut">
            {"#"}
          </_components.a>
          {"Key shortcut"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"prop "}
          <_components.code>{"by"}</_components.code>
          {" can also be an object key"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            {"<"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {" each={"}
            <_components.span className="hljs-title function_">{"items"}</_components.span>
            {"()} by="}
            <_components.span className="hljs-string">{'"id"'}</_components.span>
            {">\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="index-argument">
          <_components.a className="header-anchor" href="#index-argument">
            {"#"}
          </_components.a>
          {"Index argument"}
        </_components.h4>
        {"\n"}
        <_components.p>{"Second argument of the map function is an index signal."}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            {"<"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {" each={"}
            <_components.span className="hljs-title function_">{"items"}</_components.span>
            {"()} by="}
            <_components.span className="hljs-string">{'"id"'}</_components.span>
            {">\n  {"}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"item, index"}</_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"data-index"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{index()}"}</_components.span>
                {">"}
              </_components.span>
              {"{item()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"}\n</"}
            <_components.span className="hljs-title class_">{"Key"}</_components.span>
            {">\n"}
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
          <_components.a href="https://codesandbox.io/s/solid-primitives-keyed-key-demo-gh7gd?file=/index.tsx">
            {"https://codesandbox.io/s/solid-primitives-keyed-key-demo-gh7gd?file=/index.tsx"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="entries">
          <_components.a className="header-anchor" href="#entries">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="Entries" data-code-package-name="keyed">
            {"<Entries>"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Creates a list of elements by mapping object entries. Similar to Solid's "}
          <_components.code>{"<For>"}</_components.code>
          {" and "}
          <_components.code>{"<Index>"}</_components.code>
          {
            ", but here, render function takes three arguments, and both value and index arguments are signals."
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
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { "}
            <_components.span className="hljs-title class_">{"Entries"}</_components.span>
            {" } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/keyed"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Entries"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"of"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{object()}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"fallback"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{"}</_components.span>
                {"<"}
                <_components.span className="hljs-attr">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"No items"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"}>\n  {(key, value) => (\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n      {key}: {value()}\n    "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n  )}\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Entries"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="index-argument-1">
          <_components.a className="header-anchor" href="#index-argument-1">
            {"#"}
          </_components.a>
          {"Index argument"}
        </_components.h3>
        {"\n"}
        <_components.p>{"Third argument of the map function is an index signal."}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            {"<"}
            <_components.span className="hljs-title class_">{"Entries"}</_components.span>{" "}
            <_components.span className="hljs-keyword">{"of"}</_components.span>
            {"={"}
            <_components.span className="hljs-title function_">{"object"}</_components.span>
            {"()} fallback={"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"No items"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"}>\n  {"}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"key, value, index"}</_components.span>
              {") =>"}
            </_components.span>
            {" (\n    "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"data-index"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{index()}"}</_components.span>
                {">"}
              </_components.span>
              {"\n      {key}: {value()}\n    "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n  )}\n</"}
            <_components.span className="hljs-title class_">{"Entries"}</_components.span>
            {">\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="rerun">
          <_components.a className="header-anchor" href="#rerun">
            {"#"}
          </_components.a>
          <_components.code>{"<Rerun>"}</_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Causes the children to rerender when the "}
          <_components.code>{"on"}</_components.code>
          {" key changes. Equivalent of "}
          <_components.code>{"v-key"}</_components.code>
          {" in vue, and "}
          <_components.code>{"{#key}"}</_components.code>
          {" in svelte."}
        </_components.p>
        {"\n"}
        <_components.blockquote>
          {"\n"}
          <_components.p>
            <_components.strong>{"Note:"}</_components.strong>
            {" Since Solid 1.5.0 the "}
            <_components.code>{"<Show>"}</_components.code>
            {" component has a "}
            <_components.code>{"keyed"}</_components.code>
            {" prop that works very similarly to "}
            <_components.code>{"<Rerun>"}</_components.code>
            {"."}
          </_components.p>
          {"\n"}
        </_components.blockquote>
        {"\n"}
        <_components.h3 id="import-2">
          <_components.a className="header-anchor" href="#import-2">
            {"#"}
          </_components.a>
          {"Import"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { "}
            <_components.span className="hljs-title class_">{"Rerun"}</_components.span>
            {" } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/keyed"'}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="how-to-use-it-3">
          <_components.a className="header-anchor" href="#how-to-use-it-3">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"You have to provide a "}
          <_components.code>{"on"}</_components.code>
          {" prop. Changing it, will cause the children to rerender."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, setCount] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">
              {"// will rerender whole <button>, instead of just text"}
            </_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Rerun"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"on"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{count()}"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {" setCount(p => ++p)}>{count()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
              {"\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Rerun"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">{"// or pass a function"}</_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Rerun"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"on"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {" count()}/>"}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">
              {"// or an array of dependencies"}
            </_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Rerun"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"on"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{[count,"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"name"}</_components.span>
                {", "}
                <_components.span className="hljs-attr">{"length"}</_components.span>
                {"]}/>"}
              </_components.span>
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="passing-a-function-as-children">
          <_components.a className="header-anchor" href="#passing-a-function-as-children">
            {"#"}
          </_components.a>
          {"Passing a function as children"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"You can treat "}
          <_components.code>{"on"}</_components.code>
          {" prop like sources argument of the Solid's "}
          <_components.code>{"on"}</_components.code>
          {" helper, and the children as the second, callback argument."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            {"<"}
            <_components.span className="hljs-title class_">{"Rerun"}</_components.span>
            {" on={[count, className]}>\n  {"}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"[count, className]"}</_components.span>
              {") =>"}
            </_components.span>
            {" (\n    "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"class"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{className}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {" setCount(p => ++p)}>\n      {count}\n    "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n  )}\n</"}
            <_components.span className="hljs-title class_">{"Rerun"}</_components.span>
            {">\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="using-with-transition">
          <_components.a className="header-anchor" href="#using-with-transition">
            {"#"}
          </_components.a>
          {"Using with Transition"}
        </_components.h4>
        {"\n"}
        <_components.p>
          <_components.code>{"<Rerun>"}</_components.code>
          {" can be used together with "}
          <_components.a href="#https://github.com/solidjs/solid-transition-group">
            <_components.code>{"solid-transition-group"}</_components.code>
          </_components.a>
          {" to animate single component's transition, on state change."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            {"<"}
            <_components.span className="hljs-title class_">{"Transition"}</_components.span>
            {" name="}
            <_components.span className="hljs-string">{'"your-animation"'}</_components.span>
            {" mode="}
            <_components.span className="hljs-string">{'"outin"'}</_components.span>
            {">\n  "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Rerun"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"on"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{count()}"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {" setCount(p => ++p)}>{count()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Rerun"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n</"}
            <_components.span className="hljs-title class_">{"Transition"}</_components.span>
            {">\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="demo-1">
          <_components.a className="header-anchor" href="#demo-1">
            {"#"}
          </_components.a>
          {"DEMO"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-keyed-rerun-demo-14vjr?file=/index.tsx">
            {"https://codesandbox.io/s/solid-primitives-keyed-rerun-demo-14vjr?file=/index.tsx"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/keyed/CHANGELOG.md">
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
      packageName="@solid-primitives/keyed"
      name="keyed"
      stage={3}
      packageList={[{ name: "keyed", gzipped: "790 B", minified: "1.63 KB" }]}
      primitiveList={[
        { name: "Key", gzipped: "655 B", minified: "1.25 KB" },
        { name: "Entries", gzipped: "244 B", minified: "358 B" },
        { name: "keyArray", gzipped: "584 B", minified: "1.11 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
