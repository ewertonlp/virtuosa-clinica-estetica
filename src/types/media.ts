export type SiteImage = {
  src: `/${string}`;
  alt: string;
  width: number;
  height: number;
  /** Visible provenance. Replace with the appropriate credit when using authorized real photos. */
  caption: string;
};
export type GalleryImage = SiteImage & { title: string };
export type MediaConfig = {
  brand: { logo: SiteImage | null; favicon: `/${string}` };
  hero: SiteImage;
  philosophy: SiteImage;
  booking: SiteImage;
  social: SiteImage;
  gallery: [GalleryImage, ...GalleryImage[]];
};
