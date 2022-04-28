# vuepress-plugin-live2d-stride插件

支持自定义看板娘

**仅支持model3资源！**
**基于vuepress<2版本开发**

## 预览
![预览DEMO](./demo.png)

## 安装
```bash
npm i vuepress-plugin-live2d-stride
```

## 使用
在你的`config.js`中增加
```
module.exports = {
  plugins: [
      ['vuepress-plugin-live2d-stride', { model: "你的模型地址" }]
  ]
}
```

## 其他参数
| 属性           | 类型    | 必填  | 默认  | 说明                                                                 |
|----------------|---------|-------|-------|----------------------------------------------------------------------|
| containerStyle | Object  | false | {}    | 给整个容器的样式，默认为右下角400 x 400的方框                        |
| model          | String  | true  | null  | model3.json的地址                                                    |
| mobile         | boolean | false | false | 是否在手机上显示                                                     |
| offsetX        | number  | false | 0     | 模型位置偏移，根据模型实际尺寸来，可能很大                           |
| offsetY        | number  | false | 0     | 模型位置偏移，根据模型实际尺寸来，可能很大                           |
| delay          | number  | false | 2000  | 受限于引入依赖库的问题，需要延迟加载模型，延迟的时间，建议至少大于1s |
| scale          | number  | false | 1     | 模型缩放                                                             |

## 参考
- [vuepress-plugin-cat](https://github.com/QiShaoXuan/vuepress-plugin-cat/blob/master/cat.vue)
- [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display/blob/master/README.zh.md)

