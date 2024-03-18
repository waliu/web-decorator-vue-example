### 如何在 vue3 中使用 （TS + 装饰器/注解）
### 为什么要用装饰器
[请看点这里](https://segmentfault.com/a/1190000023471570)
## 创建vite项目
````
√ 请输入项目名称： ... 
√ 是否使用 TypeScript 语法？ ...  是
√ 是否启用 JSX 支持？ ...  是
√ 是否引入 Vue Router 进行单页面应用开发？ ...  是
√ 是否引入 Pinia 用于状态管理？ ...  是
√ 是否引入 Vitest 用于单元测试？ ...  是
√ 是否要引入一款端到端（End to End）测试工具？ » Playwright
√ 是否引入 ESLint 用于代码质量检测？ ... 否 

````
### 安装 decorator 库
````
npm i web-decorator-vue
````
### 配置装饰器
-  tsconfig.json
-  tsconfig.app.json
-  tsconfig.node.json
-  tsconfig.vitest.json
````
// 加入如下代码 "experimentalDecorators": true,"emitDecoratorMetadata": true,
// 如下所示
"compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
}
````
### 修改代码
````
// HelloWorld.vue
<script lang="ts">
import { Component, Prop } from "web-decorator-vue";
@Component({
  name: "hello-world"
})
export default class HelloWorld {
  @Prop({type: String, default: ""}) msg!: string;
}
</script>
````
### 启动项目 
````
npm run dev
````
---------
## 通过 @vue/cli 创建项目
````
npm install -g @vue/cli
# OR
yarn global add @vue/cli
````
### 新建项目
````
// 输入指令创建 app
vue create my-project
// 选择自定义 
- 选择[ Manually select features ]
// 选中
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and
<enter> to proceed)
 (*) Babel
 (*) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 ( ) CSS Pre-processors
 ( ) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
````
### 运行指令删除不在维护的 vue-class-component 库
````
npm uninstall vue-class-component
````
### 依赖 web-decorator-vue
````
npm i web-decorator-vue -S
````
### 更新代码中的注解 HomeView.vue
````ts
import { Component, VueHook } from "web-decorator-vue";
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView {
}
````
### HelloWorld.vue
````ts
import { Component, Prop } from "web-decorator-vue";
@Component()
export default class HelloWorld {
  @Prop({type: String, default: ""}) msg!: string;
}
````
### 运行
````
npm run dev
````

### <font color=red>注意如果选中 Linter / Formatter </font>
- 开启装饰器 tsconfig.json
````json
"compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
}
````

### 装饰器文档
[vue 装饰器/注解 文档点这里](https://www.npmjs.com/package/web-decorator-vue).

- 在 vue.config 中关闭eslint(根据实际情况配置)
````js
// 此处只做快速关闭，实际根据自身情况来关闭。
lintOnSave:false
````
### [项目demo项目链接](https://github.com/waliu/web-decorator-vue-example)

## 联系我们
QQ群 729694111
