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
      pre: "pre",
      span: "span",
      h4: "h4",
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
          {"Reactive primitives providing support to "}
          <_components.code>{"window.requestAnimationFrame"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createRAF">
              <_components.code data-code-primitive-name="createRAF" data-code-package-name="raf">
                {"createRAF"}
              </_components.code>
            </_components.a>
            {" - Creates an auto-disposing requestAnimationFrame loop."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#targetFPS">
              <_components.code data-code-primitive-name="targetFPS" data-code-package-name="raf">
                {"targetFPS"}
              </_components.code>
            </_components.a>
            {" - Used to limit the FPS of "}
            <_components.a href="#createRAF">
              <_components.code data-code-primitive-name="createRAF" data-code-package-name="raf">
                {"createRAF"}
              </_components.code>
            </_components.a>
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
      <CopyPackages packageName="@solid-primitives/raf" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createraf">
          <_components.a className="header-anchor" href="#createraf">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="createRAF" data-code-package-name="raf">
            {"createRAF"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"A primitive creating reactive "}
          <_components.code>{"window.requestAnimationFrame"}</_components.code>
          {", that is automatically disposed onCleanup."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"It takes a "}
          <_components.code>{"callback"}</_components.code>
          {" argument that will run on every frame."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"Returns a signal if currently running as well as start and stop methods"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" createRAF "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"@solid-primitives/raf"'}</_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [running, start, stop] = "}
            <_components.span className="hljs-title function_">{"createRAF"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"timeStamp"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Time stamp is"'}</_components.span>
            {", timeStamp));\n\n"}
            <_components.span className="hljs-title function_">{"running"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => false"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"start"}</_components.span>
            {"();\n"}
            <_components.span className="hljs-title function_">{"running"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => true"}</_components.span>
            {"\n"}
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
            <_components.span className="hljs-title function_">{"createRAF"}</_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"\n  callback: FrameRequestCallback,\n"}
            </_components.span>
            {"): ["}
            <_components.span className="hljs-attr">{"running"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {">, "}
            <_components.span className="hljs-attr">{"start"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"stop"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {"];\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="warning">
          <_components.a className="header-anchor" href="#warning">
            {"#"}
          </_components.a>
          {"Warning"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {
            "To respect clients refresh rate, timeStamp should be used to calculate how much the animation should progress in a given frame, otherwise the animation will run faster on high refresh rate screens. As an example: A screen refreshing at 300fps will run the animations 5x faster than a screen with 60fps if you use other forms of time keeping that don't consider this. Please see "
          }
          <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame">
            {"https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="targetfps">
          <_components.a className="header-anchor" href="#targetfps">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="targetFPS" data-code-package-name="raf">
            {"targetFPS"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"A primitive for wrapping "}
          <_components.code>{"window.requestAnimationFrame"}</_components.code>
          {" callback function to limit the execution of the callback to specified number of FPS."}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "Keep in mind that limiting FPS is achieved by not executing a callback if the frames are above defined limit. This can lead to not consistant frame duration."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"The "}
          <_components.code data-code-primitive-name="targetFPS" data-code-package-name="raf">
            {"targetFPS"}
          </_components.code>
          {" primitive takes two arguments:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"callback"}</_components.code>
            {" - The callback to run each "}
            <_components.em>{"allowed"}</_components.em>
            {" frame"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"fps"}</_components.code>
            {" - The target FPS limit"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" createRAF, { targetFPS } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"@solid-primitives/raf"'}</_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [running, start, stop] = "}
            <_components.span className="hljs-title function_">{"createRAF"}</_components.span>
            {"(\n  "}
            <_components.span className="hljs-title function_">{"targetFPS"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"timeStamp"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Time stamp is"'}</_components.span>
            {", timeStamp), "}
            <_components.span className="hljs-number">{"60"}</_components.span>
            {")\n);\n\n"}
            <_components.span className="hljs-comment">
              {"// the target fps value can be a reactive sigmal"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [fps, setFps] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"60"}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"createRAF"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"targetFPS"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"timestamp"}</_components.span>
              {") =>"}
            </_components.span>
            {" {...}, fps));\n"}
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
            <_components.span className="hljs-title function_">{"targetFPS"}</_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"\n  callback: FrameRequestCallback,\n  fps: MaybeAccessor<"}
              <_components.span className="hljs-built_in">{"number"}</_components.span>
              {">,\n"}
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">
              {"FrameRequestCallback"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/raf/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"You may view a working example here: "}
          <_components.a href="https://codesandbox.io/s/solid-primitives-raf-demo-4xvmjd?file=/src/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/raf/CHANGELOG.md">
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
      packageName="@solid-primitives/raf"
      name="raf"
      stage={3}
      packageList={[{ name: "raf", gzipped: "419 B", minified: "751 B" }]}
      primitiveList={[
        { name: "targetFPS", gzipped: "224 B", minified: "321 B" },
        { name: "createRAF", gzipped: "294 B", minified: "497 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
