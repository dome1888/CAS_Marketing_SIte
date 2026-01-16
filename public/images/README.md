# Images Directory

This directory is for storing images that will be displayed on the website.

## Usage in Next.js

Images placed in this directory can be referenced in your components using the `/images/` path.

### Example:

```tsx
import Image from 'next/image'

// Using Next.js Image component (recommended)
<Image 
  src="/images/your-image.jpg" 
  alt="Description" 
  width={500} 
  height={300} 
/>

// Or using regular img tag
<img src="/images/your-image.jpg" alt="Description" />
```

## Supported Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- WebP (.webp)
- SVG (.svg)

## Notes

- Files in the `public` directory are served statically
- The path `/images/your-image.jpg` maps to `public/images/your-image.jpg`
- For best performance, use Next.js `Image` component which provides automatic optimization
