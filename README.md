# web-decorator-app-example
## 环境版本
- v18.16.0
## 克隆项目
...
## 将开发环境修改为生产环境
- 修改为生产环境 [sub-component.ts](src%2Fcomponents%2Fsub-component%2Fsub-component.ts)
- 修改为生产环境 [HomeView.ts](src%2Fviews%2FHomeView.ts)

````ts
// sub-component
// 开发环境
// import {Component, Emit, Prop, VueHook, VueHooks} from "web-decorator-vue/dist";
// 生产环境
import {Component, Emit, Prop, VueHook, VueHooks} from "web-decorator-vue";

// HomeView.ts
//开发环境
// import {Component, Computed, VueHook, VueHooks, Watch} from "web-decorator-vue/dist";
// 生产环境
import {Component, Computed, VueHook, VueHooks, Watch} from "web-decorator-vue";
````
## 依赖项目
```
npm install
```

### 运行环境
```
npm run serve
```

### 编译项目
```
npm run build
```
```

## 联系我们
QQ 729694111

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




