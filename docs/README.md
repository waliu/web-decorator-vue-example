### 如何在 vue3 中使用 （TS + 装饰器/注解）
### 添加 @vue/cli
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
npm i vue-class-component
````
### 更新代码中的注解 HomeView.vue
````ts
import {Component, VueHook} from "web-decorator-vue";
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
import {Component, Prop} from "web-decorator-vue";
@Component()
export default class HelloWorld {
  @Prop(String)
  msg!: string
}
````
### 运行
````
npm run dev
````

### <font color=red>注意如果选中 Linter / Formatter </font>
- 则需要按照规则自己配置忽略
- 
