import type { MetadataRoute } from "next";
import { PROD } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${PROD}/sitemap.xml`,
    host: PROD,
  };
}
