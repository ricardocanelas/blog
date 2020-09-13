const withPlugins = require("next-compose-plugins");
const rehypePrism = require("@mapbox/rehype-prism");
const withMdxEnhanced = require("next-mdx-enhanced");

// MDX-Enchanced
const mdx = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [rehypePrism],
  usesSrc: false,
  extendFrontMatter: {
    process: (_mdxContent, _frontMatter) => {},
    phase: "prebuild|loader|both",
  },
  reExportDataFetching: false,
});

// Next config
const nextConfig = {
  pageExtensions: ["js", "mdx"],
};

module.exports = withPlugins([mdx], nextConfig);
