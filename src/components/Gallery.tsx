import { getGalleryImages } from "@/lib/content";
import GalleryClient from "./GalleryClient";

export default async function Gallery() {
  const galleryImages = await getGalleryImages();
  return <GalleryClient galleryImages={galleryImages} />;
}
