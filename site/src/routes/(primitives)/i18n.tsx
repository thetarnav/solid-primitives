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
      code: "code",
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
          {"Library of primitives for providing internationalization support."}
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
      <CopyPackages packageName="@solid-primitives/i18n" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createi18ncontext">
          <_components.a className="header-anchor" href="#createi18ncontext">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createI18nContext"
            data-code-package-name="i18n"
          >
            {"createI18nContext"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Creates a method for internationalization support. This primitive set is largely inspired by "
          }
          <_components.a href="https://github.com/developit/dlv/blob/master/index.js">
            {"dlv"}
          </_components.a>
          {" and passes all its tests."}
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
            {" { I18nContext, createI18nContext, useI18n } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/i18n"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"App"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Component"}</_components.span>
            {" = "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [t, { add, locale, dict }] = "}
            <_components.span className="hljs-title function_">{"useI18n"}</_components.span>
            {"();\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [name, setName] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Greg"'}</_components.span>
            {");\n\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"addLanguage"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params" />
            {") => {\n    "}
            <_components.span className="hljs-title function_">{"add"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"sw"'}</_components.span>
            {", { "}
            <_components.span className="hljs-attr">{"hello"}</_components.span>
            {": "}
            <_components.span className="hljs-string">
              {'"hej {{ name }}, hur mar du?"'}
            </_components.span>
            {" });\n    "}
            <_components.span className="hljs-title function_">{"locale"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"sw"'}</_components.span>
            {");\n  };\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n    "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">{"<>"}</_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {' locale("fr")}>fr'}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {' locale("en")}>en'}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {' locale("unknownLanguage")}>unknown language'}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{addLanguage}"}</_components.span>
                {">"}
              </_components.span>
              {"add and set swedish"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"input"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"value"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{name()}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onInput"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{e"}</_components.span>
                {" =>"}
              </_components.span>
              {" setName(e.target.value)} />\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"hr"}</_components.span>
                {" />"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"h1"}</_components.span>
                {">"}
              </_components.span>
              {'{t("hello", { name: name() }, "Hello {{ name }}!")}!'}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"h1"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"{locale()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"pre"}</_components.span>
                {">"}
              </_components.span>
              {"\n        "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"code"}</_components.span>
                {">"}
              </_components.span>
              {'{JSON.stringify(dict("sw"), null, 4)}'}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"code"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"pre"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">{"</>"}</_components.span>
            </_components.span>
            {"\n  );\n};\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" dict = {\n  "}
            <_components.span className="hljs-attr">{"fr"}</_components.span>
            {": {\n    "}
            <_components.span className="hljs-attr">{"hello"}</_components.span>
            {": "}
            <_components.span className="hljs-string">
              {'"bonjour {{ name }}, comment vas-tu ?"'}
            </_components.span>
            {",\n  },\n  "}
            <_components.span className="hljs-attr">{"en"}</_components.span>
            {": {\n    "}
            <_components.span className="hljs-attr">{"hello"}</_components.span>
            {": "}
            <_components.span className="hljs-string">
              {'"hello {{ name }}, how are you?"'}
            </_components.span>
            {",\n  },\n};\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" value = "}
            <_components.span className="hljs-title function_">
              {"createI18nContext"}
            </_components.span>
            {"(dict, "}
            <_components.span className="hljs-string">{'"fr"'}</_components.span>
            {");\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">
                  {"I18nContext.Provider"}
                </_components.span>{" "}
                <_components.span className="hljs-attr">{"value"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{value}"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"App"}</_components.span>
                {" />"}
              </_components.span>
              {"\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"I18nContext.Provider"}</_components.span>
                {">"}
              </_components.span>
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createchainedi18n">
          <_components.a className="header-anchor" href="#createchainedi18n">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createChainedI18n"
            data-code-package-name="i18n"
          >
            {"createChainedI18n"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {
            "Creates a chained dictionary and manages the locale. Provides a proxy wrapper around translate so you can do chained calls that always returns with the current locale. IE t.hello()"
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
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createChainedI18n } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/i18n"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" dictionaries = {\n  "}
            <_components.span className="hljs-attr">{"fr"}</_components.span>
            {": {\n    "}
            <_components.span className="hljs-attr">{"hello"}</_components.span>
            {": "}
            <_components.span className="hljs-string">
              {'"bonjour {{ name }}, comment vas-tu ?"'}
            </_components.span>
            {",\n    "}
            <_components.span className="hljs-attr">{"goodbye"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"{ name }: { name: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
                {" }"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-string">
              {"`au revoir "}
              <_components.span className="hljs-subst">{"${name}"}</_components.span>
              {"`"}
            </_components.span>
            {",\n  },\n  "}
            <_components.span className="hljs-attr">{"en"}</_components.span>
            {": {\n    "}
            <_components.span className="hljs-attr">{"hello"}</_components.span>
            {": "}
            <_components.span className="hljs-string">
              {'"hello {{ name }}, how are you?"'}
            </_components.span>
            {",\n    "}
            <_components.span className="hljs-attr">{"goodbye"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"{ name }: { name: "}
                <_components.span className="hljs-built_in">{"string"}</_components.span>
                {" }"}
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-string">
              {"`goodbye "}
              <_components.span className="hljs-subst">{"${name}"}</_components.span>
              {"`"}
            </_components.span>
            {",\n  },\n};\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [t, { locale, setLocale, getDictionary }] = "}
            <_components.span className="hljs-title function_">
              {"createChainedI18n"}
            </_components.span>
            {"({\n  dictionaries,\n  "}
            <_components.span className="hljs-attr">{"locale"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"en"'}</_components.span>
            {", "}
            <_components.span className="hljs-comment">{"// Starting locale"}</_components.span>
            {"\n});\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  t."}
            <_components.span className="hljs-title function_">{"hello"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"name"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"Mathiew"'}</_components.span>
            {" });\n});\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createchainedi18ncontext">
          <_components.a className="header-anchor" href="#createchainedi18ncontext">
            {"#"}
          </_components.a>
          <_components.code>{"createChainedI18nContext"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "Creates chained I18n state wrapped in a Context Provider to be shared with the app using the component tree."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-tsx">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createChainedI18nContext } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/i18n"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { I18nProvider, useI18nContext } = "}
            <_components.span className="hljs-title function_">
              {"makeChainedI18nContext"}
            </_components.span>
            {"({\n  dictionaries,\n  "}
            <_components.span className="hljs-attr">{"locale"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"en"'}</_components.span>
            {", "}
            <_components.span className="hljs-comment">{"// Starting locale"}</_components.span>
            {"\n});\n\n"}
            <_components.span className="hljs-keyword">{"export"}</_components.span>{" "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"useI18n"}</_components.span>
            {" = ("}
            <_components.span className="hljs-params" />
            {") => {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" context = "}
            <_components.span className="hljs-title function_">{"useI18nContext"}</_components.span>
            {"();\n  "}
            <_components.span className="hljs-keyword">{"if"}</_components.span>
            {" (!context) "}
            <_components.span className="hljs-keyword">{"throw"}</_components.span>{" "}
            <_components.span className="hljs-keyword">{"new"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"Error"}</_components.span>
            {"("}
            <_components.span className="hljs-string">
              {'"useI18n must be used within an I18nProvider"'}
            </_components.span>
            {");\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" context;\n};\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"App"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Component"}</_components.span>
            {" = "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [t, { locale, setLocale, getDictionary }] = "}
            <_components.span className="hljs-title function_">{"useI18n"}</_components.span>
            {"();\n  "}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [name, setName] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Greg"'}</_components.span>
            {");\n\n  "}
            <_components.span className="hljs-keyword">{"return"}</_components.span>
            {" (\n    "}
            <_components.span className="xml">
              <_components.span className="hljs-tag">{"<>"}</_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {' setLocale("fr")}>fr'}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{()"}</_components.span>
                {" =>"}
              </_components.span>
              {' setLocale("en")}>en'}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"button"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onClick"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{addLanguage}"}</_components.span>
                {">"}
              </_components.span>
              {"add and set swedish"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"button"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"input"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"value"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{name()}"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"onInput"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{e"}</_components.span>
                {" =>"}
              </_components.span>
              {" setName(e.target.value)} />\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"hr"}</_components.span>
                {" />"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"h1"}</_components.span>
                {">"}
              </_components.span>
              {"{t.hello({ name: name() })}!"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"h1"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"{locale()}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"\n      "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"{t.goodbye({ name: name() })}"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"p"}</_components.span>
                {">"}
              </_components.span>
              {"\n    "}
              <_components.span className="hljs-tag">{"</>"}</_components.span>
            </_components.span>
            {"\n  );\n};\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">
                  {"I18nContext.Provider"}
                </_components.span>{" "}
                <_components.span className="hljs-attr">{"value"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{value}"}</_components.span>
                {">"}
              </_components.span>
              {"\n  "}
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"App"}</_components.span>
                {" />"}
              </_components.span>
              {"\n"}
              <_components.span className="hljs-tag">
                {"</"}
                <_components.span className="hljs-name">{"I18nContext.Provider"}</_components.span>
                {">"}
              </_components.span>
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/i18n/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"You may view a working example of createI18nContext here: "}
          <_components.a href="https://codesandbox.io/s/use-i18n-rd7jq?file=/src/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/i18n/CHANGELOG.md">
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
      packageName="@solid-primitives/i18n"
      name="i18n"
      stage={3}
      packageList={[{ name: "i18n", gzipped: "848 B", minified: "1.69 KB" }]}
      primitiveList={[
        { name: "createChainedI18n", gzipped: "531 B", minified: "959 B" },
        { name: "createI18nContext", gzipped: "394 B", minified: "631 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
