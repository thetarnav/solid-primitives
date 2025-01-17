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
      h2: "h2",
      a: "a",
      pre: "pre",
      code: "code",
      span: "span",
      h3: "h3",
      ul: "ul",
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
          {"A set of const boolean variables identifying device and browser type."}
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
      <CopyPackages packageName="@solid-primitives/platform" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h2>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { isWebKit, isFirefox } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/platform"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" (!isFirefox) {\n  "}
            <_components.span className="hljs-comment">
              {"// won't run on the Mozilla Firefox Browser"}
            </_components.span>
            {"\n}\n\n"}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" (isWebKit) {\n  "}
            <_components.span className="hljs-comment">
              {"// run WebKit Engine specific code"}
            </_components.span>
            {"\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="list-of-variables">
          <_components.a className="header-anchor" href="#list-of-variables">
            {"#"}
          </_components.a>
          {"List of variables"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="device">
          <_components.a className="header-anchor" href="#device">
            {"#"}
          </_components.a>
          {"Device"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isAndroid"}</_components.code>
              {" — Is Android Device"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isWindows"}</_components.code>
              {" — Is Windows Device"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isMac"}</_components.code>
              {" — Is Mac Device"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isIPhone"}</_components.code>
              {" — Is IPhone Device"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isIPad"}</_components.code>
              {" — Is IPad Device"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isIPod"}</_components.code>
              {" — Is IPod Device"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isIOS"}</_components.code>
              {" — Is IOS Device"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isAppleDevice"}</_components.code>
              {" — Is Apple Device"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isMobile"}</_components.code>
              {" — is a Mobile Browser"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="browser">
          <_components.a className="header-anchor" href="#browser">
            {"#"}
          </_components.a>
          {"Browser"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isFirefox"}</_components.code>
              {" — Browser is Mozilla Firefox"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isOpera"}</_components.code>
              {" — Browser is Opera"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isSafari"}</_components.code>
              {" — Browser is Safari"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isIE"}</_components.code>
              {" — Browser is Internet Explorer"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isChromium"}</_components.code>
              {" — is Chromium-based browser"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isEdge"}</_components.code>
              {" — Browser is Edge"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isChrome"}</_components.code>
              {" — Browser is Chrome"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="rendering-engine">
          <_components.a className="header-anchor" href="#rendering-engine">
            {"#"}
          </_components.a>
          {"Rendering Engine"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isGecko"}</_components.code>
              {" — Browser using Gecko Rendering Engine"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isBlink"}</_components.code>
              {" — Browser using Blink Rendering Engine"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isWebKit"}</_components.code>
              {" — Browser using WebKit Rendering Engine"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isPresto"}</_components.code>
              {" — Browser using Presto Rendering Engine"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isTrident"}</_components.code>
              {" — Browser using Trident Rendering Engine"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"isEdgeHTML"}</_components.code>
              {" — Browser using EdgeHTML Rendering Engine"}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
        </_components.ul>
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/platform/CHANGELOG.md">
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
      packageName="@solid-primitives/platform"
      name="platform"
      stage={1}
      packageList={[{ name: "platform", gzipped: "583 B", minified: "1.13 KB" }]}
      primitiveList={[
        { name: "isAndroid", gzipped: "298 B", minified: "463 B" },
        { name: "isWindows", gzipped: "315 B", minified: "488 B" },
        { name: "isMac", gzipped: "319 B", minified: "497 B" },
        { name: "isIPhone", gzipped: "298 B", minified: "462 B" },
        { name: "isIPad", gzipped: "291 B", minified: "440 B" },
        { name: "isIPod", gzipped: "297 B", minified: "458 B" },
        { name: "isIOS", gzipped: "310 B", minified: "487 B" },
        { name: "isAppleDevice", gzipped: "347 B", minified: "556 B" },
        { name: "isMobile", gzipped: "299 B", minified: "463 B" },
        { name: "isFirefox", gzipped: "320 B", minified: "488 B" },
        { name: "isOpera", gzipped: "290 B", minified: "441 B" },
        { name: "isSafari", gzipped: "290 B", minified: "442 B" },
        { name: "isIE", gzipped: "289 B", minified: "438 B" },
        { name: "isChromium", gzipped: "293 B", minified: "444 B" },
        { name: "isEdge", gzipped: "290 B", minified: "440 B" },
        { name: "isChrome", gzipped: "290 B", minified: "442 B" },
        { name: "isGecko", gzipped: "306 B", minified: "468 B" },
        { name: "isBlink", gzipped: "309 B", minified: "473 B" },
        { name: "isWebKit", gzipped: "324 B", minified: "511 B" },
        { name: "isPresto", gzipped: "309 B", minified: "473 B" },
        { name: "isTrident", gzipped: "309 B", minified: "476 B" },
        { name: "isEdgeHTML", gzipped: "307 B", minified: "474 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
