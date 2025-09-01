import type { SvelteComponent } from 'svelte';
import { ShapeType, type ImageAnnotator, type ImageAnnotation, type Annotation } from '@annotorious/annotorious';
import type { OpenSeadragonAnnotator } from '@annotorious/openseadragon';
import { EllipseEditor, RubberbandEllipse } from './ellipse';
import { LineEditor, RubberbandLine } from './line';
import { RubberbandPath, PathEditor } from './path';

export const mountPlugin = <
  I extends Annotation = ImageAnnotation,
  E extends unknown = ImageAnnotation,
>(
  anno: ImageAnnotator<I, E> | OpenSeadragonAnnotator<I, E>
) => {
  anno.registerDrawingTool('ellipse', RubberbandEllipse as typeof SvelteComponent);
  anno.registerShapeEditor(ShapeType.ELLIPSE, EllipseEditor as typeof SvelteComponent);

  anno.registerDrawingTool('line', RubberbandLine as typeof SvelteComponent);
  anno.registerShapeEditor(ShapeType.LINE, LineEditor as typeof SvelteComponent);

  anno.registerDrawingTool('path', RubberbandPath as typeof SvelteComponent);
  anno.registerShapeEditor(ShapeType.POLYLINE, PathEditor as typeof SvelteComponent);
}