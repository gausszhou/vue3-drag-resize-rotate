# vue3-drag-resize-rotate

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE) [![Npm Package](https://img.shields.io/npm/v/@gausszhou/vue3-drag-resize-rotate.svg)](https://www.npmjs.com/package/@gausszhou/vue3-drag-resize-rotate)

## Live Demo

[中文在线演示地址](https://gausszhou.github.io/vue3-drag-resize-rotate)

## Quick Start

```shell
npm install  @gausszhou/vue3-drag-resize-rotate
```

```js
import { createApp } from "vue";

import VueDragResizeRotate from "@gausszhou/vue3-drag-resize-rotate";
import "@gausszhou/vue3-drag-resize-rotate/lib/bundle.esm.css";

const app = createApp(App);

// use
app.use(VueDragResizeRotate);
// or component
// app.component(VueDragResizeRotate.name, VueDragResizeRotate);

app.mount("#app");
```

## Props

| Prop      | Description   |
| --------- | ------------- |
| draggable | Enable drag   |
| resizable | Enable resize |
| rotatable | Enable rotate |
| w         | width         |
| h         | height        |
| x         | left          |
| y         | top           |
| z         | Zindex        |
| r         | rotate angle  |

## Emits

| Event          | Description              |
| ------------- | ------------------------ |
| dragging      | on dragging              |
| dragstop      | on drag stop             |
| resizing      | on resizing              |
| resizestop    | on resize stop           |
| rotating      | on rotating              |
| rotatestop    | on rotate stop           |
| refLineParams | on reference line change |

## Code Reference

```shell
https://github.com/gausszhou/vue-drag-resize-rotate
```

## Thanks

感谢 `gogocode` 提供的代码转换服务
