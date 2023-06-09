// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

import VueDragResizeRotate from '@root/lib/bundle.esm';
import "@root/lib/bundle.esm.css"
import "@/src/style/vitepress.scss";
import "@/src/style/grid.scss";



function generateImports(){
  const viewContext = import.meta.glob('@/src/views/**/*/*.vue')

  const reComponentName = /[^\/]*.vue/g
  const reViewPath = /views.*/g
  
  let arrImport = [];
  let arrComponent = [];

  Object.keys(viewContext).forEach(dest => {
    const componentName = dest.match(reComponentName)[0].split('.')[0];
    const componentNameCamel = componentName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }).replaceAll('-','');
    arrImport.push(`import ${componentNameCamel} from '${dest}'`)
    arrComponent.push(`ctx.app.component('${componentNameCamel}', ${componentNameCamel})`);
    return;
  });

  console.log(arrImport.join('\n'));
  console.log(arrComponent.join('\n'));
}

import advancedConflictDetection from '@/src/views/advanced/advanced-conflict-detection.vue'
import advancedPositionAdsorption from '@/src/views/advanced/advanced-position-adsorption.vue'
import advancedReferenceLine from '@/src/views/advanced/advanced-reference-line.vue'
import applicationMultipleDrag20 from '@/src/views/application/application-multiple-drag-20.vue'
import applicationMultipleDrag50 from '@/src/views/application/application-multiple-drag-50.vue'
import aspectOutside from '@/src/views/aspect/aspect-outside.vue'
import aspectRatioBasic from '@/src/views/aspect/aspect-ratio-basic.vue'
import aspectRatioCostrainedInParent from '@/src/views/aspect/aspect-ratio-costrained-in-parent.vue'
import aspectRatioWithGridOffset from '@/src/views/aspect/aspect-ratio-with-grid-offset.vue'
import aspectRatioWithGridParent from '@/src/views/aspect/aspect-ratio-with-grid-parent.vue'
import aspectRatioWithGrid from '@/src/views/aspect/aspect-ratio-with-grid.vue'
import aspectRatioWithMax from '@/src/views/aspect/aspect-ratio-with-max.vue'
import aspectRatioWithMin from '@/src/views/aspect/aspect-ratio-with-min.vue'

import basicBasicComponent from '@/src/views/basic/basic-basic-component.vue'
import basicEnableNativeDrag from '@/src/views/basic/basic-enable-native-drag.vue'
import basicPreventDeactivation from '@/src/views/basic/basic-prevent-deactivation.vue'
import basicWithActive from '@/src/views/basic/basic-with-active.vue'
import basicWithAutoSize from '@/src/views/basic/basic-with-auto-size.vue'
import basicWithAxis from '@/src/views/basic/basic-with-axis.vue'
import basicWithDragCancel from '@/src/views/basic/basic-with-drag-cancel.vue'
import basicWithDragHandle from '@/src/views/basic/basic-with-drag-handle.vue'
import basicWithDraggable from '@/src/views/basic/basic-with-draggable.vue'
import basicWithHandles from '@/src/views/basic/basic-with-handles.vue'
import basicWithMaxLimit from '@/src/views/basic/basic-with-max-limit.vue'
import basicWithMinLimit from '@/src/views/basic/basic-with-min-limit.vue'
import basicWithOutsideControlled from '@/src/views/basic/basic-with-outside-controlled.vue'
import basicWithResizable from '@/src/views/basic/basic-with-resizable.vue'
import basicWithRotatable from '@/src/views/basic/basic-with-rotatable.vue'
import basicWithScale from '@/src/views/basic/basic-with-scale.vue'
import basicWithSlots from '@/src/views/basic/basic-with-slots.vue'
import basicWithUserSelect from '@/src/views/basic/basic-with-user-select.vue'
import basicWithZIndex from '@/src/views/basic/basic-with-z-index.vue'

import callbacksOndrag from '@/src/views/callbacks/callbacks-ondrag.vue'
import callbacksOndragstart from '@/src/views/callbacks/callbacks-ondragstart.vue'
import callbacksOnresize from '@/src/views/callbacks/callbacks-onresize.vue'
import callbacksOnresizestart from '@/src/views/callbacks/callbacks-onresizestart.vue'

import eventsActivated from '@/src/views/events/events-activated.vue'
import eventsDragging from '@/src/views/events/events-dragging.vue'
import eventsResizing from '@/src/views/events/events-resizing.vue'
import eventsRotating from '@/src/views/events/events-rotating.vue'

import grid20x20WithOffset10x10 from '@/src/views/grid/grid-20x20-with-offset-10x10.vue'
import grid20x20 from '@/src/views/grid/grid-20x20.vue'
import grid20x40WithOffset10x20Max from '@/src/views/grid/grid-20x40-with-offset-10x20-max.vue'
import grid20x40WithOffset10x20Min from '@/src/views/grid/grid-20x40-with-offset-10x20-min.vue'
import grid20x40 from '@/src/views/grid/grid-20x40.vue'

import parentBasicCase from '@/src/views/parent/parent-basic-case.vue'
import parentWithAutoSize from '@/src/views/parent/parent-with-auto-size.vue'
import parentWithGridMax from '@/src/views/parent/parent-with-grid-max.vue'
import parentWithGridOffset from '@/src/views/parent/parent-with-grid-offset.vue'
import parentWithGrid from '@/src/views/parent/parent-with-grid.vue'
import parentWithMax from '@/src/views/parent/parent-with-max.vue'
import parentWithOutsideControlled from '@/src/views/parent/parent-with-outside-controlled.vue'
import parentWithRotate from '@/src/views/parent/parent-with-rotate.vue'

import styleActive from '@/src/views/styling/style-active.vue'
import styleComponent from '@/src/views/styling/style-component.vue'
import styleDragging from '@/src/views/styling/style-dragging.vue'
import styleHandlesWithSlots from '@/src/views/styling/style-handles-with-slots.vue'
import styleHandles from '@/src/views/styling/style-handles.vue'
import styleResizing from '@/src/views/styling/style-resizing.vue'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {

    // register your custom global components
    ctx.app.use(VueDragResizeRotate)
    //ctx.app.component('VueDragResizeRotate', VueDragResizeRotate)

    ctx.app.component('advancedConflictDetection', advancedConflictDetection)
    ctx.app.component('advancedPositionAdsorption', advancedPositionAdsorption)
    ctx.app.component('advancedReferenceLine', advancedReferenceLine)
    
    ctx.app.component('applicationMultipleDrag20', applicationMultipleDrag20)
    ctx.app.component('applicationMultipleDrag50', applicationMultipleDrag50)
    
    ctx.app.component('aspectOutside', aspectOutside)
    ctx.app.component('aspectRatioBasic', aspectRatioBasic)
    ctx.app.component('aspectRatioCostrainedInParent', aspectRatioCostrainedInParent)
    ctx.app.component('aspectRatioWithGridOffset', aspectRatioWithGridOffset)
    ctx.app.component('aspectRatioWithGridParent', aspectRatioWithGridParent)
    ctx.app.component('aspectRatioWithGrid', aspectRatioWithGrid)
    ctx.app.component('aspectRatioWithMax', aspectRatioWithMax)
    ctx.app.component('aspectRatioWithMin', aspectRatioWithMin)
    
    ctx.app.component('basicBasicComponent', basicBasicComponent)
    ctx.app.component('basicEnableNativeDrag', basicEnableNativeDrag)
    ctx.app.component('basicPreventDeactivation', basicPreventDeactivation)
    ctx.app.component('basicWithActive', basicWithActive)
    ctx.app.component('basicWithAutoSize', basicWithAutoSize)
    ctx.app.component('basicWithAxis', basicWithAxis)
    ctx.app.component('basicWithDragCancel', basicWithDragCancel)
    ctx.app.component('basicWithDragHandle', basicWithDragHandle)
    ctx.app.component('basicWithDraggable', basicWithDraggable)
    ctx.app.component('basicWithHandles', basicWithHandles)
    ctx.app.component('basicWithMaxLimit', basicWithMaxLimit)
    ctx.app.component('basicWithMinLimit', basicWithMinLimit)
    ctx.app.component('basicWithOutsideControlled', basicWithOutsideControlled)
    ctx.app.component('basicWithResizable', basicWithResizable)
    ctx.app.component('basicWithRotatable', basicWithRotatable)
    ctx.app.component('basicWithScale', basicWithScale)
    ctx.app.component('basicWithSlots', basicWithSlots)
    ctx.app.component('basicWithUserSelect', basicWithUserSelect)
    ctx.app.component('basicWithZIndex', basicWithZIndex)
    
    ctx.app.component('callbacksOndrag', callbacksOndrag)
    ctx.app.component('callbacksOndragstart', callbacksOndragstart)
    ctx.app.component('callbacksOnresize', callbacksOnresize)
    ctx.app.component('callbacksOnresizestart', callbacksOnresizestart)
    
    ctx.app.component('eventsActivated', eventsActivated)
    ctx.app.component('eventsDragging', eventsDragging)
    ctx.app.component('eventsResizing', eventsResizing)
    ctx.app.component('eventsRotating', eventsRotating)
    
    ctx.app.component('grid20x20WithOffset10x10', grid20x20WithOffset10x10)
    ctx.app.component('grid20x20', grid20x20)
    ctx.app.component('grid20x40WithOffset10x20Max', grid20x40WithOffset10x20Max)
    ctx.app.component('grid20x40WithOffset10x20Min', grid20x40WithOffset10x20Min)
    ctx.app.component('grid20x40', grid20x40)
    
    ctx.app.component('parentBasicCase', parentBasicCase)
    ctx.app.component('parentWithAutoSize', parentWithAutoSize)
    ctx.app.component('parentWithGridMax', parentWithGridMax)
    ctx.app.component('parentWithGridOffset', parentWithGridOffset)
    ctx.app.component('parentWithGrid', parentWithGrid)
    ctx.app.component('parentWithMax', parentWithMax)
    ctx.app.component('parentWithOutsideControlled', parentWithOutsideControlled)
    ctx.app.component('parentWithRotate', parentWithRotate)
    
    ctx.app.component('styleActive', styleActive)
    ctx.app.component('styleComponent', styleComponent)
    ctx.app.component('styleDragging', styleDragging)
    ctx.app.component('styleHandlesWithSlots', styleHandlesWithSlots)
    ctx.app.component('styleHandles', styleHandles)
    ctx.app.component('styleResizing', styleResizing)

  }
}