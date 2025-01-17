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
          {"Primitive to make uploading files and making dropzones easier."}
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
      <CopyPackages packageName="@solid-primitives/upload" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="createfileuploader">
          <_components.a className="header-anchor" href="#createfileuploader">
            {"#"}
          </_components.a>
          <_components.a href="#createfileuploader">{"createFileUploader"}</_components.a>
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-comment">{"// single files"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { files, selectFiles } = "}
            <_components.span className="hljs-title function_">
              {"createFileUploader"}
            </_components.span>
            {"();\n"}
            <_components.span className="hljs-title function_">{"selectFiles"}</_components.span>
            {"([file] => "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(file));\n\n"}
            <_components.span className="hljs-comment">{"// multiple files"}</_components.span>
            {"\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { files, selectFiles } = "}
            <_components.span className="hljs-title function_">
              {"createFileUploader"}
            </_components.span>
            {"({ "}
            <_components.span className="hljs-attr">{"multiple"}</_components.span>
            {": "}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {", "}
            <_components.span className="hljs-attr">{"accept"}</_components.span>
            {": "}
            <_components.span className="hljs-string">{'"image/*"'}</_components.span>
            {" });\n"}
            <_components.span className="hljs-title function_">{"selectFiles"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"files"}</_components.span>
              {" =>"}
            </_components.span>
            {" files."}
            <_components.span className="hljs-title function_">{"forEach"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"file"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(file)));\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="usefileuploader-directive">
          <_components.a className="header-anchor" href="#usefileuploader-directive">
            {"#"}
          </_components.a>
          {"use:fileUploader directive"}
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [files, setFiles] = createSignal<"}
            <_components.span className="hljs-title class_">{"UploadFile"}</_components.span>
            {"[]>([]);\n\n"}
            <_components.span className="xml">
              <_components.span className="hljs-tag">
                {"<"}
                <_components.span className="hljs-name">{"input"}</_components.span>
                {"\n  "}
                <_components.span className="hljs-attr">{"type"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{'"file"'}</_components.span>
                {"\n  "}
                <_components.span className="hljs-attr">{"multiple"}</_components.span>
                {"\n  "}
                <_components.span className="hljs-attr">{"use:fileUploader"}</_components.span>
                {"="}
                <_components.span className="hljs-string">{"{{"}</_components.span>
                {"\n    "}
                <_components.span className="hljs-attr">{"userCallback:"}</_components.span>{" "}
                <_components.span className="hljs-attr">{"fs"}</_components.span>
                {" =>"}
              </_components.span>
              {" fs.forEach(f => console.log(f)),\n    setFiles,\n  }}\n/>"}
            </_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="createdropzone">
          <_components.a className="header-anchor" href="#createdropzone">
            {"#"}
          </_components.a>
          <_components.a href="#createdropzone">{"createDropzone"}</_components.a>
        </_components.h3>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-html">
            <_components.span className="hljs-tag">
              {"<"}
              <_components.span className="hljs-name">{"div"}</_components.span>
              {"\n  "}
              <_components.span className="hljs-attr">{"ref"}</_components.span>
              {"="}
              <_components.span className="hljs-string">{"{dropzoneRef}"}</_components.span>
              {"\n  "}
              <_components.span className="hljs-attr">{"style"}</_components.span>
              {"="}
              <_components.span className="hljs-string">{"{{"}</_components.span>{" "}
              <_components.span className="hljs-attr">{"width:"}</_components.span>
              {' "'}
              <_components.span className="hljs-attr">{"100px"}</_components.span>
              {'", '}
              <_components.span className="hljs-attr">{"height:"}</_components.span>
              {' "'}
              <_components.span className="hljs-attr">{"100px"}</_components.span>
              {'", '}
              <_components.span className="hljs-attr">{"background:"}</_components.span>
              {' "'}
              <_components.span className="hljs-attr">{"red"}</_components.span>
              {'" }}>'}
            </_components.span>
            {"\n  Dropzone\n"}
            <_components.span className="hljs-tag">
              {"</"}
              <_components.span className="hljs-name">{"div"}</_components.span>
              {">"}
            </_components.span>
            {"\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { "}
            <_components.span className="hljs-attr">{"setRef"}</_components.span>
            {": dropzoneRef, "}
            <_components.span className="hljs-attr">{"files"}</_components.span>
            {": droppedFiles } = "}
            <_components.span className="hljs-title function_">{"createDropzone"}</_components.span>
            {"({\n  "}
            <_components.span className="hljs-attr">{"onDrop"}</_components.span>
            {": "}
            <_components.span className="hljs-keyword">{"async"}</_components.span>
            {" files => {\n    "}
            <_components.span className="hljs-keyword">{"await"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"doStuff"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"2"}</_components.span>
            {");\n    files."}
            <_components.span className="hljs-title function_">{"forEach"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"f"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(f));\n  },\n  "}
            <_components.span className="hljs-attr">{"onDragStart"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"files"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"drag start"'}</_components.span>
            {")\n  "}
            <_components.span className="hljs-attr">{"onDragStart"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"files"}</_components.span>
              {" =>"}
            </_components.span>
            {" files."}
            <_components.span className="hljs-title function_">{"forEach"}</_components.span>
            {"("}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"f"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"(f)),\n  "}
            <_components.span className="hljs-attr">{"onDragOver"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              <_components.span className="hljs-params">{"files"}</_components.span>
              {" =>"}
            </_components.span>{" "}
            <_components.span className="hljs-variable language_">{"console"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">{"log"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"drag over"'}</_components.span>
            {")\n});\n"}
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
          <_components.a href="https://solidjs-community.github.io/solid-primitives/upload/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"Working example: "}
          <_components.a href="https://codesandbox.io/s/solid-primitives-upload-ry042x?file=/src/index.tsx">
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/upload/CHANGELOG.md">
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
      packageName="@solid-primitives/upload"
      name="upload"
      stage={0}
      packageList={[{ name: "upload", gzipped: "1.02 KB", minified: "2.79 KB" }]}
      primitiveList={[
        { name: "createDropzone", gzipped: "676 B", minified: "1.85 KB" },
        { name: "createFileUploader", gzipped: "606 B", minified: "1.11 KB" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
