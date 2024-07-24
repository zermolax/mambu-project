// utils/imageUrl.ts

export function getFullImageUrl(url: string): string {
    if (!url) return '/placeholder-image.jpg'; // Asigurați-vă că aveți o imagine placeholder
  
    if (url.startsWith('http')) {
      return url;
    }
  
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    return `${baseUrl}${url}`;
  }