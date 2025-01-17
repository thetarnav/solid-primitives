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
      pre: "pre",
      span: "span",
      ul: "ul",
      li: "li",
      strong: "strong",
      h3: "h3",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"Primitive that returns an event handler to mask the inputs of an text input element ("}
          <_components.code>{"<input>"}</_components.code>
          {", "}
          <_components.code>{"<textarea>"}</_components.code>
          {") when applied in "}
          <_components.code>{"oninput"}</_components.code>
          {" or "}
          <_components.code>{"onchange"}</_components.code>
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
      <CopyPackages packageName="@solid-primitives/input-mask" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="usage">
          <_components.a className="header-anchor" href="#usage">
            {"#"}
          </_components.a>
          {"Usage"}
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "For convenience reasons, the handler returns the current value, which allows you to use it to fill a signal or assign a let variable. The masks come in 4 different formats: function, regex-replacer, array and string. There are tools to convert string masks to array masks and regex-replacer and array masks to function masks."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {
              " {\n  stringMaskToArray,\n  regexMaskToFn,\n  arrayMaskToFn,\n  anyMaskToFn,\n  createInputMask\n} "
            }
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/input-mask"'}
            </_components.span>
            {";\n"}
            <_components.span className="hljs-comment">{"// string mask:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-comment">{"// 9 = any number,"}</_components.span>
            {"\n"}
            <_components.span className="hljs-comment">{"// a = any letter,"}</_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// * = any alphanumeric character"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// any other letter becomes a fixed placeholder"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" isodate = "}
            <_components.span className="hljs-string">{'"9999-99-99"'}</_components.span>
            {";\n"}
            <_components.span className="hljs-comment">
              {"// array mask: RegExp to match variable parts, strings for fixed placeholders"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" meetingId = ["}
            <_components.span className="hljs-regexp">{"/\\d/"}</_components.span>
            {", "}
            <_components.span className="hljs-regexp">{"/\\d/"}</_components.span>
            {", "}
            <_components.span className="hljs-regexp">{"/\\d/"}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"-"'}</_components.span>
            {", "}
            <_components.span className="hljs-regexp">{"/\\d/"}</_components.span>
            {", "}
            <_components.span className="hljs-regexp">{"/\\d/"}</_components.span>
            {", "}
            <_components.span className="hljs-regexp">{"/\\d/"}</_components.span>
            {", "}
            <_components.span className="hljs-string">{'"-"'}</_components.span>
            {", "}
            <_components.span className="hljs-regexp">{"/\\d/"}</_components.span>
            {", "}
            <_components.span className="hljs-regexp">{"/\\d/"}</_components.span>
            {", "}
            <_components.span className="hljs-regexp">{"/\\d/"}</_components.span>
            {"]);\n"}
            <_components.span className="hljs-comment">
              {"// regex replacer mask: a RegExp to match parts and a function to replace them"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// with the output of a function:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {
                "// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_the_replacement"
              }
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" meetingName = [\n  "}
            <_components.span className="hljs-regexp">
              {
                "/[^0-9a-zäöüß\\-_/]|^(https?:\\/\\/|)(www\\.|)(meet\\.goto\\.com|gotomeet\\.me|)\\/?/gi"
              }
            </_components.span>
            {",\n  "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-string">{'""'}</_components.span>
            {"\n];\n"}
            <_components.span className="hljs-comment">
              {"// function mask: (value, [start, end]) => [value, [start, end]]"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"meetingIdOrName"}
            </_components.span>
            {" = ("}
            <_components.span className="hljs-params">{"value, selection"}</_components.span>
            {") =>\n  ("}
            <_components.span className="hljs-regexp">
              {"/^\\d{1,3}$|^\\d{2,4}-?\\d{0,3}$|^\\d{2,4}-?\\d{2,4}-?\\d{0,3}$/"}
            </_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"test"}</_components.span>
            {"(value)\n    ? "}
            <_components.span className="hljs-title function_">{"anyMaskToFn"}</_components.span>
            {"(meetingId)\n    : "}
            <_components.span className="hljs-title function_">{"anyMaskToFn"}</_components.span>
            {"(meetingName)\n  )(value, selection);\n\n"}
            <_components.span className="hljs-comment">
              {"// converting string mask to array:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" maskArrayFromString = "}
            <_components.span className="hljs-title function_">
              {"stringMaskToArray"}
            </_components.span>
            {"(maskString);\n"}
            <_components.span className="hljs-comment">
              {"// converting other formats to function:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" maskFuncFromArray = "}
            <_components.span className="hljs-title function_">{"arrayMaskToFn"}</_components.span>
            {"(maskArray);\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" maskFuncFromRegexReplacer = "}
            <_components.span className="hljs-title function_">{"regexMaskToFn"}</_components.span>
            {"(regexMask, replacerFn);\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" maskFuncFromAny = "}
            <_components.span className="hljs-title function_">{"anyMaskToFn"}</_components.span>
            {"(mask);\n\n"}
            <_components.span className="hljs-comment">
              {"// use let variable, store, mutable or signal to get value in event:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"let"}</_components.span>
            {" changeMaskValue = "}
            <_components.span className="hljs-string">{'""'}</_components.span>
            {";\n"}
            <_components.span className="hljs-comment">
              {"// use ref to get the value:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"let"}</_components.span>
            {" inputMaskRef;\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" inputMask = {\n  ref,\n  "}
            <_components.span className="hljs-keyword">{"get"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"value"}</_components.span>
            {"() {\n    "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" inputMask."}
            <_components.span className="hljs-property">{"ref"}</_components.span>
            {"?."}
            <_components.span className="hljs-property">{"value"}</_components.span>
            {";\n  }\n};\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" dateMask = "}
            <_components.span className="hljs-title function_">
              {"createInputMask"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"99/99/9999"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n  "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">{"<>"}</_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"label"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"for"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"changeMask"'}</_components.span>
                {">"}
              </_components.span>
              {"The mask will only be applied after you leave the field"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"label"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"input"}</_components.span>
                {"\n      "}
                <_components.span className="hljs-attr">{"type"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"text"'}</_components.span>
                {"\n      "}
                <_components.span className="hljs-attr">{"id"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"changeMask"'}</_components.span>
                {"\n      "}
                <_components.span className="hljs-attr">{"onchange"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{e"}</_components.span>
                {" =>"}
              </_components.span>
              {" {\n        changeMaskValue = dateMask(e);\n      }}\n    />\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"label"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"for"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"inputMask"'}</_components.span>
                {">"}
              </_components.span>
              {"The mask will be applied on every single input"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"label"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"input"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"type"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"text"'}</_components.span>{" "}
                <_components.span className="hljs-attr">{"id"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"inputMask"'}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">
                  {"{inputMask.ref}"}
                </_components.span>{" "}
                <_components.span className="hljs-attr">{"oninput"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{dateMask}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onPaste"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{dateMask}"}</_components.span>
                {" />"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">{"</>"}</_components.span>
            </_components.span>
            {"\n);\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"In most cases you'll want to use "}
          <_components.code>{"onInput"}</_components.code>
          {" and "}
          <_components.code>{"onPaste"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.h2 id="faq">
          <_components.a className="header-anchor" href="#faq">
            {"#"}
          </_components.a>
          {"FAQ"}
        </_components.h2>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.strong>{"Why not support contenteditable?"}</_components.strong>
            <br />
            {
              " In most cases, you ain't gonna need it and a lower bundle size is always good. In those rare cases you do need it, check the "
            }
            <_components.a href="../selection/README.md">{"selection"}</_components.a>
            {
              " package, it shows you how to employ the mask filter functions together with a selection that supports contenteditable."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>
              {"Why "}
              <_components.code>{"oninput"}</_components.code>
              {"/"}
              <_components.code>{"onchange"}</_components.code>
              {" instead of e.g. "}
              <_components.code>{"onkeyup"}</_components.code>
              {"?"}
            </_components.strong>
            <br />
            {
              " There are a few things happening after keydown, -press and -up, which would result in flickering. Generally, you could use "
            }
            <_components.code>{"onblur"}</_components.code>
            {
              ", but then you'd attempt to apply the mask even if nothing changed, which just seems unnecessarily wasteful."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"Will it work with actual events?"}</_components.strong>
            <br />
            {
              " Yes, it will work with composed as well as native events, even with React's synthetic events; "
            }
            <_components.code
              data-code-primitive-name="createInputMask"
              data-code-package-name="input-mask"
            >
              {"createInputMask"}
            </_components.code>
            {
              " has an optional generic that you can use to type the output events. Solid's composed events are more performant than DOM events, so it is best practice to use them."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"Is there a server version?"}</_components.strong>
            <br />
            {
              " No, since it only creates an event handler that will solely run on the client; it makes no sense to create a server version."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"Does this provide any error handling?"}</_components.strong>
            <br />
            {
              " There is no error handling, but it should work well together with any form handling library."
            }
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"Can I limit the events this uses?"}</_components.strong>
            <br />
            {
              " If you want to limit the events this uses e.g. as part of a library or to use this with another framework's events while you port your app to solid, we got you covered, you can just call "
            }
            <_components.code>{"createInputMask<EventTypeUnion>(mask)"}</_components.code>
            {" in order to do exactly that."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"Can I change the string mask handling?"}</_components.strong>
            <br />
            {" As a matter of fact, you can! Either use the second optional parameter of "}
            <_components.code>{"stringMaskToArray(mask[, regexps])"}</_components.code>
            {" or "}
            <_components.code>{"anyMaskToFn(mask[, regexps])"}</_components.code>
            {" or "}
            <_components.code>
              {'import { stringMaskRegExp } from "@solid-primitives/input-mask"'}
            </_components.code>
            {" and change it to your liking."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.strong>{"Can I turn this off and on again?"}</_components.strong>
            <br />
            {
              " You can still wrap the output handler in your own handler to turn it off and on again:"
            }
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-jsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createInputMask } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/input-mask"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"let"}</_components.span>
            {" ref;\n"}
            <_components.span className="hljs-keyword">{"let"}</_components.span>
            {" useMask = "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" mask = "}
            <_components.span className="hljs-title function_">
              {"createInputMask"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"9999-99-99"'}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"return"}</_components.span>{" "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"input"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"ref"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{ref}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onInput"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{e"}</_components.span>
                {" =>"}
              </_components.span>
              {" useMask && mask(e)} onPaste={e => useMask && mask(e)} />"}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"DEMO"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-primitives-input-mask-demo-fnvg76?file=/index.tsx">
            {"https://codesandbox.io/s/solid-primitives-input-mask-demo-fnvg76?file=/index.tsx"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/input-mask/CHANGELOG.md">
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
      packageName="@solid-primitives/input-mask"
      name="input-mask"
      stage={1}
      packageList={[{ name: "input-mask", gzipped: "574 B", minified: "1.18 KB" }]}
      primitiveList={[{ name: "createInputMask", gzipped: "532 B", minified: "1.08 KB" }]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
