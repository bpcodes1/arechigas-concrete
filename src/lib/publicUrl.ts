const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const pub = (path: string) => `${base}${path}`;
