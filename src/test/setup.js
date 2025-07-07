import '@testing-library/jest-dom'

// 전역 설정
global.ResizeObserver = class ResizeObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }], this);
  }
  unobserve() {}
  disconnect() {}
};

// IntersectionObserver mock
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
};

// matchMedia mock
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// URL.createObjectURL mock (Three.js에서 사용)
global.URL.createObjectURL = vi.fn(() => 'mocked-url');
global.URL.revokeObjectURL = vi.fn();

// WebGL context mock (Three.js에서 사용)
HTMLCanvasElement.prototype.getContext = vi.fn((contextType) => {
  if (contextType === 'webgl' || contextType === 'webgl2') {
    return {
      canvas: {},
      drawingBufferWidth: 300,
      drawingBufferHeight: 150,
      getExtension: vi.fn(),
      getParameter: vi.fn(),
      // Three.js가 필요로 하는 기본 WebGL 메서드들
      clearColor: vi.fn(),
      clear: vi.fn(),
      enable: vi.fn(),
      disable: vi.fn(),
    };
  }
  return null;
}); 