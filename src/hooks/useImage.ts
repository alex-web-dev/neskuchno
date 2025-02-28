export function useImage(imagePath: string) {
  if (imagePath.startsWith("/")) {
    return imagePath;
  } else {
    return `${import.meta.env.BASE_URL}${imagePath}`;
  }
}
