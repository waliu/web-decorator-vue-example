import {Ref, ref, UnwrapRef} from "vue";
import SubComponent from "@/components/sub-component/sub-component.vue";
//开发环境
import {Component, Computed, VueHook, VueHooks, Watch} from "web-decorator-vue/dist";
// 生产环境
// import {Component, Computed, VueHook, VueHooks, Watch} from "web-decorator-vue";
@Component({
  components: {
    SubComponent
  }
})
export default class HomeView implements VueHooks {
  /**
   * 测试消息
   * @version 1.0.0
   */
  message = 'Hello, Vue!';
  /**
   * test
   * @version 1.0.0
   */
  nested: Ref<UnwrapRef<{ count: { temp: number } }>> = ref({count: {temp: 0}})

  /**
   * 点击方法
   * @version 1.0.0
   */
  public init() {
    // @ts-ignore
    this.nested["count"].temp++;
  }

  /**
   * mounted 生命周期
   * @version 1.0.0
   */
  @VueHook()
  mounted() {
    // console.log("mounted");
  }

  /**
   * updated 生命周期钩子
   * @version 1.0.0
   */
  @VueHook()
  updated() {
    // console.log("updated");
  }

  @VueHook()
  errorCaptured() {

  }

  @VueHook()
  serverPrefetch() {
  }

  @VueHook()
  beforeMount() {
    // console.log("beforeMount")
  }

  @VueHook()
  created() {
    console.log("created")
  }

  @Watch("message", {
    deep: true,
    immediate: true,
  })
  onMessage(newVal: any, oldVal: any) {
    console.log(newVal);
    console.log(oldVal);
  }

  @Watch("nested", {
    deep: true,
    immediate: true,
  })
  onNested(newVal: any, oldVal: any) {
    console.log(newVal);
    console.log(oldVal);
  }

  @Computed()
  getComputed1() {
    return this.message;
  }

  @Computed()
  getComputed2() {
    // @ts-ignore
    return this.nested["count"].temp;
  }

  bsOK(data: any, event?: any) {
    console.log(data);
    console.log(event);
  }

}