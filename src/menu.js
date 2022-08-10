export default [
  {
    label: "基本  (新增)",
    icon: "el-icon-menu",
    children: [
      { route: "basic-basic-component", label: "基本组件" },
      { route: "basic-with-auto-size", label: "自适应大小" },
      { route: "basic-with-min-limit", label: "最小宽高限制" },
      { route: "basic-with-max-limit", label: "最大宽高限制" },
      { route: "basic-with-slots", label: "组件插槽 " },
      { route: "basic-with-active", label: "控制是否处于活动状态" },
      { route: "basic-prevent-deactivation", label: "阻止失活" },
      { route: "basic-with-draggable", label: "是否允许拖动位置" },
      { route: "basic-with-resizable", label: "是否允许调整大小" },
      { route: "basic-with-rotatable", label: "是否允许旋转角度  (新增)" },
      { route: "basic-enable-native-drag", label: "是否允许内部元素拖拽 " },
      { route: "basic-with-drag-handle", label: "限制允许拖动的范围 " },
      { route: "basic-with-drag-cancel", label: "限制禁止拖动的范围 " },
      { route: "basic-with-z-index", label: "控制组件的z-index" },
      { route: "basic-with-handles", label: "控制拉伸手柄的数量" },
      { route: "basic-with-axis", label: "限制运动轴" },
      { route: "basic-with-user-select", label: "限制用户选择" },
      { route: "basic-with-scale", label: "放缩  (新增)" }
    ]
  },
  {
    label: "网格对齐",
    icon: "el-icon-s-grid",
    children: [
      { route: "grid-20x20", label: "网格20x20" },
      { route: "grid-20x40", label: "网格20x40" },
      { route: "grid-20x20-with-offset-10x10", label: "网格20x20+偏移10x10" },
      {
        route: "grid-20x40-with-offset-10x20-min",
        label: "网格20x40+偏移10x20+最小限制"
      },
      {
        route: "grid-20x40-with-offset-10x20-max",
        label: "网格20x40+偏移10x20+最大限制"
      }
    ]
  },
  {
    label: "父级限制",
    icon: "el-icon-c-scale-to-original",
    children: [
      { route: "parent-basic-case", label: "父级容器基本案例" },
      { route: "parent-with-auto-size", label: "父级+自适应" },
      { route: "parent-with-max", label: "父级+最大限制" },
      { route: "parent-with-grid", label: "父级+网格" },
      { route: "parent-with-grid-offset", label: "父级+网格+偏移" },
      { route: "parent-with-grid-max", label: "父级+网格+最大限制" },
      { route: "parent-with-outside-controlled", label: "父级+控制组件" }
    ]
  },
  {
    label: "纵横比  (新增)",
    icon: "el-icon-picture",
    children: [
      { route: "aspect-ratio-basic", label: "锁定纵横比 " },
      { route: "aspect-ratio-with-min", label: "纵横比+最小限制 " },
      { route: "aspect-ratio-with-max", label: "纵横比+最大限制 " },
      {
        route: "aspect-ratio-costrained-in-parent",
        label: "纵横比+父级容器限制 "
      },
      { route: "aspect-ratio-with-grid", label: "纵横比+对齐网格 " },
      { route: "aspect-ratio-with-grid-offset", label: "在偏移的网格上对齐 " },
      { route: "aspect-ratio-with-grid-parent", label: "在父级中对齐网格 " },
      { route: "aspect-outside", label: "外部传入纵横比参数  (新增)" }
    ]
  },
  {
    label: "样式",
    icon: "el-icon-s-goods",
    children: [
      { route: "style-component", label: "Style 组件" },
      { route: "style-dragging", label: "Style 拖动" },
      { route: "style-resizing", label: "Style 拉伸" },
      { route: "style-active", label: "Style 活跃" },
      { route: "style-handles", label: "Style 句柄" },
      { route: "style-handles-with-slots", label: "Style 手柄插槽" }
    ]
  },

  {
    label: "事件  (新增)",
    icon: "el-icon-warning",
    children: [
      { route: "events-activated", label: "激活组件事件" },
      { route: "events-dragging", label: "拖动位置事件" },
      { route: "events-resizing", label: "调整大小事件" },
      { route: "events-rotating", label: "旋转角度事件  (新增)" }
    ]
  },
  {
    label: "高级  (计划)",
    icon: "el-icon-star-on",
    children: [
      { route: "advanced-conflict-detection", label: "位置冲突检测" },
      { route: "advanced-position-adsorption", label: "元素位置吸附" },
      { route: "advanced-reference-line", label: "对齐时有辅助线" }
    ]
  },
  {
    label: "应用",
    icon: "el-icon-star-off",
    children: [
      { route: "application-multiple-drag-20", label: "同时拖动多个元素(20)" },
      { route: "application-multiple-drag-50", label: "同时拖动多个元素(50)" }
    ]
  }
];
