export function useImage(imagePath: string) {
  return new URL(`${import.meta.env.BASE_URL}${imagePath}`, import.meta.url).href;
}