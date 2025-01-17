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
      em: "em",
      strong: "strong",
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
          {
            "Collection of reactive primitives and utility functions, providing easier ways to deal with dates in SolidJS."
          }
        </_components.p>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="#createDate">
              <_components.code data-code-primitive-name="createDate" data-code-package-name="date">
                {"createDate"}
              </_components.code>
            </_components.a>
            {" - Creates a reactive "}
            <_components.code>{"Date"}</_components.code>
            {" signal."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createDateNow">
              <_components.code
                data-code-primitive-name="createDateNow"
                data-code-package-name="date"
              >
                {"createDateNow"}
              </_components.code>
            </_components.a>
            {" - Creates an autoupdating and reactive "}
            <_components.code>{"new Date()"}</_components.code>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createTimeDifference">
              <_components.code
                data-code-primitive-name="createTimeDifference"
                data-code-package-name="date"
              >
                {"createTimeDifference"}
              </_components.code>
            </_components.a>
            {" - Provides a reactive time difference "}
            <_components.em>{"(in ms)"}</_components.em>
            {" signal."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createTimeDifferenceFromNow">
              <_components.code
                data-code-primitive-name="createTimeDifferenceFromNow"
                data-code-package-name="date"
              >
                {"createTimeDifferenceFromNow"}
              </_components.code>
            </_components.a>
            {" - Provides a autoupdating, reactive time difference "}
            <_components.em>{"(in ms)"}</_components.em>
            {" from "}
            <_components.strong>{"now"}</_components.strong>
            {" as a signal."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createTimeAgo">
              <_components.code
                data-code-primitive-name="createTimeAgo"
                data-code-package-name="date"
              >
                {"createTimeAgo"}
              </_components.code>
            </_components.a>
            {" - Provides a reactive, formatted, autoupdating date difference in relation to "}
            <_components.strong>{"now"}</_components.strong>
            {"."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createCountdown">
              <_components.code
                data-code-primitive-name="createCountdown"
                data-code-package-name="date"
              >
                {"createCountdown"}
              </_components.code>
            </_components.a>
            {" - Provides a reactive broken down time remaining Store."}
          </_components.li>
          {"\n"}
          <_components.li>
            <_components.a href="#createCountdownFromNow">
              <_components.code
                data-code-primitive-name="createCountdownFromNow"
                data-code-package-name="date"
              >
                {"createCountdownFromNow"}
              </_components.code>
            </_components.a>
            {" - Provides a reactive, autoupdating "}
            <_components.em>
              {"(from "}
              <_components.strong>{"now"}</_components.strong>
              {")"}
            </_components.em>
            {', broken down "time remaining" as a Store.'}
          </_components.li>
          {"\n"}
          <_components.li>
            {"+ "}
            <_components.a href="#utility-functions">
              {"some non-reactive date-related utility functions"}
            </_components.a>
            {"."}
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
      <CopyPackages packageName="@solid-primitives/date" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="reactive-primitives">
          <_components.a className="header-anchor" href="#reactive-primitives">
            {"#"}
          </_components.a>
          {"Reactive Primitives:"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="createdate">
          <_components.a className="header-anchor" href="#createdate">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="createDate" data-code-package-name="date">
            {"createDate"}
          </_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Creates a reactive "}
          <_components.code>{"Date"}</_components.code>
          {" signal."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [date, setDate] = "}
            <_components.span className="hljs-title function_">{"createDate"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1641408329089"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-title function_">{"date"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: Date"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-title function_">{"setDate"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"2020 1 11"'}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">
              {"// passed initial value can be reactive"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [timestamp, setTimestamp] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1641408329089"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [date, setDate] = "}
            <_components.span className="hljs-title function_">{"createDate"}</_components.span>
            {"(timestamp);\n\n"}
            <_components.span className="hljs-title function_">{"setTimestamp"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1341708325070"}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">
              {"// will update the date"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createdatenow">
          <_components.a className="header-anchor" href="#createdatenow">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="createDateNow" data-code-package-name="date">
            {"createDateNow"}
          </_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Creates an autoupdating and reactive "}
          <_components.code>{"new Date()"}</_components.code>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createDateNow } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/date"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-comment">
              {"// updates every second:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [now] = "}
            <_components.span className="hljs-title function_">{"createDateNow"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">
              {"// reactive timeout value"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [timeout, "}
            <_components.span className="hljs-built_in">{"setTimeout"}</_components.span>
            {"] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"500"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [now] = "}
            <_components.span className="hljs-title function_">{"createDateNow"}</_components.span>
            {"(timeout);\n\n"}
            <_components.span className="hljs-comment">{"// won't autoupdate:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [now, update] = "}
            <_components.span className="hljs-title function_">{"createDateNow"}</_components.span>
            {"("}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-comment">{"// update manually:"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"update"}</_components.span>
            {"();\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createtimedifference">
          <_components.a className="header-anchor" href="#createtimedifference">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createTimeDifference"
            data-code-package-name="date"
          >
            {"createTimeDifference"}
          </_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Provides a reactive time difference "}
          <_components.em>{"(in ms)"}</_components.em>
          {" signal."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"// the arguments can be reactive"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [target, setTarget] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1641408329089"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [diff, { "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>
            {", to }] = "}
            <_components.span className="hljs-title function_">
              {"createTimeDifference"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"2020 1 11"'}</_components.span>
            {", target);\n"}
            <_components.span className="hljs-title function_">{"diff"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: number"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"from"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: Date"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"to"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: Date"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createtimedifferencefromnow">
          <_components.a className="header-anchor" href="#createtimedifferencefromnow">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createTimeDifferenceFromNow"
            data-code-package-name="date"
          >
            {"createTimeDifferenceFromNow"}
          </_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Provides a autoupdating, reactive time difference "}
          <_components.em>{"(in ms)"}</_components.em>
          {" from "}
          <_components.strong>{"now"}</_components.strong>
          {" as a signal."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [target, setTarget] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1641408329089"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [diff, { target, now, update }] = "}
            <_components.span className="hljs-title function_">
              {"createTimeDifferenceFromNow"}
            </_components.span>
            {"(target);\n"}
            <_components.span className="hljs-title function_">{"diff"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: number"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"target"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: Date"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"now"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: Date"}</_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// manual update (automatic one can be disabled by passing false)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"update"}</_components.span>
            {"();\n\n"}
            <_components.span className="hljs-comment">
              {"// you can pass a custom interval (number or function or false)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"createTimeDifferenceFromNow"}
            </_components.span>
            {"(target, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"diff"}</_components.span>
              {" =>"}
            </_components.span>
            {" (diff > "}
            <_components.span className="hljs-number">{"100000"}</_components.span>
            {" ? "}
            <_components.span className="hljs-number">{"30000"}</_components.span>
            {" : "}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {"));\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createtimeago">
          <_components.a className="header-anchor" href="#createtimeago">
            {"#"}
          </_components.a>
          <_components.code data-code-primitive-name="createTimeAgo" data-code-package-name="date">
            {"createTimeAgo"}
          </_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Provides a reactive, formatted date difference in relation to now."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { createTimeAgo, createDate } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">
              {'"@solid-primitives/date"'}
            </_components.span>
            {";\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [myDate, setMyDate] = "}
            <_components.span className="hljs-title function_">{"createDate"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"Jun 28, 2021"'}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [timeago, { target, now, update, difference }] = "}
            <_components.span className="hljs-title function_">{"createTimeAgo"}</_components.span>
            {"(myDate);\n"}
            <_components.span className="hljs-comment">{"// => 5 months ago"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-title function_">{"timeago"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// => 5 months ago"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"difference"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: number"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"target"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: Date"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"now"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: Date"}</_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// manual update (automatic one can be disabled by passing false)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"update"}</_components.span>
            {"();\n\n"}
            <_components.span className="hljs-comment">
              {"// use custom libraries to change formatting:"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"import"}</_components.span>
            {" { formatRelative } "}
            <_components.span className="hljs-keyword">{"from"}</_components.span>{" "}
            <_components.span className="hljs-string">{'"date-fns"'}</_components.span>
            {";\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [timeago] = "}
            <_components.span className="hljs-title function_">{"createTimeAgo"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1577836800000"}</_components.span>
            {", {\n  "}
            <_components.span className="hljs-attr">{"min"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"10000"}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"interval"}</_components.span>
            {": "}
            <_components.span className="hljs-number">{"30000"}</_components.span>
            {",\n  "}
            <_components.span className="hljs-attr">{"relativeFormatter"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">{"target, now"}</_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-title function_">{"formatRelative"}</_components.span>
            {"(target, now),\n});\n"}
            <_components.span className="hljs-comment">
              {"// => last Monday at 9:25 AM"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createcountdown">
          <_components.a className="header-anchor" href="#createcountdown">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createCountdown"
            data-code-package-name="date"
          >
            {"createCountdown"}
          </_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>{"Provides a reactive broken down time remaining Store."}</_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [to, setTo] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1641408329089"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" countdown = "}
            <_components.span className="hljs-title function_">
              {"createCountdown"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"2020 1 11"'}</_components.span>
            {", to);\n\ncountdown."}
            <_components.span className="hljs-property">{"minutes"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// e.g. 5"}</_components.span>
            {"\ncountdown."}
            <_components.span className="hljs-property">{"hours"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// e.g. 1"}</_components.span>
            {"\ncountdown."}
            <_components.span className="hljs-property">{"seconds"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// e.g. 48"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createcountdownfromnow">
          <_components.a className="header-anchor" href="#createcountdownfromnow">
            {"#"}
          </_components.a>
          <_components.code
            data-code-primitive-name="createCountdownFromNow"
            data-code-package-name="date"
          >
            {"createCountdownFromNow"}
          </_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Provides a reactive, autoupdating "}
          <_components.em>
            {"(from "}
            <_components.strong>{"now"}</_components.strong>
            {")"}
          </_components.em>
          {', broken down "time remaining" as a Store.'}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"// target date may be reactive"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [to, setTo] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"1641408329089"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [countdown, { now, target, update }] = "}
            <_components.span className="hljs-title function_">
              {"createCountdownFromNow"}
            </_components.span>
            {"(to);\n\ncountdown."}
            <_components.span className="hljs-property">{"minutes"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// e.g. 5"}</_components.span>
            {"\ncountdown."}
            <_components.span className="hljs-property">{"hours"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// e.g. 1"}</_components.span>
            {"\ncountdown."}
            <_components.span className="hljs-property">{"seconds"}</_components.span>
            {"; "}
            <_components.span className="hljs-comment">{"// e.g. 48"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-title function_">{"target"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: Date"}</_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"now"}</_components.span>
            {"(); "}
            <_components.span className="hljs-comment">{"// T: Date"}</_components.span>
            {"\n"}
            <_components.span className="hljs-comment">
              {"// manual update (automatic one can be disabled by passing false)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">{"update"}</_components.span>
            {"();\n\n"}
            <_components.span className="hljs-comment">
              {"// you can pass a custom interval (number or function or false)"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-title function_">
              {"createCountdownFromNow"}
            </_components.span>
            {"(to, "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"diff"}</_components.span>
              {" =>"}
            </_components.span>
            {" (diff > "}
            <_components.span className="hljs-number">{"100000"}</_components.span>
            {" ? "}
            <_components.span className="hljs-number">{"30000"}</_components.span>
            {" : "}
            <_components.span className="hljs-number">{"1000"}</_components.span>
            {"));\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h2 id="utility-functions">
          <_components.a className="header-anchor" href="#utility-functions">
            {"#"}
          </_components.a>
          {"Utility Functions"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="getdate">
          <_components.a className="header-anchor" href="#getdate">
            {"#"}
          </_components.a>
          <_components.code>{"getDate"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"/**\n * "}
              <_components.span className="hljs-doctag">{"@param"}</_components.span>
              {" init timestamp `number` | date `string` | `Date` instance\n * "}
              <_components.span className="hljs-doctag">{"@returns"}</_components.span>
              {" `Date` instance\n */"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" getDate = ("}
            <_components.span className="hljs-attr">{"init"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"DateInit"}</_components.span>
            {"): "}
            <_components.span className="hljs-title class_">{"Date"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="gettime">
          <_components.a className="header-anchor" href="#gettime">
            {"#"}
          </_components.a>
          <_components.code>{"getTime"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"/**\n * "}
              <_components.span className="hljs-doctag">{"@param"}</_components.span>
              {" init timestamp `number` | date `string` | `Date` instance\n * "}
              <_components.span className="hljs-doctag">{"@returns"}</_components.span>
              {" timestamp `number`\n */"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" getTime = ("}
            <_components.span className="hljs-attr">{"init"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"DateInit"}</_components.span>
            {"): "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="getdatedifference">
          <_components.a className="header-anchor" href="#getdatedifference">
            {"#"}
          </_components.a>
          <_components.code>{"getDateDifference"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Get the time difference between two dates "}
          <_components.em>{"[ms]"}</_components.em>
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" getDateDifference = ("}
            <_components.span className="hljs-attr">{"from"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Date"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"to"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Date"}</_components.span>
            {"): "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="getcountdown">
          <_components.a className="header-anchor" href="#getcountdown">
            {"#"}
          </_components.a>
          <_components.code>{"getCountdown"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Provides broken down time remaining from a time difference."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"/**\n * "}
              <_components.span className="hljs-doctag">{"@param"}</_components.span>
              {" difference time difference between two dates *[ms]*\n * "}
              <_components.span className="hljs-doctag">{"@returns"}</_components.span>
              {" countdown object with keys: `days`, `hours`, `minutes`, etc.\n */"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" getCountdown = ("}
            <_components.span className="hljs-attr">{"difference"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {"): "}
            <_components.span className="hljs-title class_">{"Countdown"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="formatdate">
          <_components.a className="header-anchor" href="#formatdate">
            {"#"}
          </_components.a>
          <_components.code>{"formatDate"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Apply basic formatting to a "}
          <_components.code>{"Date"}</_components.code>
          {" instance."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" formatDate = ("}
            <_components.span className="hljs-attr">{"date"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Date"}</_components.span>
            {"): "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
            {"\n\n"}
            <_components.span className="hljs-comment">{"// example"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" date = "}
            <_components.span className="hljs-keyword">{"new"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"Date"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"2020 1 11"'}</_components.span>
            {")\n"}
            <_components.span className="hljs-title function_">{"formatDate"}</_components.span>
            {"(date) "}
            <_components.span className="hljs-comment">{"// => '2020-01-10'"}</_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="formatdaterelative">
          <_components.a className="header-anchor" href="#formatdaterelative">
            {"#"}
          </_components.a>
          <_components.code>{"formatDateRelative"}</_components.code>
        </_components.h3>
        {"\n"}
        <_components.p>
          {"Applies relative time formatting based on a time difference from "}
          <_components.strong>{"now"}</_components.strong>
          {"."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">
              {"/**\n * "}
              <_components.span className="hljs-doctag">{"@param"}</_components.span>
              {" difference time difference between a date and now *[ms]*\n * "}
              <_components.span className="hljs-doctag">{"@param"}</_components.span>
              {" messages custom messages for changing formatting\n * "}
              <_components.span className="hljs-doctag">{"@returns"}</_components.span>
              {' formatted string, e.g. *"2 seconds ago"*, *"in 3 weeks"*...\n */'}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"formatDateRelative"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"difference: "}
              <_components.span className="hljs-built_in">{"number"}</_components.span>
              {", messages?: Partial<RelativeFormatMessages>"}
            </_components.span>
            {"): "}
            <_components.span className="hljs-built_in">{"string"}</_components.span>
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/date/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://codesandbox.io/s/solid-date-hjxui?file=/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/date/CHANGELOG.md">
            {"CHANGELOG.md"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.h2 id="acknowledgement">
          <_components.a className="header-anchor" href="#acknowledgement">
            {"#"}
          </_components.a>
          {"Acknowledgement"}
        </_components.h2>
        {"\n"}
        <_components.ul>
          {"\n"}
          <_components.li>
            <_components.a href="https://vueuse.org/core/usetimeago/">
              {"VueUse — useTimeAgo"}
            </_components.a>
          </_components.li>
          {"\n"}
        </_components.ul>
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
      packageName="@solid-primitives/date"
      name="date"
      stage={3}
      packageList={[{ name: "date", gzipped: "1.86 KB", minified: "4.17 KB" }]}
      primitiveList={[
        { name: "createDateNow", gzipped: "499 B", minified: "1.01 KB" },
        { name: "createTimeDifference", gzipped: "554 B", minified: "1.1 KB" },
        { name: "createTimeDifferenceFromNow", gzipped: "994 B", minified: "2.13 KB" },
        { name: "createTimeAgo", gzipped: "1.58 KB", minified: "3.47 KB" },
        { name: "createCountdown", gzipped: "680 B", minified: "1.35 KB" },
        { name: "createCountdownFromNow", gzipped: "1.12 KB", minified: "2.41 KB" },
        { name: "createDate", gzipped: "497 B", minified: "974 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
