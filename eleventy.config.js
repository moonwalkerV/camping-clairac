// EXEMPLE=domaine npm run build  → construit l'exemple exemples/domaine dans _exemples/domaine
const exemple = process.env.EXEMPLE;

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  if (exemple) eleventyConfig.addPassthroughCopy({ [`exemples/${exemple}/img`]: "assets/img" });
  eleventyConfig.addFilter("annee", () => new Date().getFullYear());
  eleventyConfig.addFilter("absolu", (chemin, base) => new URL(chemin || "/", base).href);
  eleventyConfig.addFilter("tel", (numero) => String(numero || "").replace(/[^+\d]/g, ""));
  // Texte sur plusieurs paragraphes (séparés par une ligne vide) → <p>…</p>
  eleventyConfig.addFilter("paragraphes", (texte) =>
    String(texte || "").split(/\n\s*\n/).filter(Boolean)
      .map((p) => "<p>" + p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>").join("")
  );
  return {
    dir: {
      input: "src",
      output: exemple ? `_exemples/${exemple}` : "_site",
      data: exemple ? `../exemples/${exemple}/_data` : "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
