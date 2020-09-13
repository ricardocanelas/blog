const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (_mdxContent, _frontMatter) => {},
    phase: "prebuild|loader|both",
  },
  reExportDataFetching: false,
})(/* your normal nextjs config */);
