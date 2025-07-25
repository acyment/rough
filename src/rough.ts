import { Config } from './core';
import { RoughCanvas } from './canvas';
import { RoughGenerator } from './generator';
import { RoughSVG } from './svg';
import { RoughReactNativeSVG } from './react-native-svg';
import { Platform } from './platform';

export default {
  canvas(canvas: HTMLCanvasElement, config?: Config): RoughCanvas {
    if (Platform.isReactNative()) {
      throw new Error('Canvas rendering is not available in React Native. Use reactNativeSvg() instead.');
    }
    return new RoughCanvas(canvas, config);
  },

  svg(svg: SVGSVGElement, config?: Config): RoughSVG {
    if (Platform.isReactNative()) {
      throw new Error('DOM SVG is not available in React Native. Use reactNativeSvg() instead.');
    }
    return new RoughSVG(svg, config);
  },

  reactNativeSvg(config?: Config): RoughReactNativeSVG {
    return new RoughReactNativeSVG(config);
  },

  generator(config?: Config): RoughGenerator {
    return new RoughGenerator(config);
  },

  newSeed(): number {
    return RoughGenerator.newSeed();
  },
};
