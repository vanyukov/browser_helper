declare global {
  interface Window {
    kv_helpers: Record<string, any>
  }
}
export function addOutsideProperty(name: string, prop: any) {
  if (!window) {
    return
  }
  if (!window.kv_helpers) {
    window.kv_helpers = {}
  }
  window.kv_helpers[name] = prop
}
