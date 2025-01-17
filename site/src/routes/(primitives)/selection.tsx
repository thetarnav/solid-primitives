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
      pre: "pre",
      span: "span",
      h4: "h4",
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
          {
            "Primitive that helps reactively reading/setting cursor position and selections both in text fields and contenteditable elements."
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
      <CopyPackages packageName="@solid-primitives/selection" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="usage">
          <_components.a className="header-anchor" href="#usage">
            {"#"}
          </_components.a>
          {"Usage"}
        </_components.h2>
        {"\n"}
        <_components.p>
          {"The format of the getter output and setter input is "}
          <_components.code>{"HTMLSelection"}</_components.code>
          {
            ", consisting of a tuple of the node in which the selection happens and a start and end offset within the text content. The offsets count from zero, so "
          }
          <_components.code>{"1"}</_components.code>
          {" would be the second character."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createSelection } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/selection"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [selection, setSelection] = "}
            <_components.span className="hljs-title function_">
              {"createSelection"}
            </_components.span>
            {"();\n\n"}
            <_components.span className="hljs-comment">
              {"// nothing is selected:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"selection"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// [null, NaN, NaN]"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">
              {"// select the second to fourth letter inside a contentEditable div:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setSelection"}</_components.span>
            {"(["}
            <_components.span className="hljs-variable language_">{"document"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"querySelector"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"div[contenteditable]"'}</_components.span>
            {"), "}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {"]);\n"}
            <_components.span className="hljs-title function_">{"selection"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// [HTMLDivElement, 1, 3]"}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">
              {
                "// change the selection to a cursor behind the fourth letter inside the first input:"
              }
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setSelection"}</_components.span>
            {"(["}
            <_components.span className="hljs-variable language_">{"document"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"querySelector"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"input"'}</_components.span>
            {"), "}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {"]);\n"}
            <_components.span className="hljs-title function_">{"selection"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// [HTMLInputElement, 3, 3]"}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">
              {"// remove the selection again:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setSelection"}</_components.span>
            {"(["}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {", "}
            <_components.span className="hljs-title class_">{"NaN"}</_components.span>
            {", "}
            <_components.span className="hljs-title class_">{"NaN"}</_components.span>
            {"]);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "Gets and sets the selection. Handles input, textarea, contentEditable elements and plain text. Use it to manipulate or keep the cursor / selection when overwriting values or innerHTML. In order to use it with an input mask to apply it to a contentEditable element, you can use:"
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createSelection } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/selection"'}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { anyMaskToFn } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/input-mask"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [selection, setSelection] = "}
            <_components.span className="hljs-title function_">
              {"createSelection"}
            </_components.span>
            {"();\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" ibanMask = "}
            <_components.span className="hljs-title function_">{"anyMaskToFn"}</_components.span>
            {"("}
            <_components.span className="hljs-string">
              {'"aa99999999999999999999"'}
            </_components.span>
            {");\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"inputMaskHandler"}
            </_components.span>
            {" = ev => {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [node, start, end] = "}
            <_components.span className="hljs-title function_">{"selection"}</_components.span>
            {"();\n  "}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" (ev."}
            <_components.span className="hljs-property">{"currentTarget"}</_components.span>
            {" === node) {\n    "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [value, selection] = "}
            <_components.span className="hljs-title function_">{"ibanMask"}</_components.span>
            {"(node."}
            <_components.span className="hljs-property">{"innerHTML"}</_components.span>
            {", [start, end]);\n    node."}
            <_components.span className="hljs-property">{"innerHTML"}</_components.span>
            {" = value;\n    "}
            <_components.span className="hljs-title function_">{"setSelection"}</_components.span>
            {"([node, selection["}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {"], selection["}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {"]]);\n  }\n};\n\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"contenteditable"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onInput"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{inputMaskHandler}"}</_components.span>
                {">"}
              </_components.span>
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"For more information about input-mask, see its "}
          <_components.a href="../input-mask/README.md">{"README.md"}</_components.a>
          {"."}
        </_components.p>
        {"\n"}
        <_components.h4 id="by-product-gettextnodes">
          <_components.a className="header-anchor" href="#by-product-gettextnodes">
            {"#"}
          </_components.a>
          {"By-product: getTextNodes"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {
            "Since we need it for the selection inside contentEditable elements, there is a function called "
          }
          <_components.code>{"getTextNodes"}</_components.code>
          {
            " that will return all text nodes inside the given DOM node in their actual order, even if encapsulated by other elements:"
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { getTextNodes } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/select"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-title function_">{"getTextNodes"}</_components.span>
            {"(div); "}
            <_components.span className="hljs-comment">{"// [Text, Text, Text]"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"At some point, this might move into the "}
          <_components.a href="../utils/README.md">{"utils"}</_components.a>
          {
            " package if used by other primitives, but in this case, it will be re-exported not to break compatibility."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"DEMO"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.a href="https://solidjs-community.github.io/solid-primitives/selection">
            {"https://solidjs-community.github.io/solid-primitives/selection"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/selection/CHANGELOG.md">
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
      packageName="@solid-primitives/selection"
      name="selection"
      stage={0}
      packageList={[{ name: "selection", gzipped: "809 B", minified: "1.77 KB" }]}
      primitiveList={[{ name: "createSelection", gzipped: "800 B", minified: "1.75 KB" }]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
