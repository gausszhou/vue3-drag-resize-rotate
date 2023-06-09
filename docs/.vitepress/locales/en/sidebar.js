export default [
    {
      text: "Basics",
      collapsed: false,
      items: [
        { link: "/basic/basic-basic-component", text: "Basic component" },
        { link: "/basic/basic-with-auto-size", text: "Adaptive size" },
        { link:" /basic/basic-with-min-limit", text: "Limit min-width" },
        { link: "/basic/basic-with-max-limit", text: "Limit max-width" },
        { link: "/basic/basic-with-slots", text: "Component slots" },
        { link: "/basic/basic-with-active", text: "Toggle active state" },
        { link: "/basic/basic-prevent-deactivation", text: "Prevent deactivation" },
        { link: "/basic/basic-with-draggable", text: "Allow dragging" },
        { link: "/basic/basic-with-resizable", text: "Allow resizing" },
        { link: "/basic/basic-with-rotatable", text: "Allow rotation (new)" },
        { link: "/basic/basic-enable-native-drag", text: "Allow internal element dragging" },
        { link: "/basic/basic-with-drag-handle", text: "Limit the range of dragging" },
        { link: "/basic/basic-with-drag-cancel", text: "Restrict the range where dragging is disabled" },
        { link: "/basic/basic-with-z-index", text: "Control component's z-index" },
        { link: "/basic/basic-with-handles", text: "Control the number of stretch handles" },
        { link: "/basic/basic-with-axis", text: "Limit motion axes" },
        { link: "/basic/basic-with-user-select", text: "Restrict user selection" },
        { link: "/basic/basic-with-scale", text: "Zoom (new)" },
      ]
    },
    {
      text: "Grid",
      collapsed: true,
      items: [
        { link: "/grid/grid-20x20", text: "grid-20x20" },
        { link: "/grid/grid-20x40", text: "grid20x40" },
        { link: "/grid/grid-20x20-with-offset-10x10", text: "grid20x20+offset10x10" },
        { link: "/grid/grid-20x40-with-offset-10x20-min", text: "grid20x40+offset10x20+min-limit" },
        { link: "/grid/grid-20x40-with-offset-10x20-max", text: "grid-20x40+offset-10x20+max-limit" },
      ]
    },
    {
      text: "Parent",
      collapsed: true,
      items: [
        { link: "/parent/parent-basic-case", text: "Parent Container" },
        { link: "/parent/parent-with-auto-size", text: "Parent + Adaptive" },
        { link: "/parent/parent-with-max", text: "Parent + Maximum limit" },
        { link: "/parent/parent-with-grid", text: "Parent + Grid" },
        { link: "/parent/parent-with-grid-offset", text: "Parent + Grid + Offset" },
        { link: "/parent/parent-with-grid-max", text: "Parent + Grid + Max limit" },
        { link: "/parent/parent-with-outside-controlled", text: "Parent + Control component" },
      ]
    },
    {
      text: "Aspect Ratio",
      collapsed: true,
      items: [
        { link: "/aspect/aspect-ratio-basic", text: "Lock aspect ratio" },
        { link: "/aspect/aspect-ratio-with-min", text: "Aspect ratio + Minimum-limit" },
        { link: "/aspect/aspect-ratio-with-max", text: "Aspect ratio + Max-limit " }, 
        { link: "/aspect/aspect-ratio-costrained-in-parent", text: "Limit aspect ratio in parent container" },
        { link: "/aspect/aspect-ratio-with-grid", text: "Aspect ratio with grid" },
        { link: "/aspect/aspect-ratio-with-grid-offset", text: "Aspect ratio with grid offset " }, 
        { link: "/aspect/aspect-ratio-with-grid-parent", text: "Aspect ratio with grid parent " }, 
        { link: "/aspect/aspect-outside", text: "External incoming aspect ratio parameter (new)" }
      ]
    },
    {
      text: "Styling",
      collapsed: true,
      items: [
        { link: "/styling/style-component", text: "Style component" },
        { link: "/styling/style-dragging", text: "Style dragging" },
        { link: "/styling/style-resizing", text: "Style stretching" },
        { link: "/styling/style-active", text: "Style active state" },
        { link: "/styling/style-handles", text: "Style handles" },
        { link: "/styling/style-handles-with-slots", text: "Style handle slots" },
      ]
    },
  
    {
      text: "Events",
      collapsed: true,
      items: [
        { link: "/events/events-activated", text: "Activate component events" },
        { link: "/events/events-dragging", text: "Position-dragging event" },
        { link: "/events/events-resizing", text: "Resizing event" },
        { link: "/events/events-rotating", text: "Rotating-angle-event (new)" },
      ]
    },
    {
      text: "Advanced (plan)",
      collapsed: true,
      items: [
        { link: "/advanced/advanced-conflict-detection", text: "Position conflict detection" },
        { link: "/advanced/advanced-position-adsorption", text: "Element-position-adsorption" },
        { link: "/advanced/advanced-reference-line", text: "Alignment with auxiliary lines" },
      ]
    },
    {
      text: "Apply",
      collapsed: true,
      items: [
        { link: "/application/application-multiple-drag-20", text: "Drag multiple elements at the same time (20)" },
        { link: "/application/application-multiple-drag-50", text: "Drag multiple elements at the same time (50)" },
      ]
    }
  ];