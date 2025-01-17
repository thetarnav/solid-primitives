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
      h5: "h5",
      a: "a",
      ul: "ul",
      li: "li",
      code: "code",
      h2: "h2",
      h4: "h4",
      pre: "pre",
      span: "span",
      h3: "h3",
      h6: "h6",
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
            "A collection of primitives, capturing current mouse cursor position, and helping to deal with common usecases:"
          }
        </_components.p>
        {"\n"}
        <_components.h5 id="reactive-primitives">
          <_components.a className="header-anchor" href="#reactive-primitives">
            {"#"}
          </_components.a>
          {"Reactive primitives:"}
        </_components.h5>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createMousePosition">
              <_components.code
                data-code-primitive-name="createMousePosition"
                data-code-package-name="mouse"
              >
                {"createMousePosition"}
              </_components.code>
            </_components.a>
            {
              " - Listens to the mouse events, providing a reactive up-to-date position of the cursor on the page."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createPositionToElement">
              <_components.code
                data-code-primitive-name="createPositionToElement"
                data-code-package-name="mouse"
              >
                {"createPositionToElement"}
              </_components.code>
            </_components.a>
            {" - Provides an auto-updating position relative to a provided element."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h5 id="non-reactive-primitives">
          <_components.a className="header-anchor" href="#non-reactive-primitives">
            {"#"}
          </_components.a>
          {"Non-reactive primitives:"}
        </_components.h5>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#makeMousePositionListener">
              <_components.code>{"makeMousePositionListener"}</_components.code>
            </_components.a>
            {
              " - Attaches event listeners to provided target, listening for changes to the mouse/touch position."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#makeMouseInsideListener">
              <_components.code>{"makeMouseInsideListener"}</_components.code>
            </_components.a>
            {
              " - Attaches event listeners to provided target, listening for mouse/touch entering/leaving the element."
            }
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h5 id="calculations">
          <_components.a className="header-anchor" href="#calculations">
            {"#"}
          </_components.a>
          {"Calculations:"}
        </_components.h5>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#getPositionToElement">
              <_components.code>{"getPositionToElement"}</_components.code>
            </_components.a>
            {" - Turn position relative to the page, into position relative to an element."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#getPositionInElement">
              <_components.code>{"getPositionInElement"}</_components.code>
            </_components.a>
            {
              " - Turn position relative to the page, into position relative to an element. Clamped to the element bounds."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#getPositionToScreen">
              <_components.code>{"getPositionToScreen"}</_components.code>
            </_components.a>
            {" - Turn position relative to the page, into position relative to the screen."}
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
      <CopyPackages packageName="@solid-primitives/mouse" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createmouseposition">
          <_components.a className="header-anchor" href="#createmouseposition">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createMousePosition"
            data-code-package-name="mouse"
          >
            {"createMousePosition"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Attaches event listeners to provided target, providing a reactive up-to-date position of the cursor on the page."
          }
        </_components.p>
        {"\n"}
        <_components.h4 id="usage">
          <_components.a className="header-anchor" href="#usage">
            {"#"}
          </_components.a>
          {"Usage"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createMousePosition } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/mouse"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" pos = "}
            <_components.span className="hljs-title function_">
              {"createMousePosition"}
            </_components.span>
            {"("}
            <_components.span className="hljs-variable language_">{"window"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(pos."}
            <_components.span className="hljs-property">{"x"}</_components.span>
            {", pos."}
            <_components.span className="hljs-property">{"y"}</_components.span>
            {");\n});\n\n"}
            <_components.span className="hljs-comment">
              {"// target can be a reactive signal"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [el, setEl] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"(ref);\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" pos = "}
            <_components.span className="hljs-title function_">
              {"createMousePosition"}
            </_components.span>
            {"(el);\n\n"}
            <_components.span className="hljs-comment">
              {"// if using a jsx ref, pass it as a function, or wrap primitive inside onMount"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"let"}</_components.span>
            {" ref;\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" pos = "}
            <_components.span className="hljs-title function_">
              {"createMousePosition"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" ref);\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{ref}"}</_components.span>
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
          {"By default "}
          <_components.code
            data-code-primitive-name="createMousePosition"
            data-code-package-name="mouse"
          >
            {"createMousePosition"}
          </_components.code>
          {" is listening to "}
          <_components.code>{"touch"}</_components.code>
          {" events as well. You can disable that behavior with "}
          <_components.code>{"touch"}</_components.code>
          {" and "}
          <_components.code>{"followTouch"}</_components.code>
          {" options."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"// disables following touch position – only registers touch start"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" pos = "}
            <_components.span className="hljs-title function_">
              {"createMousePosition"}
            </_components.span>
            {"("}
            <_components.span className="hljs-variable language_">{"window"}</_components.span>
            {", { "}
            <_components.span className="hljs-attr">{"followTouch"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-comment">
              {"// disables listening to any touch events"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" pos = "}
            <_components.span className="hljs-title function_">
              {"createMousePosition"}
            </_components.span>
            {"("}
            <_components.span className="hljs-variable language_">{"window"}</_components.span>
            {", { "}
            <_components.span className="hljs-attr">{"touch"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {" });\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="usemouseposition">
          <_components.a className="header-anchor" href="#usemouseposition">
            {"#"}
          </_components.a>
          <_components.code>{"useMousePosition"}</_components.code>
        </_components.h4>
        {"\n"}
        <_components.p>
          {"This primitive provides a "}
          <_components.a href="https://github.com/solidjs-community/solid-primitives/tree/main/packages/rootless#createSharedRoot">
            {"shared root"}
          </_components.a>
          {
            " variant that will listen to window mouse position, and reuse event listeners and signals across dependents."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" pos = "}
            <_components.span className="hljs-title function_">
              {"useMousePosition"}
            </_components.span>
            {"();\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(pos."}
            <_components.span className="hljs-property">{"x"}</_components.span>
            {", pos."}
            <_components.span className="hljs-property">{"y"}</_components.span>
            {");\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="definition">
          <_components.a className="header-anchor" href="#definition">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createMousePosition"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {
                "\n  target?: MaybeAccessor<Window | Document | HTMLElement>,\n  options?: MousePositionOptions,\n"
              }
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">
              {"MousePositionInside"}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createpositiontoelement">
          <_components.a className="header-anchor" href="#createpositiontoelement">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createPositionToElement"
            data-code-package-name="mouse"
          >
            {"createPositionToElement"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Provides an autoupdating position relative to an element based on provided page position."
          }
        </_components.p>
        {"\n"}
        <_components.h4 id="usage-1">
          <_components.a className="header-anchor" href="#usage-1">
            {"#"}
          </_components.a>
          {"Usage"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createPositionToElement, useMousePosition } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/mouse"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" pos = "}
            <_components.span className="hljs-title function_">
              {"useMousePosition"}
            </_components.span>
            {"();\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" relative = "}
            <_components.span className="hljs-title function_">
              {"createPositionToElement"}
            </_components.span>
            {"(ref, "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" pos);\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(relative."}
            <_components.span className="hljs-property">{"x"}</_components.span>
            {", relative."}
            <_components.span className="hljs-property">{"y"}</_components.span>
            {");\n});\n\n"}
            <_components.span className="hljs-comment">
              {"// target can be a reactive signal"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [el, setEl] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"(ref);\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" relative = "}
            <_components.span className="hljs-title function_">
              {"createPositionToElement"}
            </_components.span>
            {"(el, "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" pos);\n\n"}
            <_components.span className="hljs-comment">
              {"// if using a jsx ref, pass it as a function, or wrap primitive inside onMount"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"let"}</_components.span>
            {" ref;\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" relative = "}
            <_components.span className="hljs-title function_">
              {"createPositionToElement"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" ref);\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{ref}"}</_components.span>
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
        <_components.h4 id="definition-1">
          <_components.a className="header-anchor" href="#definition-1">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createPositionToElement"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"\n  element: Element | Accessor<Element | "}
              <_components.span className="hljs-literal">{"undefined"}</_components.span>
              {">,\n  pos: Accessor<Position>,\n  options?: PositionToElementOptions,\n"}
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">
              {"PositionRelativeToElement"}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="non-reactive-primitives-1">
          <_components.a className="header-anchor" href="#non-reactive-primitives-1">
            {"#"}
          </_components.a>
          {"Non-reactive primitives:"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="makemousepositionlistener">
          <_components.a className="header-anchor" href="#makemousepositionlistener">
            {"#"}
          </_components.a>
          <_components.code>{"makeMousePositionListener"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.h6 id="added-id-200">
          <_components.a className="header-anchor" href="#added-id-200">
            {"#"}
          </_components.a>
          {"Added id "}
          <_components.code>{"@2.0.0"}</_components.code>
        </_components.h6>
        {"\n"}
        <_components.p>
          {
            "Attaches event listeners to provided target, listening for changes to the mouse/touch position."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" clear = "}
            <_components.span className="hljs-title function_">
              {"makeMousePositionListener"}
            </_components.span>
            {"(el, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"pos"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(pos), { "}
            <_components.span className="hljs-attr">{"touch"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {" });\n"}
            <_components.span className="hljs-comment">
              {"// remove listeners manually (will happen on cleanup)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"clear"}</_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="makemouseinsidelistener">
          <_components.a className="header-anchor" href="#makemouseinsidelistener">
            {"#"}
          </_components.a>
          <_components.code>{"makeMouseInsideListener"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.h6 id="added-id-200-1">
          <_components.a className="header-anchor" href="#added-id-200-1">
            {"#"}
          </_components.a>
          {"Added id "}
          <_components.code>{"@2.0.0"}</_components.code>
        </_components.h6>
        {"\n"}
        <_components.p>
          {
            "Attaches event listeners to provided target, listening for mouse/touch entering/leaving the element."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" clear = "}
            <_components.span className="hljs-title function_">
              {"makeMouseInsideListener"}
            </_components.span>
            {"(el, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"inside"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(inside), { "}
            <_components.span className="hljs-attr">{"touch"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {" });\n"}
            <_components.span className="hljs-comment">
              {"// remove listeners manually (will happen on cleanup)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"clear"}</_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="calculations-1">
          <_components.a className="header-anchor" href="#calculations-1">
            {"#"}
          </_components.a>
          {"Calculations"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="getpositiontoelement">
          <_components.a className="header-anchor" href="#getpositiontoelement">
            {"#"}
          </_components.a>
          <_components.code>{"getPositionToElement"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Turn position relative to the page, into position relative to an element."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" pos = "}
            <_components.span className="hljs-title function_">
              {"getPositionToElement"}
            </_components.span>
            {"(pageX, pageY, element);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="getpositioninelement">
          <_components.a className="header-anchor" href="#getpositioninelement">
            {"#"}
          </_components.a>
          <_components.code>{"getPositionInElement"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "Turn position relative to the page, into position relative to an element. Clamped to the element bounds."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" pos = "}
            <_components.span className="hljs-title function_">
              {"getPositionInElement"}
            </_components.span>
            {"(pageX, pageY, element);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="getpositiontoscreen">
          <_components.a className="header-anchor" href="#getpositiontoscreen">
            {"#"}
          </_components.a>
          <_components.code>{"getPositionToScreen"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Turn position relative to the page, into position relative to the screen."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" pos = "}
            <_components.span className="hljs-title function_">
              {"getPositionToScreen"}
            </_components.span>
            {"(pageX, pageY);\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/mouse/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-mouse-p10s5?file=/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/mouse/CHANGELOG.md">
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
      packageName="@solid-primitives/mouse"
      name="mouse"
      stage={3}
      packageList={[{ name: "mouse", gzipped: "1.54 KB", minified: "3.45 KB" }]}
      primitiveList={[
        { name: "createPositionToElement", gzipped: "1.43 KB", minified: "3.12 KB" },
        { name: "createMousePosition", gzipped: "1.21 KB", minified: "2.56 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
