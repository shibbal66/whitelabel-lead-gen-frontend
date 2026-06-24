import { brandingConfig } from "@/config/branding";

export function updateSEOAndFavicon() {
  if (typeof window === "undefined") return;

  // Update document title
  document.title = brandingConfig.seo.title;

  // Helper to upsert a meta tag
  const setMetaTag = (name: string, content: string, isProperty = false) => {
    const attribute = isProperty ? "property" : "name";
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  setMetaTag("description", brandingConfig.seo.description);
  setMetaTag("author", brandingConfig.seo.author);
  setMetaTag("og:title", brandingConfig.seo.title, true);
  setMetaTag("twitter:title", brandingConfig.seo.title);
  setMetaTag("og:description", brandingConfig.seo.description, true);
  setMetaTag("twitter:description", brandingConfig.seo.description);
  
  if (brandingConfig.seo.ogImage) {
    setMetaTag("og:image", brandingConfig.seo.ogImage, true);
    setMetaTag("twitter:image", brandingConfig.seo.ogImage);
  }

  // Update favicon link
  let faviconLink = document.querySelector(`link[rel*="icon"]`) as HTMLLinkElement | null;
  if (!faviconLink) {
    faviconLink = document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.type = "image/x-icon";
    document.head.appendChild(faviconLink);
  }
  faviconLink.href = brandingConfig.brand.faviconSrc;
}
