/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Brandon Huang",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Fredoka One: 400",
            "Roboto Mono: 400, 700",
            "Oswald: 200, 500, 700",
            "sans-serif",
          ],
        },
      },
    },
  ],
}
