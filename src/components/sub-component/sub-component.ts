// 开发环境
import {Component, Emit, Prop, VueHook, VueHooks} from "web-decorator-vue/dist";
// 生产环境
// import {Component, Emit, Prop, VueHook, VueHooks} from "web-decorator-vue";
@Component()
export default class SubComponent implements VueHooks {

  constructor() {
    console.log("123")
  }

  @Prop({type: String, required: true, default: '测试'})
  temp1!: string;

  @Prop({type: Number, default: 0})
  temp2!: number;

  @VueHook()
  mounted() {
    console.log(this.temp1)
  }

  @Emit("bs-ok")
  bsOK() {
    return this.temp2;
  }

}