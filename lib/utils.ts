// În lib/utils.ts
export function encodeURIComponentSafe(str: string): string {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    c => '%' + c.charCodeAt(0).toString(16)
  );
}