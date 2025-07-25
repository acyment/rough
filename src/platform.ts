export interface PlatformAPI {
  isReactNative(): boolean;
  isWeb(): boolean;
  createCanvas?(width: number, height: number): any;
  createSVGElement?(tagName: string): any;
  getDocument?(): any;
}

class WebPlatform implements PlatformAPI {
  isReactNative(): boolean {
    return false;
  }

  isWeb(): boolean {
    return true;
  }

  createSVGElement(tagName: string): SVGElement {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
  }

  getDocument(): Document {
    return document;
  }
}

class ReactNativePlatform implements PlatformAPI {
  isReactNative(): boolean {
    return true;
  }

  isWeb(): boolean {
    return false;
  }
}

export const Platform: PlatformAPI = (() => {
  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    return new WebPlatform();
  }
  return new ReactNativePlatform();
})();