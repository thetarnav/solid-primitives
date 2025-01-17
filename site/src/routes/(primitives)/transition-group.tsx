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
      code: "code",
      ul: "ul",
      li: "li",
      a: "a",
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
          {
            "Provides reactive primitives for implementing transition effects on a group of elements, or your own "
          }
          <_components.code>{"<Transition>"}</_components.code>
          {" and "}
          <_components.code>{"<TransitionGroup>"}</_components.code>
          {" components."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createSwitchTransition">
              <_components.code
                data-code-primitive-name="createSwitchTransition"
                data-code-package-name="transition-group"
              >
                {"createSwitchTransition"}
              </_components.code>
            </_components.a>
            {" - Create an element transition interface for switching between single elements."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createListTransition">
              <_components.code
                data-code-primitive-name="createListTransition"
                data-code-package-name="transition-group"
              >
                {"createListTransition"}
              </_components.code>
            </_components.a>
            {" - Create an element list transition interface for changes to the list of elements."}
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
      <CopyPackages packageName="@solid-primitives/transition-group" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createswitchtransition">
          <_components.a className="header-anchor" href="#createswitchtransition">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createSwitchTransition"
            data-code-package-name="transition-group"
          >
            {"createSwitchTransition"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Create an element transition interface for switching between single elements.\nIt can be used to implement own transition effect, or a custom "
          }
          <_components.code>{"<Transition>"}</_components.code>
          {"-like component."}
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
          {
            "It will observe the source and return a signal with array of elements to be rendered (current one and exiting ones)."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createSwitchTransition"
            data-code-package-name="transition-group"
          >
            {"createSwitchTransition"}
          </_components.code>
          {" takes two parameters:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"source"}</_components.code>
              {
                " a signal with the current element. Any nullish value will mean there is no element.\nAny object can used as the source, but most likely you will want to use a "
              }
              <_components.code>{"HTMLElement"}</_components.code>
              {" or "}
              <_components.code>{"SVGElement"}</_components.code>
              {"."}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"options"}</_components.code>
              {" transition options:"}
            </_components.p>
            {"\n"}
            <_components.ul>
              {"\n"}
              <_components.li>
                {"\n"}
                <_components.p>
                  <_components.code>{"onEnter"}</_components.code>
                  {
                    " - a function to be called when a new element is entering. It receives the element and a callback to be called when the transition is done."
                  }
                </_components.p>
                {"\n"}
              </_components.li>
              {"\n"}
              <_components.li>
                {"\n"}
                <_components.p>
                  <_components.code>{"onExit"}</_components.code>
                  {
                    " - a function to be called when an exiting element is leaving. It receives the element and a callback to be called when the transition is done."
                  }
                </_components.p>
                {"\n"}
              </_components.li>
              {"\n"}
              <_components.li>
                {"\n"}
                <_components.p>
                  <_components.code>{"mode"}</_components.code>
                  {" - transition mode. Defaults to "}
                  <_components.code>{'"parallel"'}</_components.code>
                  {". Other options are "}
                  <_components.code>{'"out-in"'}</_components.code>
                  {" and "}
                  <_components.code>{'"in-out"'}</_components.code>
                  {"."}
                </_components.p>
                {"\n"}
              </_components.li>
              {"\n"}
              <_components.li>
                {"\n"}
                <_components.p>
                  <_components.code>{"appear"}</_components.code>
                  {" - whether to run the transition on the initial element. Defaults to "}
                  <_components.code>{"false"}</_components.code>
                  {"."}
                </_components.p>
                {"\n"}
                <_components.p>
                  {
                    "If enabled, the initial element will still be included in the initial render (for SSR), but the transition fill happen when the first client-side effect is run. So to avoid the initial element to be visible, you can set the initial element's style to "
                  }
                  <_components.code>{"display: none"}</_components.code>
                  {" and set it to "}
                  <_components.code>{"display: block"}</_components.code>
                  {" in the "}
                  <_components.code>{"onEnter"}</_components.code>
                  {" callback."}
                </_components.p>
                {"\n"}
              </_components.li>
              {"\n"}
            </_components.ul>
            {"\n"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.p>
          {"Returns a signal with an array of the current element and exiting previous elements."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createSwitchTransition } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/transition-group"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [el, setEl] = createSignal<"}
            <_components.span className="hljs-title class_">{"HTMLDivElement"}</_components.span>
            {">();\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" rendered = "}
            <_components.span className="hljs-title function_">
              {"createSwitchTransition"}
            </_components.span>
            {"(el, {\n  "}
            <_components.span className="hljs-title function_">{"onEnter"}</_components.span>
            {"("}
            <_components.span className="hljs-params">{"el, done"}</_components.span>
            {") {\n    "}
            <_components.span className="hljs-comment">
              {"// the enter callback is called before the element is inserted into the DOM"}
            </_components.span>
            {"\n    "}
            <_components.span className="hljs-comment">
              {"// so run the animation in the next animation frame / microtask"}
            </_components.span>
            {"\n    "}
            <_components.span className="hljs-title function_">{"queueMicrotask"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n      "}
            <_components.span className="hljs-comment">{"/*...*/"}</_components.span>
            {"\n    });\n  },\n  "}
            <_components.span className="hljs-title function_">{"onExit"}</_components.span>
            {"("}
            <_components.span className="hljs-params">{"el, done"}</_components.span>
            {") {\n    "}
            <_components.span className="hljs-comment">
              {"// the exitting element is kept in the DOM until the done() callback is called"}
            </_components.span>
            {"\n  },\n});\n\n"}
            <_components.span className="hljs-comment">
              {"// change the source to trigger the transition"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setEl"}</_components.span>
            {"(refToHtmlElement);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="resolving-jsx">
          <_components.a className="header-anchor" href="#resolving-jsx">
            {"#"}
          </_components.a>
          {"Resolving JSX"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "Usually the source will be a JSX element, and you will want to resolve it to a DOM element before passing it to "
          }
          <_components.code
            data-code-primitive-name="createSwitchTransition"
            data-code-package-name="transition-group"
          >
            {"createSwitchTransition"}
          </_components.code>
          {". It leaves the resolving to you, so you can do it in any way you want."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"For example, you can "}
          <_components.code>{"children"}</_components.code>
          {" helper from "}
          <_components.code>{"solid-js"}</_components.code>
          {", to get the first found HTML element."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { children } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"solid-js"'}</_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createSwitchTransition } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/transition-group"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" resolved = "}
            <_components.span className="hljs-title function_">{"children"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" props."}
            <_components.span className="hljs-property">{"children"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" filtered = "}
            <_components.span className="hljs-title function_">{"createMemo"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" resolved."}
            <_components.span className="hljs-title function_">{"toArray"}</_components.span>
            {"()."}
            <_components.span className="hljs-title function_">{"find"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"el"}</_components.span>
              {" =>"}
            </_components.span>
            {" el "}
            <_components.span className="hljs-keyword">{"instanceof"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"HTMLElement"}</_components.span>
            {"));\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createSwitchTransition"}
            </_components.span>
            {"(filtered, {\n  "}
            <_components.span className="hljs-comment">{"/*...*/"}</_components.span>
            {"\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"Or use a "}
          <_components.code>{"resolveFirst"}</_components.code>
          {" helper from "}
          <_components.code>{"@solid-primitives/refs"}</_components.code>
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { resolveFirst } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/refs"'}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createSwitchTransition } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/transition-group"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" resolved = "}
            <_components.span className="hljs-title function_">{"resolveFirst"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" props."}
            <_components.span className="hljs-property">{"children"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createSwitchTransition"}
            </_components.span>
            {"(resolved, {\n  "}
            <_components.span className="hljs-comment">{"/*...*/"}</_components.span>
            {"\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createlisttransition">
          <_components.a className="header-anchor" href="#createlisttransition">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createListTransition"
            data-code-package-name="transition-group"
          >
            {"createListTransition"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Create an element list transition interface for changes to the list of elements.\nIt can be used to implement own transition effect, or a custom "
          }
          <_components.code>{"<TransitionGroup>"}</_components.code>
          {"-like component."}
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
          {
            "It will observe the source and return a signal with array of elements to be rendered (current ones and exiting ones)."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createListTransition"
            data-code-package-name="transition-group"
          >
            {"createListTransition"}
          </_components.code>
          {" takes two parameters:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"source"}</_components.code>
              {
                " a signal with the current list of elements.\nAny object can used as the element, but most likely you will want to use a "
              }
              <_components.code>{"HTMLElement"}</_components.code>
              {" or "}
              <_components.code>{"SVGElement"}</_components.code>
              {"."}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"options"}</_components.code>
              {" transition options:"}
            </_components.p>
            {"\n"}
            <_components.ul>
              {"\n"}
              <_components.li>
                {"\n"}
                <_components.p>
                  <_components.code>{"onChange"}</_components.code>
                  {
                    " - a function to be called when the list changes. It receives the list of added elements, removed elements, and moved elements. It also receives a callback to be called when the removed elements are finished animating (they can be removed from the DOM)."
                  }
                </_components.p>
                {"\n"}
              </_components.li>
              {"\n"}
              <_components.li>
                {"\n"}
                <_components.p>
                  <_components.code>{"appear"}</_components.code>
                  {" - whether to run the transition on the initial elements. Defaults to "}
                  <_components.code>{"false"}</_components.code>
                  {"."}
                </_components.p>
                {"\n"}
              </_components.li>
              {"\n"}
            </_components.ul>
            {"\n"}
            <_components.p>
              {
                "If enabled, the initial elements will still be included in the initial render (for SSR), but the transition fill happen when the first client-side effect is run. So to avoid the initial elements to be visible, you can set the initial element's style to "
              }
              <_components.code>{"display: none"}</_components.code>
              {" and set it to "}
              <_components.code>{"display: block"}</_components.code>
              {" in the "}
              <_components.code>{"onChange"}</_components.code>
              {" callback."}
            </_components.p>
            {"\n"}
            <_components.ul>
              {"\n"}
              <_components.li>
                {"\n"}
                <_components.p>
                  <_components.code>{"exitMethod"}</_components.code>
                  {" - This controls how the elements exit."}
                </_components.p>
                {"\n"}
                <_components.ul>
                  {"\n"}
                  <_components.li>
                    <_components.code>{'"remove"'}</_components.code>
                    {" removes the element immediately."}
                  </_components.li>
                  {"\n"}
                  <_components.li>
                    <_components.code>{'"move-to-end"'}</_components.code>
                    {" (default) will move elements which have exited to the end of the array."}
                  </_components.li>
                  {"\n"}
                  <_components.li>
                    <_components.code>{'"keep-index"'}</_components.code>
                    {" will splice them in at their previous index."}
                  </_components.li>
                  {"\n"}
                </_components.ul>
                {"\n"}
              </_components.li>
              {"\n"}
            </_components.ul>
            {"\n"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.p>
          {"Returns a signal with an array of the current elements and exiting previous elements."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createListTransition } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/transition-group"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [els, setEls] = createSignal<"}
            <_components.span className="hljs-title class_">{"HTMLElement"}</_components.span>
            {"[]>([]);\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" rendered = "}
            <_components.span className="hljs-title function_">
              {"createListTransition"}
            </_components.span>
            {"(els, {\n  "}
            <_components.span className="hljs-title function_">{"onChange"}</_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"{ list, added, removed, unchanged, finishRemoved }"}
            </_components.span>
            {") {\n    "}
            <_components.span className="hljs-comment">
              {"// the callback is called before the added elements are inserted into the DOM"}
            </_components.span>
            {"\n    "}
            <_components.span className="hljs-comment">
              {"// so run the animation in the next animation frame / microtask"}
            </_components.span>
            {"\n    "}
            <_components.span className="hljs-title function_">{"queueMicrotask"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n      "}
            <_components.span className="hljs-comment">{"/*...*/"}</_components.span>
            {"\n    });\n\n    "}
            <_components.span className="hljs-comment">
              {
                "// the removed elements are kept in the DOM until the finishRemoved() callback is called"
              }
            </_components.span>
            {"\n    "}
            <_components.span className="hljs-title function_">{"finishRemoved"}</_components.span>
            {"(removed);\n  },\n});\n\n"}
            <_components.span className="hljs-comment">
              {"// change the source to trigger the transition"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setEls"}</_components.span>
            {"([...refsToHTMLElements]);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="resolving-jsx-1">
          <_components.a className="header-anchor" href="#resolving-jsx-1">
            {"#"}
          </_components.a>
          {"Resolving JSX"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "Usually the source will be a JSX Element, and you will want to resolve it to a list of DOM elements before passing it to "
          }
          <_components.code
            data-code-primitive-name="createListTransition"
            data-code-package-name="transition-group"
          >
            {"createListTransition"}
          </_components.code>
          {". It leaves the resolving to you, so you can do it in any way you want."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"For example, you can "}
          <_components.code>{"children"}</_components.code>
          {" helper from "}
          <_components.code>{"solid-js"}</_components.code>
          {", and filter out non-HTML elements:"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { children } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"solid-js"'}</_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createListTransition } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/transition-group"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" resolved = "}
            <_components.span className="hljs-title function_">{"children"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" props."}
            <_components.span className="hljs-property">{"children"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" filtered = "}
            <_components.span className="hljs-title function_">{"createMemo"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" resolved."}
            <_components.span className="hljs-title function_">{"toArray"}</_components.span>
            {"()."}
            <_components.span className="hljs-title function_">{"filter"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"el"}</_components.span>
              {" =>"}
            </_components.span>
            {" el "}
            <_components.span className="hljs-keyword">{"instanceof"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"HTMLElement"}</_components.span>
            {"));\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createListTransition"}
            </_components.span>
            {"(filtered, {\n  "}
            <_components.span className="hljs-comment">{"/*...*/"}</_components.span>
            {"\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"Or use a "}
          <_components.code>{"resolveElements"}</_components.code>
          {" helper from "}
          <_components.code>{"@solid-primitives/refs"}</_components.code>
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { resolveElements } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/refs"'}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createSwitchTransition } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/transition-group"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" resolved = "}
            <_components.span className="hljs-title function_">
              {"resolveElements"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" props."}
            <_components.span className="hljs-property">{"children"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createListTransition"}
            </_components.span>
            {"(resolved."}
            <_components.span className="hljs-property">{"toArray"}</_components.span>
            {", {\n  "}
            <_components.span className="hljs-comment">{"/*...*/"}</_components.span>
            {"\n});\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/transition-group/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>{"Deployed example:"}</_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://solidjs-community.github.io">
            {"https://solidjs-community.github.io"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>{"Source code:"}</_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://github.com/solidjs-community/solid-primitives/tree/main/packages/transition-group/dev">
            {
              "https://github.com/solidjs-community/solid-primitives/tree/main/packages/transition-group/dev"
            }
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/transition-group/CHANGELOG.md">
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
      packageName="@solid-primitives/transition-group"
      name="transition-group"
      stage={1}
      packageList={[{ name: "transition-group", gzipped: "843 B", minified: "1.59 KB" }]}
      primitiveList={[
        { name: "createListTransition", gzipped: "603 B", minified: "1.05 KB" },
        { name: "createSwitchTransition", gzipped: "431 B", minified: "690 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
