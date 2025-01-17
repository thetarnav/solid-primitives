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
      pre: "pre",
      span: "span",
      h3: "h3",
      em: "em",
      strong: "strong",
      h4: "h4",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"A range of IntersectionObserver API utilities great for different types of use cases:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#makeIntersectionObserver">
              <_components.code
                data-code-primitive-name="makeIntersectionObserver"
                data-code-package-name="intersection-observer"
              >
                {"makeIntersectionObserver"}
              </_components.code>
            </_components.a>
            {
              " - Creates a basic non-reactive Intersection Observer exposing methods to manage the observable."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createIntersectionObserver">
              <_components.code
                data-code-primitive-name="createIntersectionObserver"
                data-code-package-name="intersection-observer"
              >
                {"createIntersectionObserver"}
              </_components.code>
            </_components.a>
            {" - A reactive observer primitive."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createViewportObserver">
              <_components.code
                data-code-primitive-name="createViewportObserver"
                data-code-package-name="intersection-observer"
              >
                {"createViewportObserver"}
              </_components.code>
            </_components.a>
            {" - More advanced tracker that creates a store of element signals."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createVisibilityObserver">
              <_components.code
                data-code-primitive-name="createVisibilityObserver"
                data-code-package-name="intersection-observer"
              >
                {"createVisibilityObserver"}
              </_components.code>
            </_components.a>
            {" - Basic visibility observer using a signal."}
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
      <CopyPackages packageName="@solid-primitives/intersection-observer" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="makeintersectionobserver">
          <_components.a className="header-anchor" href="#makeintersectionobserver">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="makeIntersectionObserver"
            data-code-package-name="intersection-observer"
          >
            {"makeIntersectionObserver"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { makeIntersectionObserver } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {"'@solid-primitives/intersection-observer'"}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">{"// Basic usage:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { add, remove, start, stop, instance }] = "}
            <_components.span className="hljs-title function_">
              {"makeIntersectionObserver"}
            </_components.span>
            {"(els, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"entries"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  entries."}
            <_components.span className="hljs-title function_">{"forEach"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(e."}
            <_components.span className="hljs-property">{"isIntersecting"}</_components.span>
            {"));\n});\n"}
            <_components.span className="hljs-title function_">{"add"}</_components.span>
            {"(el)\n\n"}
            <_components.span className="hljs-comment">{"// Directive usage:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { "}
            <_components.span className="hljs-attr">{"add"}</_components.span>
            {": intersectionObserver } = "}
            <_components.span className="hljs-title function_">
              {"makeIntersectionObserver"}
            </_components.span>
            {"([], "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"entries"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  entries."}
            <_components.span className="hljs-title function_">{"forEach"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(e."}
            <_components.span className="hljs-property">{"isIntersecting"}</_components.span>
            {"));\n});\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">
                  {"use:intersectionObserver"}
                </_components.span>
                {">"}
              </_components.span>
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n"}
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
              {"makeIntersectionObserver"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {
                "\n  elements: Element[],\n  onChange: IntersectionObserverCallback,\n  options?: IntersectionObserverInit,\n"
              }
            </_components.span>
            {"): {\n  "}
            <_components.span className="hljs-attr">{"add"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">
              {"AddIntersectionObserverEntry"}
            </_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"remove"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">
              {"RemoveIntersectionObserverEntry"}
            </_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"start"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"reset"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"stop"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"instance"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">
              {"IntersectionObserver"}
            </_components.span>
            {";\n};\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createintersectionobserver">
          <_components.a className="header-anchor" href="#createintersectionobserver">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createIntersectionObserver"
            data-code-package-name="intersection-observer"
          >
            {"createIntersectionObserver"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createIntersectionObserver } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/intersection-observer"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [targets, setTargets] = createSignal<"}
            <_components.span className="hljs-title class_">{"Element"}</_components.span>
            {"[]>([some_element]);\n\n"}
            <_components.span className="hljs-title function_">
              {"createIntersectionObserver"}
            </_components.span>
            {"(els, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"entries"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  entries."}
            <_components.span className="hljs-title function_">{"forEach"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(e."}
            <_components.span className="hljs-property">{"isIntersecting"}</_components.span>
            {"));\n});\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{el"}</_components.span>
                {" =>"}
              </_components.span>
              {" setTargets(p => [...p, el])} />"}
            </_components.span>
            {";\n"}
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
            <_components.span className="hljs-title function_">
              {"createIntersectionObserver"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {
                "\n  elements: Accessor<Element[]>,\n  onChange: IntersectionObserverCallback,\n  options?: IntersectionObserverInit,\n"
              }
            </_components.span>
            {"): "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createviewportobserver">
          <_components.a className="header-anchor" href="#createviewportobserver">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createViewportObserver"
            data-code-package-name="intersection-observer"
          >
            {"createViewportObserver"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "This primitive comes with a number of flexible options. You can specify a callback at the root with an array of elements or individual callbacks for individual elements."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createViewportObserver } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {"'@solid-primitives/intersection-observer'"}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">{"// Basic usage:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [add, { remove, start, stop, instance }] = "}
            <_components.span className="hljs-title function_">
              {"createViewportObserver"}
            </_components.span>
            {"(els, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...});\n"}
            <_components.span className="hljs-title function_">{"add"}</_components.span>
            {"(el, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(e."}
            <_components.span className="hljs-property">{"isIntersecting"}</_components.span>
            {"))\n\n"}
            <_components.span className="hljs-comment">{"// Directive usage:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [intersectionObserver] = "}
            <_components.span className="hljs-title function_">
              {"createViewportObserver"}
            </_components.span>
            {"()\n<div "}
            <_components.span className="hljs-attr">{"use"}</_components.span>
            {":intersectionObserver={"}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"e"}</_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(e."}
            <_components.span className="hljs-property">{"isIntersecting"}</_components.span>
            {")}></div>\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="definition-2">
          <_components.a className="header-anchor" href="#definition-2">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createViewportObserver"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {
                "\n  elements: MaybeAccessor<Element[]>,\n  callback: EntryCallback,\n  options?: IntersectionObserverInit,\n"
              }
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">
              {"CreateViewportObserverReturnValue"}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createViewportObserver"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {
                "\n  initial: MaybeAccessor<[Element, EntryCallback][]>,\n  options?: IntersectionObserverInit,\n"
              }
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">
              {"CreateViewportObserverReturnValue"}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createViewportObserver"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"\n  options?: IntersectionObserverInit,\n"}
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">
              {"CreateViewportObserverReturnValue"}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createvisibilityobserver">
          <_components.a className="header-anchor" href="#createvisibilityobserver">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createVisibilityObserver"
            data-code-package-name="intersection-observer"
          >
            {"createVisibilityObserver"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Creates reactive signal that changes when a single element's visibility changes."}
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
            data-code-primitive-name="createVisibilityObserver"
            data-code-package-name="intersection-observer"
          >
            {"createVisibilityObserver"}
          </_components.code>
          {" takes a "}
          <_components.code>{"IntersectionObserverInit"}</_components.code>
          {" object as the first argument. Use it to set thresholds, margins, and other options."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"root"}</_components.code>
            {
              " — The Element or Document whose bounds are used as the bounding box when testing for intersection."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"rootMargin"}</_components.code>
            {
              " — A string which specifies a set of offsets to add to the root's bounding_box when calculating intersections, effectively shrinking or growing the root for calculation purposes."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"threshold"}</_components.code>
            {
              " — Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for the observed target."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"initialValue"}</_components.code>
            {" — Initial value of the signal "}
            <_components.em>{"(default: false)"}</_components.em>
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.p>
          {"It returns a configured "}
          <_components.em>{'"use"'}</_components.em>
          {
            " function for creating a visibility signal for a single element. The passed element can be a "
          }
          <_components.strong>{"reactive signal"}</_components.strong>
          {" or a DOM element. Returning a falsy value will remove the element from the observer."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createVisibilityObserver } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/intersection-observer"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"let"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"el"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"HTMLDivElement"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" useVisibilityObserver = "}
            <_components.span className="hljs-title function_">
              {"createVisibilityObserver"}
            </_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"threshold"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"0.8"}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-comment">
              {
                "// make sure that you pass the element reference in a thunk if it is undefined initially"
              }
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" visible = "}
            <_components.span className="hljs-title function_">
              {"useVisibilityObserver"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" el);\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{el}"}</_components.span>
                {">"}
              </_components.span>
              {'{visible() ? "Visible" : "Hidden"}'}
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
          {"You can use this shorthand when creating a visibility signal for a single element:"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"let"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"el"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"HTMLDivElement"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" visible = "}
            <_components.span className="hljs-title function_">
              {"createVisibilityObserver"}
            </_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"threshold"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"0.8"}</_components.span>
            {" })("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" el);\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{el}"}</_components.span>
                {">"}
              </_components.span>
              {'{visible() ? "Visible" : "Hidden"}'}
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
        <_components.h3 id="setter-callback">
          <_components.a className="header-anchor" href="#setter-callback">
            {"#"}
          </_components.a>
          {"Setter callback"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createVisibilityObserver"
            data-code-package-name="intersection-observer"
          >
            {"createVisibilityObserver"}
          </_components.code>
          {
            " takes a setter callback as the second argument. It is called when the element's intersection changes. The callback should return a boolean value indicating whether the element is visible — it'll be assigned to the signal."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" useVisibilityObserver = "}
            <_components.span className="hljs-title function_">
              {"createVisibilityObserver"}
            </_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"threshold"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"0.8"}</_components.span>
            {" }, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"entry"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-comment">
              {"// do some calculations on the intersection entry"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" entry."}
            <_components.span className="hljs-property">{"isIntersecting"}</_components.span>
            {";\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          <_components.strong>{"Exported modifiers"}</_components.strong>
        </_components.p>
        {"\n"}
        <_components.h4 id="withoccurrence">
          <_components.a className="header-anchor" href="#withoccurrence">
            {"#"}
          </_components.a>
          <_components.code>{"withOccurrence"}</_components.code>
        </_components.h4>
        {"\n"}
        <_components.p>
          {"It provides information about element occurrence in the viewport — "}
          <_components.code>{'"Entering"'}</_components.code>
          {", "}
          <_components.code>{'"Leaving"'}</_components.code>
          {", "}
          <_components.code>{'"Inside"'}</_components.code>
          {" or "}
          <_components.code>{'"Outside"'}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { useVisibilityObserver, withOccurrence } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/intersection-observer"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" useVisibilityObserver = "}
            <_components.span className="hljs-title function_">
              {"createVisibilityObserver"}
            </_components.span>
            {"(\n  { "}
            <_components.span className="hljs-attr">{"threshold"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"0.8"}</_components.span>
            {" },\n  "}
            <_components.span className="hljs-title function_">{"withOccurrence"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"entry, { occurrence }"}</_components.span>
              {") =>"}
            </_components.span>
            {" {\n    "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(occurrence); "}
            <_components.span className="hljs-comment">
              {'// => "Entering" | "Leaving" | "Inside" | "Outside"'}
            </_components.span>
            {"\n    "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" entry."}
            <_components.span className="hljs-property">{"isIntersecting"}</_components.span>
            {";\n  }),\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="withdirection">
          <_components.a className="header-anchor" href="#withdirection">
            {"#"}
          </_components.a>
          <_components.code>{"withDirection"}</_components.code>
        </_components.h4>
        {"\n"}
        <_components.p>
          {"It provides information about element direction on the screen — "}
          <_components.code>{'"Left"'}</_components.code>
          {", "}
          <_components.code>{'"Right"'}</_components.code>
          {", "}
          <_components.code>{'"Top"'}</_components.code>
          {", "}
          <_components.code>{'"Bottom"'}</_components.code>
          {" or "}
          <_components.code>{'"None"'}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { useVisibilityObserver, withDirection } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/intersection-observer"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" useVisibilityObserver = "}
            <_components.span className="hljs-title function_">
              {"createVisibilityObserver"}
            </_components.span>
            {"(\n  { "}
            <_components.span className="hljs-attr">{"threshold"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"0.8"}</_components.span>
            {" },\n  "}
            <_components.span className="hljs-title function_">{"withDirection"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"entry, { directionY, directionX, visible }"}
              </_components.span>
              {") =>"}
            </_components.span>
            {" {\n    "}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" (!entry."}
            <_components.span className="hljs-property">{"isIntersecting"}</_components.span>
            {" && directionY === "}
            <_components.span className="hljs-string">{'"Top"'}</_components.span>
            {" && visible) {\n      "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {";\n    }\n    "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" entry."}
            <_components.span className="hljs-property">{"isIntersecting"}</_components.span>
            {";\n  }),\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="definition-3">
          <_components.a className="header-anchor" href="#definition-3">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createViewportObserver"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {
                "\n  elements: MaybeAccessor<Element[]>,\n  callback: EntryCallback,\n  options?: IntersectionObserverInit,\n"
              }
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">
              {"CreateViewportObserverReturnValue"}
            </_components.span>
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/intersection-observer/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a
            href="https://solidjs-community.github.io"
            title="[source](https://github.com/solidjs-community/solid-primitives/tree/main/packages/intersection-observer/dev"
          >
            {"a working example"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/intersection-observer/CHANGELOG.md">
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
      packageName="@solid-primitives/intersection-observer"
      name="intersection-observer"
      stage={3}
      packageList={[{ name: "intersection-observer", gzipped: "1.35 KB", minified: "3.19 KB" }]}
      primitiveList={[
        { name: "createIntersectionObserver", gzipped: "541 B", minified: "1.07 KB" },
        { name: "createViewportObserver", gzipped: "722 B", minified: "1.47 KB" },
        { name: "createVisibilityObserver", gzipped: "722 B", minified: "1.41 KB" },
        { name: "makeIntersectionObserver", gzipped: "406 B", minified: "742 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
