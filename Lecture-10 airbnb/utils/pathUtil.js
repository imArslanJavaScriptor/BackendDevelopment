// Core Module
const path = require("path")

// Is sa main jo home path ha jisa root path kehta ha wo nikl kr mil jai ga.
module.exports = path.dirname(require.main.filename)