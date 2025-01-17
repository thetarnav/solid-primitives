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
      h4: "h4",
      em: "em",
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
            "Primitive to manage audio playback in the browser. The primitives are easily composable and extended. To create your own audio element, consider using makeAudioPlayer which allows you to supply a player instance that matches the built-in standard Audio API."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          {
            "Each primitive also exposes the audio instance for further custom extensions. Within an SSR context this audio primitive performs noops but never interrupts the process. Time values and durations are zero'd and in LOADING state."
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
      <CopyPackages packageName="@solid-primitives/audio" />
      <NoHydration>
        {"\n"}
        <_components.h2 id="how-to-use-it">
          <_components.a className="header-anchor" href="#how-to-use-it">
            {"#"}
          </_components.a>
          {"How to use it"}
        </_components.h2>
        {"\n"}
        <_components.h3 id="makeaudio">
          <_components.a className="header-anchor" href="#makeaudio">
            {"#"}
          </_components.a>
          {"makeAudio"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {"A foundational primitive with no player controls but exposes the raw player object."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" player = "}
            <_components.span className="hljs-title function_">{"makeAudio"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"example.mp3"'}</_components.span>
            {");\n"}
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
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">{"makeAudio"}</_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"src: AudioSource, handlers: AudioEventHandlers = {}"}
            </_components.span>
            {"): "}
            <_components.span className="hljs-title class_">{"HTMLAudioElement"}</_components.span>
            {";\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="makeaudioplayer">
          <_components.a className="header-anchor" href="#makeaudioplayer">
            {"#"}
          </_components.a>
          {"makeAudioPlayer"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "Provides a very basic interface for wrapping listeners to a supplied or default audio player."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" { play, pause, seek } = "}
            <_components.span className="hljs-title function_">
              {"makeAudioPlayer"}
            </_components.span>
            {"("}
            <_components.span className="hljs-string">{'"example.mp3"'}</_components.span>
            {");\n"}
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
            <_components.span className="hljs-title function_">
              {"makeAudioPlayer"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"\n  src: AudioSource,\n  handlers: AudioEventHandlers = {},\n"}
            </_components.span>
            {"): {\n  "}
            <_components.span className="hljs-attr">{"play"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"pause"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"seek"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"time: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"setVolume"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"volume: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n  "}
            <_components.span className="hljs-attr">{"player"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"HTMLAudioElement"}</_components.span>
            {";\n};\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {"The seek function falls back to fastSeek when on "}
          <_components.a href="https://caniuse.com/?search=fastseek">
            {"supporting browsers"}
          </_components.a>
          {"."}
        </_components.p>
        {"\n"}
        <_components.h3 id="createaudio">
          <_components.a className="header-anchor" href="#createaudio">
            {"#"}
          </_components.a>
          {"createAudio"}
        </_components.h3>
        {"\n"}
        <_components.p>
          {
            "Creates a very basic audio/sound player with reactive properties to control the audio. Be careful not to destructure the value properties provided by the primitive as it will likely break reactivity."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [playing, setPlaying] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [volume, setVolume] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-literal">{"false"}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [audio, controls] = "}
            <_components.span className="hljs-title function_">{"createAudio"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"sample.mp3"'}</_components.span>
            {", playing, volume);\n"}
            <_components.span className="hljs-title function_">{"setPlaying"}</_components.span>
            {"("}
            <_components.span className="hljs-literal">{"true"}</_components.span>
            {"); "}
            <_components.span className="hljs-comment">{"// or controls.play()"}</_components.span>
            {"\ncontrols."}
            <_components.span className="hljs-title function_">{"seek"}</_components.span>
            {"("}
            <_components.span className="hljs-number">{"4000"}</_components.span>
            {");\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "The audio primitive exports an reactive properties that provides you access to state, duration and current time."
          }
        </_components.p>
        {"\n"}
        <_components.p>
          <_components.em>{"Note:"}</_components.em>
          {" Initializing the primitive with "}
          <_components.code>{"playing"}</_components.code>
          {
            " as true works, however note that the user has to interact with the page first (on a fresh page load)."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"function"}</_components.span>{" "}
            <_components.span className="hljs-title function_">
              {"makeAudioPlayer"}
            </_components.span>
            {"("}
            <_components.span className="hljs-params">
              {"\n  src: AudioSource | Accessor<AudioSource>,\n  playing?: Accessor<"}
              <_components.span className="hljs-built_in">{"boolean"}</_components.span>
              {">,\n  volume?: Accessor<"}
              <_components.span className="hljs-built_in">{"number"}</_components.span>
              {">,\n"}
            </_components.span>
            {"): [\n  {\n    "}
            <_components.span className="hljs-attr">{"state"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"AudioState"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"currentTime"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"duration"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"volume"}</_components.span>
            {": "}
            <_components.span className="hljs-built_in">{"number"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"player"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"HTMLAudioElement"}</_components.span>
            {";\n  },\n  {\n    "}
            <_components.span className="hljs-attr">{"seek"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"time: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"setVolume"}</_components.span>
            {": "}
            <_components.span className="hljs-function">
              {"("}
              <_components.span className="hljs-params">
                {"volume: "}
                <_components.span className="hljs-built_in">{"number"}</_components.span>
              </_components.span>
              {") =>"}
            </_components.span>{" "}
            <_components.span className="hljs-built_in">{"void"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"play"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {";\n    "}
            <_components.span className="hljs-attr">{"pause"}</_components.span>
            {": "}
            <_components.span className="hljs-title class_">{"VoidFunction"}</_components.span>
            {";\n  },\n];\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h4 id="dynamic-audio-changes">
          <_components.a className="header-anchor" href="#dynamic-audio-changes">
            {"#"}
          </_components.a>
          {"Dynamic audio changes"}
        </_components.h4>
        {"\n"}
        <_components.p>
          {
            "The source property can be a signal as well as a media source. Upon switching the source via a signal it will continue playing from the head."
          }
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" [src, setSrc] = "}
            <_components.span className="hljs-title function_">{"createSignal"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"sample.mp3"'}</_components.span>
            {");\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" audio = "}
            <_components.span className="hljs-title function_">{"createAudio"}</_components.span>
            {"(src);\n"}
            <_components.span className="hljs-title function_">{"setSrc"}</_components.span>
            {"("}
            <_components.span className="hljs-string">{'"sample2.mp3"'}</_components.span>
            {");\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.h3 id="audio-source">
          <_components.a className="header-anchor" href="#audio-source">
            {"#"}
          </_components.a>
          {"Audio Source"}
        </_components.h3>
        {"\n"}
        <_components.p>
          <_components.code data-code-primitive-name="createAudio" data-code-package-name="audio">
            {"createAudio"}
          </_components.code>
          {" as well as "}
          <_components.code data-code-primitive-name="makeAudio" data-code-package-name="audio">
            {"makeAudio"}
          </_components.code>
          {" and "}
          <_components.code
            data-code-primitive-name="makeAudioPlayer"
            data-code-package-name="audio"
          >
            {"makeAudioPlayer"}
          </_components.code>
          {" all accept MediaSource as a property."}
        </_components.p>
        {"\n"}
        <_components.pre>
          <_components.code className="hljs language-ts">
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" media = "}
            <_components.span className="hljs-keyword">{"new"}</_components.span>{" "}
            <_components.span className="hljs-title class_">{"MediaSource"}</_components.span>
            {"();\n"}
            <_components.span className="hljs-keyword">{"const"}</_components.span>
            {" audio = "}
            <_components.span className="hljs-title function_">{"createAudio"}</_components.span>
            {"("}
            <_components.span className="hljs-variable constant_">{"URL"}</_components.span>
            {"."}
            <_components.span className="hljs-title function_">
              {"createObjectURL"}
            </_components.span>
            {"(media));\n"}
          </_components.code>
        </_components.pre>
        {"\n"}
        <_components.p>
          {
            "This allows you to managed streamed or Blob supplied media. In essence the primitives in this package are very flexible and allow direct access to the base browser API."
          }
        </_components.p>
        {"\n"}
        <_components.h2 id="demo">
          <_components.a className="header-anchor" href="#demo">
            {"#"}
          </_components.a>
          {"Demo"}
        </_components.h2>
        {"\n"}
        <_components.p>
          <_components.a href="https://solidjs-community.github.io/solid-primitives/audio/">
            {"Live Site"}
          </_components.a>
        </_components.p>
        {"\n"}
        <_components.p>
          {"You may view a working example here: "}
          <_components.a href="https://stackblitz.com/edit/vitejs-vite-zwfs6h?file=src%2Fmain.tsx">
            {"StackBlitz"}
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
          <_components.a href="https://github.com/solidjs-community/solid-primitives/blob/main/packages/audio/CHANGELOG.md">
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
      packageName="@solid-primitives/audio"
      name="audio"
      stage={3}
      packageList={[{ name: "audio", gzipped: "1.19 KB", minified: "2.55 KB" }]}
      primitiveList={[
        { name: "makeAudioPlayer", gzipped: "467 B", minified: "831 B" },
        { name: "createAudio", gzipped: "1.07 KB", minified: "2.35 KB" },
        { name: "makeAudio", gzipped: "284 B", minified: "402 B" },
      ]}
    >
      <MDXContent />
    </PrimitivePageMain>
  );
}
