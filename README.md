# Annotorious Tools Plugin

An Annotorious plugin that adds additional drawing tools.

<img src="screenshot.jpg" style="width:540px" alt="A screenshot of the Annotorious Tools plugin, showing ellipse and path annotations." />

## Features

* **Ellipse**: Draw ellipses and circle. 
  * Hold `SHIFT` to constrain aspect ratio to a circle. 
  * Hold `CTRL` to draw from the center.
* **Line**: Draw a straight line between two points.
* **Path**: Create polylines using a combination of straight and curved segments.

## Installation

```sh
npm install @annotorious/plugin-tools
```

## Usage

The plugin support both versions of Annotorious: the standard image annotator and the OpenSeadragon integration.

### Image Annotator

```js
import { createImageAnnotator } from '@annotorious/annotorious';
import { mountPlugin as mountToolsPlugin } from '@annotorious/plugin-tools';

import '@annotorious/annotorious/annotorious.css';
import '@annotorious/plugin-tools/annotorious-plugin-tools.css';

var anno = createImageAnnotator('sample-image', {
  /** Annotorious init options **/
});

mountToolsPlugin(anno);

// ['rectangle', 'polygon', 'ellipse', 'line', 'path']
console.log(anno.listDrawingTools());

anno.setDrawingTool('path');
```

### OpenSeadragon Annotator

```js
import OpenSeadragon from 'openseadragon';
import { createOSDAnnotator } from '@annotorious/openseadragon';
import { mountPlugin as mountToolsPlugin } from '../src';

import '@annotorious/openseadragon/annotorious-openseadragon.css';
import '@annotorious/plugin-tools/annotorious-plugin-tools.css';

const viewer = OpenSeadragon({
  /** OpenSeadragon init options **/
});

const anno = createOSDAnnotator(viewer, {
  /** Annotorious init options **/
});

mountToolsPlugin(anno);

// ['rectangle', 'polygon', 'ellipse', 'line', 'path']
console.log(anno.listDrawingTools());

anno.setDrawingTool('path');
```


