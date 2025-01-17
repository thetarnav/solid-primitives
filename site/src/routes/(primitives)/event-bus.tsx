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
            "A collection of SolidJS primitives providing various features of a pubsub/event-emitter/event-bus:"
          }
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createEventBus">
              <_components.code
                data-code-primitive-name="createEventBus"
                data-code-package-name="event-bus"
              >
                {"createEventBus"}
              </_components.code>
            </_components.a>
            {" - Provides a simple way to listen to and emit events."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createEmitter">
              <_components.code
                data-code-primitive-name="createEmitter"
                data-code-package-name="event-bus"
              >
                {"createEmitter"}
              </_components.code>
            </_components.a>
            {" - Creates an emitter with which you can listen to and emit various events."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createEventHub">
              <_components.code
                data-code-primitive-name="createEventHub"
                data-code-package-name="event-bus"
              >
                {"createEventHub"}
              </_components.code>
            </_components.a>
            {" - Provides helpers for using a group of buses."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createEventStack">
              <_components.code
                data-code-primitive-name="createEventStack"
                data-code-package-name="event-bus"
              >
                {"createEventStack"}
              </_components.code>
            </_components.a>
            {" - Provides the emitted events as list/history, with tools to manage it."}
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
      <CopyPackages packageName="@solid-primitives/event-bus" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createeventbus">
          <_components.a className="header-anchor" href="#createeventbus">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createEventBus"
            data-code-package-name="event-bus"
          >
            {"createEventBus"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Provides all the base functions of an event-emitter, plus additional functions for managing listeners, it's behavior could be customized with an config object. Good for advanced usage."
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
            {" { createEventBus } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/event-bus"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" bus = createEventBus<"}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {">();\n\n"}
            <_components.span className="hljs-comment">
              {"// can be used without payload type, if you don't want to send any"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"createEventBus"}</_components.span>
            {"();\n\n"}
            <_components.span className="hljs-comment">
              {"// bus can be destructured:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { listen, emit, clear } = bus;\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" unsub = bus."}
            <_components.span className="hljs-title function_">{"listen"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"a"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(a));\n\nbus."}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"foo"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">
              {"// unsub gets called automatically on cleanup"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"unsub"}</_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createemitter">
          <_components.a className="header-anchor" href="#createemitter">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createEmitter"
            data-code-package-name="event-bus"
          >
            {"createEmitter"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Creates an emitter with which you can listen to and emit various events."}
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
            {" { createEmitter } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/event-bus"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" emitter = createEmitter<{\n  "}
            <_components.span className="hljs-attr">{"foo"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"bar"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {";\n}>();\n"}
            <_components.span className="hljs-comment">{"// can be destructured"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { on, emit, clear } = emitter;\n\nemitter."}
            <_components.span className="hljs-title function_">{"on"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"foo"'}</_components.span>
            {", "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {});\nemitter."}
            <_components.span className="hljs-title function_">{"on"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"bar"'}</_components.span>
            {", "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {});\n\nemitter."}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"foo"'}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\nemitter."}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"bar"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"hello"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">
              {"// unsub gets called automatically on cleanup"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"unsub"}</_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createglobalemitter">
          <_components.a className="header-anchor" href="#createglobalemitter">
            {"#"}
          </_components.a>
          <_components.code>{"createGlobalEmitter"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Wrapper around "}
          <_components.code
            data-code-primitive-name="createEmitter"
            data-code-package-name="event-bus"
          >
            {"createEmitter"}
          </_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "Creates an emitter with which you can listen to and emit various events. With this emitter you can also listen to all events."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createGlobalEmitter } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/event-bus"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" emitter = createGlobalEmitter<{\n  "}
            <_components.span className="hljs-attr">{"foo"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"bar"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {";\n}>();\n"}
            <_components.span className="hljs-comment">{"// can be destructured"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { on, emit, clear, listen } = emitter;\n\nemitter."}
            <_components.span className="hljs-title function_">{"on"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"foo"'}</_components.span>
            {", "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {});\nemitter."}
            <_components.span className="hljs-title function_">{"on"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"bar"'}</_components.span>
            {", "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {});\n\nemitter."}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"foo"'}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\nemitter."}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"bar"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"hello"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">
              {"// global listener - listens to all channels"}
            </_components.span>
            {"\nemitter."}
            <_components.span className="hljs-title function_">{"listen"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"switch"}</_components.span>
            {" (e."}
            <_components.span className="hljs-property">{"name"}</_components.span>
            {") {\n    "}
            <_components.span className="hljs-keyword">{"case"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"foo"'}</_components.span>
            {": {\n      e."}
            <_components.span className="hljs-property">{"details"}</_components.span>
            {";\n      "}
            <_components.span className="hljs-keyword">{"break"}</_components.span>
            {";\n    }\n    "}
            <_components.span className="hljs-keyword">{"case"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"bar"'}</_components.span>
            {": {\n      e."}
            <_components.span className="hljs-property">{"details"}</_components.span>
            {";\n      "}
            <_components.span className="hljs-keyword">{"break"}</_components.span>
            {";\n    }\n  }\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createeventhub">
          <_components.a className="header-anchor" href="#createeventhub">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createEventHub"
            data-code-package-name="event-bus"
          >
            {"createEventHub"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>{"Provides helpers for using a group of event buses."}</_components.p>
        {"\n"}
        <_components.p>
          {"Can be used with "}
          <_components.code
            data-code-primitive-name="createEventBus"
            data-code-package-name="event-bus"
          >
            {"createEventBus"}
          </_components.code>
          {", "}
          <_components.code
            data-code-primitive-name="createEventStack"
            data-code-package-name="event-bus"
          >
            {"createEventStack"}
          </_components.code>
          {" or any emitter that has the same api."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-2">
          <_components.a className="header-anchor" href="#how-to-use-it-2">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.h4 id="creating-eventhub">
          <_components.a className="header-anchor" href="#creating-eventhub">
            {"#"}
          </_components.a>
          {"Creating EventHub"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createEventHub } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/event-bus"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">
              {"// by passing an record of Channels"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" hub = "}
            <_components.span className="hljs-title function_">{"createEventHub"}</_components.span>
            {"({\n  "}
            <_components.span className="hljs-attr">{"busA"}</_components.span>
            {": "}
            <_components.span className="hljs-title function_">{"createEventBus"}</_components.span>
            {"(),\n  "}
            <_components.span className="hljs-attr">{"busB"}</_components.span>
            {": createEventBus<"}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {">(),\n  "}
            <_components.span className="hljs-attr">{"busC"}</_components.span>
            {": createEventStack<{ "}
            <_components.span className="hljs-attr">{"text"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {" }>(),\n});\n\n"}
            <_components.span className="hljs-comment">
              {"// by passing a function"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" hub = "}
            <_components.span className="hljs-title function_">{"createEventHub"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"bus"}</_components.span>
              {" =>"}
            </_components.span>
            {" ({\n  "}
            <_components.span className="hljs-attr">{"busA"}</_components.span>
            {": bus<"}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {">(),\n  "}
            <_components.span className="hljs-attr">{"busB"}</_components.span>
            {": bus<"}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {">(),\n  "}
            <_components.span className="hljs-attr">{"busC"}</_components.span>
            {": createEventStack<{ "}
            <_components.span className="hljs-attr">{"text"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {" }>(),\n}));\n\n"}
            <_components.span className="hljs-comment">
              {"// hub can be destructured"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { busA, busB, on, emit, listen, value } = hub;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="listening--emitting">
          <_components.a className="header-anchor" href="#listening--emitting">
            {"#"}
          </_components.a>
          {"Listening & Emitting"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" hub = "}
            <_components.span className="hljs-title function_">{"createEventHub"}</_components.span>
            {"({\n  "}
            <_components.span className="hljs-attr">{"busA"}</_components.span>
            {": createEventBus<"}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {">(),\n  "}
            <_components.span className="hljs-attr">{"busB"}</_components.span>
            {": createEventBus<"}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {">(),\n  "}
            <_components.span className="hljs-attr">{"busC"}</_components.span>
            {": createEventStack<{ "}
            <_components.span className="hljs-attr">{"text"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {" }>(),\n});\n"}
            <_components.span className="hljs-comment">{"// can be destructured"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { busA, busB, on, listen, emit } = hub;\n\nhub."}
            <_components.span className="hljs-title function_">{"on"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"busA"'}</_components.span>
            {", "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {});\nhub."}
            <_components.span className="hljs-title function_">{"on"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"busB"'}</_components.span>
            {", "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {});\n\nhub."}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"busA"'}</_components.span>
            {", "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\nhub."}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"busB"'}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"foo"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">
              {"// global listener - listens to all channels"}
            </_components.span>
            {"\nhub."}
            <_components.span className="hljs-title function_">{"listen"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"switch"}</_components.span>
            {" (e."}
            <_components.span className="hljs-property">{"name"}</_components.span>
            {") {\n    "}
            <_components.span className="hljs-keyword">{"case"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"busA"'}</_components.span>
            {": {\n      e."}
            <_components.span className="hljs-property">{"details"}</_components.span>
            {";\n      "}
            <_components.span className="hljs-keyword">{"break"}</_components.span>
            {";\n    }\n    "}
            <_components.span className="hljs-keyword">{"case"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"busB"'}</_components.span>
            {": {\n      e."}
            <_components.span className="hljs-property">{"details"}</_components.span>
            {";\n      "}
            <_components.span className="hljs-keyword">{"break"}</_components.span>
            {";\n    }\n  }\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="accessing-values">
          <_components.a className="header-anchor" href="#accessing-values">
            {"#"}
          </_components.a>
          {"Accessing values"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"If a emitter returns an accessor value, it will be available in a "}
          <_components.code>{".value"}</_components.code>
          {" store."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            {"hub."}
            <_components.span className="hljs-property">{"value"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"myBus"}</_components.span>
            {";\n"}
            <_components.span className="hljs-comment">{"// same as"}</_components.span>
            {"\nhub."}
            <_components.span className="hljs-property">{"myBus"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"value"}</_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createeventstack">
          <_components.a className="header-anchor" href="#createeventstack">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createEventStack"
            data-code-package-name="event-bus"
          >
            {"createEventStack"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Extends "}
          <_components.a href="#createEmitter">
            <_components.code
              data-code-primitive-name="createEmitter"
              data-code-package-name="event-bus"
            >
              {"createEmitter"}
            </_components.code>
          </_components.a>
          {". Provides the emitted events in a list/history form, with tools to manage it."}
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
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createEventStack } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/event-bus"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" bus = createEventStack<"}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {", { "}
            <_components.span className="hljs-attr">{"message"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {" }>({\n  "}
            <_components.span className="hljs-comment">
              {"// toValue parsing function is optional"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-attr">{"toValue"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"e"}</_components.span>
              {" =>"}
            </_components.span>
            {" ({ "}
            <_components.span className="hljs-attr">{"message"}</_components.span>
            {": e })\n});\n"}
            <_components.span className="hljs-comment">
              {"// can be destructured:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { listen, emit, clear, value } = bus;\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"listener"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">
              {"EventStackListener"}
            </_components.span>
            {"<{ "}
            <_components.span className="hljs-attr">{"text"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {" }> = "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"{ event, stack, remove }"}
              </_components.span>
              {") =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(event, stack);\n  "}
            <_components.span className="hljs-comment">
              {"// you can remove the value from stack"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-title function_">{"remove"}</_components.span>
            {"();\n};\nbus."}
            <_components.span className="hljs-title function_">{"listen"}</_components.span>
            {"(listener);\n\nbus."}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"text"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"foo"'}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-comment">{"// a signal accessor:"}</_components.span>
            {"\nbus."}
            <_components.span className="hljs-title function_">{"value"}</_components.span>
            {"() "}
            <_components.span className="hljs-comment">
              {"// => { text: string }[]"}
            </_components.span>
            {"\n\nbus."}
            <_components.span className="hljs-title function_">{"setValue"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"stack"}</_components.span>
              {" =>"}
            </_components.span>
            {" stack."}
            <_components.span className="hljs-title function_">{"filter"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"item"}</_components.span>
              {" =>"}
            </_components.span>
            {" {...}))\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="eventbus-utils">
          <_components.a className="header-anchor" href="#eventbus-utils">
            {"#"}
          </_components.a>
          {"EventBus Utils"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="topromise">
          <_components.a className="header-anchor" href="#topromise">
            {"#"}
          </_components.a>
          <_components.code>{"toPromise"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "Turns a stream-like listen function, into a promise resolving when the first event is captured."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { toPromise } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/event-bus"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" emitter = createEmitter<"}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {">();\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" event = "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"toPromise"}</_components.span>
            {"(emitter."}
            <_components.span className="hljs-property">{"listen"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">
              {"// can be used together with raceTimeout from @solid-primitives/utils"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { raceTimeout } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/utils"'}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"try"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" event = "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"raceTimeout"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"toPromise"}</_components.span>
            {"(emitter."}
            <_components.span className="hljs-property">{"listen"}</_components.span>
            {"), "}
            <_components.span className="hljs-number">{"2000"}</_components.span>
            {", "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"event was too slow"'}</_components.span>
            {");\n  "}
            <_components.span className="hljs-comment">
              {"// if event is quicker:"}
            </_components.span>
            {"\n  event; "}
            <_components.span className="hljs-comment">{"// => string"}</_components.span>
            {"\n} "}
            <_components.span className="hljs-keyword">{"catch"}</_components.span>
            {" (err) {\n  "}
            <_components.span className="hljs-comment">{"// if timeouts:"}</_components.span>
            {"\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(err); "}
            <_components.span className="hljs-comment">
              {'// => "event was too slow"'}
            </_components.span>
            {"\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="once">
          <_components.a className="header-anchor" href="#once">
            {"#"}
          </_components.a>
          <_components.code>{"once"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "Listen to any EventBus/Emitter, but the listener will automatically unsubscribe on the first captured event. So the callback will run only "
          }
          <_components.strong>{"once"}</_components.strong>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { once } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/event-bus"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { listen, emit } = createEmitter<"}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {">();\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" unsub = "}
            <_components.span className="hljs-title function_">{"once"}</_components.span>
            {"(listen, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"event"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(event));\n\n"}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"foo"'}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {'// will log "foo" and unsub'}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"bar"'}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">{"// won't log"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="toeffect">
          <_components.a className="header-anchor" href="#toeffect">
            {"#"}
          </_components.a>
          <_components.code>{"toEffect"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Wraps "}
          <_components.code>{"emit"}</_components.code>
          {" calls inside a "}
          <_components.code>{"createEffect"}</_components.code>
          {
            ". It causes that listeners execute having an reactive owner available. It allows for usage of effects, memos and other primitives inside listeners, without having to create a synthetic root."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { toEffect } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/event-bus"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { listen, emit } = "}
            <_components.span className="hljs-title function_">{"createEmitter"}</_components.span>
            {"();\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" emitInEffect = "}
            <_components.span className="hljs-title function_">{"toEffect"}</_components.span>
            {"(emit);\n\n"}
            <_components.span className="hljs-comment">
              {"// owner is needed for creating computations like createEffect"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"listen"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"getOwner"}</_components.span>
            {"()));\n\n"}
            <_components.span className="hljs-comment">
              {"// ...sometime later (after root initiation):"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// listener will log `null`"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"emitInEffect"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// listener will log an owner object"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="batchemits">
          <_components.a className="header-anchor" href="#batchemits">
            {"#"}
          </_components.a>
          <_components.code>{"batchEmits"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Wraps "}
          <_components.code>{"emit"}</_components.code>
          {" calls inside a "}
          <_components.code>{"batch"}</_components.code>
          {
            " call. It causes that listeners execute in a single batch, so they are not executed in sepatate queue ticks."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createEventBus, batchEmits } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/event-bus"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" bus = "}
            <_components.span className="hljs-title function_">{"batchEmits"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"createEventBus"}</_components.span>
            {"());\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [a, setA] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [b, setB] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\n\nbus."}
            <_components.span className="hljs-title function_">{"listen"}</_components.span>
            {"(setA);\nbus."}
            <_components.span className="hljs-title function_">{"listen"}</_components.span>
            {"(setB);\n\nbus."}
            <_components.span className="hljs-title function_">{"emit"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1"}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {"// will set both a and b to 1 in a single batch"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/event-bus/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-event-bus-6fp4h?file=/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/event-bus/CHANGELOG.md">
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
      packageName="@solid-primitives/event-bus"
      name="event-bus"
      stage={2}
      packageList={[{ name: "event-bus", gzipped: "1.05 KB", minified: "2.28 KB" }]}
      primitiveList={[
        { name: "createEmitter", gzipped: "348 B", minified: "657 B" },
        { name: "createEventHub", gzipped: "438 B", minified: "732 B" },
        { name: "createEventStack", gzipped: "550 B", minified: "1.01 KB" },
        { name: "createEventBus", gzipped: "274 B", minified: "443 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
