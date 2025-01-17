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
      h2: "h2",
      a: "a",
      h3: "h3",
      pre: "pre",
      span: "span",
      ul: "ul",
      li: "li",
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
          <_components.code
            data-code-primitive-name="createIdleTimer"
            data-code-package-name="idle"
          >
            {"createIdleTimer"}
          </_components.code>
          {" - A primitive to track the user's idle status and take appropriate action."}
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
      <CopyPackages packageName="@solid-primitives/idle" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h2>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createIdleTimer"
            data-code-package-name="idle"
          >
            {"createIdleTimer"}
          </_components.code>
          {
            " provides different accessors and methods to observe the user's idle status and react to its changing."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="basic-example">
          <_components.a className="header-anchor" href="#basic-example">
            {"#"}
          </_components.a>
          {"Basic example"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"App"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Component"}</_components.span>
            {" = "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { isIdle, isPrompted, reset } = "}
            <_components.span className="hljs-title function_">
              {"createIdleTimer"}
            </_components.span>
            {"({\n    "}
            <_components.span className="hljs-attr">{"onIdle"}</_components.span>
            {": logout,\n    "}
            <_components.span className="hljs-attr">{"idleTimeout"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"300_000"}</_components.span>
            {",\n    "}
            <_components.span className="hljs-attr">{"promptTimeout"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"60_000"}</_components.span>
            {",\n  });\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n    "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Switch"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"fallback"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{"}</_components.span>
                {"<"}
                <_components.span className="hljs-attr">{"ClientPage"}</_components.span>
                {" />"}
              </_components.span>
              {"}>\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Match"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"when"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{isIdle()}"}</_components.span>
                {">"}
              </_components.span>
              {"\n        "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"LoggedOut"}</_components.span>
                {" />"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Match"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Match"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"when"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{isPrompted()}"}</_components.span>
                {">"}
              </_components.span>
              {"\n        "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"PromptPopup"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onConfirm"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{reset"}</_components.span>
                {" /*"}
                <_components.span className="hljs-attr">{"or"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"stop"}</_components.span>
                {"*/} />"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Match"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Switch"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n  );\n};\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="accessors-and-methods">
          <_components.a className="header-anchor" href="#accessors-and-methods">
            {"#"}
          </_components.a>
          {"Accessors and methods"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"To interact with the timers, "}
          <_components.code
            data-code-primitive-name="createIdleTimer"
            data-code-package-name="idle"
          >
            {"createIdleTimer"}
          </_components.code>
          {" provides:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>{"isIdle"}</_components.strong>
            {" and "}
            <_components.strong>{"isPrompted"}</_components.strong>
            {": "}
            <_components.code>{"Accessor<boolean>"}</_components.code>
            {"; these two accessors report the user status. They do not concur."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"start"}</_components.strong>
            {", "}
            <_components.strong>{"stop"}</_components.strong>
            {" and "}
            <_components.strong>{"reset"}</_components.strong>
            {": "}
            <_components.code>{"() => void"}</_components.code>
            {"; allow rispectively to start and stop the timers, and to reset them. "}
            <_components.code>{"start"}</_components.code>
            {" and "}
            <_components.code>{"reset"}</_components.code>
            {", create a custom "}
            <_components.code>{"manualstart"}</_components.code>
            {" and "}
            <_components.code>{"manualreset"}</_components.code>
            {" event, that will be passed to the "}
            <_components.code>{"onIdle"}</_components.code>
            {" and "}
            <_components.code>{"onPrompt"}</_components.code>
            {" callbacks if no oher activity occurs (there's another custom event, "}
            <_components.code>{"mount"}</_components.code>
            {", created when timers start automatically). Finally "}
            <_components.code>{"stop"}</_components.code>
            {" and "}
            <_components.code>{"reset"}</_components.code>
            {" don't trigger "}
            <_components.code>{"onActive"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="configuration-options">
          <_components.a className="header-anchor" href="#configuration-options">
            {"#"}
          </_components.a>
          {"Configuration options"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createIdleTimer"
            data-code-package-name="idle"
          >
            {"createIdleTimer"}
          </_components.code>
          {
            " takes as an optional argument an object with the timer's configuration options. Each key has a default value.\nThe options are:"
          }
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>{"idleTimeout"}</_components.strong>
            {": "}
            <_components.code>{"number"}</_components.code>
            {
              "; time of user's inactivity in milliseconds before the idle status changes to idle. This time is extended by the "
            }
            <_components.code>{"promptTimeout"}</_components.code>
            {" option. It defaults to 15 minutes."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"promptTimeout"}</_components.strong>
            {": "}
            <_components.code>{"number"}</_components.code>
            {
              "; to meet the typical usecase when we want to prompt the user to check if we they are still active, an additional timer starts running right after the idleTimeout expires. In this time slot, the user is in the prompt phase, whose duration is decided by "
            }
            <_components.code>{"promptTimout"}</_components.code>
            {". It defaults to 0."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"onIdle"}</_components.strong>
            {": "}
            <_components.code>{"(evt: Event) => void"}</_components.code>
            {
              "; callback triggered when the user status passes to idle. When invoked, the last event fired before the prompt phase will be passed as parameter. Events fired in the prompt phase will not count. It defaults to an empty function."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"onPrompt"}</_components.strong>
            {": "}
            <_components.code>{"(evt: Event) => void"}</_components.code>
            {"; when the "}
            <_components.code>{"idleTimeout"}</_components.code>
            {" expires, before declaring the idle status, "}
            <_components.code>{"onPrompt"}</_components.code>
            {
              " callback is fired, starting the prompt timer. When invoked, the last event fired before the prompt phase will be passed as a parameter. It defaults to an empty function."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"onActive"}</_components.strong>
            {": "}
            <_components.code>{"(evt: Event) => void"}</_components.code>
            {
              "; callback called when the user resumes activity after having been idle (resuming from prompt phase doesn't trigger "
            }
            <_components.code>{"onActive"}</_components.code>
            {
              "). The event that triggered the return to activity is passed as a parameter. It defaults to an empty function."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"startManually"}</_components.strong>
            {": "}
            <_components.code>{"boolean"}</_components.code>
            {"; requires the event-listeners to be bound manually by using the "}
            <_components.code>{"start"}</_components.code>
            {" method, instead of on mount. It defaults to false."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"events"}</_components.strong>
            {": "}
            <_components.code>{"EventTypeName[]"}</_components.code>
            {
              "; a list of the DOM events that will be listened to in order to monitor the user's activity. The events must be of "
            }
            <_components.code>{"EventTypeName"}</_components.code>
            {" type (it can be imported). The list defaults to "}
            <_components.code>
              {
                "['mousemove', 'keydown', 'wheel', 'resize', 'mousewheel', 'mousedown', 'pointerdown', 'touchstart', 'touchmove', 'visibilitychange']"
              }
            </_components.code>
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"element"}</_components.strong>
            {": "}
            <_components.code>{"HTMLElement"}</_components.code>
            {"; DOM element to which the event listeners will be attached. It defaults to "}
            <_components.code>{"document"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h2 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h2>
        {"\n"}
        <_components.p>
          <_components.a href="https://solidjs-community.github.io/solid-primitives/idle/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"Here is a working example: "}
          <_components.a href="https://stackblitz.com/edit/vitejs-vite-dwxlhp?file=src/App.tsx">
            {"StackBlitz"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="acknowledgments">
          <_components.a className="header-anchor" href="#acknowledgments">
            {"#"}
          </_components.a>
          {"Acknowledgments"}
        </_components.h2>
        {"\n"}
        <_components.p>
          {"This primitive is inspired by "}
          <_components.a href="https://idletimer.dev/">{"react-idle-timer"}</_components.a>
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/idle/CHANGELOG.md">
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
      packageName="@solid-primitives/idle"
      name="idle"
      stage={0}
      packageList={[{ name: "idle", gzipped: "650 B", minified: "1.28 KB" }]}
      primitiveList={[{ name: "createIdleTimer", gzipped: "650 B", minified: "1.28 KB" }]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
