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
      h3: "h3",
      code: "code",
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
        <_components.p>{"Creates a composable primitive to support requests."}</_components.p>
        {"\n"}
        <_components.h2 id="installation">
          <_components.a className="header-anchor" href="#installation">
            {"#"}
          </_components.a>
          {"Installation"}
        </_components.h2>
        {"\n"}
      </NoHydration>
      <CopyPackages packageName="@solid-primitives/fetch" />
      <NoHydration>
        {"\n"}
        <_components.h3 id="additional-requirements">
          <_components.a className="header-anchor" href="#additional-requirements">
            {"#"}
          </_components.a>
          {"Additional requirements"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Since nodejs 17.5.0, the fetch API is available in node via the "}
          <_components.code>{"--experimental-fetch"}</_components.code>
          {
            " command line option. From version 18.0.0 upwards, it is supposed to become available out of the box. If you want to use "
          }
          <_components.code data-code-primitive-name="createFetch" data-code-package-name="fetch">
            {"createFetch"}
          </_components.code>
          {
            " on your server, but your nodejs version does not support the fetch API, you need to install node-fetch alongside this primitive:"
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-bash">
            {"npm install node-fetch\n"}
            <_components.span className="hljs-comment">{"# or"}</_components.span>
            {"\nyarn add node-fetch\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "If you fail to install it, but still run it on the server, you should see a nice error message that asks you to install it in the logs and your requests are all rejected."
          }
        </_components.p>
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
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [resource, { mutate, refetch }] = createFetch<T>(\n  "}
            <_components.span className="hljs-attr">{"requestInfo"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"RequestInfo"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {"> | "}
            <_components.span className="hljs-title class_">{"RequestInfo"}</_components.span>
            {",\n  requestInit?: "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"RequestInit"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {"> | "}
            <_components.span className="hljs-title class_">{"RequestInit"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {",\n  options?: { disable?: "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {" } & "}
            <_components.span className="hljs-title class_">{"ResourceOptions"}</_components.span>
            {"<T>,\n  modifiers?: "}
            <_components.span className="hljs-title class_">{"RequestModifier"}</_components.span>
            {"[]\n);\n\n"}
            <_components.span className="hljs-title function_">{"resource"}</_components.span>
            {"(): T\nresource."}
            <_components.span className="hljs-property">{"error"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Error"}</_components.span>
            {" | "}
            <_components.span className="hljs-built_in">{"any"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {"\nresource."}
            <_components.span className="hljs-property">{"loading"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {"\nresource."}
            <_components.span className="hljs-property">{"status"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"null"}</_components.span>
            {"\nresource."}
            <_components.span className="hljs-property">{"response"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Response"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"Remember, just like with "}
          <_components.a href="https://www.solidjs.com/docs/latest/api#createresource">
            <_components.code>{"createResource"}</_components.code>
          </_components.a>
          {", you will need an "}
          <_components.a href="https://www.solidjs.com/docs/latest/api#%3Cerrorboundary%3E">
            <_components.code>{"<ErrorBoundary>"}</_components.code>
          </_components.a>
          {
            " to catch the errors, even if they are accessible inside the resource. Otherwise, uncaught errors might disrupt your application - except if you use the "
          }
          <_components.code>{"withCatchAll()"}</_components.code>
          {" modifier."}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "If you want to initialize a fetch request without directly starting it, you can use an Accessor that returns undefined before being set to the actual request info or url. Even if you add a RequestInit, the request will not be started without a defined RequestInfo."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="modifiers">
          <_components.a className="header-anchor" href="#modifiers">
            {"#"}
          </_components.a>
          {"Modifiers"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "The fetch primitive alone just wraps a simple fetch request in a solid resource for convenience, but its ability to compose modifiers are what makes this primitive really powerful. The following modifiers are supported:"
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {
                "// makes the request abortable; will automatically abort previous requests or those whose owner got disposed"
              }
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"withAbort"}</_components.span>
            {"()\n\n"}
            <_components.span className="hljs-comment">
              {"// will abort the request if abortable and throw an error after a certain timeout"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"withTimeout"}</_components.span>
            {"("}
            <_components.span className="hljs-attr">{"after"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {")\n\n"}
            <_components.span className="hljs-comment">
              {"// catches all request errors so you no longer require an ErrorBoundary"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"withCatchAll"}</_components.span>
            {"()\n\n"}
            <_components.span className="hljs-comment">
              {
                "// retries failed requests after a certain time, will by default wait the number of the retry seconds,"
              }
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// starting with 1, up to 30s"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"withRetry"}</_components.span>
            {"("}
            <_components.span className="hljs-attr">{"retries"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"wait"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {" | "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"retry: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {")\n\n"}
            <_components.span className="hljs-comment">
              {"// refetches the request after certain events"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"withRefetchEvent"}
            </_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"on"}</_components.span>
            {": keyof "}
            <_components.span className="hljs-title class_">
              {"HTMLWindowEventMap"}
            </_components.span>
            {"[], "}
            <_components.span className="hljs-attr">{"filter"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"...args, data, event"}</_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {" })\n\n"}
            <_components.span className="hljs-comment">
              {
                "// aggregates response data; depending on existing data, it will handle the response"
              }
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {
                "// you can either use initial data or an optional dataFilter to trigger certain handling"
              }
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {
                "// strings and arrays will be joined, objects merged shallowly, everything else will be put into an array"
              }
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"withAggregation"}
            </_components.span>
            {"(dataFilter?: "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"responseData: Result"}</_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title class_">{"Result"}</_components.span>
            {")\n\n"}
            <_components.span className="hljs-comment">{"// caches requests"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"withCache"}</_components.span>
            {"({ cache?: "}
            <_components.span className="hljs-title class_">{"Record"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {", "}
            <_components.span className="hljs-title class_">{"CacheEntry"}</_components.span>
            {">, expires?: "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {" | ("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"entry: CacheEntry"}</_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {"); })\n\n"}
            <_components.span className="hljs-comment">
              {"// refetch on cache expiry"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {
                "// (expiry control function requires polling; you can set the delay; 0 = raf; default is 100ms)"
              }
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"withRefetchOnExpiry"}
            </_components.span>
            {"("}
            <_components.span className="hljs-attr">{"pollDelayMs"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {")\n\n"}
            <_components.span className="hljs-comment">
              {"// makes cache persistent in storage, defaults = [localStorage, 'fetch-cache']"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"withCacheStorage"}
            </_components.span>
            {"(storage?: "}
            <_components.span className="hljs-title class_">{"Storage"}</_components.span>
            {", key?: "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {")\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "The main advantage of using modifiers like this is that you only import what you need and the rest will be eliminated in tree shaking."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"There's also a helper for the cache to serialize the cache key from the request."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-title function_">
              {"serializeRequest"}
            </_components.span>
            {"(["}
            <_components.span className="hljs-attr">{"info"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"RequestInfo"}</_components.span>
            {", init?: "}
            <_components.span className="hljs-title class_">{"RequestInit"}</_components.span>
            {"]): "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"in case you want to debug or manipulate the cache."}</_components.p>
        {"\n"}
        <_components.h2 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h2>
        {"\n"}
        <_components.p>
          <_components.a href="https://solidjs-community.github.io/solid-primitives/fetch/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>{"TODO"}</_components.p>
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/fetch/CHANGELOG.md">
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
      packageName="@solid-primitives/fetch"
      name="fetch"
      stage={3}
      packageList={[{ name: "fetch", gzipped: "2.28 KB", minified: "5.29 KB" }]}
      primitiveList={[{ name: "createFetch", gzipped: "835 B", minified: "1.58 KB" }]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
