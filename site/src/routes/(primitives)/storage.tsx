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
      ul: "ul",
      li: "li",
      pre: "pre",
      span: "span",
      hr: "hr",
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
            "Creates a primitive to reactively access both synchronous and asynchronous persistent storage APIs similar to localStorage."
          }
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
      <CopyPackages packageName="@solid-primitives/storage" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="basic-usage">
          <_components.a className="header-anchor" href="#basic-usage">
            {"#"}
          </_components.a>
          {"Basic Usage"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createStorage"
            data-code-package-name="storage"
          >
            {"createStorage"}
          </_components.code>
          {" is meant to wrap any localStorage-like API to be as accessible as a "}
          <_components.a href="https://www.solidjs.com/docs/latest/api#createstore">
            {"Solid Store"}
          </_components.a>
          {". The main differences are"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>{"that this store is persisted in whatever API is used,"}</_components.li>
          {"\n"}
          <_components.li>
            {"that you can only use the topmost layer of the object and"}
          </_components.li>
          {"\n"}
          <_components.li>
            {
              "that you have additional methods in an object as the third part of the returned tuple:"
            }
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [store, setStore, {\n  "}
            <_components.span className="hljs-attr">{"remove"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"key: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"clear"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"toJSON"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" ({ ["}
            <_components.span className="hljs-attr">{"key"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {"]: "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {" });\n}] = "}
            <_components.span className="hljs-title function_">{"createStorage"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"api"}</_components.span>
            {": sessionStorage, "}
            <_components.span className="hljs-attr">{"prefix"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{"'my-app'"}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-title function_">{"setStore"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{"'key'"}</_components.span>
            {", "}
            <_components.span className="hljs-string">{"'value'"}</_components.span>
            {");\nstore."}
            <_components.span className="hljs-property">{"key"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// 'value'"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"The props object support the following parameters:"}</_components.p>
        {"\n"}
        <_components.p>
          <_components.code>{"api"}</_components.code>
          {
            "\n: an array of or a single localStorage-like storage API; default will be localStorage if it exists; an empty array or no API will not throw an error, but only ever get "
          }
          <_components.code>{"null"}</_components.code>
          {" and not actually persist anything"}
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code>{"prefix"}</_components.code>
          {"\n: a string that will be prefixed every key inside the API on set and get operations"}
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code>{"serializer / deserializer"}</_components.code>
          {
            "\n: a set of function to filter the input and output; the serializer takes an arbitrary object and returns a string, e.g. JSON.stringify, whereas the deserializer takes a string and returns the requested object again."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code>{"options"}</_components.code>
          {"\n: for APIs that support options as third argument in the "}
          <_components.code>{"getItem"}</_components.code>
          {" and "}
          <_components.code>{"setItem"}</_components.code>
          {" method (see helper type "}
          <_components.code>{"StorageWithOptions<O>"}</_components.code>
          {"), you can add options they will receive on every operation."}
        </_components.p>
        {"\n"}
        <_components.hr />
        {"\n"}
        <_components.p>
          {
            "There are a number of convenience Methods primed with common storage APIs and our own version to use cookies:"
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-title function_">
              {"createLocalStorage"}
            </_components.span>
            {"();\n"}
            <_components.span className="hljs-title function_">
              {"createSessionStorage"}
            </_components.span>
            {"();\n"}
            <_components.span className="hljs-title function_">
              {"createCookieStorage"}
            </_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.hr />
        {"\n"}
        <_components.h3 id="asynchronous-storage-apis">
          <_components.a className="header-anchor" href="#asynchronous-storage-apis">
            {"#"}
          </_components.a>
          {"Asynchronous storage APIs"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"In case you have APIs that persist data on the server or via ServiceWorker in a "}
          <_components.a href="https://wicg.github.io/cookie-store/#CookieStore">
            {"CookieStore"}
          </_components.a>
          {", you can wrap them into an "}
          <_components.code>{"AsyncStorage"}</_components.code>
          {" or "}
          <_components.code>{"AsyncStorageWithOptions"}</_components.code>
          {" API and use them with "}
          <_components.code
            data-code-primitive-name="createAsyncStorage"
            data-code-package-name="storage"
          >
            {"createAsyncStorage"}
          </_components.code>
          {":"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">
              {"CookieStoreOptions"}
            </_components.span>
            {" = {\n  "}
            <_components.span className="hljs-attr">{"path"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"domain"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"expires"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"DOMTimeStamp"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"sameSite"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"None"'}</_components.span>
            {" | "}
            <_components.span className="hljs-string">{'"Lax"'}</_components.span>
            {" | "}
            <_components.span className="hljs-string">{'"Strict"'}</_components.span>
            {"\n}\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"CookieStoreAPI"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">
              {"AsyncStorageWithOptions"}
            </_components.span>
            {"<"}
            <_components.span className="hljs-title class_">
              {"CookieStoreOptions"}
            </_components.span>
            {"> = {\n  "}
            <_components.span className="hljs-attr">{"getItem"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"key"}</_components.span>
              {") =>"}
            </_components.span>
            {" cookieStore."}
            <_components.span className="hljs-title function_">{"get"}</_components.span>
            {"(key),\n  "}
            <_components.span className="hljs-attr">{"getAll"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" cookieStore."}
            <_components.span className="hljs-title function_">{"getAll"}</_components.span>
            {"(),\n  "}
            <_components.span className="hljs-attr">{"setItem"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"key: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
                {", value: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
                {", options: CookieStoreOptions = {}"}
              </_components.span>
              {") =>"}
            </_components.span>
            {" cookieStore."}
            <_components.span className="hljs-title function_">{"set"}</_components.span>
            {"({\n    ...options, name, value\n  }),\n  "}
            <_components.span className="hljs-attr">{"removeItem"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"key"}</_components.span>
              {") =>"}
            </_components.span>
            {" cookieStore."}
            <_components.span className="hljs-title function_">{"delete"}</_components.span>
            {"(key),\n  "}
            <_components.span className="hljs-attr">{"clear"}</_components.span>
            {": "}
            <_components.span className="hljs-keyword">{"async"}</_components.span>
            {" () => {\n    "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" all = "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>
            {" cookieStore."}
            <_components.span className="hljs-title function_">{"getAll"}</_components.span>
            {"();\n    "}
            <_components.span className="hljs-keyword">{"for"}</_components.span>
            {" ("}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" key "}
            <_components.span className="hljs-keyword">{"of"}</_components.span>
            {" all) {\n      "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>
            {" cookieStore."}
            <_components.span className="hljs-title function_">{"delete"}</_components.span>
            {"(key);\n    }\n  },\n  "}
            <_components.span className="hljs-attr">{"key"}</_components.span>
            {": "}
            <_components.span className="hljs-keyword">{"async"}</_components.span>
            {" ("}
            <_components.span className="hljs-attr">{"index"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {") => {\n    "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" all = "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>
            {" cookieStore."}
            <_components.span className="hljs-title function_">{"getAll"}</_components.span>
            {"();\n    "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"Object"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"keys"}</_components.span>
            {"(all)[index];\n  }\n});\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [cookies, setCookie, {\n    "}
            <_components.span className="hljs-attr">{"remove"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"key: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"clear"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"toJSON"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" ({ ["}
            <_components.span className="hljs-attr">{"key"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {"]: "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {" });\n}] = "}
            <_components.span className="hljs-title function_">
              {"createAsyncStorage"}
            </_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"api"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"CookieStoreAPI"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"prefix"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{"'my-app'"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"sync"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"setStore"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{"'key'"}</_components.span>
            {", "}
            <_components.span className="hljs-string">{"'value'"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"await"}</_components.span>
            {" store."}
            <_components.span className="hljs-property">{"key"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// 'value'"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"It works exactly like a synchronous storage, with the exception that you have to "}
          <_components.code>{"await"}</_components.code>
          {
            " every single return value. Once the CookieStore API becomes more prevalent, we will integrate support out of the box."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "If you cannot use document.cookie, you can overwrite the entry point using the following tuple:"
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { cookieStorage } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {"'@solid-primitives/storage'"}
            </_components.span>
            {";\n\ncookieStorage."}
            <_components.span className="hljs-property">{"_cookies"}</_components.span>
            {" = ["}
            <_components.span className="hljs-attr">{"object"}</_components.span>
            {": { ["}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {"]: "}
            <_components.span className="hljs-title class_">{"CookieProxy"}</_components.span>
            {" }, "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {"];\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"If you need to abstract an API yourself, you can use a getter and a setter:"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"CookieAbstraction"}</_components.span>
            {" = {\n  "}
            <_components.span className="hljs-keyword">{"get"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"cookie"}</_components.span>
            {"() { "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" myCookieJar."}
            <_components.span className="hljs-title function_">{"toString"}</_components.span>
            {"() }\n  "}
            <_components.span className="hljs-keyword">{"set"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"cookie"}</_components.span>
            {"("}
            <_components.span className="hljs-params">{"cookie"}</_components.span>
            {") {\n    "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" data = {};\n    cookie."}
            <_components.span className="hljs-title function_">{"replace"}</_components.span>
            {"("}
            <_components.span className="hljs-regexp">
              {"/([^=]+)=(?:([^;]+);?)/g"}
            </_components.span>
            {", "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"_, key, value"}</_components.span>
              {") =>"}
            </_components.span>
            {" { data[key] = value });\n    myCookieJar."}
            <_components.span className="hljs-title function_">{"set"}</_components.span>
            {"(data);\n  }\n}\ncookieStorage."}
            <_components.span className="hljs-property">{"_cookies"}</_components.span>
            {" = ["}
            <_components.span className="hljs-title class_">{"CookieAbstraction"}</_components.span>
            {", "}
            <_components.span className="hljs-string">{"'cookie'"}</_components.span>
            {"];\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.hr />
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="createStorageSignal"
            data-code-package-name="storage"
          >
            {"createStorageSignal"}
          </_components.code>
          {
            " is meant for those cases when you only need to conveniently access a single value instead of full access to the storage API:"
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [value, setValue] = "}
            <_components.span className="hljs-title function_">
              {"createStorageSignal"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"value"'}</_components.span>
            {", { "}
            <_components.span className="hljs-attr">{"api"}</_components.span>
            {": cookieStorage });\n\n"}
            <_components.span className="hljs-title function_">{"setValue"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"value"'}</_components.span>
            {");\n"}
            <_components.span className="hljs-title function_">{"value"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// 'value'"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"As a convenient additional method, you can also use "}
          <_components.code>
            {"createCookieStorageSignal(key, initialValue, options)"}
          </_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.hr />
        {"\n"}
        <_components.h3 id="options">
          <_components.a className="header-anchor" href="#options">
            {"#"}
          </_components.a>
          {"Options"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"The properties of your "}
          <_components.code
            data-code-primitive-name="createStorage"
            data-code-package-name="storage"
          >
            {"createStorage"}
          </_components.code>
          {"/"}
          <_components.code
            data-code-primitive-name="createAsyncStorage"
            data-code-package-name="storage"
          >
            {"createAsyncStorage"}
          </_components.code>
          {"/"}
          <_components.code
            data-code-primitive-name="createStorageSignal"
            data-code-package-name="storage"
          >
            {"createStorageSignal"}
          </_components.code>
          {" props are:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"api"}</_components.code>
            {": the (sync or async) "}
            <_components.a href="https://developer.mozilla.org/de/docs/Web/API/Web_Storage_API">
              {"Storage-like API"}
            </_components.a>
            {", default is localStorage"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"deserializer"}</_components.code>
            {" (optional): a deserializer or parser for the stored data"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"serializer"}</_components.code>
            {" (optional): a serializer or string converter for the stored data"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"options"}</_components.code>
            {" (optional): default options for the set-call of Storage-like API, if supported"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"prefix"}</_components.code>
            {" (optional): a prefix for the Storage keys"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"sync"}</_components.code>
            {" (optional): if set to false, "}
            <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent">
              {"event synchronization"}
            </_components.a>
            {" is disabled"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="tools">
          <_components.a className="header-anchor" href="#tools">
            {"#"}
          </_components.a>
          {"Tools"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"If you want to build your own Storage and don't want to do a .clear() method youself:"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" storageWithClearMethod = "}
            <_components.span className="hljs-title function_">{"addClearMethod"}</_components.span>
            {"(storage_without_clear_method);\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/storage/">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/storage/CHANGELOG.md">
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
      packageName="@solid-primitives/storage"
      name="storage"
      stage={3}
      packageList={[{ name: "storage", gzipped: "2.29 KB", minified: "7.19 KB" }]}
      primitiveList={[
        { name: "createCookieStorage", gzipped: "1.42 KB", minified: "3.12 KB" },
        { name: "createAsyncStorage", gzipped: "1.01 KB", minified: "2.35 KB" },
        { name: "createStorageSignal", gzipped: "797 B", minified: "1.75 KB" },
        { name: "createLocalStorage", gzipped: "971 B", minified: "2.11 KB" },
        { name: "createSessionStorage", gzipped: "989 B", minified: "2.16 KB" },
        { name: "createStorage", gzipped: "962 B", minified: "2.1 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
