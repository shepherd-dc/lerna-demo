const stylePath = (name) => {
  const pathArr = name.split('/')
  const cssName = pathArr[pathArr.length - 1]
  return `ui-component/dist/style/${cssName}.css`
}

module.exports = {
  "presets": ["@vue/cli-plugin-babel/preset"],
  "plugins": [
    [
      "import",
      {
        "libraryName": "ui-component",
        "libraryDirectory": "dist", // default: lib
        "camel2DashComponentName": false, // 关闭驼峰自动转链式
        "camel2UnderlineComponentName": false, // 关闭蛇形自动转链式
        "style": (name) => stylePath(name)
      },
      "ui-component" // 配置多个时，每一项需要设置唯一 name 值，不然会报错
    ],
    [
      "import",
      {
        "libraryName": "ui-util",
        "libraryDirectory": "dist",
        "camel2DashComponentName": false,
        "camel2UnderlineComponentName": false,
      },
      "ui-util"
    ]
  ]
}
