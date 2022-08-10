import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";
export default [
  {
    input: "src/index.js",
    output: [
      {
        format: "esm",
        file: "lib/bundle.esm.js"
      }
    ],
    plugins: [
      vue(),
      peerDepsExternal(),
      scss({
        output: "lib/bundle.esm.css",
        outputStyle: "compressed"
      }),
    ]
  }
];
