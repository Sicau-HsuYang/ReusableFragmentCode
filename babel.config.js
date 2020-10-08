/*
 * @Author: JohnYang
 * @Date: 2020-10-08 22:51:37
 * @LastEditors: JohnYang
 * @LastEditTime: 2020-10-08 23:01:24
 */
module.exports = {
  presets: [["@vue/cli-plugin-babel/preset", { modules: false }]],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
