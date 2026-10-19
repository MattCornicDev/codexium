import React from "react";
import { Helmet } from "react-helmet-async";

const siteUrl = "https://codexium.fr";
const defaultImage = `${siteUrl}/images/portrait-rarib.jpeg`;

const Seo = ({ title, description, path, image = defaultImage, noindex = false }) => {
  const canonicalUrl = path ? `${siteUrl}${path}` : undefined;
  const imageAlt = "Portrait de Rarib LAAMIMAT, développeur chez Codexium";
  const structuredData = canonicalUrl
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: "Codexium",
            url: siteUrl,
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: "Codexium",
            url: siteUrl,
            inLanguage: "fr-FR",
            publisher: { "@id": `${siteUrl}/#organization` },
          },
          {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            name: title,
            description,
            url: canonicalUrl,
            inLanguage: "fr-FR",
            isPartOf: { "@id": `${siteUrl}/#website` },
          },
        ],
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Rarib LAAMIMAT" />
      <meta name="robots" content={noindex ? "noindex,follow" : "index,follow"} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Codexium" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
