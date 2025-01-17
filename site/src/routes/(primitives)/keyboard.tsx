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
      pre: "pre",
      span: "span",
      em: "em",
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
          {"A library of reactive promitives helping handling user's keyboard input."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#useKeyDownList">
              <_components.code
                data-code-primitive-name="useKeyDownList"
                data-code-package-name="keyboard"
              >
                {"useKeyDownList"}
              </_components.code>
            </_components.a>
            {" — Provides a signal with the list of currently held keys"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#useCurrentlyHeldKey">
              <_components.code
                data-code-primitive-name="useCurrentlyHeldKey"
                data-code-package-name="keyboard"
              >
                {"useCurrentlyHeldKey"}
              </_components.code>
            </_components.a>
            {" — Provides a signal with the currently held single key."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#useKeyDownSequence">
              <_components.code
                data-code-primitive-name="useKeyDownSequence"
                data-code-package-name="keyboard"
              >
                {"useKeyDownSequence"}
              </_components.code>
            </_components.a>
            {
              " — Provides a signal with a sequence of currently held keys, as they were pressed down and up."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createKeyHold">
              <_components.code
                data-code-primitive-name="createKeyHold"
                data-code-package-name="keyboard"
              >
                {"createKeyHold"}
              </_components.code>
            </_components.a>
            {" — Provides a signal indicating if provided key is currently being held down."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createShortcut">
              <_components.code
                data-code-primitive-name="createShortcut"
                data-code-package-name="keyboard"
              >
                {"createShortcut"}
              </_components.code>
            </_components.a>
            {" — Creates a keyboard shotcut observer."}
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
      <CopyPackages packageName="@solid-primitives/keyboard" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="usekeydownlist">
          <_components.a className="header-anchor" href="#usekeydownlist">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="useKeyDownList"
            data-code-package-name="keyboard"
          >
            {"useKeyDownList"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Provides a signal with the list of currently held keys, ordered from least recent to most recent."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"This is a "}
          <_components.a href="https://github.com/solidjs-community/solid-primitives/tree/main/packages/rootless#createSharedRoot">
            {"shared root"}
          </_components.a>
          {" primitive that will reuse event listeners and signals across dependents."}
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
            data-code-primitive-name="useKeyDownList"
            data-code-package-name="keyboard"
          >
            {"useKeyDownList"}
          </_components.code>
          {
            " takes no arguments, and returns a signal with the list of currently held keys, and last keydown event."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { useKeyDownList } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/keyboard"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [keys, { event }] = "}
            <_components.span className="hljs-title function_">{"useKeyDownList"}</_components.span>
            {"();\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"keys"}</_components.span>
            {"()); "}
            <_components.span className="hljs-comment">
              {"// => string[] — list of currently held keys"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"event"}</_components.span>
            {"()); "}
            <_components.span className="hljs-comment">
              {"// => KeyboardEvent | null — last keydown event"}
            </_components.span>
            {"\n});\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"For"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"each"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{keys()}"}</_components.span>
                {">"}
              </_components.span>
              {"\n  {key => "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"kbd"}</_components.span>
                {">"}
              </_components.span>
              {"{key}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"kdb"}</_components.span>
                {">"}
              </_components.span>
              {"}\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"For"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="usecurrentlyheldkey">
          <_components.a className="header-anchor" href="#usecurrentlyheldkey">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="useCurrentlyHeldKey"
            data-code-package-name="keyboard"
          >
            {"useCurrentlyHeldKey"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Provides a signal with the currently held single key. Pressing any other key at the same time will reset the signal to "
          }
          <_components.code>{"null"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"This is a "}
          <_components.a href="https://github.com/solidjs-community/solid-primitives/tree/main/packages/rootless#createSharedRoot">
            {"shared root"}
          </_components.a>
          {" primitive that will reuse event listeners and signals across dependents."}
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
            data-code-primitive-name="useCurrentlyHeldKey"
            data-code-package-name="keyboard"
          >
            {"useCurrentlyHeldKey"}
          </_components.code>
          {" takes no arguments, and returns a signal with the currently held single key."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { useCurrentlyHeldKey } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/keyboard"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" key = "}
            <_components.span className="hljs-title function_">
              {"useCurrentlyHeldKey"}
            </_components.span>
            {"();\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"key"}</_components.span>
            {"()); "}
            <_components.span className="hljs-comment">
              {"// => string | null — currently held key"}
            </_components.span>
            {"\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="usekeydownsequence">
          <_components.a className="header-anchor" href="#usekeydownsequence">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="useKeyDownSequence"
            data-code-package-name="keyboard"
          >
            {"useKeyDownSequence"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Provides a signal with a sequence of currently held keys, as they were pressed down and up."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"This is a "}
          <_components.a href="https://github.com/solidjs-community/solid-primitives/tree/main/packages/rootless#createSharedRoot">
            {"shared root"}
          </_components.a>
          {" primitive that will reuse event listeners and signals across dependents."}
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
            data-code-primitive-name="useKeyDownSequence"
            data-code-package-name="keyboard"
          >
            {"useKeyDownSequence"}
          </_components.code>
          {" takes no arguments, and returns a single signal."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { useKeyDownSequence } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/keyboard"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" sequence = "}
            <_components.span className="hljs-title function_">
              {"useKeyDownSequence"}
            </_components.span>
            {"();\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"sequence"}</_components.span>
            {"()); "}
            <_components.span className="hljs-comment">
              {"// => string[][] — sequence of currently held keys"}
            </_components.span>
            {"\n});\n\n"}
            <_components.span className="hljs-comment">
              {"// example sequence of pressing Ctrl + Shift + A"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {'// [["Control"], ["Control", "Shift"], ["Control", "Shift", "A"]]'}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createkeyhold">
          <_components.a className="header-anchor" href="#createkeyhold">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createKeyHold"
            data-code-package-name="keyboard"
          >
            {"createKeyHold"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Provides a "}
          <_components.code>{"boolean"}</_components.code>
          {" signal indicating if provided key is currently being held down."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"Holding multiple keys at the same time will return "}
          <_components.code>{"false"}</_components.code>
          {" — holding only the specified one will return "}
          <_components.code>{"true"}</_components.code>
          {"."}
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
            data-code-primitive-name="createKeyHold"
            data-code-package-name="keyboard"
          >
            {"createKeyHold"}
          </_components.code>
          {" takes two arguments:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"key"}</_components.code>
            {" keyboard key to listen for"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"options"}</_components.code>
            {" additional configuration:"}
            {"\n"}
            <_components.ul>
              {"\n"}
              <_components.li>
                <_components.code>{"preventDefault"}</_components.code>
                {" — call "}
                <_components.code>{"e.preventDefault()"}</_components.code>
                {" on the keyboard event, when the specified key is pressed. "}
                <_components.em>
                  {"(Defaults to "}
                  <_components.code>{"true"}</_components.code>
                  {")"}
                </_components.em>
              </_components.li>
              {"\n"}
            </_components.ul>
            {"\n"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createKeyHold } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/keyboard"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" pressing = "}
            <_components.span className="hljs-title function_">{"createKeyHold"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Alt"'}</_components.span>
            {", { "}
            <_components.span className="hljs-attr">{"preventDefault"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {" });\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"p"}</_components.span>
                {">"}
              </_components.span>
              {'Is pressing Alt? {pressing() ? "YES" : "NO"}'}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"p"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createshortcut">
          <_components.a className="header-anchor" href="#createshortcut">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createShortcut"
            data-code-package-name="keyboard"
          >
            {"createShortcut"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Creates a keyboard shotcut observer. The provided callback will be called when the specified keys are pressed."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-4">
          <_components.a className="header-anchor" href="#how-to-use-it-4">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createShortcut"
            data-code-package-name="keyboard"
          >
            {"createShortcut"}
          </_components.code>
          {" takes three arguments:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"keys"}</_components.code>
            {" — list of keys to listen for"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"callback"}</_components.code>
            {" — callback to call when the specified keys are pressed"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"options"}</_components.code>
            {" — additional configuration:"}
            {"\n"}
            <_components.ul>
              {"\n"}
              <_components.li>
                <_components.code>{"preventDefault"}</_components.code>
                {" — call "}
                <_components.code>{"e.preventDefault()"}</_components.code>
                {" on the keyboard event, when the specified key is pressed. "}
                <_components.em>
                  {"(Defaults to "}
                  <_components.code>{"true"}</_components.code>
                  {")"}
                </_components.em>
              </_components.li>
              {"\n"}
              <_components.li>
                <_components.code>{"requireReset"}</_components.code>
                {" — If "}
                <_components.code>{"true"}</_components.code>
                {
                  ", the shortcut will only be triggered once until all of the keys stop being pressed. Disabled by default."
                }
              </_components.li>
              {"\n"}
            </_components.ul>
            {"\n"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createShortcut } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/keyboard"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-title function_">{"createShortcut"}</_components.span>
            {"(\n  ["}
            <_components.span className="hljs-string">{'"Control"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"Shift"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"A"'}</_components.span>
            {"],\n  "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n    "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Shortcut triggered"'}</_components.span>
            {");\n  },\n  { "}
            <_components.span className="hljs-attr">{"preventDefault"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"requireReset"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" },\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="preventing-default">
          <_components.a className="header-anchor" href="#preventing-default">
            {"#"}
          </_components.a>
          {"Preventing default"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"When "}
          <_components.code>{"preventDefault"}</_components.code>
          {" is "}
          <_components.code>{"true"}</_components.code>
          {", "}
          <_components.code>{"e.preventDefault()"}</_components.code>
          {
            " will be called not only on the keydown event that have triggered the callback, but it will "
          }
          <_components.strong>{"optimistically"}</_components.strong>
          {
            " also prevend the default behavior of every previous keydown that will have the possibility to lead to the shotcut being pressed."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"E.g. when listening for "}
          <_components.code>{"Control + Shift + A"}</_components.code>
          {", all three keydown events will be prevented."}
        </_components.p>
        {"\n"}
        <_components.h2 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"DEMO"}
        </_components.h2>
        {"\n"}
        <_components.p>
          <_components.a href="https://solidjs-community.github.io/solid-primitives/keyboard/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"Working demo of some of the primitives in keyboard package:"}
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-keyboard-demo-s2l84k?file=/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/keyboard/CHANGELOG.md">
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
      packageName="@solid-primitives/keyboard"
      name="keyboard"
      stage={1}
      packageList={[{ name: "keyboard", gzipped: "1.06 KB", minified: "2.38 KB" }]}
      primitiveList={[
        { name: "useCurrentlyHeldKey", gzipped: "665 B", minified: "1.33 KB" },
        { name: "useKeyDownSequence", gzipped: "646 B", minified: "1.29 KB" },
        { name: "createKeyHold", gzipped: "725 B", minified: "1.5 KB" },
        { name: "createShortcut", gzipped: "926 B", minified: "1.98 KB" },
        { name: "useKeyDownList", gzipped: "605 B", minified: "1.19 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
