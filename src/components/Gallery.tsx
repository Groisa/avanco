import { getGalleryImages, getSiteSettings } from "@/lib/content";
import GalleryClient from "./GalleryClient";

export default async function Gallery() {
  const [galleryImages, { headings }] = await Promise.all([
    getGalleryImages(),
    getSiteSettings(),
  ]);
  return (
    <GalleryClient
      galleryImages={galleryImages}
      eyebrow={headings.galleryEyebrow}
      headline={headings.galleryHeadline}
    />
  );
}
