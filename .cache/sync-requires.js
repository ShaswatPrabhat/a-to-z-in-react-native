const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/in-shaswat.prabhat/CodeBases/a-to-z-in-react-native/src/pages/index.js")))
}

