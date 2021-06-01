module.exports = {
    "presets": ["@vue/app"],
    "plugins": [
        [
            "import",
            {
                "libraryName": "ui-component",
                "camel2DashComponentName": false,
                "camel2UnderlineComponentName": false,
                "style": (name) =>{
                    const cssName = name.split('/')[2];
                    console.log(cssName)
                    return `ui-component/lib/style/${cssName}.css`
                }
            }
        ],
    ]
}
