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
      pre: "pre",
      code: "code",
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
          {"Creates primitives to work with media streams from microphones, cameras or the screen."}
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
      <CopyPackages packageName="@solid-primitives/stream" />
      <NoHydration>
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
            {" [stream, { mutate, refetch, stop } = "}
            <_components.span className="hljs-title function_">{"createStream"}</_components.span>
            {"("}
            <_components.span className="hljs-attr">{"constraints"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"MediaDeviceInfo"}</_components.span>
            {" | "}
            <_components.span className="hljs-title class_">
              {"MediaStreamConstraints"}
            </_components.span>
            {");\n\n"}
            <_components.span className="hljs-attr">{"stream"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-title class_">{"MediaStream"}</_components.span>
            {" | "}
            <_components.span className="hljs-literal">{"undefined"}</_components.span>
            {"> & { "}
            <_components.span className="hljs-attr">{"loading"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"error"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"any"}</_components.span>
            {" }\n"}
            <_components.span className="hljs-attr">{"mutate"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"stream: MediaStream | "}
                <_components.span className="hljs-literal">{"undefined"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>{" "}
            <_components.span className="hljs-comment">
              {"// overwrite the stream"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-attr">{"refetch"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>{" "}
            <_components.span className="hljs-comment">
              {"// refetch the stream without changing the constraints"}
            </_components.span>
            {"\n"}
            <_components.span className="hljs-attr">{"stop"}</_components.span>
            {": "}
            <_components.span className="hljs-function">{"() =>"}</_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>{" "}
            <_components.span className="hljs-comment">
              {"// stop the current stream"}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [amplitude, { mutate, refetch, stop } = "}
            <_components.span className="hljs-title function_">
              {"createAmplitudeStream"}
            </_components.span>
            {"("}
            <_components.span className="hljs-attr">{"device"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"MediaDeviceInfo"}</_components.span>
            {");\n\n"}
            <_components.span className="hljs-attr">{"amplitude"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"Accessor"}</_components.span>
            {"<"}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {"> & { "}
            <_components.span className="hljs-attr">{"loading"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"boolean"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"error"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"any"}</_components.span>
            {" }\n"}
            <_components.span className="hljs-comment">
              {"// otherwise like createStream"}
            </_components.span>
            {"\n\n"}
            <_components.span className="hljs-title function_">
              {"createMediaPermissionRequest"}
            </_components.span>
            {"(target?: "}
            <_components.span className="hljs-string">{"'audio'"}</_components.span>
            {" | "}
            <_components.span className="hljs-string">{"'video'"}</_components.span>
            {" | "}
            <_components.span className="hljs-title class_">
              {"MediaStreamConstraints"}
            </_components.span>
            {");\n"}
            <_components.span className="hljs-comment">
              {"// use the createPermission primitive to watch the permissions."}
            </_components.span>
            {"\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/stream/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.a href="https://solidjs-community.github.io">
            {"https://solidjs-community.github.io"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/stream/CHANGELOG.md">
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
      packageName="@solid-primitives/stream"
      name="stream"
      stage={3}
      packageList={[{ name: "stream", gzipped: "1.04 KB", minified: "2.33 KB" }]}
      primitiveList={[
        { name: "createAmplitudeStream", gzipped: "923 B", minified: "1.73 KB" },
        { name: "createMediaPermissionRequest", gzipped: "248 B", minified: "351 B" },
        { name: "createAmplitudeFromStream", gzipped: "588 B", minified: "981 B" },
        { name: "createScreen", gzipped: "451 B", minified: "802 B" },
        { name: "createStream", gzipped: "527 B", minified: "930 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
