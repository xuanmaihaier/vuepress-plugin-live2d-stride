
const { resolve } = require('path')

module.exports = (options = {}) => ({
  define () {
    const { containerStyle, mobile, model, offsetX, offsetY, delay, scale } = options
    return {
      containerStyle: containerStyle || null,
      mobile: mobile || false,
      model: model || "",
      offsetX: offsetX || 0,
      offsetY: offsetY || 0,
      delay: delay || 2000,
      scale: scale || 1
    }
  },
  name: 'Live2dComponent',
  enhanceAppFiles: resolve(__dirname, "./bin/enhanceAppFile.js"),
  globalUIComponents: "Live2d"
})