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
      table: "table",
      thead: "thead",
      tr: "tr",
      th: "th",
      tbody: "tbody",
      td: "td",
    },
    _provideComponents(),
    props.components,
  );
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return (
    <>
      <NoHydration>
        <_components.p>
          {"Primitives for supporting sharing of resources on social media and beyond."}
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createSocialShare">
              <_components.code
                data-code-primitive-name="createSocialShare"
                data-code-package-name="share"
              >
                {"createSocialShare"}
              </_components.code>
            </_components.a>
            {" - A primitive for sharing on social media and beyond."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#makeWebShare">
              <_components.code>{"makeWebShare"}</_components.code>
            </_components.a>
            {" - Generates a simple non-reactive WebShare primitive for sharing."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createWebShare">
              <_components.code
                data-code-primitive-name="createWebShare"
                data-code-package-name="share"
              >
                {"createWebShare"}
              </_components.code>
            </_components.a>
            {" - Creates a reactive status about web share."}
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
      <CopyPackages packageName="@solid-primitives/share" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="createsocialshare">
          <_components.a className="header-anchor" href="#createsocialshare">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createSocialShare"
            data-code-package-name="share"
          >
            {"createSocialShare"}
          </_components.code>
        </_components.h2>
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
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createSocialShare, "}
            <_components.span className="hljs-variable constant_">{"TWITTER"}</_components.span>
            {" } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/share"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [share, close] = "}
            <_components.span className="hljs-title function_">
              {"createSocialShare"}
            </_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" ({\n  "}
            <_components.span className="hljs-attr">{"title"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"SolidJS.com"'}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"url"}</_components.span>
            {": "}
            <_components.span className="hljs-string">
              {'"https://www.solidjs.com"'}
            </_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"description"}</_components.span>
            {": "}
            <_components.span className="hljs-string">
              {'"Simple and well-behaved reactivity!"'}
            </_components.span>
            {",\n}));\n"}
            <_components.span className="hljs-title function_">{"share"}</_components.span>
            {"("}
            <_components.span className="hljs-variable constant_">{"TWITTER"}</_components.span>
            {");\n"}
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
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"createSocialShare"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"\n  options: Accessor<{\n    network?: Network;\n    url: "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {";\n    title: "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {";\n    description: "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {";\n    quote?: "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {";\n    hashtags?: "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {";\n    twitterUser?: "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {";\n    media?: "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {";\n    tag?: "}
              <_components.span className="hljs-built_in">{"string"}</_components.span>
              {";\n    popup?: SharePopupOptions;\n  }>,\n  controller: Window = "}
              <_components.span className="hljs-variable language_">{"window"}</_components.span>
              {",\n"}
            </_components.span>
            {"): ["}
            <_components.span className="hljs-attr">{"share"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"network: Network | "}
                <_components.span className="hljs-literal">{"undefined"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"close"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"isSharing"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {">];\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="network-list">
          <_components.a className="header-anchor" href="#network-list">
            {"#"}
          </_components.a>
          {"Network List"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "The following are a list of supported networks that may be imported from the share package."
          }
        </_components.p>
        {"\n"}
        <_components.table>
          <_components.thead>
            <_components.tr>
              <_components.th>{"Network"}</_components.th>
              <_components.th>
                <_components.code>{"url"}</_components.code>
              </_components.th>
              <_components.th>
                <_components.code>{"title"}</_components.code>
              </_components.th>
              <_components.th>
                <_components.code>{"description"}</_components.code>
              </_components.th>
              <_components.th>{"Extras/Comments"}</_components.th>
            </_components.tr>
          </_components.thead>
          <_components.tbody>
            <_components.tr>
              <_components.td>{"Baidu"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Buffer"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Email"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"EverNote"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Facebook"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>
                <_components.code>{"hashtags"}</_components.code>
                {" A list of comma-separated hashtags, only the first one will be used."}
                <br />
                <_components.code>{"quote"}</_components.code>
                {" Facebook quote."}
              </_components.td>
            </_components.tr>
            <_components.tr>
              <_components.td>{"FlipBoard"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"HackerNews"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"InstaPaper"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Line"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"LinkedIn"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Messenger"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Odnoklassniki"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Pinterest"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td>
                <_components.code>{"media"}</_components.code>
                {" URL of an image describing the content."}
              </_components.td>
            </_components.tr>
            <_components.tr>
              <_components.td>{"Pocket"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Reddit"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Skype"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"SMS"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"StumbleUpon"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Telegram"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Tumblr"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Twitter"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td>
                <_components.code>{"hashtags"}</_components.code>
                {" A list of comma-separated hashtags."}
                <br />
                <_components.code>{"twitter-user"}</_components.code>
                {" Twitter user to mention."}
              </_components.td>
            </_components.tr>
            <_components.tr>
              <_components.td>{"Viber"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"VK"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>
                <_components.code>{"media"}</_components.code>
                {" URL of an image describing the content."}
              </_components.td>
            </_components.tr>
            <_components.tr>
              <_components.td>{"Weibo"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td>
                <_components.code>{"media"}</_components.code>
                {" URL of an image describing the content."}
              </_components.td>
            </_components.tr>
            <_components.tr>
              <_components.td>{"WhatsApp"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Wordpress"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>
                <_components.code>{"media"}</_components.code>
                {" URL of an image describing the content."}
              </_components.td>
            </_components.tr>
            <_components.tr>
              <_components.td>{"Xing"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":x:"}</_components.td>
              <_components.td />
            </_components.tr>
            <_components.tr>
              <_components.td>{"Yammer"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td>{":heavy_check_mark:"}</_components.td>
              <_components.td />
            </_components.tr>
          </_components.tbody>
        </_components.table>
        {"\n"}
        <_components.p>
          {"For the networks: "}
          <_components.code>{"Line"}</_components.code>
          {", "}
          <_components.code>{"Skype"}</_components.code>
          {", "}
          <_components.code>{"SMS"}</_components.code>
          {", "}
          <_components.code>{"Telegram"}</_components.code>
          {", "}
          <_components.code>{"Viber"}</_components.code>
          {", "}
          <_components.code>{"WhatsApp"}</_components.code>
          {" and "}
          <_components.code>{"Yammer"}</_components.code>
          {'; the shared content is a string of the form: "'}
          <_components.code>{"$title"}</_components.code>{" "}
          <_components.code>{"$url"}</_components.code>{" "}
          <_components.code>{"$description"}</_components.code>
          {'"'}
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "Note that you can also provide your own custom network by formatting the input string into the share function. The following is a list of properties that will be replaced by the utility:"
          }
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.code>{"@u"}</_components.code>
            {": URL"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"@t"}</_components.code>
            {": Title"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"@d"}</_components.code>
            {": Description"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"@q"}</_components.code>
            {": Quote"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"@h"}</_components.code>
            {": Hashtags"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"@m"}</_components.code>
            {": Media"}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.code>{"@tu"}</_components.code>
            {": TwitterUser (Twitter specific)"}
          </_components.li>
          {"\n"}
        </_components.ul>
        {"\n"}
        <_components.p>{"The following is an example of Twitter's share string:"}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>{" "}
            <_components.span className="hljs-attr">{"twitter"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Network"}</_components.span>
            {" = "}
            <_components.span className="hljs-string">
              {'"https://twitter.com/intent/tweet?text=@t&url=@u&hashtags=@h@tu"'}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"You may view a working example "}
          <_components.a href="https://stackblitz.com/edit/vitejs-vite-vz1yr8?file=src/App.tsx">
            {"here on Stackblitz"}
          </_components.a>
          {"."}
        </_components.p>
        {"\n"}
        <_components.h3 id="acknowledgements">
          <_components.a className="header-anchor" href="#acknowledgements">
            {"#"}
          </_components.a>
          {"Acknowledgements"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"A portion of this primitive was built from "}
          <_components.a href="https://github.com/nicolasbeauvais/vue-social-sharing/blob/master/src/share-network.js">
            {
              "https://github.com/nicolasbeauvais/vue-social-sharing/blob/master/src/share-network.js"
            }
          </_components.a>
          {"."}
        </_components.p>
        {"\n"}
        <_components.h2 id="makewebshare">
          <_components.a className="header-anchor" href="#makewebshare">
            {"#"}
          </_components.a>
          <_components.code>{"makeWebShare"}</_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Generates a simple non-reactive WebShare primitive for sharing. Uses the "}
          <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API">
            {"WebShare API"}
          </_components.a>
          {"."}
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
            {" { makeWebShare } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/share"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" share = "}
            <_components.span className="hljs-title function_">{"makeWebShare"}</_components.span>
            {"();\n\n"}
            <_components.span className="hljs-keyword">{"try"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"share"}</_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"url"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"https://solidjs.com"'}</_components.span>
            {" });\n} "}
            <_components.span className="hljs-keyword">{"catch"}</_components.span>
            {" (e) {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(e);\n}\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="createwebshare">
          <_components.a className="header-anchor" href="#createwebshare">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createWebShare"
            data-code-package-name="share"
          >
            {"createWebShare"}
          </_components.code>
        </_components.h2>
        {"\n"}
        <_components.p>
          {"Creates a reactive status about web share. Uses the "}
          <_components.a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API">
            {"WebShare API"}
          </_components.a>
          {"."}
        </_components.p>
        {"\n"}
        <_components.h3 id="how-to-use-it-2">
          <_components.a className="header-anchor" href="#how-to-use-it-2">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createWebShare } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/share"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [data, setData] = createSignal<"}
            <_components.span className="hljs-title class_">{"ShareData"}</_components.span>
            {">({});\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" shareStatus = "}
            <_components.span className="hljs-title function_">{"createWebShare"}</_components.span>
            {"(data);\n\n"}
            <_components.span className="hljs-title function_">{"createEffect"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>
            {" {\n  "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(shareStatus."}
            <_components.span className="hljs-property">{"status"}</_components.span>
            {", shareStatus."}
            <_components.span className="hljs-property">{"message"}</_components.span>
            {");\n});\n"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/share/CHANGELOG.md">
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
      packageName="@solid-primitives/share"
      name="share"
      stage={3}
      packageList={[{ name: "share", gzipped: "1.93 KB", minified: "4.31 KB" }]}
      primitiveList={[
        { name: "createWebShare", gzipped: "334 B", minified: "630 B" },
        { name: "createSocialShare", gzipped: "748 B", minified: "1.58 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
