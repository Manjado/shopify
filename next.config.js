const { withFrameworkConfig } = require("./framework/common/config")

// module.exports = {
//   reactStrictMode: true,
//   i18n: {
//     locales: ["en-US", "es"],
//     defaultLocale: "en-US",
//   },
// }

module.exports = withFrameworkConfig({
  reactStrictMode: true,
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK,
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
})
