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
      a: "a",
      ul: "ul",
      li: "li",
      code: "code",
      h2: "h2",
      h3: "h3",
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
          {"This primitive is designed to that make reading and writing to "}
          <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API">
            {"Clipboard API"}
          </_components.a>
          {" easy. It also comes with a convenient directive to write to clipboard."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#readclipboard">
              <_components.code>{"readClipboard"}</_components.code>
            </_components.a>
            {" - A basic non-reactive primitive that makes accessing the clipboard easy."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#writeclipboard">
              <_components.code
                data-code-primitive-name="writeClipboard"
                data-code-package-name="clipboard"
              >
                {"writeClipboard"}
              </_components.code>
            </_components.a>
            {" - A basic non-reactive primitive that makes writing to the clipboard easy."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createclipboard">
              <_components.code
                data-code-primitive-name="createClipboard"
                data-code-package-name="clipboard"
              >
                {"createClipboard"}
              </_components.code>
            </_components.a>
            {
              " - This primitive provides full facilities for reading and writing to the clipboard. It allows for writing to clipboard via exported function or input signal. It wraps the Clipboard Async API with a resource and supplies reactive helpers to make pulling from the clipboard easy."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#copytoclipboard">
              <_components.code>{"copyToClipboard"}</_components.code>
            </_components.a>
            {" - convenient directive for setting the clipboard value."}
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
      <CopyPackages packageName="@solid-primitives/clipboard" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="readclipboard">
          <_components.a className="header-anchor" href="#readclipboard">
            {"#"}
          </_components.a>
          <_components.code>{"readClipboard"}</_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "A basic non-reactive primitive that makes accessing the clipboard easy. Note that write supports both string and ClipboardItems object structure."
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
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { readClipboard } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/clipboard"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" clipboard = "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"readClipboard"}</_components.span>
            {"();\n\nclipboard."}
            <_components.span className="hljs-title function_">{"forEach"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"item"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" (item."}
            <_components.span className="hljs-property">{"type"}</_components.span>
            {" == "}
            <_components.span className="hljs-string">{'"text/plain"'}</_components.span>
            {") {\n    "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(item."}
            <_components.span className="hljs-title function_">{"text"}</_components.span>
            {"());\n  }\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="writeclipboard">
          <_components.a className="header-anchor" href="#writeclipboard">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="writeClipboard"
            data-code-package-name="clipboard"
          >
            {"writeClipboard"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "A basic non-reactive primitive that makes writing to the clipboard easy. Note that write supports both string and ClipboardItems object structure."
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
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { writeClipboard } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/clipboard"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-title function_">{"writeClipboard"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Hello World"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">{"// or"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-title function_">{"writeClipboard"}</_components.span>
            {"([\n  "}
            <_components.span className="hljs-keyword">{"new"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"ClipboardItem"}</_components.span>
            {"({\n    "}
            <_components.span className="hljs-string">{'"text/plain"'}</_components.span>
            {": "}
            <_components.span className="hljs-keyword">{"new"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"Blob"}</_components.span>
            {"(["}
            <_components.span className="hljs-string">{'"Hello World"'}</_components.span>
            {"], { "}
            <_components.span className="hljs-attr">{"type"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"text/plain"'}</_components.span>
            {" }),\n  }),\n]);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createclipboard">
          <_components.a className="header-anchor" href="#createclipboard">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createClipboard"
            data-code-package-name="clipboard"
          >
            {"createClipboard"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "This primitive provides full facilities for reading and writing to the clipboard. It allows for writing to clipboard via exported function or input signal. It wraps the Clipboard Async API with a resource and supplies reactive helpers to make pulling from the clipboard easy."
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
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [data, setData] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Hello"'}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [clipboard, refresh] = "}
            <_components.span className="hljs-title function_">
              {"createClipboard"}
            </_components.span>
            {"(data); "}
            <_components.span className="hljs-comment">
              {'// will write "Hello" to clipboard'}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-title function_">{"setData"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"foobar"'}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {'// will write "foobar" to clipboard'}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-title function_">{"refresh"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// will read from clipboard and update clipboard() signal"}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n  "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Suspense"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"fallback"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{"}</_components.span>
                {'"'}
                <_components.span className="hljs-attr">{"Loading..."}</_components.span>
                {'"}>'}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"For"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"each"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{clipboard()}"}</_components.span>
                {">"}
              </_components.span>
              {"\n      {item => (\n        "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Switch"}</_components.span>
                {">"}
              </_components.span>
              {"\n          "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Match"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"when"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{item.type"}</_components.span>
                {" == "}
                <_components.span className="hljs-string">{'"text/plain"'}</_components.span>
                {"}>"}
              </_components.span>
              {"{item.text}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Match"}</_components.span>
                {">"}
              </_components.span>
              {"\n          "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Match"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"when"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{item.type"}</_components.span>
                {" == "}
                <_components.span className="hljs-string">{'"image/png"'}</_components.span>
                {"}>"}
              </_components.span>
              {"\n            "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"img"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"class"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"w-full"'}</_components.span>{" "}
                <_components.span className="hljs-attr">{"src"}</_components.span>
                {"="}
                <_components.span className="hljs-string">
                  {"{URL.createObjectURL(item.blob)}"}
                </_components.span>
                {" />"}
              </_components.span>
              {"\n          "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Match"}</_components.span>
                {">"}
              </_components.span>
              {"\n        "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Switch"}</_components.span>
                {">"}
              </_components.span>
              {"\n      )}\n    "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"For"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Suspense"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"Note: The primitive binds and listens for "}
          <_components.code>{"clipboardchange"}</_components.code>
          {
            " meaning that clipboard changes should automatically propagate. The implementation however is buggy on certain browsers."
          }
        </_components.p>
        {"\n"}
        <_components.h2 id="copytoclipboard">
          <_components.a className="header-anchor" href="#copytoclipboard">
            {"#"}
          </_components.a>
          <_components.code>{"copyToClipboard"}</_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "You can also use clipboard as a convenient directive for setting the clipboard value. You can override the default value and the setter with the options parameter."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { copyToClipboard } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/clipboard"'}
            </_components.span>
            {";\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"input"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"type"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"text"'}</_components.span>{" "}
                <_components.span className="hljs-attr">{"use:copyToClipboard"}</_components.span>
                {" />"}
              </_components.span>
            </_components.span>
            {";\n"}
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
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"copyToClipboard"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"\n  el: Element,\n  options: MaybeAccessor<{\n    value?: "}
              <_components.span className="hljs-built_in">{"any"}</_components.span>
              {";\n    setter?: ClipboardSetter;\n    highlight?: HighlightModifier;\n  }>,\n"}
            </_components.span>
            {");\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="highlightersrange-selection">
          <_components.a className="header-anchor" href="#highlightersrange-selection">
            {"#"}
          </_components.a>
          {"Highlighters/Range Selection"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "In some scenarios you'll want to highlight or select a range of text. copyToClipboard has an option to specify the type of highlighting you'd like. Use either "
          }
          <_components.code>{"input"}</_components.code>
          {" or "}
          <_components.code>{"element"}</_components.code>
          {" based on the type you're making selectable."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { copyToClipboard, input, element } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/clipboard"'}
            </_components.span>
            {";\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"input"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"type"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"text"'}</_components.span>{" "}
                <_components.span className="hljs-attr">{"use:copyToClipboard"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{{"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"highlight:"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"input"}</_components.span>
                {"() }} />"}
              </_components.span>
            </_components.span>
            {";\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"use:copyToClipboard"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{{"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"highlight:"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"element"}</_components.span>
                {"("}
                <_components.span className="hljs-attr">{"5"}</_components.span>
                {", "}
                <_components.span className="hljs-attr">{"10"}</_components.span>
                {") }} />"}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="newitem">
          <_components.a className="header-anchor" href="#newitem">
            {"#"}
          </_components.a>
          <_components.code>{"newItem"}</_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "This package ships with newItem which is a helper method for creating new ClipboardItem types."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { newItem } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/clipboard"'}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-title function_">{"write"}</_components.span>
            {"(["}
            <_components.span className="hljs-title function_">{"newItem"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"image/png"'}</_components.span>
            {", "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>
            {" image."}
            <_components.span className="hljs-title function_">{"blob"}</_components.span>
            {"())]);\n"}
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
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"newItem"}</_components.span>
            {"("}
            <_components.span className="hljs-params">
              <_components.span className="hljs-keyword">{"type"}</_components.span>
              {": "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {", data: ClipboardItemData"}
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">{"ClipboardItem"}</_components.span>
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/clipboard/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"You may view a working example in "}
          <_components.a href="./dev/index.tsx">{"the /dev playground"}</_components.a>
          {" deplayed on [solidjs-community.github.io/solid-primitives/clipboard]("}
          <_components.a href="https://solidjs-community.github.io">
            {"https://solidjs-community.github.io"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/clipboard/CHANGELOG.md">
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
      packageName="@solid-primitives/clipboard"
      name="clipboard"
      stage={3}
      packageList={[{ name: "clipboard", gzipped: "925 B", minified: "1.86 KB" }]}
      primitiveList={[
        { name: "writeClipboard", gzipped: "164 B", minified: "241 B" },
        { name: "createClipboard", gzipped: "494 B", minified: "910 B" },
        { name: "copyClipboard", gzipped: "0 B", minified: "0 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
