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
      pre: "pre",
      span: "span",
      h4: "h4",
      em: "em",
      h6: "h6",
      input: "input",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"Control Flow Primitives for displaying a number range or given number of elements."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#repeat">
              <_components.code data-code-primitive-name="repeat" data-code-package-name="range">
                {"repeat"}
              </_components.code>
            </_components.a>
            {" - Primitive for mapping a number of elements. Underlying helper for the "}
            <_components.a href="#repeat-1">
              <_components.code data-code-primitive-name="Repeat" data-code-package-name="range">
                {"<Repeat>"}
              </_components.code>
            </_components.a>
            {" control flow."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#repeat-1">
              <_components.code data-code-primitive-name="Repeat" data-code-package-name="range">
                {"<Repeat>"}
              </_components.code>
            </_components.a>
            {" - Control Flow Component for displaying a number of elements."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#mapRange">
              <_components.code data-code-primitive-name="mapRange" data-code-package-name="range">
                {"mapRange"}
              </_components.code>
            </_components.a>
            {
              " - Primitive for mapping a number range of given start, end, adn step values. Underlying helper for the "
            }
            <_components.a href="#range">
              <_components.code data-code-primitive-name="Range" data-code-package-name="range">
                {"<Range>"}
              </_components.code>
            </_components.a>
            {" control flow."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#range">
              <_components.code data-code-primitive-name="Range" data-code-package-name="range">
                {"<Range>"}
              </_components.code>
            </_components.a>
            {" - Control Flow Component for displaying a number range of elements."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#indexRange">
              <_components.code
                data-code-primitive-name="indexRange"
                data-code-package-name="range"
              >
                {"indexRange"}
              </_components.code>
            </_components.a>
            {
              " - Primitive for mapping a number range while keeping previous elements of the same index. Underlying helper for the "
            }
            <_components.a href="#indexrange-1">
              <_components.code
                data-code-primitive-name="IndexRange"
                data-code-package-name="range"
              >
                {"<IndexRange>"}
              </_components.code>
            </_components.a>
            {" control flow."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#indexrange-1">
              <_components.code
                data-code-primitive-name="IndexRange"
                data-code-package-name="range"
              >
                {"<IndexRange>"}
              </_components.code>
            </_components.a>
            {
              " - Control Flow Component for displaying a number range of elements, where elements receive a number value as signal."
            }
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
      <CopyPackages packageName="@solid-primitives/range" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="repeat">
          <_components.a className="header-anchor" href="#repeat">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="repeat" data-code-package-name="range">
            {"repeat"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Reactively maps a number range of specified length with a callback function - underlying helper for the "
          }
          <_components.a href="#repeat-1">
            <_components.code data-code-primitive-name="Repeat" data-code-package-name="range">
              {"<Repeat>"}
            </_components.code>
          </_components.a>
          {" control flow."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [length, setLength] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"10"}</_components.span>
            {")\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" mapped = "}
            <_components.span className="hljs-title function_">{"repeat"}</_components.span>
            {"(length, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"index"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n   "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [value, setValue] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"(index);\n   "}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {...})\n   "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" value\n})\n"}
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
            <_components.span className="hljs-keyword">{"function"}</_components.span>
            {" repeat<T>(\n  "}
            <_components.span className="hljs-attr">{"times"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {">,\n  "}
            <_components.span className="hljs-attr">{"mapFn"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"i: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>
            {" T,\n  options?: {\n    fallback?: "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<T>;\n  },\n): "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<T[]>;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="repeat-1">
          <_components.a className="header-anchor" href="#repeat-1">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="Repeat" data-code-package-name="range">
            {"<Repeat>"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Control Flow component for displaying a specified number of elements."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"The "}
          <_components.code>{"times"}</_components.code>
          {" prop is reactive – changing it will only create new elements for added numbers."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            {"<"}
            <_components.span className="hljs-title class_">{"Repeat"}</_components.span>
            {" times={"}
            <_components.span className="hljs-number">{"10"}</_components.span>
            {"}>\n   "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n</"}
            <_components.span className="hljs-title class_">{"Repeat"}</_components.span>
            {">\n\n"}
            <_components.span className="hljs-comment">{"// with a render prop:"}</_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Repeat"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"times"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{10}"}</_components.span>
                {">"}
              </_components.span>
              {"\n   {n => "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"{n}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"}\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Repeat"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">{"// with fallback:"}</_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Repeat"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"times"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{0}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"fallback"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{"}</_components.span>
                {"<"}
                <_components.span className="hljs-attr">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"no items..."}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"}>\n   "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Repeat"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n"}
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
            <_components.span className="hljs-title class_">{"Repeat"}</_components.span>
            {"<T>("}
            <_components.span className="hljs-attr">{"props"}</_components.span>
            {": {\n  "}
            <_components.span className="hljs-attr">{"times"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n  fallback?: T;\n  "}
            <_components.span className="hljs-attr">{"children"}</_components.span>
            {": ("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"index: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>
            {" T) | T;\n}): "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<T[]>;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="maprange">
          <_components.a className="header-anchor" href="#maprange">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="mapRange" data-code-package-name="range">
            {"mapRange"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Reactively maps a number range of specified "}
          <_components.code>{"stop"}</_components.code>
          {", "}
          <_components.code>{"to"}</_components.code>
          {" and "}
          <_components.code>{"step"}</_components.code>
          {", with a callback function - underlying helper for the "}
          <_components.a href="#range">
            <_components.code data-code-primitive-name="Range" data-code-package-name="range">
              {"<Range>"}
            </_components.code>
          </_components.a>
          {" control flow."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"All "}
          <_components.code>{"stop"}</_components.code>
          {", "}
          <_components.code>{"to"}</_components.code>
          {" and "}
          <_components.code>{"step"}</_components.code>
          {
            " arguments are accessors, and changing them will cause the mapped array to be recalculated, mapping new items for numbers added to the range."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code>{"step"}</_components.code>
          {" will become negative "}
          <_components.em>{"(the range will be descending)"}</_components.em>
          {" if "}
          <_components.code>{"to"}</_components.code>
          {" is smaller than "}
          <_components.code>{"start"}</_components.code>
          {". Range stops at "}
          <_components.code>{"to"}</_components.code>
          {", it is not included in the range."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [to, setTo] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"5"}</_components.span>
            {")\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" mapped = "}
            <_components.span className="hljs-title function_">{"mapRange"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {", to, "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-number">{"0.5"}</_components.span>
            {", "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"number"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n   "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [value, setValue] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {");\n   "}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {...})\n   "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" value\n})\n"}
            <_components.span className="hljs-title function_">{"mapped"}</_components.span>
            {"() "}
            <_components.span className="hljs-comment">
              {"// => [0, 0.5, 1, 1.5, 2...]"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setTo"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {") "}
            <_components.span className="hljs-comment">
              {"// changes the output array, mapping only added numbers"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="definition-2">
          <_components.a className="header-anchor" href="#definition-2">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>
            {" mapRange<T>(\n  "}
            <_components.span className="hljs-attr">{"start"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {">,\n  "}
            <_components.span className="hljs-attr">{"to"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {">,\n  "}
            <_components.span className="hljs-attr">{"step"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {">,\n  "}
            <_components.span className="hljs-attr">{"mapFn"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"n: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>
            {" T,\n  options?: {\n    fallback?: "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<T>;\n  },\n): "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<T[]>;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="range">
          <_components.a className="header-anchor" href="#range">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="Range" data-code-package-name="range">
            {"<Range>"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Creates a list of elements by mapping a number range of specified "}
          <_components.code>{"start"}</_components.code>
          {", "}
          <_components.code>{"to"}</_components.code>
          {", and "}
          <_components.code>{"step"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"All "}
          <_components.code>{"stop"}</_components.code>
          {", "}
          <_components.code>{"to"}</_components.code>
          {" and "}
          <_components.code>{"step"}</_components.code>
          {
            " props are reactive, and changing them will cause the elements array to be recalculated, creating new elements for numbers added to the range."
          }
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"start"}</_components.code>
              {" defaults to 0."}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"to"}</_components.code>
              {" defaults to 1. Range stops at "}
              <_components.code>{"to"}</_components.code>
              {", it is not included in the range."}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"step"}</_components.code>
              {" will become negative "}
              <_components.em>{"(the range will be descending)"}</_components.em>
              {" if "}
              <_components.code>{"to"}</_components.code>
              {" is smaller than "}
              <_components.code>{"start"}</_components.code>
              {"."}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            {"<"}
            <_components.span className="hljs-title class_">{"Range"}</_components.span>
            {" start={"}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {"} to={"}
            <_components.span className="hljs-number">{"14"}</_components.span>
            {"} step={"}
            <_components.span className="hljs-number">{"0.5"}</_components.span>
            {"}>\n   "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n</"}
            <_components.span className="hljs-title class_">{"Range"}</_components.span>
            {">\n\n"}
            <_components.span className="hljs-comment">{"// with a render prop:"}</_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Range"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"start"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{2}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"to"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{14}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"step"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{0.5}"}</_components.span>
                {">"}
              </_components.span>
              {"\n   {n => "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"{n}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"}\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Range"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">{"// with fallback:"}</_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Range"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"to"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{0}"}</_components.span>
                {"  "}
                <_components.span className="hljs-attr">{"fallback"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{"}</_components.span>
                {"<"}
                <_components.span className="hljs-attr">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"no items..."}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"}>\n   "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"Range"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"Array spread shortcut:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [start, setStart] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [to, setTo] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"10"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [step, setStep] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Range"}</_components.span>
                {" {"}
                <_components.span className="hljs-attr">{"..."}</_components.span>
                {"["}
                <_components.span className="hljs-attr">{"start"}</_components.span>
                {", "}
                <_components.span className="hljs-attr">{"to"}</_components.span>
                {", "}
                <_components.span className="hljs-attr">{"step"}</_components.span>
                {"]} />"}
              </_components.span>
            </_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Range"}</_components.span>
                {" {"}
                <_components.span className="hljs-attr">{"..."}</_components.span>
                {"["}
                <_components.span className="hljs-attr">{"0"}</_components.span>
                {", "}
                <_components.span className="hljs-attr">{"10"}</_components.span>
                {", "}
                <_components.span className="hljs-attr">{"2"}</_components.span>
                {"]} />"}
              </_components.span>
            </_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"Range"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"start"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{start()}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"to"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{to()}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"step"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{step()}"}</_components.span>
                {" />"}
              </_components.span>
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="definition-3">
          <_components.a className="header-anchor" href="#definition-3">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h4>
        {"\n"}
        <_components.p>
          <_components.code>{"RangeProps"}</_components.code>
          {" is an interface of "}
          <_components.code>{"stop"}</_components.code>
          {", "}
          <_components.code>{"to"}</_components.code>
          {" and "}
          <_components.code>{"step"}</_components.code>
          {" props, OR "}
          <_components.code>{"0"}</_components.code>
          {", "}
          <_components.code>{"1"}</_components.code>
          {" and "}
          <_components.code>{"2"}</_components.code>
          {" indexes of a spread array."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"Range"}</_components.span>
            {"<T>(\n  "}
            <_components.span className="hljs-attr">{"props"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"RangeProps"}</_components.span>
            {" & {\n    fallback?: T;\n    "}
            <_components.span className="hljs-attr">{"children"}</_components.span>
            {": ("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {": "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>
            {" T) | T;\n  },\n): "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<T[]>;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="indexrange">
          <_components.a className="header-anchor" href="#indexrange">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="indexRange" data-code-package-name="range">
            {"indexRange"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Primitive for mapping a number range of specified "}
          <_components.code>{"stop"}</_components.code>
          {", "}
          <_components.code>{"to"}</_components.code>
          {" and "}
          <_components.code>{"step"}</_components.code>
          {", while keeping previous elements of the same index. Underlying helper for the "}
          <_components.a href="#indexrange-1">
            <_components.code data-code-primitive-name="IndexRange" data-code-package-name="range">
              {"<IndexRange>"}
            </_components.code>
          </_components.a>
          {" control flow."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"All "}
          <_components.code>{"stop"}</_components.code>
          {", "}
          <_components.code>{"to"}</_components.code>
          {" and "}
          <_components.code>{"step"}</_components.code>
          {
            " arguments are accessors, and changing them will cause the mapped array to be recalculated, mapping new items appended at the end of the range."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.code>{"step"}</_components.code>
          {" will become negative "}
          <_components.em>{"(the range will be descending)"}</_components.em>
          {" if "}
          <_components.code>{"to"}</_components.code>
          {" is smaller than "}
          <_components.code>{"start"}</_components.code>
          {". Range stops at "}
          <_components.code>{"to"}</_components.code>
          {", it is not included in the range."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [to, setTo] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"5"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" mapped = "}
            <_components.span className="hljs-title function_">{"indexRange"}</_components.span>
            {"(\n  "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {",\n  to,\n  "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-number">{"0.5"}</_components.span>
            {",\n  "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"number"}</_components.span>
              {" =>"}
            </_components.span>
            {" {\n    "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [value, setValue] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"number"}</_components.span>
            {"());\n    "}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"handleNewNumber"}
            </_components.span>
            {"("}
            <_components.span className="hljs-title function_">{"number"}</_components.span>
            {"()));\n    "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" value;\n  },\n);\n"}
            <_components.span className="hljs-title function_">{"mapped"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">
              {"// => [0, 0.5, 1, 1.5, 2...]"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"setTo"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"3"}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {"// changes the output array, mapping only added indexes"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="definition-4">
          <_components.a className="header-anchor" href="#definition-4">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h4>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>
            {" indexRange<T>(\n  "}
            <_components.span className="hljs-attr">{"start"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {">,\n  "}
            <_components.span className="hljs-attr">{"to"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {">,\n  "}
            <_components.span className="hljs-attr">{"step"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {">,\n  "}
            <_components.span className="hljs-attr">{"mapFn"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"n: Accessor<"}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {">"}
              </_components.span>
              {") =>"}
            </_components.span>
            {" T,\n  options?: {\n    fallback?: "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<T>;\n  },\n): "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<T[]>;\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="indexrange-1">
          <_components.a className="header-anchor" href="#indexrange-1">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="IndexRange" data-code-package-name="range">
            {"<IndexRange>"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Control Flow Component for displaying a number range of elements, where elements receive a number value as signal, by mapping a number range of specified "
          }
          <_components.code>{"start"}</_components.code>
          {", "}
          <_components.code>{"to"}</_components.code>
          {", and "}
          <_components.code>{"step"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.p>
          {"All "}
          <_components.code>{"stop"}</_components.code>
          {", "}
          <_components.code>{"to"}</_components.code>
          {" and "}
          <_components.code>{"step"}</_components.code>
          {
            " props are reactive, and changing them will cause the elements array to be recalculated, creating new elements for numbers added to the range."
          }
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"start"}</_components.code>
              {" defaults to 0."}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"to"}</_components.code>
              {" defaults to 1. Range stops at "}
              <_components.code>{"to"}</_components.code>
              {", it is not included in the range."}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
          <_components.li>
            {"\n"}
            <_components.p>
              <_components.code>{"step"}</_components.code>
              {" will become negative "}
              <_components.em>{"(the range will be descending)"}</_components.em>
              {" if "}
              <_components.code>{"to"}</_components.code>
              {" is smaller than "}
              <_components.code>{"start"}</_components.code>
              {"."}
            </_components.p>
            {"\n"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            {"<"}
            <_components.span className="hljs-title class_">{"IndexRange"}</_components.span>
            {" start={"}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {"} to={"}
            <_components.span className="hljs-number">{"14"}</_components.span>
            {"} step={"}
            <_components.span className="hljs-number">{"0.5"}</_components.span>
            {"}>\n   "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n</"}
            <_components.span className="hljs-title class_">{"IndexRange"}</_components.span>
            {">\n\n"}
            <_components.span className="hljs-comment">{"// with a render prop:"}</_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"IndexRange"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"start"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{2}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"to"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{14}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"step"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{0.5}"}</_components.span>
                {">"}
              </_components.span>
              {"\n   {n => "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"{n()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"}\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"IndexRange"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">{"// with fallback:"}</_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"IndexRange"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"to"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{0}"}</_components.span>
                {"  "}
                <_components.span className="hljs-attr">{"fallback"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{"}</_components.span>
                {"<"}
                <_components.span className="hljs-attr">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"no items..."}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"}>\n   "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"div"}</_components.span>
                {">"}
              </_components.span>
              {"\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"IndexRange"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>{"Array spread shortcut:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [start, setStart] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"0"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [to, setTo] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"10"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [step, setStep] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"IndexRange"}</_components.span>
                {" {"}
                <_components.span className="hljs-attr">{"..."}</_components.span>
                {"["}
                <_components.span className="hljs-attr">{"start"}</_components.span>
                {", "}
                <_components.span className="hljs-attr">{"to"}</_components.span>
                {", "}
                <_components.span className="hljs-attr">{"step"}</_components.span>
                {"]} />"}
              </_components.span>
            </_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"IndexRange"}</_components.span>
                {" {"}
                <_components.span className="hljs-attr">{"..."}</_components.span>
                {"["}
                <_components.span className="hljs-attr">{"0"}</_components.span>
                {", "}
                <_components.span className="hljs-attr">{"10"}</_components.span>
                {", "}
                <_components.span className="hljs-attr">{"2"}</_components.span>
                {"]} />"}
              </_components.span>
            </_components.span>
            {"\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"IndexRange"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"start"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{start()}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"to"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{to()}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"step"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{step()}"}</_components.span>
                {" />"}
              </_components.span>
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="definition-5">
          <_components.a className="header-anchor" href="#definition-5">
            {"#"}
          </_components.a>
          {"Definition"}
        </_components.h4>
        {"\n"}
        <_components.p>
          <_components.code>{"RangeProps"}</_components.code>
          {" is an interface of "}
          <_components.code>{"stop"}</_components.code>
          {", "}
          <_components.code>{"to"}</_components.code>
          {" and "}
          <_components.code>{"step"}</_components.code>
          {" props, OR "}
          <_components.code>{"0"}</_components.code>
          {", "}
          <_components.code>{"1"}</_components.code>
          {" and "}
          <_components.code>{"2"}</_components.code>
          {" indexes of a spread array."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"IndexRange"}</_components.span>
            {"<T>(\n  "}
            <_components.span className="hljs-attr">{"props"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"RangeProps"}</_components.span>
            {" & {\n    fallback?: T;\n    "}
            <_components.span className="hljs-attr">{"children"}</_components.span>
            {": ("}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {": Accessor<"}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
                {">"}
              </_components.span>
              {") =>"}
            </_components.span>
            {" T) | T;\n  },\n): "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<T[]>;\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/range/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"Codesandbox: "}
          <_components.a href="https://codesandbox.io/s/solid-primitives-range-demo-y3sc5c?file=/index.tsx">
            {"CodeSandbox"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="possible-improvements">
          <_components.a className="header-anchor" href="#possible-improvements">
            {"#"}
          </_components.a>
          {"Possible improvements"}
        </_components.h2>
        {"\n"}
        <_components.h6 id="prs-welcome">
          <_components.a className="header-anchor" href="#prs-welcome">
            {"#"}
          </_components.a>
          {"(PRs Welcome)"}
        </_components.h6>
        {"\n"}
        <_components.ul className="contains-task-list">
          {"\n"}
          <_components.li className="task-list-item">
            <_components.input type="checkbox" disabled /> {"Currently the "}
            <_components.code data-code-primitive-name="mapRange" data-code-package-name="range">
              {"mapRange"}
            </_components.code>
            {" is handling decremanting ranges by swapping "}
            <_components.code>{"start"}</_components.code>
            {" and "}
            <_components.code>{"to"}</_components.code>
            {
              " with each other, and then cloning and reversing the mapped array. Doing this during the range mapping could possibly be more performant."
            }
          </_components.li>
          {"\n"}
          <_components.li className="task-list-item">
            <_components.input type="checkbox" disabled />{" "}
            {
              "For Ranges, because of how numbers are calculated, fractions might sometimes loose precision. E.g. a range from "
            }
            <_components.code>{"1.64"}</_components.code>
            {" to "}
            <_components.code>{"2"}</_components.code>
            {" by "}
            <_components.code>{"0.2"}</_components.code>
            {" step would generate numbers: "}
            <_components.code>{"[1.64, 1.8399999999999999]"}</_components.code>
            {" instead of "}
            <_components.code>{"[1.64, 1.84]"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li className="task-list-item">
            <_components.input type="checkbox" disabled /> {"Both "}
            <_components.code data-code-primitive-name="mapRange" data-code-package-name="range">
              {"mapRange"}
            </_components.code>
            {" and "}
            <_components.code data-code-primitive-name="indexRange" data-code-package-name="range">
              {"indexRange"}
            </_components.code>
            {" are missing index arguments in the mapping function."}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/range/CHANGELOG.md">
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
      packageName="@solid-primitives/range"
      name="range"
      stage={1}
      packageList={[{ name: "range", gzipped: "1.33 KB", minified: "3.14 KB" }]}
      primitiveList={[
        { name: "mapRange", gzipped: "643 B", minified: "1.05 KB" },
        { name: "indexRange", gzipped: "489 B", minified: "808 B" },
        { name: "Repeat", gzipped: "400 B", minified: "754 B" },
        { name: "Range", gzipped: "789 B", minified: "1.38 KB" },
        { name: "IndexRange", gzipped: "637 B", minified: "1.13 KB" },
        { name: "repeat", gzipped: "344 B", minified: "606 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
