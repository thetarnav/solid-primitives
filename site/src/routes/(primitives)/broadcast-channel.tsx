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
      h2: "h2",
      ul: "ul",
      li: "li",
      code: "code",
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
          {"Primitive to manage "}
          <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API">
            {"Broadcast Channel"}
          </_components.a>
          {". The Broadcast Channel is a browser API that allows basic communication between "}
          <_components.a href="https://developer.mozilla.org/en-US/docs/Glossary/Browsing_context">
            {"browsing contexts"}
          </_components.a>
          {" (that is, windows, tabs, frames, or iframes) on the same "}
          <_components.a href="https://developer.mozilla.org/en-US/docs/Glossary/Origin">
            {"origin"}
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
      <CopyPackages packageName="@solid-primitives/broadcast-channel" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="available-primitives">
          <_components.a className="header-anchor" href="#available-primitives">
            {"#"}
          </_components.a>
          {"Available primitives"}
        </_components.h2>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#makeBroadcastChannel">
              <_components.code
                data-code-primitive-name="makeBroadcastChannel"
                data-code-package-name="broadcast-channel"
              >
                {"makeBroadcastChannel"}
              </_components.code>
            </_components.a>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createBroadcastChannel">
              <_components.code
                data-code-primitive-name="createBroadcastChannel"
                data-code-package-name="broadcast-channel"
              >
                {"createBroadcastChannel"}
              </_components.code>
            </_components.a>
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="makebroadcastchannel">
          <_components.a className="header-anchor" href="#makebroadcastchannel">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="makeBroadcastChannel"
            data-code-package-name="broadcast-channel"
          >
            {"makeBroadcastChannel"}
          </_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Creates a new "}
          <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API">
            {"BroadcastChannel"}
          </_components.a>
          {" instance for cross-tab communication."}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "The channel name is used to identify the channel. If a channel with the same name already exists, it will be returned instead of creating a new one."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "Channel attempt closing the channel when the on owner cleanup. If there are multiple connected instances, the channel will not be closed until the last owner is removed."
          }
        </_components.p>
        {"\n"}
        <_components.p>{"Returns an object with the following properties:"}</_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"onMessage"}</_components.code>
            {" - a function to subscribe to messages from other tabs"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"postMessage"}</_components.code>
            {" - a function to send messages to other tabs"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"close"}</_components.code>
            {" - a function to close the channel"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"channelName"}</_components.code>
            {" - the name of the channel"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"instance"}</_components.code>
            {" - the underlying "}
            <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API">
              {"BroadcastChannel"}
            </_components.a>
            {" instance"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { postMessage } = "}
            <_components.span className="hljs-title function_">
              {"makeBroadcastChannel"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"test_channel"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-title function_">{"postMessage"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"id"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"message"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"hi"'}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-comment">
              {"// Another browsing context"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { onMessage } = "}
            <_components.span className="hljs-title function_">
              {"makeBroadcastChannel"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"test_channel"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-title function_">{"onMessage"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"{ data }"}</_components.span>
              {") =>"}
            </_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(data); "}
            <_components.span className="hljs-comment">
              {'// { id: 2, message: "hi" }'}
            </_components.span>
            {"\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"You can use the same channel easily across different components in the same context"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"Component_1"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params" />
            {") => {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { postMessage } = "}
            <_components.span className="hljs-title function_">
              {"makeBroadcastChannel"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"river"'}</_components.span>
            {");\n\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"onClick"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params" />
            {") => {\n    "}
            <_components.span className="hljs-title function_">{"postMessage"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"hi"'}</_components.span>
            {");\n  };\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{onClick}"}</_components.span>
                {">"}
              </_components.span>
              {"Send Message"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n};\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"Component_2"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params" />
            {") => {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { onMessage } = "}
            <_components.span className="hljs-title function_">
              {"makeBroadcastChannel"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"river"'}</_components.span>
            {");\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [message, setMessage] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'""'}</_components.span>
            {");\n\n  "}
            <_components.span className="hljs-title function_">{"onMessage"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"{ data }"}</_components.span>
              {") =>"}
            </_components.span>
            {" {\n    "}
            <_components.span className="hljs-title function_">{"setMessage"}</_components.span>
            {"(data);\n  });\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"{message()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n};\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"App"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params" />
            {") => {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { onMessage } = "}
            <_components.span className="hljs-title function_">
              {"makeBroadcastChannel"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"river"'}</_components.span>
            {");\n\n  "}
            <_components.span className="hljs-title function_">{"onMessage"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"{ data }"}</_components.span>
              {") =>"}
            </_components.span>
            {" {\n    "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(data);\n  });\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n    "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">{"<>"}</_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Component_1"}</_components.span>
                {" />"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Component_2"}</_components.span>
                {" />"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">{"</>"}</_components.span>
            </_components.span>
            {"\n  );\n};\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createbroadcastchannel">
          <_components.a className="header-anchor" href="#createbroadcastchannel">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createBroadcastChannel"
            data-code-package-name="broadcast-channel"
          >
            {"createBroadcastChannel"}
          </_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Provedes the same functionality as "}
          <_components.a href="#makeBroadcastChannel">
            <_components.code
              data-code-primitive-name="makeBroadcastChannel"
              data-code-package-name="broadcast-channel"
            >
              {"makeBroadcastChannel"}
            </_components.code>
          </_components.a>
          {" but instead of returning "}
          <_components.code>{"onMessage"}</_components.code>
          {" function, it returns a "}
          <_components.code>{"message"}</_components.code>
          {" signal accessor that updates when postMessage is fired from other contexts."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { postMessage } = "}
            <_components.span className="hljs-title function_">
              {"createBroadcastChannel"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"test_channel"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-title function_">{"postMessage"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"id"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"message"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"hi"'}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-comment">
              {"// Another browsing context"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { message } = "}
            <_components.span className="hljs-title function_">
              {"createBroadcastChannel"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"test_channel"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"(\n  "}
            <_components.span className="hljs-title function_">{"on"}</_components.span>
            {"(\n    message,\n    "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"data"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n      "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(data); "}
            <_components.span className="hljs-comment">
              {'// { id: 2, message: "hi" }'}
            </_components.span>
            {"\n    },\n    { "}
            <_components.span className="hljs-attr">{"defer"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" },\n  ),\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="type-safety">
          <_components.a className="header-anchor" href="#type-safety">
            {"#"}
          </_components.a>
          {"Type Safety"}
        </_components.h2>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="makeBroadcastChannel"
            data-code-package-name="broadcast-channel"
          >
            {"makeBroadcastChannel"}
          </_components.code>
          {" and "}
          <_components.code
            data-code-primitive-name="createBroadcastChannel"
            data-code-package-name="broadcast-channel"
          >
            {"createBroadcastChannel"}
          </_components.code>
          {" allows you to pass type which determines what should be passed to "}
          <_components.code>{"postMessage"}</_components.code>
          {" and what values "}
          <_components.code>{"message()"}</_components.code>
          {" or event.data from "}
          <_components.code>{"onMessage"}</_components.code>
          {" callback are."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { onMessage, postMessage } = makeBroadcastChannel<"}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {">("}
            <_components.span className="hljs-string">{'"test_channel"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-title function_">{"onMessage"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"{ data }"}</_components.span>
              {") =>"}
            </_components.span>
            {" {\n  data; "}
            <_components.span className="hljs-comment">{"// Type 'string'"}</_components.span>
            {"\n});\n"}
            <_components.span className="hljs-title function_">{"postMessage"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"hi"'}</_components.span>
            {");\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"TData"}</_components.span>
            {" = { "}
            <_components.span className="hljs-attr">{"id"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {"; "}
            <_components.span className="hljs-attr">{"message"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {" };\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { message, postMessage } = createBroadcastChannel<"}
            <_components.span className="hljs-title class_">{"TData"}</_components.span>
            {">("}
            <_components.span className="hljs-string">{'"test_channel"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-title function_">{"postMessage"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"id"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"wrong type"'}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"message"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"hi"'}</_components.span>
            {" }); "}
            <_components.span className="hljs-comment">{"// ❌"}</_components.span>
            {"\n"}
            <_components.span className="hljs-comment">{"//            ^^^"}</_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// (property) id: number"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// Type 'string' is not assignable to type 'number'."}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-title function_">{"postMessage"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"id"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"5"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"message"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"hi"'}</_components.span>
            {" }); "}
            <_components.span className="hljs-comment">{"// ✅"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"(\n  "}
            <_components.span className="hljs-title function_">{"on"}</_components.span>
            {"(\n    message,\n    "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"data"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n      "}
            <_components.span className="hljs-title function_">
              {"consumeDataIncorrect"}
            </_components.span>
            {"(data!); "}
            <_components.span className="hljs-comment">{"// ❌"}</_components.span>
            {"\n      "}
            <_components.span className="hljs-comment">
              {"//                    ^^^"}
            </_components.span>
            {"\n      "}
            <_components.span className="hljs-comment">
              {
                "// Argument of type 'TData' is not assignable to parameter of type '{ id: string; message: string; }'."
              }
            </_components.span>
            {"\n      "}
            <_components.span className="hljs-comment">
              {"// Types of property 'id' are incompatible."}
            </_components.span>
            {"\n      "}
            <_components.span className="hljs-comment">
              {"// Type 'number' is not assignable to type 'string'."}
            </_components.span>
            {"\n\n      "}
            <_components.span className="hljs-title function_">
              {"consumeDataCorrect"}
            </_components.span>
            {"(data!); "}
            <_components.span className="hljs-comment">{"// ✅"}</_components.span>
            {"\n    },\n    { "}
            <_components.span className="hljs-attr">{"defer"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {" },\n  ),\n);\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"consumeDataIncorrect"}
            </_components.span>
            {" = ("}
            <_components.span className="hljs-params">
              {"data: { id: "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {"; message: "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {" }"}
            </_components.span>
            {") => {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(data);\n};\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"consumeDataCorrect"}
            </_components.span>
            {" = ("}
            <_components.span className="hljs-params">
              {"data: { id: "}
              <_components.span className="hljs-built_in">{"number"}</_components.span>
              {"; message: "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {" }"}
            </_components.span>
            {") => {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(data);\n};\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/broadcast-channel/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"Here's a working example here: "}
          <_components.a href="https://stackblitz.com/edit/vitejs-vite-5xren3?file=src%2Fmain.tsx">
            {"StackBlitz"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/broadcast-channel/CHANGELOG.md">
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
      packageName="@solid-primitives/broadcast-channel"
      name="broadcast-channel"
      stage={0}
      packageList={[{ name: "broadcast-channel", gzipped: "559 B", minified: "1.28 KB" }]}
      primitiveList={[
        { name: "createBroadcastChannel", gzipped: "551 B", minified: "1.26 KB" },
        { name: "makeBroadcastChannel", gzipped: "479 B", minified: "1.06 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
