// Adds DOM matchers like toBeInTheDocument() and toBeDisabled() to every test
import '@testing-library/jest-dom'

// jsdom doesn't implement these browser APIs. Radix components (Select, PopOver, Tooltip) use them
Element.prototype.hasPointerCapture = () => false
Element.prototype.releasePointerCapture = () => { }
Element.prototype.scrollIntoView = () => { }

window.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))
