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
      a: "a",
      h2: "h2",
      h3: "h3",
      pre: "pre",
      span: "span",
      ol: "ol",
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
          <_components.code
            data-code-primitive-name="createEventDispatcher"
            data-code-package-name="event-dispatcher"
          >
            {"createEventDispatcher"}
          </_components.code>
          {
            " creates a custom-event dispatcher for emitting component events.\nSolidJS equivalent of Svelte's "
          }
          <_components.a href="svelte.dev/docs#run-time-svelte-createeventdispatcher">
            {"homonymous function"}
          </_components.a>
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
      <CopyPackages packageName="@solid-primitives/event-dispatcher" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="exemple-create-and-dispatch-the-event">
          <_components.a className="header-anchor" href="#exemple-create-and-dispatch-the-event">
            {"#"}
          </_components.a>
          {"Exemple: create and dispatch the event"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createEventDispatcher } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/event-dispatcher"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"interface"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"Props"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-attr">{"onCustomMessage"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"evt: CustomEvent<"}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
                {">"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n}\n\n"}
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"ChildComponent"}</_components.span>
            {"("}
            <_components.span className="hljs-params">{"props: Props"}</_components.span>
            {") {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" dispatch = "}
            <_components.span className="hljs-title function_">
              {"createEventDispatcher"}
            </_components.span>
            {"(props);\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n    "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {' dispatch("customMessage", "yo World!", { cancelable: true })}>\n      send\n    '}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n  );\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createeventdispatcher">
          <_components.a className="header-anchor" href="#createeventdispatcher">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createEventDispatcher"
            data-code-package-name="event-dispatcher"
          >
            {"createEventDispatcher"}
          </_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createEventDispatcher"
            data-code-package-name="event-dispatcher"
          >
            {"createEventDispatcher"}
          </_components.code>
          {" takes one argument, the component's "}
          <_components.code>{"props"}</_components.code>
          {", and returns an event dispatcher function. "}
          <_components.code>{"props"}</_components.code>
          {
            " must be passed as they are, without changing or spreading spreading them, in order to maintain their reactivity."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="dispatch-and-the-created-custom-event">
          <_components.a className="header-anchor" href="#dispatch-and-the-created-custom-event">
            {"#"}
          </_components.a>
          <_components.code>{"dispatch"}</_components.code>
          {" and the created custom event"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"The resulting event dispatcher is named by convention "}
          <_components.code>{"dispatch"}</_components.code>
          {", and will create a DOM custom event ("}
          <_components.code>{"CustomEvent<T>"}</_components.code>
          {") and call the associated event handler. It takes 3 arguments:"}
        </_components.p>
        {"\n"}
        <_components.ol>
          {"\n"}
          <_components.li>
            {"the event name ("}
            <_components.code>{"name: string"}</_components.code>
            {"), in lower camel case. E.g, "}
            <_components.code>{"customMessage"}</_components.code>
            {'. When dispatching the event, the dispatcher will look for the "'}
            <_components.code>{"on"}</_components.code>
            {"+ upper camel case name in the props ("}
            <_components.code>{"onCustomMessage"}</_components.code>
            {")."}
          </_components.li>
          {"\n"}
          <_components.li>
            {"the payload ("}
            <_components.code>{"payload?: any"}</_components.code>
            {
              "), the payload associated to the event. This value is optional, and will be accessible in the "
            }
            <_components.code>{"CustomEvent.detail"}</_components.code>
            {" property."}
          </_components.li>
          {"\n"}
          <_components.li>
            {"custom event options ("}
            <_components.code>{"dispatcherOptions: { cancelable: boolean }"}</_components.code>
            {"). The dispatcherOptions is an object with one property, "}
            <_components.code>{"cancelable"}</_components.code>
            {", which determines whether the created custom event is cancelable (meaning its "}
            <_components.code>{"preventDefault()"}</_components.code>
            {" method can be called). This arguments is optional and defaults to "}
            <_components.code>{"{ cancelable: false }"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
        </_components.ol>
        {"\n"}
        <_components.p>
          {"To parallel "}
          <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent">
            {"DOM's "}
            <_components.code>{"dispatchEvent"}</_components.code>
          </_components.a>
          {", "}
          <_components.code>{"dispatch"}</_components.code>
          {" will return "}
          <_components.code>{"false"}</_components.code>
          {", if the custom event is cancelable and "}
          <_components.code>{"preventDefault()"}</_components.code>
          {" has been called, "}
          <_components.code>{"true"}</_components.code>
          {" in all the other cases (even if there is no event handler associated to the event)."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"submitCustomForm"}
            </_components.span>
            {" = ("}
            <_components.span className="hljs-params" />
            {") => {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" dispatched = "}
            <_components.span className="hljs-title function_">{"dispatch"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"customSubmit"'}</_components.span>
            {", "}
            <_components.span className="hljs-title function_">{"data"}</_components.span>
            {"(), { "}
            <_components.span className="hljs-attr">{"cancelable"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" });\n\n  "}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" (!dispatched) "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {";\n\n  "}
            <_components.span className="hljs-title function_">{"apiPost"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"url"}</_components.span>
            {"(), "}
            <_components.span className="hljs-title function_">{"data"}</_components.span>
            {"());\n};\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"Finally, the custom events created with "}
          <_components.code>{"dispatch"}</_components.code>
          {" don't bubble."}
        </_components.p>
        {"\n"}
        <_components.h3 id="listening-to-and-handling-the-component-event">
          <_components.a
            className="header-anchor"
            href="#listening-to-and-handling-the-component-event"
          >
            {"#"}
          </_components.a>
          {"Listening to and handling the component event"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"ParentComponent"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params" />
            {") {\n  "}
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"handleMessage"}</_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"evt: CustomEvent<"}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {">"}
            </_components.span>
            {") {\n    "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"the message is "'}</_components.span>
            {" + evt."}
            <_components.span className="hljs-property">{"detail"}</_components.span>
            {");\n  }\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Child"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onCustomMessage"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{handleMessage}"}</_components.span>
                {" />"}
              </_components.span>
            </_components.span>
            {";\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            'The parent component will be able to listen to any event dispatched by its child component as it would listen to any DOM event: by passing a "'
          }
          <_components.code>{"on"}</_components.code>
          {
            ' + capitalized name of the event" prop to the child, with the event handler function.\nIf the child component dispatched any payload with the event, the handler will be able to access it in '
          }
          <_components.code>{"event.detail"}</_components.code>
          {". The handler will also be able to call "}
          <_components.code>{"event.preventDefault()"}</_components.code>
          {" if the event is cancellable."}
        </_components.p>
        {"\n"}
        <_components.h3 id="handling-the-case-of-optional-event-handlers">
          <_components.a
            className="header-anchor"
            href="#handling-the-case-of-optional-event-handlers"
          >
            {"#"}
          </_components.a>
          {"Handling the case of optional event handlers"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "You won't have to worry about checking if an optional event handler was passed or not in the props, as dispatch will do it under the hood, avoiding the "
          }
          <_components.code>
            {"Uncaught TypeError: props.onOptionalEvent is not a function"}
          </_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-comment">
              {"// without createEventDispatcher"}
            </_components.span>
            {"\n<button onClick={"}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" (props."}
            <_components.span className="hljs-property">{"onOptionalEvent"}</_components.span>
            {") {\n    props."}
            <_components.span className="hljs-title function_">
              {"onOptionalEvent"}
            </_components.span>
            {"()\n  }\n}}>emit</button>\n\n"}
            <_components.span className="hljs-comment">
              {"// with createEventDispatcher"}
            </_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {" dispatch('optionalEvent')}>emit"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="typescript">
          <_components.a className="header-anchor" href="#typescript">
            {"#"}
          </_components.a>
          {"TypeScript"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createEventDispatcher"
            data-code-package-name="event-dispatcher"
          >
            {"createEventDispatcher"}
          </_components.code>
          {" has full TypeScript support (from version 4.1.5, as it uses "}
          <_components.code>{"template literals types"}</_components.code>
          {" and the "}
          <_components.code>{"infer"}</_components.code>
          {
            " keyword). In order to benefit from it, you need to type the component props.\nWith regards to the typing:"
          }
        </_components.p>
        {"\n"}
        <_components.ol>
          {"\n"}
          <_components.li>
            {
              "In the props type or interface, there should be an event listener prop for each component event dispatched. This event listener key corresponds to "
            }
            <_components.code>{"on"}</_components.code>
            {" + capitalized event name."}
          </_components.li>
          {"\n"}
          <_components.li>
            {
              "The value of each event listener is an event handler function, which takes one parameter, the "
            }
            <_components.code>{"CustomEvent"}</_components.code>
            {", or none."}
          </_components.li>
          {"\n"}
          <_components.li>
            {"The payload type is passed as argument to the component event type."}
          </_components.li>
          {"\n"}
        </_components.ol>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-comment">
              {"// if we will call dispatch('componentEvent', 'I am in event.detail')"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"interface"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"Props"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-attr">{"onComponentEvent"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"evt: CustomEvent<"}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
                {">"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"nonEventProp"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {";\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"When the dispatcher is created, and you start typing "}
          <_components.code>{"dispatch()"}</_components.code>
          {
            " TypeScript will suggest a list of the available event, which will be inferred by the props. The props that don't begin with "
          }
          <_components.code>{"on"}</_components.code>
          {" will be ignored."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"interface"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"Props"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-attr">{"onFirstComponentEvent"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"evt: CustomEvent<"}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
                {">"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"onSecondComponentEvent"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"evt: CustomEvent<"}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {">"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"nonEventProp"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {";\n}\n\n"}
            <_components.span className="hljs-comment">{"// in the component"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"dispatch"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'""'}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {'// => will suggest "firstComponentEvent"|"secondComponentEvent" as first parameter'}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "Once you have chosen the event, TypeScript will suggest the payload type for that specific event, and show an error if your payload is of the wrong type."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"interface"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"Props"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-attr">{"onStringEvent"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"evt: CustomEvent<"}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
                {">"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"onNumberEvent"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"evt: CustomEvent<"}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {">"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n}\n\n"}
            <_components.span className="hljs-comment">{"// in the component"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"dispatch"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"stringEvent"'}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {
                '// => will suggest "(eventName: "changeStep", payload: string, dispatcherOptions?: DispatcherOptions | undefined) => boolean"'
              }
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"dispatch"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"numberEvent"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"forty-two"'}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {
                "// will throw \"Error: Argument of type 'string' is not assignable to parameter of type 'number'.\""
              }
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "Finally, TypeScript will handle suggestions and errors also according to weather the event is otpional or not, requesting to pass a second argument (the "
          }
          <_components.code>{"payload"}</_components.code>
          {"), when the event is non-nullable."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"interface"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"Props"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-attr">{"onMandatoryPayload"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"evt: CustomEvent<"}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {">"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"onOptionalPayload"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"evt?: CustomEvent<"}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
                {">"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n}\n\n"}
            <_components.span className="hljs-comment">{"// in the component"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"dispatch"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"mandatoryPayload"'}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {'// => will throw: "Error: Expected 2-3 arguments, but got 1."'}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"dispatch"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"optionalPayload"'}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {
                '// will not complain, but suggest "(eventName: "optionalPayload", payload?: number | undefined, ...'
              }
            </_components.span>
            {"\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/event-dispatcher/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"You can use this template for publishing your demo on CodeSandbox: "}
          <_components.a href="https://codesandbox.io/s/solid-create-event-dispatcher-example-fbj9ge">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/event-dispatcher/CHANGELOG.md">
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
      packageName="@solid-primitives/event-dispatcher"
      name="event-dispatcher"
      stage={0}
      packageList={[{ name: "event-dispatcher", gzipped: "215 B", minified: "290 B" }]}
      primitiveList={[{ name: "createEventDispatcher", gzipped: "215 B", minified: "290 B" }]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
