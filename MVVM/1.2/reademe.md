# 1.2 用webpack4 / parcel快速搭建开发san helloworld
## 任务
- ### 支持js、css格式的解析
  - webpack-cli：用于在命令行中运行webpack；
  - lodash：
  - 配置文件(webpack.config.js)：使用配置文件与在终端中输入命令行相比具有极高的开发效率，手动的配置文件可以帮助我们取代CLI选项方式的配置。
  - 关于css解析
  <br>
  ```js
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      }
    ]
  }
  ```

***
- ### 区分 development / production 环境
  >开发环境(development)和生产环境(production)的构建目标差异很大。在开发环境中，我们需要强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的source map和localhost server。而在生产环境中，我们的目标则转向与关注更小的bundle，更轻量的source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的webpack配置。
***
- ### 使用npm scripts设罝dev、test、build命令
***
- ### 写一个san组件并在浏览器中显示hello world
  - 关于san
    由百度 EFE 出品的 MVVM 框架，在保持功能强大、特性支持完整的前提下，还兼顾到IE8的市场份额，对老版本浏览器提供了良好的兼容性，更难能可贵的是 GZip 后体积仅 11k， 现已为百度内多个产品提供了强劲驱动，可谓百度 EFE 又一精工之作！
***
- ### 使用babel-loader进行js代码转换