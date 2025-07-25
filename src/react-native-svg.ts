import { Config, Options, OpSet, ResolvedOptions, Drawable } from './core';
import { RoughGenerator } from './generator';
import { Point } from './geometry';

export interface ReactNativeSVGElement {
  props?: any;
  children?: ReactNativeSVGElement[];
}

export class RoughReactNativeSVG {
  private gen: RoughGenerator;

  constructor(config?: Config) {
    this.gen = new RoughGenerator(config);
  }

  draw(drawable: Drawable): ReactNativeSVGElement {
    const sets = drawable.sets || [];
    const o = drawable.options || this.getDefaultOptions();
    const children: ReactNativeSVGElement[] = [];
    const precision = drawable.options.fixedDecimalPlaceDigits;

    for (const drawing of sets) {
      let element: ReactNativeSVGElement | null = null;
      switch (drawing.type) {
        case 'path': {
          element = {
            props: {
              d: this.opsToPath(drawing, precision),
              stroke: o.stroke,
              strokeWidth: o.strokeWidth,
              fill: 'none',
              ...(o.strokeLineDash && { strokeDasharray: o.strokeLineDash.join(' ').trim() }),
              ...(o.strokeLineDashOffset && { strokeDashoffset: o.strokeLineDashOffset }),
            }
          };
          break;
        }
        case 'fillPath': {
          element = {
            props: {
              d: this.opsToPath(drawing, precision),
              stroke: 'none',
              strokeWidth: 0,
              fill: o.fill || '',
              ...(drawable.shape === 'curve' || drawable.shape === 'polygon' ? { fillRule: 'evenodd' } : {}),
            }
          };
          break;
        }
        case 'fillSketch': {
          element = this.fillSketch(drawing, o);
          break;
        }
      }
      if (element) {
        children.push(element);
      }
    }

    return {
      props: {},
      children
    };
  }

  private fillSketch(drawing: OpSet, o: ResolvedOptions): ReactNativeSVGElement {
    let fweight = o.fillWeight;
    if (fweight < 0) {
      fweight = o.strokeWidth / 2;
    }

    return {
      props: {
        d: this.opsToPath(drawing, o.fixedDecimalPlaceDigits),
        stroke: o.fill || '',
        strokeWidth: fweight,
        fill: 'none',
        ...(o.fillLineDash && { strokeDasharray: o.fillLineDash.join(' ').trim() }),
        ...(o.fillLineDashOffset && { strokeDashoffset: o.fillLineDashOffset }),
      }
    };
  }

  get generator(): RoughGenerator {
    return this.gen;
  }

  getDefaultOptions(): ResolvedOptions {
    return this.gen.defaultOptions;
  }

  opsToPath(drawing: OpSet, fixedDecimalPlaceDigits?: number): string {
    return this.gen.opsToPath(drawing, fixedDecimalPlaceDigits);
  }

  line(x1: number, y1: number, x2: number, y2: number, options?: Options): ReactNativeSVGElement {
    const d = this.gen.line(x1, y1, x2, y2, options);
    return this.draw(d);
  }

  rectangle(x: number, y: number, width: number, height: number, options?: Options): ReactNativeSVGElement {
    const d = this.gen.rectangle(x, y, width, height, options);
    return this.draw(d);
  }

  ellipse(x: number, y: number, width: number, height: number, options?: Options): ReactNativeSVGElement {
    const d = this.gen.ellipse(x, y, width, height, options);
    return this.draw(d);
  }

  circle(x: number, y: number, diameter: number, options?: Options): ReactNativeSVGElement {
    const d = this.gen.circle(x, y, diameter, options);
    return this.draw(d);
  }

  linearPath(points: Point[], options?: Options): ReactNativeSVGElement {
    const d = this.gen.linearPath(points, options);
    return this.draw(d);
  }

  polygon(points: Point[], options?: Options): ReactNativeSVGElement {
    const d = this.gen.polygon(points, options);
    return this.draw(d);
  }

  arc(x: number, y: number, width: number, height: number, start: number, stop: number, closed: boolean = false, options?: Options): ReactNativeSVGElement {
    const d = this.gen.arc(x, y, width, height, start, stop, closed, options);
    return this.draw(d);
  }

  curve(points: Point[] | Point[][], options?: Options): ReactNativeSVGElement {
    const d = this.gen.curve(points, options);
    return this.draw(d);
  }

  path(d: string, options?: Options): ReactNativeSVGElement {
    const drawing = this.gen.path(d, options);
    return this.draw(drawing);
  }
}