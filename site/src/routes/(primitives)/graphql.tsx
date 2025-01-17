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
      h4: "h4",
      pre: "pre",
      code: "code",
      span: "span",
      ul: "ul",
      li: "li",
      em: "em",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>{"Creates a reactive GraphQL query client."}</_components.p>
        {"\n"}
        <_components.h2 id="installation">
          <_components.a className="header-anchor" href="#installation">
            {"#"}
          </_components.a>
          {"Installation"}
        </_components.h2>
        {"\n"}
      </NoHydration>
      <CopyPackages packageName="@solid-primitives/graphql" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h2>
        {"\n"}
        <_components.h4 id="import">
          <_components.a className="header-anchor" href="#import">
            {"#"}
          </_components.a>
          {"Import"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createGraphQLClient, gql, request } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/graphql"'}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-comment">
              {"// gql is a helper for creating GraphQL query strings"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// request is an additional function to perform GraphQL requests imperatively"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="using-the-client">
          <_components.a className="header-anchor" href="#using-the-client">
            {"#"}
          </_components.a>
          {"Using the client"}
        </_components.h4>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createGraphQLClient"
            data-code-package-name="graphql"
          >
            {"createGraphQLClient"}
          </_components.code>
          {" takes 3 arguments:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"url"}</_components.code>
            {" - target api endpoint, as string or signal"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"headers"}</_components.code>
            {" - "}
            <_components.em>{"optional"}</_components.em>
            {", A list of request headers to supply the client"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"fetchFn"}</_components.code>
            {" - "}
            <_components.em>{"optional"}</_components.em>
            {", A fetch function to replace the default one, that is Fetch API on browser and "}
            <_components.code>{"node-fetch"}</_components.code>
            {" on server."}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createGraphQLClient, gql } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/graphql"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" newQuery = "}
            <_components.span className="hljs-title function_">
              {"createGraphQLClient"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">
              {'"https://foobar.com/v1/api"'}
            </_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [data, { refetch }] = "}
            <_components.span className="hljs-title function_">{"newQuery"}</_components.span>
            {"(\n  gql"}
            <_components.span className="hljs-string">
              {
                "`\n    query data($path: ID!) {\n      PageItem(id: $path) {\n        content {\n          body\n        }\n      }\n    }\n  `"
              }
            </_components.span>
            {",\n  { "}
            <_components.span className="hljs-attr">{"path"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"home"'}</_components.span>
            {" },\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="preventing-immediate-requests">
          <_components.a className="header-anchor" href="#preventing-immediate-requests">
            {"#"}
          </_components.a>
          {"Preventing immediate requests"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"Query function is based on "}
          <_components.code>{"createResource"}</_components.code>
          {", so it can be deferred in the same way - by passing "}
          <_components.code>{"false"}</_components.code>
          {" to the variables."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" newQuery = "}
            <_components.span className="hljs-title function_">
              {"createGraphQLClient"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">
              {'"https://foobar.com/v1/api"'}
            </_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [queryVars, setQueryVars] = createSignal<"}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {" | "}
            <_components.span className="hljs-built_in">{"object"}</_components.span>
            {">("}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [data, { refetch }] = "}
            <_components.span className="hljs-title function_">{"newQuery"}</_components.span>
            {"(gql"}
            <_components.span className="hljs-string">{"`...`"}</_components.span>
            {", queryVars);\n\n"}
            <_components.span className="hljs-title function_">{"setQueryVars"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"foo"}</_components.span>
            {": bar }); "}
            <_components.span className="hljs-comment">
              {"// will fetch for the first time"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"refetch"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// will refetch the second time"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="providing-response-type">
          <_components.a className="header-anchor" href="#providing-response-type">
            {"#"}
          </_components.a>
          {"Providing Response Type"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"// query function accepts type generic for the response:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [countries] = newQuery<{ "}
            <_components.span className="hljs-attr">{"countries"}</_components.span>
            {": { "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {" }[] }>(\n  gql"}
            <_components.span className="hljs-string">
              {"`\n    query {\n      countries {\n        name\n        code\n      }\n    }\n  `"}
            </_components.span>
            {",\n);\n"}
            <_components.span className="hljs-title function_">{"countries"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// T: { countries: { name: string }[] } | undefined"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="initial-value">
          <_components.a className="header-anchor" href="#initial-value">
            {"#"}
          </_components.a>
          {"Initial value"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"By default the returned data type will be "}
          <_components.code>{"T | undefined"}</_components.code>
          {", to make it always "}
          <_components.code>{"T"}</_components.code>
          {" you need to provide an initial value."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [countries] = newQuery<{ "}
            <_components.span className="hljs-attr">{"countries"}</_components.span>
            {": { "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {" }[] }>(\n  gql"}
            <_components.span className="hljs-string">
              {"`\n    query {\n      countries {\n        name\n        code\n      }\n    }\n  `"}
            </_components.span>
            {",\n  "}
            <_components.span className="hljs-comment">{"// no variables"}</_components.span>
            {"\n  "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {",\n  "}
            <_components.span className="hljs-comment">{"// the initial value"}</_components.span>
            {"\n  { "}
            <_components.span className="hljs-attr">{"countries"}</_components.span>
            {": [] },\n);\n"}
            <_components.span className="hljs-title function_">{"countries"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// T: { countries: { name: string }[] }"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="reactive-query-variables">
          <_components.a className="header-anchor" href="#reactive-query-variables">
            {"#"}
          </_components.a>
          {"Reactive query variables"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {
            "Variables passed to the query can be reactive. If they change, the resource will be refetched."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [code, setCode] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"BR"'}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [data] = "}
            <_components.span className="hljs-title function_">{"query"}</_components.span>
            {"(\n  gql"}
            <_components.span className="hljs-string">
              {
                "`\n    query data($code: ID!) {\n      country(code: $code) {\n        name\n      }\n    }\n  `"
              }
            </_components.span>
            {",\n  "}
            <_components.span className="hljs-comment">
              {"// function returning an object"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" ({\n    "}
            <_components.span className="hljs-attr">{"code"}</_components.span>
            {": "}
            <_components.span className="hljs-title function_">{"code"}</_components.span>
            {"(),\n  }),\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="file-upload-support">
          <_components.a className="header-anchor" href="#file-upload-support">
            {"#"}
          </_components.a>
          {"File upload support"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"If the server supports the "}
          <_components.a href="https://github.com/jaydenseric/graphql-multipart-request-spec">
            {"GraphQL multipart request specification"}
          </_components.a>
          {" it is possible to upload a "}
          <_components.code>{"File"}</_components.code>
          {" or a binary "}
          <_components.code>{"Blob"}</_components.code>
          {" of data by calling the "}
          <_components.code>{"multipartRequest"}</_components.code>
          {" function with the "}
          <_components.code>{"File"}</_components.code>
          {"/"}
          <_components.code>{"Blob"}</_components.code>
          {
            " instances in the variables variables.\nThis is especially useful for GraphQL mutations, because allows for binary uploads without the necessity to first encode the data to some text-based format like base64."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { request, gql } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/graphql"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" result = "}
            <_components.span className="hljs-title function_">
              {"multipartRequest"}
            </_components.span>
            {"(\n  "}
            <_components.span className="hljs-string">
              {'"https://foobar.com/v1/api"'}
            </_components.span>
            {",\n  gql"}
            <_components.span className="hljs-string">
              {
                "`\n    mutation UploadImage($file: Upload!, $caption: String!) {\n      uploadImage(file: $file, caption: $caption) {\n        id\n      }\n    }\n  `"
              }
            </_components.span>
            {",\n  {\n    "}
            <_components.span className="hljs-attr">{"variables"}</_components.span>
            {": { "}
            <_components.span className="hljs-attr">{"caption"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"A nice image"'}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"file"}</_components.span>
            {": inputElement."}
            <_components.span className="hljs-property">{"files"}</_components.span>
            {"["}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {"] },\n  },\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="fetch-on-the-server">
          <_components.a className="header-anchor" href="#fetch-on-the-server">
            {"#"}
          </_components.a>
          {"fetch on the server"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {"When running on environments without Browser "}
          <_components.code>{"fetch"}</_components.code>
          {", you should provide a "}
          <_components.code>{"fetcher"}</_components.code>
          {" to the options object, or add it to the global "}
          <_components.code>{"window"}</_components.code>
          {" object."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" nodeFetch "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"node-fetch"'}</_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createGraphQLClient, gql } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/graphql"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" newQuery = "}
            <_components.span className="hljs-title function_">
              {"createGraphQLClient"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">
              {'"https://foobar.com/v1/api"'}
            </_components.span>
            {", { "}
            <_components.span className="hljs-attr">{"fetcher"}</_components.span>
            {": nodeFetch });\n"}
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
            " to catch the errors, even if they are accessible inside the resource. Otherwise, uncaught errors might disrupt your application."
          }
        </_components.p>
        {"\n"}
        <_components.h2 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h2>
        {"\n"}
        <_components.p>
          <_components.a href="https://solidjs-community.github.io/solid-primitives/graphql/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>{"You may view a working example here:"}</_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-graphql-demo-g6fv6?file=/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/graphql/CHANGELOG.md">
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
      packageName="@solid-primitives/graphql"
      name="graphql"
      stage={3}
      packageList={[{ name: "graphql", gzipped: "4.67 KB", minified: "14.09 KB" }]}
      primitiveList={[{ name: "createGraphQLClient", gzipped: "4.31 KB", minified: "13.12 KB" }]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
