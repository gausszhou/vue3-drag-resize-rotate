export default [
    {
      text: "基本 (新增)",
      collapsed: false,
      items: [
        { link: "/zh/basic/basic-basic-component", text: "基本组件"},
        { link: "/zh/basic/basic-with-auto-size", text: "自适应大小" },
        { link: "/zh/basic/basic-with-min-limit", text: "最小宽高限制" },
        { link: "/zh/basic/basic-with-max-limit", text: "最大宽高限制" },
        { link: "/zh/basic/basic-with-slots", text: "组件插槽" },
        { link: "/zh/basic/basic-with-active", text: "控制是否处于活动状态" },
        { link: "/zh/basic/basic-prevent-deactivation", text: "阻止失活" },
        { link: "/zh/basic/basic-with-draggable", text: "是否允许拖动位置" },
        { link: "/zh/basic/basic-with-resizable", text: "是否允许调整大小" },
        { link: "/zh/basic/basic-with-rotatable", text: "是否允许旋转角度  (新增)" },
        { link: "/zh/basic/basic-enable-native-drag", text: "是否允许内部元素拖拽" },
        { link: "/zh/basic/basic-with-drag-handle", text: "限制允许拖动的范围" },
        { link: "/zh/basic/basic-with-drag-cancel", text: "限制禁止拖动的范围" },
        { link: "/zh/basic/basic-with-z-index", text: "控制组件的 z-index" },
        { link: "/zh/basic/basic-with-handles", text: "控制拉伸手柄的数量" },
        { link: "/zh/basic/basic-with-axis", text: "限制运动轴" },
        { link: "/zh/basic/basic-with-user-select", text: "限制用户选择" },
        { link: "/zh/basic/basic-with-scale", text: "放缩  (新增)" }
      ]
    },
    {
      text: "网格对齐",
      collapsed: true,
      items: [
        { link: "/zh/grid/grid-20x20", text: "网格20x20" },
        { link: "/zh/grid/grid-20x40", text: "网格20x40" },
        { link: "/zh/grid/grid-20x20-with-offset-10x10", text: "网格20x20+偏移10x10" },
        { link: "/zh/grid/grid-20x40-with-offset-10x20-min", text: "网格20x40+偏移10x20+最小限制" },
        { link: "/zh/grid/grid-20x40-with-offset-10x20-max", text: "网格20x40+偏移10x20+最大限制" }
      ]
    },
    {
      text: "父级限制",
      collapsed: true,
      items: [
        { link: "/zh/parent/parent-basic-case", text: "父级容器基本案例" },
        { link: "/zh/parent/parent-with-auto-size", text: "父级+自适应" },
        { link: "/zh/parent/parent-with-max", text: "父级+最大限制" },
        { link: "/zh/parent/parent-with-grid", text: "父级+网格" },
        { link: "/zh/parent/parent-with-grid-offset", text: "父级+网格+偏移" },
        { link: "/zh/parent/parent-with-grid-max", text: "父级+网格+最大限制" },
        { link: "/zh/parent/parent-with-outside-controlled", text: "父级+控制组件" }
      ]
    },
    {
      text: "纵横比 (新增)",
      collapsed: true,
      items: [
        { link: "/zh/aspect/aspect-ratio-basic", text: "锁定纵横比 " },
        { link: "/zh/aspect/aspect-ratio-with-min", text: "纵横比+最小限制 " },
        { link: "/zh/aspect/aspect-ratio-with-max", text: "纵横比+最大限制 " },
        { link: "/zh/aspect/aspect-ratio-costrained-in-parent", text: "纵横比+父级容器限制 " },
        { link: "/zh/aspect/aspect-ratio-with-grid", text: "纵横比+对齐网格 " },
        { link: "/zh/aspect/aspect-ratio-with-grid-offset", text: "在偏移的网格上对齐 " },
        { link: "/zh/aspect/aspect-ratio-with-grid-parent", text: "在父级中对齐网格 " },
        { link: "/zh/aspect/aspect-outside", text: "外部传入纵横比参数  (新增)" }
      ]
    },
    {
      text: "样式",
      collapsed: true,
      items: [
        { link: "/zh/styling/style-component", text: "Style 组件" },
        { link: "/zh/styling/style-dragging", text: "Style 拖动" },
        { link: "/zh/styling/style-resizing", text: "Style 拉伸" },
        { link: "/zh/styling/style-active", text: "Style 活跃" },
        { link: "/zh/styling/style-handles", text: "Style 句柄" },
        { link: "/zh/styling/style-handles-with-slots", text: "Style 手柄插槽" }
      ]
    },
  
    {
      text: "事件 (新增)",
      collapsed: true,
      items: [
        { link: "/zh/events/events-activated", text: "激活组件事件" },
        { link: "/zh/events/events-dragging", text: "拖动位置事件" },
        { link: "/zh/events/events-resizing", text: "调整大小事件" },
        { link: "/zh/events/events-rotating", text: "旋转角度事件  (新增)" }
      ]
    },
    {
      text: "高级 (计划)",
      collapsed: true,
      items: [
        { link: "/zh/advanced/advanced-conflict-detection", text: "位置冲突检测" },
        { link: "/zh/advanced/advanced-position-adsorption", text: "元素位置吸附" },
        { link: "/zh/advanced/advanced-reference-line", text: "对齐时有辅助线" }
      ]
    },
    {
      text: "应用",
      collapsed: true,
      items: [
        { link: "/zh/application/application-multiple-drag-20", text: "同时拖动多个元素(20)" },
        { link: "/zh/application/application-multiple-drag-50", text: "同时拖动多个元素(50)" }
      ]
    }
  ];