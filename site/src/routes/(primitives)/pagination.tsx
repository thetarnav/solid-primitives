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
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"A primitive that creates all the reactive data to manage your pagination:"}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createPagination">
              <_components.code
                data-code-primitive-name="createPagination"
                data-code-package-name="pagination"
              >
                {"createPagination"}
              </_components.code>
            </_components.a>
            {
              " - Provides an array with the properties to fill your pagination with and a page setter/getter."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createInfiniteScroll">
              <_components.code
                data-code-primitive-name="createInfiniteScroll"
                data-code-package-name="pagination"
              >
                {"createInfiniteScroll"}
              </_components.code>
            </_components.a>
            {" - Provides an easy way to implement infinite scrolling."}
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
      <CopyPackages packageName="@solid-primitives/pagination" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createpagination">
          <_components.a className="header-anchor" href="#createpagination">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createPagination"
            data-code-package-name="pagination"
          >
            {"createPagination"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Provides an array with the properties to fill your pagination with and a page setter/getter."
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
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"PaginationOptions"}</_components.span>
            {" = {\n  "}
            <_components.span className="hljs-comment">
              {"/** the overall number of pages */"}
            </_components.span>
            {"\n  "}
            <_components.span className="hljs-attr">{"pages"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-comment">
              {"/** the highest number of pages to show at the same time */"}
            </_components.span>
            {"\n  maxPages?: "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-comment">
              {"/** start with another page than `1` */"}
            </_components.span>
            {"\n  initialPage?: "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-comment">
              {"/** show an element for the first page */"}
            </_components.span>
            {"\n  showFirst?: "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {" | ("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"page: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {", pages: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {");\n  "}
            <_components.span className="hljs-comment">
              {"/** show an element for the previous page */"}
            </_components.span>
            {"\n  showPrev?: "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {" | ("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"page: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {", pages: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {");\n  "}
            <_components.span className="hljs-comment">
              {"/** show an element for the next page */"}
            </_components.span>
            {"\n  showNext?: "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {" | ("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"page: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {", pages: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {");\n  "}
            <_components.span className="hljs-comment">
              {"/** show an element for the last page */"}
            </_components.span>
            {"\n  showLast?: "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {" | ("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"page: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {", pages: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {");\n  "}
            <_components.span className="hljs-comment">
              {'/** content for the first page element, e.g. an SVG icon, default is "|<" */'}
            </_components.span>
            {"\n  firstContent?: "}
            <_components.span className="hljs-variable constant_">{"JSX"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"Element"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-comment">
              {'/** content for the previous page element, e.g. an SVG icon, default is "<" */'}
            </_components.span>
            {"\n  prevContent?: "}
            <_components.span className="hljs-variable constant_">{"JSX"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"Element"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-comment">
              {'/** content for the next page element, e.g. an SVG icon, default is ">" */'}
            </_components.span>
            {"\n  nextContent?: "}
            <_components.span className="hljs-variable constant_">{"JSX"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"Element"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-comment">
              {'/** content for the last page element, e.g. an SVG icon, default is ">|" */'}
            </_components.span>
            {"\n  lastContent?: "}
            <_components.span className="hljs-variable constant_">{"JSX"}</_components.span>
            {"."}
            <_components.span className="hljs-property">{"Element"}</_components.span>
            {";\n};\n\n"}
            <_components.span className="hljs-comment">
              {"// Returns a tuple of props, page and setPage."}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// Props is an array of props to spread on each button."}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// Page is the current page number."}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// setPage is a function to set the page number."}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [props, page, setPage] = "}
            <_components.span className="hljs-title function_">
              {"createPagination"}
            </_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"pages"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {" });\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "While the preferred structure is links or buttons (if only client-side) inside a nav element, you can use arbitrary components, e.g. using your favorite UI component library (as long as it supports the same handlers and properties as DOM nodes, which it probably should). The props objects for each page will be reused in order to grant maximum performance using the "
          }
          <_components.code>{"<For>"}</_components.code>
          {" flow component to iterate over the props:"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [paginationProps, page, setPage] = "}
            <_components.span className="hljs-title function_">
              {"createPagination"}
            </_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"pages"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"100"}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-comment">
              {"/* do something with */"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"page"}</_components.span>
            {"();\n});\n\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n  "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"nav"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"class"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"pagination"'}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"For"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"each"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{paginationProps()}"}</_components.span>
                {">"}
              </_components.span>
              {"{props => "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {" {"}
                <_components.span className="hljs-attr">{"...props"}</_components.span>
                {"} />"}
              </_components.span>
              {"}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"For"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"nav"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "In order to allow linking the pages manually, there is a non-enumerable page property in the props object:"
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [paginationProps, page, setPage] = "}
            <_components.span className="hljs-title function_">
              {"createPagination"}
            </_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"pages"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"100"}</_components.span>
            {" });\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-comment">
              {"/* do something with */"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"page"}</_components.span>
            {"();\n});\n\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n  "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"nav"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"class"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"pagination"'}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"ul"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"For"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"each"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{paginationProps()}"}</_components.span>
                {">"}
              </_components.span>
              {"\n        {props => (\n          "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"li"}</_components.span>
                {">"}
              </_components.span>
              {"\n            "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"A"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"href"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{"}</_components.span>
                {"`?"}
                <_components.span className="hljs-attr">{"page"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"${props.page}"}</_components.span>
                {"`} {"}
                <_components.span className="hljs-attr">{"...props"}</_components.span>
                {"} />"}
              </_components.span>
              {"\n          "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"li"}</_components.span>
                {">"}
              </_components.span>
              {"\n        )}\n      "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"For"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"ul"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"nav"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="todo">
          <_components.a className="header-anchor" href="#todo">
            {"#"}
          </_components.a>
          {"TODO"}
        </_components.h3>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>{"Jump over multiple pages (e.g. +10/-10)"}</_components.li>
          {"\n"}
          <_components.li>{"options for aria-labels"}</_components.li>
          {"\n"}
          <_components.li>{"optional: touch controls"}</_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.h3 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h3>
        {"\n"}
        <_components.p>{"TODO"}</_components.p>
        {"\n"}
        <_components.h2 id="createinfinitescroll">
          <_components.a className="header-anchor" href="#createinfinitescroll">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createInfiniteScroll"
            data-code-package-name="pagination"
          >
            {"createInfiniteScroll"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Combines "}
          <_components.a href="https://www.solidjs.com/docs/latest/api#createresource">
            <_components.code>{"createResource"}</_components.code>
          </_components.a>
          {" with "}
          <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">
            <_components.code>{"IntersectionObserver"}</_components.code>
          </_components.a>
          {" to provide an easy way to implement infinite scrolling."}
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
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-comment">
              {"// fetcher: (page: number) => Promise<T[]>"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [pages, setEl, { end }] = "}
            <_components.span className="hljs-title function_">
              {"createInfiniteScroll"}
            </_components.span>
            {"(fetcher);\n\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n  "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"For"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"each"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{pages()}"}</_components.span>
                {">"}
              </_components.span>
              {"{item => "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"h4"}</_components.span>
                {">"}
              </_components.span>
              {"{item}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"h4"}</_components.span>
                {">"}
              </_components.span>
              {"}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"For"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Show"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"when"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{!end()}"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"h1"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{setEl}"}</_components.span>
                {">"}
              </_components.span>
              {"Loading..."}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"h1"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Show"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"Or as a directive:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [pages, infiniteScrollLoader, { end }] = "}
            <_components.span className="hljs-title function_">
              {"createInfiniteScroll"}
            </_components.span>
            {"(fetcher);\n\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n  "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"For"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"each"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{pages()}"}</_components.span>
                {">"}
              </_components.span>
              {"{item => "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"h4"}</_components.span>
                {">"}
              </_components.span>
              {"{item}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"h4"}</_components.span>
                {">"}
              </_components.span>
              {"}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"For"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Show"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"when"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{!end()}"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"h1"}</_components.span>{" "}
                <_components.span className="hljs-attr">
                  {"use:infiniteScrollLoader"}
                </_components.span>
                {">"}
              </_components.span>
              {"Loading..."}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"h1"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Show"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="definition">
          <_components.a className="header-anchor" href="#definition">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>
            {" createInfiniteScroll<T>("}
            <_components.span className="hljs-attr">{"fetcher"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"page: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title class_">{"Promise"}</_components.span>
            {"<T[]>): [\n  "}
            <_components.span className="hljs-attr">{"pages"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<T[]>,\n  "}
            <_components.span className="hljs-attr">{"loader"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Directive"}</_components.span>
            {"<"}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {">,\n  "}
            <_components.span className="hljs-attr">{"options"}</_components.span>
            {": {\n    "}
            <_components.span className="hljs-attr">{"page"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {">;\n    "}
            <_components.span className="hljs-attr">{"setPage"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Setter"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {">;\n    "}
            <_components.span className="hljs-attr">{"setPages"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Setter"}</_components.span>
            {"<T[]>;\n    "}
            <_components.span className="hljs-attr">{"end"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {">;\n    "}
            <_components.span className="hljs-attr">{"setEnd"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Setter"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {">;\n  },\n];\n"}
          </_components.code>
        </_components.pre>
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/pagination/CHANGELOG.md">
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
      packageName="@solid-primitives/pagination"
      name="pagination"
      stage={0}
      packageList={[{ name: "pagination", gzipped: "1.31 KB", minified: "3.26 KB" }]}
      primitiveList={[
        { name: "createInfiniteScroll", gzipped: "453 B", minified: "780 B" },
        { name: "createPagination", gzipped: "961 B", minified: "2.59 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
