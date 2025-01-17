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
      h5: "h5",
      a: "a",
      ul: "ul",
      li: "li",
      code: "code",
      h2: "h2",
      h3: "h3",
      pre: "pre",
      span: "span",
      h4: "h4",
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
            "Collection of primitives, components and directives that help managing references to JSX elements, keeping track of mounted/unmounted elements."
          }
        </_components.p>
        {"\n"}
        <_components.h5 id="primitives">
          <_components.a className="header-anchor" href="#primitives">
            {"#"}
          </_components.a>
          {"Primitives:"}
        </_components.h5>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#mergeRefs">
              <_components.code data-code-primitive-name="mergeRefs" data-code-package-name="refs">
                {"mergeRefs"}
              </_components.code>
            </_components.a>
            {" - Utility for chaining multiple "}
            <_components.code>{"ref"}</_components.code>
            {" assignments with "}
            <_components.code>{"props.ref"}</_components.code>
            {" forwarding."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#resolveElements">
              <_components.code
                data-code-primitive-name="resolveElements"
                data-code-package-name="refs"
              >
                {"resolveElements"}
              </_components.code>
            </_components.a>
            {
              " - Utility for resolving recursively nested JSX children to a single element or an array of elements."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#resolveFirst">
              <_components.code
                data-code-primitive-name="resolveFirst"
                data-code-package-name="refs"
              >
                {"resolveFirst"}
              </_components.code>
            </_components.a>
            {
              " - Utility for resolving recursively nested JSX children in search of the first element that matches a predicate."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#refs">
              <_components.code data-code-primitive-name="Refs" data-code-package-name="refs">
                {"<Refs>"}
              </_components.code>
            </_components.a>
            {" - Get up-to-date references of the multiple children elements."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#ref">
              <_components.code data-code-primitive-name="Ref" data-code-package-name="refs">
                {"<Ref>"}
              </_components.code>
            </_components.a>
            {" - Get up-to-date reference to a single child element."}
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
      <CopyPackages packageName="@solid-primitives/refs" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="mergerefs">
          <_components.a className="header-anchor" href="#mergerefs">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="mergeRefs" data-code-package-name="refs">
            {"mergeRefs"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Utility for chaining multiple "}
          <_components.code>{"ref"}</_components.code>
          {" assignments with "}
          <_components.code>{"props.ref"}</_components.code>
          {" forwarding."}
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
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { mergeRefs, "}
            <_components.span className="hljs-title class_">{"Ref"}</_components.span>
            {" } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/refs"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"interface"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"ButtonProps"}</_components.span>
            {" {\n  ref?: "}
            <_components.span className="hljs-title class_">{"Ref"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"HTMLButtonElement"}</_components.span>
            {">;\n}\n\n"}
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"Button"}</_components.span>
            {"("}
            <_components.span className="hljs-params">{"props: ButtonProps"}</_components.span>
            {") {\n  "}
            <_components.span className="hljs-keyword">{"let"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"ref"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"HTMLButtonElement"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-title function_">{"onMount"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n    "}
            <_components.span className="hljs-comment">{"// use the local ref"}</_components.span>
            {"\n  });\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">
                  {"{mergeRefs(props.ref,"}
                </_components.span>{" "}
                <_components.span className="hljs-attr">{"el"}</_components.span>
                {" =>"}
              </_components.span>
              {" (ref = el))} />"}
            </_components.span>
            {";\n}\n\n"}
            <_components.span className="hljs-comment">
              {"// in consumer's component:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"let"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"ref"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"HTMLButtonElement"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {";\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{ref}"}</_components.span>
                {" />"}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="resolveelements">
          <_components.a className="header-anchor" href="#resolveelements">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="resolveElements"
            data-code-package-name="refs"
          >
            {"resolveElements"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Utility for resolving recursively nested JSX children to a single element or an array of elements using a predicate."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-1">
          <_components.a className="header-anchor" href="#how-to-use-it-1">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code
            data-code-primitive-name="resolveElements"
            data-code-package-name="refs"
          >
            {"resolveElements"}
          </_components.code>
          {"'s API is similar to Solid's "}
          <_components.code>{"children"}</_components.code>
          {
            " helper. It accepts a function that returns JSX children and a predicate function that filters the elements."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"Button"}</_components.span>
            {"("}
            <_components.span className="hljs-params">{"props: ParentProps"}</_components.span>
            {") {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" children = "}
            <_components.span className="hljs-title function_">
              {"resolveElements"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" props."}
            <_components.span className="hljs-property">{"children"}</_components.span>
            {");\n  "}
            <_components.span className="hljs-comment">
              {"//      ^?: Accessor<Element | Element[] | null>"}
            </_components.span>
            {"\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n    "}
            <_components.span className="hljs-comment">
              {"// Similarly to `children` helper, a `toArray` method is available"}
            </_components.span>
            {"\n    "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"For"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"each"}</_components.span>
                {"="}
                <_components.span className="hljs-string">
                  {"{children.toArray()}"}
                </_components.span>
                {">"}
              </_components.span>
              {"\n      {child => (\n        "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n          {child.localName}: {child}\n        "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n      )}\n    "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"For"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n  );\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="using-a-custom-predicate">
          <_components.a className="header-anchor" href="#using-a-custom-predicate">
            {"#"}
          </_components.a>
          {"Using a custom predicate"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"The default predicate is "}
          <_components.code>{"el => el instanceof Element"}</_components.code>
          {". You can provide a custom predicate to "}
          <_components.code
            data-code-primitive-name="resolveElements"
            data-code-package-name="refs"
          >
            {"resolveElements"}
          </_components.code>
          {" to filter the elements."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" els = "}
            <_components.span className="hljs-title function_">
              {"resolveElements"}
            </_components.span>
            {"(\n  "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" props."}
            <_components.span className="hljs-property">{"children"}</_components.span>
            {",\n  (el): el is "}
            <_components.span className="hljs-title class_">{"HTMLDivElement"}</_components.span>
            {" => el "}
            <_components.span className="hljs-keyword">{"instanceof"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"HTMLDivElement"}</_components.span>
            {",\n);\n\n"}
            <_components.span className="hljs-title function_">{"els"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// => HTMLDivElement | HTMLDivElement[] | null"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "On the server side the custom predicate will be ignored, but can be overridden by passing it as a third argument."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {"The default predicate can be imported from "}
          <_components.code>{"@solid-primitives/refs"}</_components.code>
          {":"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { defaultElementPredicate } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/refs"'}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"On the client it uses "}
          <_components.code>{"instanceof Element"}</_components.code>
          {" check, on the server it checks for the object with "}
          <_components.code>{"t"}</_components.code>
          {" property. (generated by compiling JSX)"}
        </_components.p>
        {"\n"}
        <_components.h2 id="resolvefirst">
          <_components.a className="header-anchor" href="#resolvefirst">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="resolveFirst" data-code-package-name="refs">
            {"resolveFirst"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Utility for resolving recursively nested JSX children in search of the first element that matches a predicate."
          }
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-2">
          <_components.a className="header-anchor" href="#how-to-use-it-2">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code data-code-primitive-name="resolveFirst" data-code-package-name="refs">
            {"resolveFirst"}
          </_components.code>
          {" matches the API of "}
          <_components.a href="#resolveElements">
            <_components.code
              data-code-primitive-name="resolveElements"
              data-code-package-name="refs"
            >
              {"resolveElements"}
            </_components.code>
          </_components.a>
          {" but returns only the first element that matches the predicate."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"Button"}</_components.span>
            {"("}
            <_components.span className="hljs-params">{"props: ParentProps"}</_components.span>
            {") {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" child = "}
            <_components.span className="hljs-title function_">{"resolveFirst"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" props."}
            <_components.span className="hljs-property">{"children"}</_components.span>
            {");\n  "}
            <_components.span className="hljs-comment">
              {"//     ^?: Accessor<Element | null>"}
            </_components.span>
            {"\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n    "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n      {child()?.localName}: {child()}\n    "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n  );\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          <_components.code data-code-primitive-name="resolveFirst" data-code-package-name="refs">
            {"resolveFirst"}
          </_components.code>
          {" also accepts a custom predicate as a second argument. See "}
          <_components.a href="#using-a-custom-predicate">
            <_components.code>{"Using a custom predicate"}</_components.code>
          </_components.a>
          {" section for more details."}
        </_components.p>
        {"\n"}
        <_components.h2 id="ref">
          <_components.a className="header-anchor" href="#ref">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="Ref" data-code-package-name="refs">
            {"<Ref>"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>{"Get up-to-date reference to a single child element."}</_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-3">
          <_components.a className="header-anchor" href="#how-to-use-it-3">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code data-code-primitive-name="Ref" data-code-package-name="refs">
            {"<Ref>"}
          </_components.code>
          {" accepts only a "}
          <_components.code>{"ref"}</_components.code>
          {" property for getting the current element or "}
          <_components.code>{"undefined"}</_components.code>
          {", and requires "}
          <_components.code>{"children"}</_components.code>
          {" to be passed in."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { "}
            <_components.span className="hljs-title class_">{"Ref"}</_components.span>
            {" } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/refs"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [ref, setRef] = createSignal<"}
            <_components.span className="hljs-title class_">{"Element"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {">();\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Ref"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{setRef}"}</_components.span>
                {">"}
              </_components.span>
              {"{props.children}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Ref"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="refs">
          <_components.a className="header-anchor" href="#refs">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="Refs" data-code-package-name="refs">
            {"<Refs>"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Get up-to-date references of the multiple children elements."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-4">
          <_components.a className="header-anchor" href="#how-to-use-it-4">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code data-code-primitive-name="Refs" data-code-package-name="refs">
            {"<Refs>"}
          </_components.code>
          {" accepts only a "}
          <_components.code>{"ref"}</_components.code>
          {" property for getting the current array of elements, and requires "}
          <_components.code>{"children"}</_components.code>
          {" to be passed in."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { "}
            <_components.span className="hljs-title class_">{"Refs"}</_components.span>
            {" } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/refs"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [refs, setRefs] = createSignal<"}
            <_components.span className="hljs-title class_">{"Element"}</_components.span>
            {"[]>([]);\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Refs"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{setRefs}"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"For"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"each"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{my_list()}"}</_components.span>
                {">"}
              </_components.span>
              {"{item => "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"{item}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"For"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Show"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"when"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{show()}"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"Hello"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Show"}</_components.span>
                {">"}
              </_components.span>
              {"\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Refs"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h4>
        {"\n"}
        <_components.p>
          <_components.a href="https://stackblitz.com/edit/solid-vite-unocss-bkbgap?file=index.tsx">
            {"https://stackblitz.com/edit/solid-vite-unocss-bkbgap?file=index.tsx"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"(run "}
          <_components.code>{"npm start"}</_components.code>
          {" in the terminal)"}
        </_components.p>
        {"\n"}
        <_components.h2 id="types">
          <_components.a className="header-anchor" href="#types">
            {"#"}
          </_components.a>
          {"Types"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="ref-1">
          <_components.a className="header-anchor" href="#ref-1">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="Ref" data-code-package-name="refs">
            {"Ref"}
          </_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Type for the "}
          <_components.code>{"ref"}</_components.code>
          {" prop"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"export"}</_components.span>{" "}
            <_components.span className="hljs-keyword">{"type"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"Ref"}</_components.span>
            {"<T> = T | ("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"el: T"}</_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {") | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="refprops">
          <_components.a className="header-anchor" href="#refprops">
            {"#"}
          </_components.a>
          <_components.code>{"RefProps"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Component properties with types for "}
          <_components.code>{"ref"}</_components.code>
          {" prop"}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"interface"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"RefProps"}</_components.span>
            {"<T> {\n  ref?: "}
            <_components.span className="hljs-title class_">{"Ref"}</_components.span>
            {"<T>;\n}\n"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/refs/CHANGELOG.md">
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
      packageName="@solid-primitives/refs"
      name="refs"
      stage={2}
      packageList={[{ name: "refs", gzipped: "693 B", minified: "1.62 KB" }]}
      primitiveList={[
        { name: "resolveElements", gzipped: "341 B", minified: "583 B" },
        { name: "resolveFirst", gzipped: "278 B", minified: "446 B" },
        { name: "Ref", gzipped: "250 B", minified: "376 B" },
        { name: "Refs", gzipped: "376 B", minified: "628 B" },
        { name: "mergeRefs", gzipped: "287 B", minified: "468 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
