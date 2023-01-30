module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/");
  eleventyConfig.addPassthroughCopy("./src/assets");
  // eleventyConfig.addCollection("gcse", function(collectionApi) {
  //   return collectionApi.getFilteredByGlob("content/gcse/*.md");
  // });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
};