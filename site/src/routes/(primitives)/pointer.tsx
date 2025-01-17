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
      h4: "h4",
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
          {
            "A collection of primitives, giving you a nicer API to handle pointer events in a reactive context."
          }
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createPointerListeners">
              <_components.code
                data-code-primitive-name="createPointerListeners"
                data-code-package-name="pointer"
              >
                {"createPointerListeners"}
              </_components.code>
            </_components.a>
            {
              " - Setups event listeners for pointer events, that will get automatically removed on cleanup,"
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createPerPointerListeners">
              <_components.code
                data-code-primitive-name="createPerPointerListeners"
                data-code-package-name="pointer"
              >
                {"createPerPointerListeners"}
              </_components.code>
            </_components.a>
            {
              " - Setup pointer event listeners, while following the pointers individually, from when they appear, until they're gone,"
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createPointerPosition">
              <_components.code
                data-code-primitive-name="createPointerPosition"
                data-code-package-name="pointer"
              >
                {"createPointerPosition"}
              </_components.code>
            </_components.a>
            {" - Returns a signal with autoupdating Pointer position,"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createPointerList">
              <_components.code
                data-code-primitive-name="createPointerList"
                data-code-package-name="pointer"
              >
                {"createPointerList"}
              </_components.code>
            </_components.a>
            {" - Provides a signal of current pointers on screen"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#pointerHover">
              <_components.code>{"pointerHover"}</_components.code>
            </_components.a>
            {" - A directive for checking if the element is being hovered by at least one pointer."}
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
      <CopyPackages packageName="@solid-primitives/pointer" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createpointerlisteners">
          <_components.a className="header-anchor" href="#createpointerlisteners">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createPointerListeners"
            data-code-package-name="pointer"
          >
            {"createPointerListeners"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Setups event listeners for pointer events, that will get automatically removed on cleanup"
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="import">
          <_components.a className="header-anchor" href="#import">
            {"#"}
          </_components.a>
          {"Import"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createPointerListeners } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/pointer"'}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Primitive takes one "}
          <_components.code>{"config"}</_components.code>
          {" argument, of options:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"target"}</_components.code>
            {" - specify the target to attach the listeners to. Will default to "}
            <_components.code>{"document.body"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"pointerTypes"}</_components.code>
            {" - specify array of pointer types you want to listen to. By default listens to "}
            <_components.code>{'["mouse", "touch", "pen"]'}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"passive"}</_components.code>
            {" - Add passive option to event listeners. Defaults to "}
            <_components.code>{"true"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li>
            {"your event handlers: e.g. "}
            <_components.code>{"onenter"}</_components.code>
            {", "}
            <_components.code>{"onLeave"}</_components.code>
            {", "}
            <_components.code>{"onMove"}</_components.code>
            {", ..."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-title function_">
              {"createPointerListeners"}
            </_components.span>
            {"({\n  "}
            <_components.span className="hljs-comment">
              {"// pass a function if the element is yet to mount"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-attr">{"target"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" el,\n  "}
            <_components.span className="hljs-attr">{"pointerTypes"}</_components.span>
            {": ["}
            <_components.span className="hljs-string">{'"touch"'}</_components.span>
            {"],\n  "}
            <_components.span className="hljs-comment">
              {"// both lowerace or capitalized kays work"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-attr">{"onEnter"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"enter"'}</_components.span>
            {", e."}
            <_components.span className="hljs-property">{"x"}</_components.span>
            {", e."}
            <_components.span className="hljs-property">{"y"}</_components.span>
            {"),\n  "}
            <_components.span className="hljs-attr">{"onmove"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"x"}</_components.span>
            {": e."}
            <_components.span className="hljs-property">{"x"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"y"}</_components.span>
            {": e."}
            <_components.span className="hljs-property">{"y"}</_components.span>
            {" }),\n  "}
            <_components.span className="hljs-attr">{"onup"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"pointer up"'}</_components.span>
            {", e."}
            <_components.span className="hljs-property">{"x"}</_components.span>
            {", e."}
            <_components.span className="hljs-property">{"y"}</_components.span>
            {"),\n  "}
            <_components.span className="hljs-attr">{"onLostCapture"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"lost"'}</_components.span>
            {"),\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createperpointerlisteners">
          <_components.a className="header-anchor" href="#createperpointerlisteners">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createPerPointerListeners"
            data-code-package-name="pointer"
          >
            {"createPerPointerListeners"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Setup pointer event listeners, while following the pointers individually, from when they appear, until they're gone."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="import-1">
          <_components.a className="header-anchor" href="#import-1">
            {"#"}
          </_components.a>
          {"Import"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createPerPointerListeners } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/pointer"'}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="how-to-use-it-1">
          <_components.a className="header-anchor" href="#how-to-use-it-1">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Primitive takes one "}
          <_components.code>{"config"}</_components.code>
          {" argument, of options:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"target"}</_components.code>
            {" - specify the target to attach the listeners to. Will default to "}
            <_components.code>{"document.body"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"pointerTypes"}</_components.code>
            {" - specify array of pointer types you want to listen to. By default listens to "}
            <_components.code>{'["mouse", "touch", "pen"]'}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"passive"}</_components.code>
            {" - Add passive option to event listeners. Defaults to "}
            <_components.code>{"true"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"onDown"}</_components.code>
            {" - Start following a pointer from when it's down."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"onEnter"}</_components.code>
            {" - Start following a pointer from when it enters the screen."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h4 id="ondown">
          <_components.a className="header-anchor" href="#ondown">
            {"#"}
          </_components.a>
          {"onDown"}
        </_components.h4>
        {"\n"}
        <_components.p>
          <_components.code>{"onDown"}</_components.code>
          {" starts when pointer is down, and "}
          <_components.em>{"ends"}</_components.em>
          {" when "}
          <_components.strong>{"that pointer"}</_components.strong>
          {" is up. You can create "}
          <_components.code>{"move"}</_components.code>
          {" and "}
          <_components.code>{"up"}</_components.code>
          {" listeners when the "}
          <_components.code>{"onStart"}</_components.code>
          {" runs, to listen to later events of that pointer."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-title function_">
              {"createPerPointerListeners"}
            </_components.span>
            {"({\n  "}
            <_components.span className="hljs-attr">{"target"}</_components.span>
            {": el,\n  "}
            <_components.span className="hljs-attr">{"pointerTypes"}</_components.span>
            {": ["}
            <_components.span className="hljs-string">{"'touch'"}</_components.span>
            {", "}
            <_components.span className="hljs-string">{"'pen'"}</_components.span>
            {"],\n  "}
            <_components.span className="hljs-title function_">{"onDown"}</_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"{ x, y, pointerId }, onMove, onUp"}
            </_components.span>
            {") {\n    "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(x, y, pointerId);\n    "}
            <_components.span className="hljs-title function_">{"onMove"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...});\n    "}
            <_components.span className="hljs-title function_">{"onUp"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...});\n  }\n})\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="onenter">
          <_components.a className="header-anchor" href="#onenter">
            {"#"}
          </_components.a>
          {"onEnter"}
        </_components.h4>
        {"\n"}
        <_components.p>
          <_components.code>{"onEnter"}</_components.code>
          {" fires when pointer appears on the screen, and "}
          <_components.em>{"ends"}</_components.em>
          {" then "}
          <_components.strong>{"that pointer"}</_components.strong>
          {" leaves the screen. You can listen to "}
          <_components.code>{'"down" | "move" | "up" | "leave" | "cancel"'}</_components.code>
          {" events of that pointer."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-title function_">
              {"createPerPointerListeners"}
            </_components.span>
            {"({\n  "}
            <_components.span className="hljs-title function_">{"onEnter"}</_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"{ x, y, pointerId }, { onMove, onLeave, onDown }"}
            </_components.span>
            {") {\n    "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"New pointer:"'}</_components.span>
            {", pointerId);\n    "}
            <_components.span className="hljs-title function_">{"onDown"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...});\n    "}
            <_components.span className="hljs-title function_">{"onMove"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...});\n    "}
            <_components.span className="hljs-title function_">{"onLeave"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...});\n  }\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"DEMO"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-pointer-demo-zryr5h?file=/app.tsx">
            {"https://codesandbox.io/s/solid-primitives-pointer-demo-zryr5h?file=/app.tsx"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="createpointerposition">
          <_components.a className="header-anchor" href="#createpointerposition">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createPointerPosition"
            data-code-package-name="pointer"
          >
            {"createPointerPosition"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>{"Returns a signal with autoupdating Pointer position."}</_components.p>
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
            {" { createPointerPosition } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/pointer"'}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="how-to-use-it-2">
          <_components.a className="header-anchor" href="#how-to-use-it-2">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Primitive takes one "}
          <_components.code>{"config"}</_components.code>
          {" argument, of options:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"target"}</_components.code>
            {" - specify the target to attach the listeners to. Will default to "}
            <_components.code>{"document.body"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"pointerTypes"}</_components.code>
            {" - specify array of pointer types you want to listen to. By default listens to "}
            <_components.code>{'["mouse", "touch", "pen"]'}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"value"}</_components.code>
            {" - set the initial value of the returned signal "}
            <_components.em>{"(before the first event)"}</_components.em>
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" position = "}
            <_components.span className="hljs-title function_">
              {"createPointerPosition"}
            </_components.span>
            {"({\n  "}
            <_components.span className="hljs-attr">{"target"}</_components.span>
            {": "}
            <_components.span className="hljs-variable language_">{"document"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"querySelector"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"my-el"'}</_components.span>
            {"),\n  "}
            <_components.span className="hljs-attr">{"pointerTypes"}</_components.span>
            {": ["}
            <_components.span className="hljs-string">{'"touch"'}</_components.span>
            {"],\n});\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"position"'}</_components.span>
            {", "}
            <_components.span className="hljs-title function_">{"position"}</_components.span>
            {"()."}
            <_components.span className="hljs-property">{"x"}</_components.span>
            {", "}
            <_components.span className="hljs-title function_">{"position"}</_components.span>
            {"()."}
            <_components.span className="hljs-property">{"y"}</_components.span>
            {");\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"hovering"'}</_components.span>
            {", "}
            <_components.span className="hljs-title function_">{"position"}</_components.span>
            {"()."}
            <_components.span className="hljs-property">{"isActive"}</_components.span>
            {");\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="as-a-directive">
          <_components.a className="header-anchor" href="#as-a-directive">
            {"#"}
          </_components.a>
          {"As a directive"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { pointerPosition } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/pointer"'}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-comment">
              {"// place this in code to avoid being tree-shaken"}
            </_components.span>
            {"\npointerPosition;\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [pos, setPos] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"x"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"y"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {" });\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [hovering, setHovering] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {");\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {"\n  "}
                <_components.span className="hljs-attr">{"use:pointerPosition"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{e"}</_components.span>
                {" =>"}
              </_components.span>
              {" {\n    setPos({ x: e.x, y: e.y });\n    setHovering(e.isActive);\n  }}\n/>"}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createpointerlist">
          <_components.a className="header-anchor" href="#createpointerlist">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createPointerList"
            data-code-package-name="pointer"
          >
            {"createPointerList"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>{"Provides a signal of current pointers on screen."}</_components.p>
        {"\n"}
        <_components.h3 id="import-3">
          <_components.a className="header-anchor" href="#import-3">
            {"#"}
          </_components.a>
          {"Import"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createPointerList } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/pointer"'}
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
          {"Primitive takes one "}
          <_components.code>{"config"}</_components.code>
          {" argument, of options:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"target"}</_components.code>
            {" - specify the target to attach the listeners to. Will default to "}
            <_components.code>{"document.body"}</_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"pointerTypes"}</_components.code>
            {" - specify array of pointer types you want to listen to. By default listens to "}
            <_components.code>{'["mouse", "touch", "pen"]'}</_components.code>
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.p>{"Returns a list of pointers on the screen:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"PointerListItem"}</_components.span>
            {">[]>;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"Basic example:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" points = "}
            <_components.span className="hljs-title function_">
              {"createPointerList"}
            </_components.span>
            {"();\n\n"}
            <_components.span className="hljs-comment">
              {"// notice that points is an signal returning an array of signals"}
            </_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"For"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"each"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{points()}"}</_components.span>
                {">"}
              </_components.span>
              {"{poz => "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"{poz()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"For"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="pointerhover">
          <_components.a className="header-anchor" href="#pointerhover">
            {"#"}
          </_components.a>
          <_components.code>{"pointerHover"}</_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"A directive for checking if the element is being hovered by at least one pointer."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-4">
          <_components.a className="header-anchor" href="#how-to-use-it-4">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { pointerHover } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/pointer"'}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-comment">
              {"// place this in code to avoid being tree-shaken"}
            </_components.span>
            {"\npointerHover;\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [hovering, setHovering] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {");\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"use:pointerHover"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{setHovering}"}</_components.span>
                {" />"}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/pointer/CHANGELOG.md">
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
      packageName="@solid-primitives/pointer"
      name="pointer"
      stage={2}
      packageList={[{ name: "pointer", gzipped: "1.85 KB", minified: "4.29 KB" }]}
      primitiveList={[
        { name: "createPerPointerListeners", gzipped: "997 B", minified: "2.01 KB" },
        { name: "createPointerPosition", gzipped: "991 B", minified: "1.93 KB" },
        { name: "createPointerList", gzipped: "1.3 KB", minified: "2.63 KB" },
        { name: "createPointerListeners", gzipped: "730 B", minified: "1.39 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
