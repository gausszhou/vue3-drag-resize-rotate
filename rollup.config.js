import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import css from 'rollup-plugin-css-only'
import scss from "rollup-plugin-scss";
import postcss from 'rollup-plugin-postcss'
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
      // postcss(),
      scss()
      // postcss({
      //   extensions:['.css','.less'],
      //   extract:'index.css'
      // })
    ]
  }
];
