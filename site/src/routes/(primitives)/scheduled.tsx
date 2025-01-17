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
      strong: "strong",
      h2: "h2",
      h3: "h3",
      pre: "pre",
      span: "span",
      blockquote: "blockquote",
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
          {"Primitives for creating scheduled — throttled or debounced — callbacks."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#debounce">
              <_components.code
                data-code-primitive-name="debounce"
                data-code-package-name="scheduled"
              >
                {"debounce"}
              </_components.code>
            </_components.a>
            {" - Creates a callback that is "}
            <_components.strong>{"debounced"}</_components.strong>
            {" and cancellable."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#throttle">
              <_components.code
                data-code-primitive-name="throttle"
                data-code-package-name="scheduled"
              >
                {"throttle"}
              </_components.code>
            </_components.a>
            {" - Creates a callback that is "}
            <_components.strong>{"throttled"}</_components.strong>
            {" and cancellable."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#scheduleIdle">
              <_components.code
                data-code-primitive-name="scheduleIdle"
                data-code-package-name="scheduled"
              >
                {"scheduleIdle"}
              </_components.code>
            </_components.a>
            {" - Creates a callback throttled using "}
            <_components.code>{"window.requestIdleCallback()"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#leading">
              <_components.code
                data-code-primitive-name="leading"
                data-code-package-name="scheduled"
              >
                {"leading"}
              </_components.code>
            </_components.a>
            {" - Creates a scheduled and cancellable callback that will be called on "}
            <_components.strong>{"leading"}</_components.strong>
            {" edge."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createscheduled">
              <_components.code
                data-code-primitive-name="createScheduled"
                data-code-package-name="scheduled"
              >
                {"createScheduled"}
              </_components.code>
            </_components.a>
            {" - Creates a signal used for scheduling execution of solid computations by tracking."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#scheduling-explanation">{"Scheduling explanation"}</_components.a>
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
      <CopyPackages packageName="@solid-primitives/scheduled" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="debounce">
          <_components.a className="header-anchor" href="#debounce">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="debounce" data-code-package-name="scheduled">
            {"debounce"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Creates a callback that is debounced and cancellable. The debounced callback is called on "
          }
          <_components.strong>{"trailing"}</_components.strong>
          {" edge."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"The timeout will be automatically cleared on root dispose."}
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
            {" { debounce } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/scheduled"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" trigger = "}
            <_components.span className="hljs-title function_">{"debounce"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"message: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(message), "}
            <_components.span className="hljs-number">{"250"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"trigger"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Hello!"'}</_components.span>
            {");\ntrigger."}
            <_components.span className="hljs-title function_">{"clear"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// clears a timeout in progress"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="throttle">
          <_components.a className="header-anchor" href="#throttle">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="throttle" data-code-package-name="scheduled">
            {"throttle"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Creates a callback that is throttled and cancellable. The throttled callback is called on "
          }
          <_components.strong>{"trailing"}</_components.strong>
          {" edge."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"The timeout will be automatically cleared on root dispose."}
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
            {" { throttle } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/scheduled"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" trigger = "}
            <_components.span className="hljs-title function_">{"throttle"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"message: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(message), "}
            <_components.span className="hljs-number">{"250"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"trigger"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Hello!"'}</_components.span>
            {");\ntrigger."}
            <_components.span className="hljs-title function_">{"clear"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// clears a timeout in progress"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="scheduleidle">
          <_components.a className="header-anchor" href="#scheduleidle">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="scheduleIdle"
            data-code-package-name="scheduled"
          >
            {"scheduleIdle"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Creates a callback throttled using "}
          <_components.code>{"window.requestIdleCallback()"}</_components.code>
          {". ("}
          <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback">
            {"MDN reference"}
          </_components.a>
          {")"}
        </_components.p>
        {"\n"}
        <_components.p>
          {"The throttled callback is called on "}
          <_components.strong>{"trailing"}</_components.strong>
          {" edge."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"The timeout will be automatically cleared on root dispose."}
        </_components.p>
        {"\n"}
        <_components.blockquote>
          {"\n"}
          <_components.p>
            <_components.strong>{"Note:"}</_components.strong>{" "}
            <_components.code>{"requestIdleCallback"}</_components.code>
            {" is not available in Safari. If it's not available, "}
            <_components.code
              data-code-primitive-name="scheduleIdle"
              data-code-package-name="scheduled"
            >
              {"scheduleIdle"}
            </_components.code>
            {" will fallback to "}
            <_components.code
              data-code-primitive-name="throttle"
              data-code-package-name="scheduled"
            >
              {"throttle"}
            </_components.code>
            {" with default timeout. (callbacks will be batched using setTimeout instead)"}
          </_components.p>
          {"\n"}
        </_components.blockquote>
        {"\n"}
        <_components.h3 id="how-to-use-it-2">
          <_components.a className="header-anchor" href="#how-to-use-it-2">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { scheduleIdle } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/scheduled"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" trigger = "}
            <_components.span className="hljs-title function_">{"scheduleIdle"}</_components.span>
            {"(\n  "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"message: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(message),\n  "}
            <_components.span className="hljs-comment">
              {
                "// timeout passed to requestIdleCallback is a maximum timeout before the callback is called"
              }
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-number">{"250"}</_components.span>
            {",\n);\n"}
            <_components.span className="hljs-title function_">{"trigger"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Hello!"'}</_components.span>
            {");\ntrigger."}
            <_components.span className="hljs-title function_">{"clear"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// clears a timeout in progress"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="leading">
          <_components.a className="header-anchor" href="#leading">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="leading" data-code-package-name="scheduled">
            {"leading"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Creates a scheduled and cancellable callback that will be called on "}
          <_components.strong>{"leading"}</_components.strong>
          {" edge."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"The timeout will be automatically cleared on root dispose."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-3">
          <_components.a className="header-anchor" href="#how-to-use-it-3">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">{"// with debounce"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { leading, debounce } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/scheduled"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" trigger = "}
            <_components.span className="hljs-title function_">{"leading"}</_components.span>
            {"(debounce, "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"message: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(message), "}
            <_components.span className="hljs-number">{"250"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"trigger"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Hello!"'}</_components.span>
            {");\ntrigger."}
            <_components.span className="hljs-title function_">{"clear"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// clears a timeout in progress"}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">{"// with throttle"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { leading, throttle } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/scheduled"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" trigger = "}
            <_components.span className="hljs-title function_">{"leading"}</_components.span>
            {"(throttle, "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"message: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(message), "}
            <_components.span className="hljs-number">{"250"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"trigger"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Hello!"'}</_components.span>
            {");\ntrigger."}
            <_components.span className="hljs-title function_">{"clear"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// clears a timeout in progress"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createscheduled">
          <_components.a className="header-anchor" href="#createscheduled">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createScheduled"
            data-code-package-name="scheduled"
          >
            {"createScheduled"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Creates a signal used for scheduling execution of solid computations by tracking."}
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
            data-code-primitive-name="createScheduled"
            data-code-package-name="scheduled"
          >
            {"createScheduled"}
          </_components.code>
          {" takes only one parameter - a "}
          <_components.code>{"schedule"}</_components.code>
          {
            " function. This function is called with a callback that should be scheduled. It should return a function for triggering the timeout."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">{"// e.g. with debounce"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"createScheduled"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"fn"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"debounce"}</_components.span>
            {"(fn, "}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {"));\n"}
            <_components.span className="hljs-comment">{"// e.g. with throttle"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"createScheduled"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"fn"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"throttle"}</_components.span>
            {"(fn, "}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {"));\n"}
            <_components.span className="hljs-comment">
              {"// e.g. with leading debounce"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"createScheduled"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"fn"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"leading"}</_components.span>
            {"(debounce, fn, "}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {"));\n"}
            <_components.span className="hljs-comment">
              {"// e.g. with leading throttle"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"createScheduled"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"fn"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"leading"}</_components.span>
            {"(throttle, fn, "}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {"));\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "It returns a signal that can be used to schedule execution of a solid computation. The signal returns "
          }
          <_components.code>{"true"}</_components.code>
          {" if it's dirty "}
          <_components.em>{"(callback should be called)"}</_components.em>
          {" and "}
          <_components.code>{"false"}</_components.code>
          {" otherwise."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createScheduled, debounce } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/scheduled"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" scheduled = "}
            <_components.span className="hljs-title function_">
              {"createScheduled"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"fn"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"debounce"}</_components.span>
            {"(fn, "}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {"));\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [count, setCount] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-comment">{"// track source signal"}</_components.span>
            {"\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" value = "}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"();\n  "}
            <_components.span className="hljs-comment">
              {"// track the debounced signal and check if it's dirty"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" ("}
            <_components.span className="hljs-title function_">{"scheduled"}</_components.span>
            {"()) {\n    "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"count"'}</_components.span>
            {", value);\n  }\n});\n\n"}
            <_components.span className="hljs-comment">{"// or with createMemo"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" debouncedCount = "}
            <_components.span className="hljs-title function_">{"createMemo"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"p: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {" = "}
                <_components.span className="hljs-number">{"0"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-comment">{"// track source signal"}</_components.span>
            {"\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" value = "}
            <_components.span className="hljs-title function_">{"count"}</_components.span>
            {"();\n  "}
            <_components.span className="hljs-comment">
              {"// track the debounced signal and check if it's dirty"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"scheduled"}</_components.span>
            {"() ? value : p;\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="scheduling-explanation">
          <_components.a className="header-anchor" href="#scheduling-explanation">
            {"#"}
          </_components.a>
          {"Scheduling explanation"}
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "This package provides 4 different methods for scheduling a callback. Pick one that suits your application."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code>
            {
              "TOP: scheduled function triggered\nBOTTOM: called user callback\n\n1. debounce\n2. throttle\n3. leading debounce\n4. leading throttle\n\n   █   █     █\n------------------------>\n1.                  █\n2.        █         █\n3. █\n4. █         █\n"
            }
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-scheduled-demo-0uk8xc?file=/index.tsx">
            <_components.strong>{"Interactive DEMO of the schematic above"}</_components.strong>
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/scheduled/CHANGELOG.md">
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
      packageName="@solid-primitives/scheduled"
      name="scheduled"
      stage={3}
      packageList={[{ name: "scheduled", gzipped: "531 B", minified: "1.25 KB" }]}
      primitiveList={[
        { name: "throttle", gzipped: "291 B", minified: "611 B" },
        { name: "scheduleIdle", gzipped: "293 B", minified: "615 B" },
        { name: "leading", gzipped: "373 B", minified: "846 B" },
        { name: "createScheduled", gzipped: "377 B", minified: "758 B" },
        { name: "debounce", gzipped: "335 B", minified: "809 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
