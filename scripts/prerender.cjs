const fs = require("node:fs/promises");
const path = require("node:path");
const Prerenderer = require("@prerenderer/prerenderer");
const PuppeteerRenderer = require("@prerenderer/renderer-puppeteer");

const buildDirectory = path.resolve(__dirname, "../build");
const routes = [
  "/",
  "/about",
  "/portfolio",
  "/contact",
  "/articles",
  "/devis",
  "/packAuditCyber",
  "/profile",
];

async function prerender() {
  const prerenderer = new Prerenderer({
    staticDir: buildDirectory,
    renderer: new PuppeteerRenderer({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: true,
      pageHandler: async (page, route) => {
        const canonicalUrl = `https://codexium.fr${route}`;

        await page.waitForFunction(
          (expectedUrl) =>
            document.querySelector('link[rel="canonical"]')?.href ===
              expectedUrl &&
            document.querySelector('script[type="application/ld+json"]'),
          { timeout: 30000 },
          canonicalUrl
        );
      },
      timeout: 30000,
    }),
  });

  try {
    await prerenderer.initialize();
    const renderedRoutes = await prerenderer.renderRoutes(routes);

    if (renderedRoutes.length !== routes.length) {
      throw new Error(
        `Expected ${routes.length} prerendered routes; received ${renderedRoutes.length}.`
      );
    }

    for (const renderedRoute of renderedRoutes) {
      const routeDirectory =
        renderedRoute.route === "/"
          ? buildDirectory
          : path.join(buildDirectory, renderedRoute.route.slice(1));
      const outputFile = path.join(routeDirectory, "index.html");

      await fs.mkdir(routeDirectory, { recursive: true });
      await fs.writeFile(outputFile, renderedRoute.html.trim());
    }

    console.log(`Prerendered ${renderedRoutes.length} public routes.`);
  } finally {
    await prerenderer.destroy();
  }
}

prerender().catch((error) => {
  console.error("Failed to prerender the public routes.", error);
  process.exitCode = 1;
});
