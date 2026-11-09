import type { MetadataRoute } from "next";
import { clinic } from "@/config/clinic";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(clinic.demo ? { disallow: "/" } : { allow: "/" }),
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/sitemap.xml`,
  };
}
